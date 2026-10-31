# Project Architecture Rules

- Keep herb profiles as the single source for herb guide cards, detail pages, and dynamic SEO; keep detail URLs language-prefixed so sitemap entries resolve to dedicated pages.
- Gate administration with the separate database-backed `user_roles` table and server-enforced policies; never trust client state, profile fields, or email checks for admin authorization.
