import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { trackSearchFeedback } from "@/lib/analytics";
import { useToast } from "@/hooks/use-toast";
import { MessageSquareWarning, Loader2 } from "lucide-react";

interface SearchFeedbackDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  query: string;
  surface: "search" | "medicines" | "remedies";
  activeCategory?: string;
  language?: "en" | "hi";
}

function getSessionId(): string {
  try {
    let sid = localStorage.getItem("ayu_session_id");
    if (!sid) {
      sid = `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
      localStorage.setItem("ayu_session_id", sid);
    }
    return sid;
  } catch {
    return "session-unknown";
  }
}

const SearchFeedbackDialog = ({
  open,
  onOpenChange,
  query,
  surface,
  activeCategory,
  language = "en",
}: SearchFeedbackDialogProps) => {
  const t = (en: string, hi: string) => (language === "hi" ? hi : en);
  const { toast } = useToast();

  const [comment, setComment] = useState("");
  const [triedSuggestions, setTriedSuggestions] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async () => {
    if (!query.trim()) return;
    setSubmitting(true);

    try {
      const { error } = await supabase.from("search_feedback").insert({
        query: query.trim(),
        surface,
        active_category: activeCategory || null,
        suggestion_clicked: triedSuggestions,
        comment: comment.trim() || null,
        session_id: getSessionId(),
        language,
      } as any);

      if (error) throw error;

      trackSearchFeedback({
        query,
        surface,
        activeCategory,
        triedSuggestions,
        hasComment: !!comment.trim(),
      });

      toast({
        title: t("Feedback sent", "प्रतिक्रिया भेजी गई"),
        description: t(
          "Thank you — we'll use this to improve search.",
          "धन्यवाद — हम इसे खोज में सुधार के लिए उपयोग करेंगे।"
        ),
      });

      setComment("");
      setTriedSuggestions(false);
      onOpenChange(false);
    } catch {
      toast({
        title: t("Could not send feedback", "प्रतिक्रिया नहीं भेजी जा सकी"),
        description: t("Please try again later.", "कृपया बाद में पुनः प्रयास करें।"),
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <MessageSquareWarning className="h-5 w-5 text-primary" />
            {t("Not what you expected?", "जैसी अपेक्षा नहीं थी?")}
          </DialogTitle>
          <DialogDescription>
            {t(
              "Help us improve search by telling us what went wrong.",
              "हमें बताएं कि क्या गलत हुआ ताकि हम खोज में सुधार कर सकें।"
            )}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 py-2">
          <div className="rounded-lg bg-muted/50 px-3 py-2 text-sm text-muted-foreground">
            <span className="font-medium text-foreground">{t("Search", "खोज")}:</span>{" "}
            <span className="italic">{query}</span>
            {activeCategory && (
              <span className="ml-2">
                · <span className="font-medium text-foreground">{t("Category", "श्रेणी")}:</span>{" "}
                {activeCategory}
              </span>
            )}
          </div>

          <div className="flex items-start gap-3">
            <Checkbox
              id="tried-suggestions"
              checked={triedSuggestions}
              onCheckedChange={(c) => setTriedSuggestions(c === true)}
            />
            <Label htmlFor="tried-suggestions" className="text-sm font-normal leading-relaxed cursor-pointer">
              {t(
                "I tried one or more suggestions above but still didn't find what I needed.",
                "मैंने ऊपर दिए गए एक या अधिक सुझाव आज़माए लेकिन फिर भी वह नहीं मिला जो मुझे चाहिए था।"
              )}
            </Label>
          </div>

          <div className="space-y-2">
            <Label htmlFor="feedback-comment">
              {t("What were you looking for? (optional)", "आप क्या खोज रहे थे? (वैकल्पिक)")}
            </Label>
            <Textarea
              id="feedback-comment"
              placeholder={t(
                "Describe what you expected to find...",
                "वर्णन करें कि आप क्या ढूंढना चाहते थे..."
              )}
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              rows={3}
              className="resize-none"
            />
          </div>
        </div>

        <DialogFooter>
          <Button
            variant="ghost"
            onClick={() => onOpenChange(false)}
            disabled={submitting}
          >
            {t("Cancel", "रद्द करें")}
          </Button>
          <Button onClick={handleSubmit} disabled={submitting || !query.trim()}>
            {submitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                {t("Sending...", "भेज रहा है...")}
              </>
            ) : (
              t("Send feedback", "प्रतिक्रिया भेजें")
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default SearchFeedbackDialog;
