
-- Lock down orders RLS: edge functions use service role and bypass RLS, so no public/authenticated write access is needed.
DROP POLICY IF EXISTS "Anyone can create orders" ON public.orders;
DROP POLICY IF EXISTS "Service can update orders" ON public.orders;
DROP POLICY IF EXISTS "Users can view their own orders" ON public.orders;

-- Authenticated users can only read their own orders. Guest orders (user_id IS NULL) are not readable via PostgREST.
CREATE POLICY "Users can view own orders"
ON public.orders
FOR SELECT
TO authenticated
USING (auth.uid() = user_id);

-- Make newsletter_subscribers intent explicit: no SELECT/UPDATE/DELETE for non-service callers.
REVOKE SELECT, UPDATE, DELETE ON public.newsletter_subscribers FROM anon, authenticated;

-- Make orders unreadable/writable except via the SELECT policy above; edge functions use service_role.
REVOKE INSERT, UPDATE, DELETE ON public.orders FROM anon, authenticated;
GRANT ALL ON public.orders TO service_role;
GRANT ALL ON public.newsletter_subscribers TO service_role;
