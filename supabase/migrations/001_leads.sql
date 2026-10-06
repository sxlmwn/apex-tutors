-- Migration 001_leads.sql
-- Leads storage for Apex Tutors: student requests and tutor applications

create table if not exists public.student_requests (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  phone text not null,
  city text not null,
  area text,
  grade text not null,
  board text,
  mode text,
  notes text,
  source text not null default 'modal',
  status text not null default 'new'
);

create table if not exists public.tutor_applications (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  phone text not null,
  university text not null,
  program text not null,
  fsc_marks text not null,
  city text not null,
  mode text not null,
  subjects text[] not null default '{}',
  status text not null default 'new'
);

-- Enable Row Level Security (RLS) on both tables with no public policies
-- (Access is restricted strictly to backend service role key)
alter table public.student_requests enable row level security;
alter table public.tutor_applications enable row level security;

-- Performance indexes for dashboard filtering and chronological ordering
create index if not exists idx_student_requests_created_at on public.student_requests (created_at desc);
create index if not exists idx_tutor_applications_created_at on public.tutor_applications (created_at desc);
