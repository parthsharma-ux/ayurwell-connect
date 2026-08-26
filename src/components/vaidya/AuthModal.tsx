import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/contexts/AuthContext";
import { Loader2 } from "lucide-react";

type AuthModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export const AuthModal = ({ open, onOpenChange }: AuthModalProps) => {
  const [isSignUp, setIsSignUp] = useState(false);
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
      ? await signUp(email, password) 
      : await signIn(email, password);

    if (result.error) {
      setError(friendly(result.error.message));
    } else if (isSignUp) {
      setInfo("Account created! Check your email to confirm, then sign in.");
      setPassword("");
    } else {
      onOpenChange(false);
      setEmail("");
      setPassword("");
    }
    setLoading(false);
  };


  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>
            {isSignUp ? "Create Account" : "Sign In"} to Save Consultations
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              minLength={6}
              required
            />
          </div>
          {error && <p className="text-sm text-destructive">{error}</p>}
          {info && <p className="text-sm text-primary">{info}</p>}
          <Button type="submit" className="w-full" disabled={loading}>
            {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {isSignUp ? "Create Account" : "Sign In"}
          </Button>
          <p className="text-center text-sm text-muted-foreground">
            {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
            <button
              type="button"
              onClick={() => setIsSignUp(!isSignUp)}
              className="text-primary hover:underline"
            >
              {isSignUp ? "Sign In" : "Sign Up"}
            </button>
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
};
