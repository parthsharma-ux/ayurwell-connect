REVOKE ALL ON TABLE public.user_roles FROM PUBLIC, anon;
GRANT SELECT ON TABLE public.user_roles TO authenticated;
GRANT ALL ON TABLE public.user_roles TO service_role;

REVOKE ALL ON FUNCTION public.has_role(uuid, public.app_role) FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.has_role(uuid, public.app_role) TO authenticated, service_role;

REVOKE ALL ON TABLE public.orders FROM PUBLIC, anon;
GRANT SELECT ON TABLE public.orders TO authenticated;
GRANT ALL ON TABLE public.orders TO service_role;

REVOKE ALL ON TABLE public.newsletter_subscribers FROM PUBLIC, anon;
GRANT INSERT ON TABLE public.newsletter_subscribers TO anon, authenticated;
GRANT SELECT ON TABLE public.newsletter_subscribers TO authenticated;
GRANT ALL ON TABLE public.newsletter_subscribers TO service_role;

REVOKE ALL ON TABLE public.user_subscriptions FROM PUBLIC, anon;
GRANT SELECT, INSERT ON TABLE public.user_subscriptions TO authenticated;
GRANT ALL ON TABLE public.user_subscriptions TO service_role;
