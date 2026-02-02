-- Update the check_free_chat_limit function to allow 15 free chats
CREATE OR REPLACE FUNCTION public.check_free_chat_limit()
RETURNS trigger
LANGUAGE plpgsql
SET search_path TO 'public'
AS $function$
BEGIN
  IF NEW.free_chats_count > 15 THEN
    NEW.free_chats_count := 15;
  END IF;
  -- Auto-update free_chat_used based on count
  NEW.free_chat_used := (NEW.free_chats_count >= 15);
  RETURN NEW;
END;
$function$;