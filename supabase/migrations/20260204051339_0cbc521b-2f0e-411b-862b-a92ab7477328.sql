-- Add reminder_sent column to track if trial expiry email was sent
ALTER TABLE public.vaidya_free_chats 
ADD COLUMN IF NOT EXISTS reminder_sent boolean DEFAULT false;