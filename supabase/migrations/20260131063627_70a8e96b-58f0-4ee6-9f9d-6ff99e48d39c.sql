-- Drop the old constraint
ALTER TABLE public.vaidya_messages DROP CONSTRAINT IF EXISTS vaidya_messages_role_check;

-- Add the updated constraint to allow 'assistant' instead of 'ai'
ALTER TABLE public.vaidya_messages ADD CONSTRAINT vaidya_messages_role_check CHECK (role = ANY (ARRAY['user'::text, 'assistant'::text]));