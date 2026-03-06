
-- Enable pgcrypto extension if it doesn't exist
CREATE EXTENSION IF NOT EXISTS pgcrypto;

INSERT INTO auth.users (
  instance_id,
  id,
  aud,
  role,
  email,
  encrypted_password,
  email_confirmed_at,
  recovery_sent_at,
  last_sign_in_at,
  app_metadata,
  user_metadata,
  created_at,
  updated_at,
  confirmation_token,
  email_change,
  email_change_token_new,
  recovery_token
) VALUES (
  '00000000-0000-0000-0000-000000000000',
  '00000000-0000-0000-0000-000000000004',
  'authenticated',
  'authenticated',
  'demo@shrink.app',
  crypt('demo_password', gen_salt('bf')),
  now(),
  now(),
  now(),
  '{"provider":"email","providers":["email"]}',
  '{}',
  now(),
  now(),
  '',
  '',
  '',
  ''
) ON CONFLICT (id) DO NOTHING;

-- Demo app user
INSERT INTO public.users (id, name, email, role, store_id) 
VALUES ('00000000-0000-0000-0000-000000000004', 'Demo User', 'demo@shrink.app', 'manager', '00000000-0000-0000-0000-000000000001') 
ON CONFLICT (id) DO NOTHING;
