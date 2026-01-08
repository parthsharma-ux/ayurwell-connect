-- Create chat sessions table
CREATE TABLE public.vaidya_sessions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL,
    title TEXT NOT NULL DEFAULT 'New Consultation',
    language TEXT NOT NULL DEFAULT 'english',
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create chat messages table
CREATE TABLE public.vaidya_messages (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    session_id UUID REFERENCES public.vaidya_sessions(id) ON DELETE CASCADE NOT NULL,
    role TEXT NOT NULL CHECK (role IN ('user', 'ai')),
    content TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.vaidya_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.vaidya_messages ENABLE ROW LEVEL SECURITY;

-- RLS policies for sessions
CREATE POLICY "Users can view their own sessions"
ON public.vaidya_sessions FOR SELECT
USING (auth.uid() = user_id);

CREATE POLICY "Users can create their own sessions"
ON public.vaidya_sessions FOR INSERT
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own sessions"
ON public.vaidya_sessions FOR UPDATE
USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own sessions"
ON public.vaidya_sessions FOR DELETE
USING (auth.uid() = user_id);

-- RLS policies for messages (via session ownership)
CREATE POLICY "Users can view messages from their sessions"
ON public.vaidya_messages FOR SELECT
USING (EXISTS (
    SELECT 1 FROM public.vaidya_sessions 
    WHERE id = session_id AND user_id = auth.uid()
));

CREATE POLICY "Users can create messages in their sessions"
ON public.vaidya_messages FOR INSERT
WITH CHECK (EXISTS (
    SELECT 1 FROM public.vaidya_sessions 
    WHERE id = session_id AND user_id = auth.uid()
));

-- Create updated_at trigger
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_vaidya_sessions_updated_at
BEFORE UPDATE ON public.vaidya_sessions
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Index for faster queries
CREATE INDEX idx_vaidya_sessions_user_id ON public.vaidya_sessions(user_id);
CREATE INDEX idx_vaidya_messages_session_id ON public.vaidya_messages(session_id);