import { FormEvent, useCallback, useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  Activity,
  ArrowLeft,
  Download,
  LayoutDashboard,
  Leaf,
  Loader2,
  LogOut,
  Mail,
  Package,
  RefreshCw,
  Search,
  ShieldCheck,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";

type AdminSection = "overview" | "orders" | "subscribers";
type AccessState = "checking" | "signedOut" | "denied" | "unavailable" | "ready";
type OrderRecord = {
  id: string;
  order_type: string;
  total_amount: number;
  currency: string;
  status: string;
  customer_name: string | null;
  customer_email: string | null;
  created_at: string;
};
type SubscriberRecord = {
  id: string;
  email: string;
  subscribed_at: string;
  is_active: boolean;
  source: string | null;
};

const formatDate = (value: string) => new Date(value).toLocaleString(undefined, {
  dateStyle: "medium",
  timeStyle: "short",
});

const formatAmount = (amount: number, currency: string) => {
  try {
    return new Intl.NumberFormat(undefined, { style: "currency", currency }).format(amount / 100);
  } catch {
    return `${currency} ${(amount / 100).toFixed(2)}`;
  }
};

const statusVariant = (status: string): "default" | "secondary" | "destructive" | "outline" => {
  if (status === "paid" || status === "active") return "default";
  if (status === "pending") return "secondary";
  if (status === "failed" || status === "cancelled" || status === "expired") return "destructive";
  return "outline";
};

const escapeCsv = (value: string) => `"${value.replaceAll('"', '""')}"`;

const AdminPanel = () => {
  const { user, loading: authLoading, signIn, signOut } = useAuth();
  const [access, setAccess] = useState<AccessState>("checking");
  const [section, setSection] = useState<AdminSection>("overview");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [orders, setOrders] = useState<OrderRecord[]>([]);
  const [subscribers, setSubscribers] = useState<SubscriberRecord[]>([]);
  const [counts, setCounts] = useState({ orders: 0, pending: 0, paid: 0, subscribers: 0, activeSubscribers: 0, activeSubscriptions: 0 });
  const [dataError, setDataError] = useState("");
  const [dataLoading, setDataLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [orderStatus, setOrderStatus] = useState("all");

  useEffect(() => {
    if (authLoading) return;
    if (!user) {
      setAccess("signedOut");
      return;
    }

    let current = true;
    setAccess("checking");
    const verifyAccess = async () => {
      const { data: verified, error: authError } = await supabase.auth.getUser();
      if (authError || !verified.user || verified.user.id !== user.id) {
        if (current) setAccess("denied");
        return;
      }

      const { data: roleRows, error: roleError } = await (supabase as any)
        .from("user_roles")
        .select("role")
        .eq("user_id", verified.user.id)
        .eq("role", "admin")
        .limit(1);

      if (!current) return;
      if (roleError) {
        setAccess("unavailable");
        return;
      }
      setAccess(roleRows?.length ? "ready" : "denied");
    };

    void verifyAccess();
    return () => { current = false; };
  }, [authLoading, user]);

  const loadAdminData = useCallback(async () => {
    setDataLoading(true);
    setDataError("");
    const [orderList, orderCount, pendingCount, paidCount, subscriberList, subscriberCount, activeSubscriberCount, subscriptionCount] = await Promise.all([
      supabase.from("orders").select("id,order_type,total_amount,currency,status,customer_name,customer_email,created_at").order("created_at", { ascending: false }).limit(100),
      supabase.from("orders").select("id", { count: "exact", head: true }),
      supabase.from("orders").select("id", { count: "exact", head: true }).eq("status", "pending"),
      supabase.from("orders").select("id", { count: "exact", head: true }).eq("status", "paid"),
      supabase.from("newsletter_subscribers").select("id,email,subscribed_at,is_active,source").order("subscribed_at", { ascending: false }).limit(1000),
      supabase.from("newsletter_subscribers").select("id", { count: "exact", head: true }),
      supabase.from("newsletter_subscribers").select("id", { count: "exact", head: true }).eq("is_active", true),
      supabase.from("user_subscriptions").select("id", { count: "exact", head: true }).eq("status", "active"),
    ]);

    setOrders((orderList.data ?? []) as OrderRecord[]);
    setSubscribers((subscriberList.data ?? []) as SubscriberRecord[]);
    setCounts({
      orders: orderCount.count ?? 0,
      pending: pendingCount.count ?? 0,
      paid: paidCount.count ?? 0,
      subscribers: subscriberCount.count ?? 0,
      activeSubscribers: activeSubscriberCount.count ?? 0,
      activeSubscriptions: subscriptionCount.count ?? 0,
    });
    const failed = [orderList, orderCount, pendingCount, paidCount, subscriberList, subscriberCount, activeSubscriberCount, subscriptionCount].some((result) => result.error);
    if (failed) setDataError("Some records could not be loaded. Check access and try again.");
    setDataLoading(false);
  }, []);

  useEffect(() => {
    if (access === "ready") void loadAdminData();
  }, [access, loadAdminData]);

  const filteredOrders = useMemo(() => orders.filter((order) => {
    const matchesStatus = orderStatus === "all" || order.status === orderStatus;
    const text = `${order.id} ${order.customer_name ?? ""} ${order.customer_email ?? ""} ${order.order_type}`.toLowerCase();
    return matchesStatus && text.includes(query.toLowerCase());
  }), [orders, orderStatus, query]);

  const filteredSubscribers = useMemo(() => subscribers.filter((subscriber) =>
    `${subscriber.email} ${subscriber.source ?? ""}`.toLowerCase().includes(query.toLowerCase()),
  ), [subscribers, query]);

  const handleSignIn = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoginError("");
    const { error } = await signIn(loginEmail.trim(), loginPassword);
    if (error) setLoginError("Sign-in failed. Check your email and password, then try again.");
    else setLoginPassword("");
  };

  const exportSubscribers = () => {
    const header = ["Email", "Subscribed at", "Active", "Source"];
    const rows = filteredSubscribers.map((subscriber) => [
      subscriber.email,
      subscriber.subscribed_at,
      subscriber.is_active ? "yes" : "no",
      subscriber.source ?? "",
    ]);
    const csv = [header, ...rows].map((row) => row.map((value) => escapeCsv(String(value))).join(",")).join("\r\n");
    const url = URL.createObjectURL(new Blob([csv], { type: "text/csv;charset=utf-8" }));
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = "ayurveda-newsletter-subscribers.csv";
    anchor.click();
    URL.revokeObjectURL(url);
  };

  const handleSignOut = async () => {
    await signOut();
    setAccess("signedOut");
  };

  if (authLoading || access === "checking") {
    return <div className="flex min-h-screen items-center justify-center bg-background text-muted-foreground" role="status"><Loader2 className="mr-3 h-5 w-5 animate-spin" />Verifying administrator access…</div>;
  }

  if (access !== "ready") {
    const unavailable = access === "unavailable";
    return (
      <main className="flex min-h-screen items-center justify-center bg-background px-4 py-12">
        <section className="w-full max-w-md border-t-2 border-primary pt-8">
          <Link to="/en" className="mb-10 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"><ArrowLeft className="h-4 w-4" />Back to AyurVeda</Link>
          <div className="mb-6 flex h-12 w-12 items-center justify-center border border-border bg-card text-primary"><ShieldCheck className="h-6 w-6" /></div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary">Private administration</p>
          <h1 className="mb-3 text-3xl font-semibold">Administrator sign in</h1>
          <p className="mb-7 text-sm leading-6 text-muted-foreground">Only accounts with administrator access can view store and subscriber records.</p>
          {unavailable ? (
            <div className="border border-destructive/40 bg-destructive/5 p-4 text-sm text-muted-foreground" role="alert">
              Administrator access could not be verified. Please try again later.
            </div>
          ) : access === "denied" ? (
            <div className="border border-border bg-card p-4 text-sm text-muted-foreground" role="alert">
              This account does not have administrator access{user?.email ? ` (${user.email})` : ""}.
            </div>
          ) : (
            <form onSubmit={handleSignIn} className="space-y-4">
              <label className="block space-y-2 text-sm font-medium" htmlFor="admin-email">Email
                <Input id="admin-email" type="email" autoComplete="username" required value={loginEmail} onChange={(event) => setLoginEmail(event.target.value)} />
              </label>
              <label className="block space-y-2 text-sm font-medium" htmlFor="admin-password">Password
                <Input id="admin-password" type="password" autoComplete="current-password" required value={loginPassword} onChange={(event) => setLoginPassword(event.target.value)} />
              </label>
              {loginError && <p className="text-sm text-destructive" role="alert">{loginError}</p>}
              <Button type="submit" className="w-full">Sign in securely</Button>
            </form>
          )}
          {user && <Button variant="link" className="mt-5 px-0 text-muted-foreground" onClick={handleSignOut}><LogOut className="mr-2 h-4 w-4" />Sign out</Button>}
        </section>
      </main>
    );
  }

  const sections: { id: AdminSection; label: string; icon: typeof LayoutDashboard }[] = [
    { id: "overview", label: "Overview", icon: LayoutDashboard },
    { id: "orders", label: "Orders", icon: Package },
    { id: "subscribers", label: "Subscribers", icon: Mail },
  ];

  const navButton = (item: typeof sections[number]) => {
    const Icon = item.icon;
    return (
      <Button key={item.id} variant={section === item.id ? "secondary" : "ghost"} className="w-full justify-start" aria-current={section === item.id ? "page" : undefined} onClick={() => { setSection(item.id); setQuery(""); }}>
        <Icon className="mr-3 h-4 w-4" />{item.label}
      </Button>
    );
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="flex min-h-16 items-center justify-between border-b border-border px-4 md:px-8">
        <Link to="/en" className="flex items-center gap-3" aria-label="Return to AyurVeda site">
          <span className="flex h-9 w-9 items-center justify-center border border-border text-primary"><Leaf className="h-5 w-5" /></span>
          <span><span className="block font-display text-lg">AyurVeda</span><span className="block text-[10px] font-medium uppercase tracking-[0.16em] text-muted-foreground">Administration</span></span>
        </Link>
        <div className="flex items-center gap-2">
          <span className="hidden text-sm text-muted-foreground sm:block">{user?.email}</span>
          <Button variant="ghost" size="icon" aria-label="Refresh records" title="Refresh records" disabled={dataLoading} onClick={() => void loadAdminData()}>
            {dataLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <RefreshCw className="h-4 w-4" />}
          </Button>
          <Button variant="ghost" size="icon" aria-label="Sign out" title="Sign out" onClick={handleSignOut}><LogOut className="h-4 w-4" /></Button>
        </div>
      </header>

      <div className="mx-auto grid max-w-[1600px] md:grid-cols-[220px_minmax(0,1fr)]">
        <aside className="border-b border-border p-3 md:min-h-[calc(100vh-4rem)] md:border-b-0 md:border-r md:p-5">
          <nav aria-label="Administration" className="flex gap-2 overflow-x-auto md:flex-col">
            {sections.map(navButton)}
          </nav>
          <div className="mt-6 hidden border-t border-border pt-5 md:block">
            <Link to="/en" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"><ArrowLeft className="h-4 w-4" />Public site</Link>
          </div>
        </aside>

        <main className="min-w-0 px-4 py-7 md:px-8 md:py-10">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary"><ShieldCheck className="h-4 w-4" />Authorized workspace</p>
              <h1 className="text-3xl font-semibold">{section === "overview" ? "Operations overview" : section === "orders" ? "Orders" : "Newsletter subscribers"}</h1>
              <p className="mt-2 text-sm text-muted-foreground">{section === "overview" ? "Store activity and customer engagement at a glance." : section === "orders" ? "Recent order records and payment status." : "Manage and export newsletter signups."}</p>
            </div>
            <div className="flex w-full gap-2 sm:w-auto">
              <div className="relative min-w-0 flex-1 sm:w-64">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input aria-label={section === "subscribers" ? "Search subscribers" : "Search orders"} placeholder={section === "subscribers" ? "Search email or source" : "Search customer or order"} className="pl-9" value={query} onChange={(event) => setQuery(event.target.value)} />
              </div>
              {section === "subscribers" && <Button variant="outline" onClick={exportSubscribers} disabled={!filteredSubscribers.length}><Download className="mr-2 h-4 w-4" />Export CSV</Button>}
            </div>
          </div>

          {dataError && <div className="mb-6 border border-destructive/40 bg-destructive/5 px-4 py-3 text-sm text-muted-foreground" role="alert">{dataError}</div>}

          {section === "overview" && (
            <>
              <section aria-label="Key metrics" className="grid grid-cols-2 gap-x-5 gap-y-7 border-y border-border py-6 md:grid-cols-3 xl:grid-cols-6">
                <Metric label="All orders" value={counts.orders} icon={Package} />
                <Metric label="Awaiting payment" value={counts.pending} icon={Activity} />
                <Metric label="Paid orders" value={counts.paid} icon={ShieldCheck} />
                <Metric label="Active subscriptions" value={counts.activeSubscriptions} icon={Activity} />
                <Metric label="Subscribers" value={counts.subscribers} icon={Mail} />
                <Metric label="Active subscribers" value={counts.activeSubscribers} icon={Mail} />
              </section>
              <section className="mt-10">
                <div className="mb-4 flex items-center justify-between gap-3">
                  <div><h2 className="text-xl font-semibold">Recent orders</h2><p className="mt-1 text-sm text-muted-foreground">Latest {orders.length} records</p></div>
                  <Button variant="outline" onClick={() => setSection("orders")}>View all orders</Button>
                </div>
                <OrdersTable orders={orders.slice(0, 8)} loading={dataLoading} />
              </section>
            </>
          )}

          {section === "orders" && (
            <section>
              <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                <p className="text-sm text-muted-foreground">Showing {filteredOrders.length} of {orders.length} recent records</p>
                <Select value={orderStatus} onValueChange={setOrderStatus}>
                  <SelectTrigger className="w-44" aria-label="Filter orders by status"><SelectValue placeholder="All statuses" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All statuses</SelectItem>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="paid">Paid</SelectItem>
                    <SelectItem value="failed">Failed</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <OrdersTable orders={filteredOrders} loading={dataLoading} />
            </section>
          )}

          {section === "subscribers" && (
            <section>
              <p className="mb-4 text-sm text-muted-foreground">Showing {filteredSubscribers.length} of {subscribers.length} most recent records; {counts.activeSubscribers} active.</p>
              <div className="overflow-hidden border-y border-border">
                <Table>
                  <TableHeader><TableRow><TableHead>Email</TableHead><TableHead>Source</TableHead><TableHead>Joined</TableHead><TableHead>Status</TableHead></TableRow></TableHeader>
                  <TableBody>
                    {filteredSubscribers.map((subscriber) => (
                      <TableRow key={subscriber.id}>
                        <TableCell className="font-medium">{subscriber.email}</TableCell>
                        <TableCell className="text-muted-foreground">{subscriber.source || "—"}</TableCell>
                        <TableCell className="whitespace-nowrap text-muted-foreground">{formatDate(subscriber.subscribed_at)}</TableCell>
                        <TableCell><Badge variant={subscriber.is_active ? "default" : "secondary"}>{subscriber.is_active ? "Active" : "Inactive"}</Badge></TableCell>
                      </TableRow>
                    ))}
                    {!dataLoading && filteredSubscribers.length === 0 && <EmptyRow columns={4} label="No subscribers match this search." />}
                    {dataLoading && <EmptyRow columns={4} label="Loading subscriber records…" />}
                  </TableBody>
                </Table>
              </div>
            </section>
          )}

          <footer className="mt-12 flex items-center gap-2 border-t border-border pt-5 text-xs text-muted-foreground"><ShieldCheck className="h-4 w-4 text-secondary" />Administrator access is checked against your signed-in account.</footer>
        </main>
      </div>
    </div>
  );
};

const Metric = ({ label, value, icon: Icon }: { label: string; value: number; icon: typeof Activity }) => (
  <div className="min-w-0">
    <div className="mb-3 flex items-center gap-2 text-muted-foreground"><Icon className="h-4 w-4" /><span className="text-xs">{label}</span></div>
    <p className="text-2xl font-semibold tabular-nums">{value.toLocaleString()}</p>
  </div>
);

const OrdersTable = ({ orders, loading }: { orders: OrderRecord[]; loading: boolean }) => (
  <div className="overflow-hidden border-y border-border">
    <Table>
      <TableHeader><TableRow><TableHead>Order</TableHead><TableHead>Customer</TableHead><TableHead>Type</TableHead><TableHead>Total</TableHead><TableHead>Status</TableHead><TableHead>Date</TableHead></TableRow></TableHeader>
      <TableBody>
        {orders.map((order) => (
          <TableRow key={order.id}>
            <TableCell className="font-mono text-xs">{order.id.slice(0, 8).toUpperCase()}</TableCell>
            <TableCell><span className="block font-medium">{order.customer_name || "Guest"}</span><span className="text-xs text-muted-foreground">{order.customer_email || "—"}</span></TableCell>
            <TableCell className="capitalize text-muted-foreground">{order.order_type.replaceAll("_", " ")}</TableCell>
            <TableCell className="whitespace-nowrap tabular-nums">{formatAmount(order.total_amount, order.currency)}</TableCell>
            <TableCell><Badge variant={statusVariant(order.status)}>{order.status}</Badge></TableCell>
            <TableCell className="whitespace-nowrap text-muted-foreground">{formatDate(order.created_at)}</TableCell>
          </TableRow>
        ))}
        {!loading && orders.length === 0 && <EmptyRow columns={6} label="No orders found." />}
        {loading && <EmptyRow columns={6} label="Loading order records…" />}
      </TableBody>
    </Table>
  </div>
);

const EmptyRow = ({ columns, label }: { columns: number; label: string }) => (
  <TableRow><TableCell colSpan={columns} className="py-10 text-center text-sm text-muted-foreground">{label}</TableCell></TableRow>
);

export default AdminPanel;