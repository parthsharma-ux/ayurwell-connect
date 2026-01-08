import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Plus, MessageSquare, Trash2, Loader2 } from "lucide-react";
import { formatDistanceToNow } from "date-fns";

type VaidyaSession = {
  id: string;
  title: string;
  language: string;
  created_at: string;
  updated_at: string;
};

type ChatHistoryProps = {
  sessions: VaidyaSession[];
  currentSessionId: string | null;
  loading: boolean;
  onSelectSession: (id: string) => void;
  onDeleteSession: (id: string) => void;
  onNewChat: () => void;
};

export const ChatHistory = ({
  sessions,
  currentSessionId,
  loading,
  onSelectSession,
  onDeleteSession,
  onNewChat,
}: ChatHistoryProps) => {
  if (loading) {
    return (
      <div className="flex items-center justify-center py-8">
        <Loader2 className="h-5 w-5 animate-spin text-muted-foreground" />
      </div>
    );
  }

  return (
    <div className="space-y-2">
      <Button
        variant="outline"
        size="sm"
        onClick={onNewChat}
        className="w-full justify-start gap-2"
      >
        <Plus className="h-4 w-4" />
        New Consultation
      </Button>
      
      {sessions.length === 0 ? (
        <p className="text-xs text-muted-foreground text-center py-4">
          No past consultations
        </p>
      ) : (
        <ScrollArea className="h-[200px]">
          <div className="space-y-1">
            {sessions.map((session) => (
              <div
                key={session.id}
                className={`group flex items-center gap-2 p-2 rounded-lg cursor-pointer transition-colors ${
                  currentSessionId === session.id
                    ? "bg-primary/10"
                    : "hover:bg-muted"
                }`}
              >
                <button
                  onClick={() => onSelectSession(session.id)}
                  className="flex-1 text-left min-w-0"
                >
                  <div className="flex items-center gap-2">
                    <MessageSquare className="h-3 w-3 flex-shrink-0 text-muted-foreground" />
                    <span className="text-xs truncate">{session.title}</span>
                  </div>
                  <span className="text-[10px] text-muted-foreground">
                    {formatDistanceToNow(new Date(session.updated_at), { addSuffix: true })}
                  </span>
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onDeleteSession(session.id);
                  }}
                  className="opacity-0 group-hover:opacity-100 p-1 hover:bg-destructive/10 rounded transition-opacity"
                >
                  <Trash2 className="h-3 w-3 text-destructive" />
                </button>
              </div>
            ))}
          </div>
        </ScrollArea>
      )}
    </div>
  );
};
