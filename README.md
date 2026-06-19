# CARS Mastery V5

This build combines:

## V4
- Admin content manager page
- Local passage/question builder
- Export generated passage JSON
- Content roadmap structure

## V5
- Pricing page
- Subscription-ready account page
- Premium/free access architecture placeholders
- Stripe environment variable placeholders

## Supabase SQL

Run this in Supabase SQL Editor:

```sql
create table attempts (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade,
  score int not null,
  total_questions int not null,
  time_elapsed int not null,
  accuracy numeric not null,
  type_stats jsonb,
  created_at timestamptz default now()
);

alter table attempts enable row level security;

create policy "Users can insert own attempts"
on attempts for insert
with check (auth.uid() = user_id);

create policy "Users can view own attempts"
on attempts for select
using (auth.uid() = user_id);
```

Optional future tables:

```sql
create table profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text,
  plan text default 'free',
  stripe_customer_id text,
  created_at timestamptz default now()
);

create table custom_passages (
  id uuid primary key default gen_random_uuid(),
  created_by uuid references auth.users(id) on delete cascade,
  title text not null,
  category text,
  difficulty text,
  passage_json jsonb not null,
  is_premium boolean default false,
  created_at timestamptz default now()
);
```

## Vercel Environment Variables

Required for Supabase:
- NEXT_PUBLIC_SUPABASE_URL
- NEXT_PUBLIC_SUPABASE_ANON_KEY

Later for Stripe:
- NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
- STRIPE_SECRET_KEY
- STRIPE_PRICE_ID_MONTHLY
