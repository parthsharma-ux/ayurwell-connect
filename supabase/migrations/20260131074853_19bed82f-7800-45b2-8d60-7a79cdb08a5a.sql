-- Add column to track number of free chats used (supports 5 free chats)
ALTER TABLE public.vaidya_free_chats 
ADD COLUMN IF NOT EXISTS free_chats_count INTEGER NOT NULL DEFAULT 0;

-- Update existing records: if free_chat_used is true, set count to 5 (fully used)
-- if false, set count to 0
UPDATE public.vaidya_free_chats 
SET free_chats_count = CASE WHEN free_chat_used = true THEN 5 ELSE 0 END;

-- Add check constraint for max 5 free chats
ALTER TABLE public.vaidya_free_chats 
DROP CONSTRAINT IF EXISTS vaidya_free_chats_count_check;

-- We'll use a trigger instead of CHECK for better handling
CREATE OR REPLACE FUNCTION public.check_free_chat_limit()
RETURNS TRIGGER AS $$
BEGIN
  IF NEW.free_chats_count > 5 THEN
    NEW.free_chats_count := 5;
  END IF;
  -- Auto-update free_chat_used based on count
  NEW.free_chat_used := (NEW.free_chats_count >= 5);
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

DROP TRIGGER IF EXISTS enforce_free_chat_limit ON public.vaidya_free_chats;

CREATE TRIGGER enforce_free_chat_limit
BEFORE INSERT OR UPDATE ON public.vaidya_free_chats
FOR EACH ROW
EXECUTE FUNCTION public.check_free_chat_limit();