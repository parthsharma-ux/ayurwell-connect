import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/contexts/AuthContext";
import { Loader2, LockKeyhole, Mail, UserRound } from "lucide-react";

type AuthModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export const AuthModal = ({ open, onOpenChange }: AuthModalProps) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [info, setInfo] = useState("");
  const { signIn, signUp } = useAuth();

  const friendly = (msg: string) => {
    const m = msg.toLowerCase();
    if (m.includes("invalid login")) return "Wrong email or password. Please try again.";
    if (m.includes("email not confirmed")) return "Please confirm your email first — check your inbox.";
    if (m.includes("already registered") || m.includes("already been registered"))
      return "This email is already registered. Please sign in instead.";
    if (m.includes("failed to fetch") || m.includes("network"))
      return "Could not reach the server. Check your connection and try again.";
    return msg;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setInfo("");
    setLoading(true);

    const result = isSignUp
      ? await signUp(email, password, displayName)
      : await signIn(email, password);

    if (result.error) {
      setError(friendly(result.error.message));
    } else if (isSignUp) {
      setInfo("Account created. You can start your consultation now.");
      setPassword("");
      setDisplayName("");
    } else {
      onOpenChange(false);
      setEmail("");
      setPassword("");
      setDisplayName("");
    }
    setLoading(false);
  };


  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{isSignUp ? "Create your account" : "Welcome back"}</DialogTitle>
          <p className="text-sm text-muted-foreground">
            {isSignUp ? "Save consultations and return to your health journey anytime." : "Sign in to continue your private AI Vaidya consultation."}
          </p>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          {isSignUp && (
            <div className="space-y-2">
              <Label htmlFor="display-name">Your name</Label>
              <div className="relative">
                <UserRound className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  id="display-name"
                  value={displayName}
                  onChange={(e) => setDisplayName(e.target.value)}
                  placeholder="Aarav Sharma"
                  className="pl-9"
                  autoComplete="name"
                  required
                />
              </div>
            </div>
          )}
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <div className="relative">
              <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" className="pl-9" autoComplete="email" required />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <div className="relative">
              <LockKeyhole className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="At least 6 characters" className="pl-9" autoComplete={isSignUp ? "new-password" : "current-password"} minLength={6} required />
            </div>
          </div>
          {error && <p className="text-sm text-destructive">{error}</p>}
          {info && <p className="text-sm text-primary">{info}</p>}
          <Button type="submit" className="w-full" disabled={loading}>
            {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {isSignUp ? "Create Account" : "Sign In"}
          </Button>
          <p className="text-center text-sm text-muted-foreground">
            {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
            <Button
              type="button"
              variant="link"
              size="sm"
              onClick={() => setIsSignUp(!isSignUp)}
            >
              {isSignUp ? "Sign In" : "Sign Up"}
            </Button>
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
};
