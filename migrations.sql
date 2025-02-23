create schema if not exists "notes";
grant usage on schema "notes" to anon, authenticated, service_role;
grant all on all tables in schema "notes" to anon, authenticated, service_role;
grant all on all routines in schema "notes" to anon, authenticated, service_role;
grant all on all sequences in schema "notes" to anon, authenticated, service_role;
alter default privileges for role postgres
in schema "notes" grant all on tables to anon, authenticated, service_role;
alter default privileges for role postgres
in schema "notes" grant all on routines to anon, authenticated, service_role;
alter default privileges for role postgres
in schema "notes" grant all on sequences to anon, authenticated, service_role;

create table if not exists notes.notes (
  "id" uuid primary key default gen_random_uuid(),
  "user" uuid not null references auth.users,
  "created" timestamptz not null default now(),
  "title" varchar(255) not null,
  "content" varchar(8191) not null,
  "public" boolean not null default false
);

create index if not exists notes_notes_user on notes.notes ("user");

create index if not exists notes_notes_created on notes.notes ("created");

alter table notes.notes enable row level security;

create policy "Users can view public notes." on notes.notes for
select to anon using ("public");

create policy "Users can insert notes." on notes.notes for
insert to authenticated with check ((select auth.uid()) = "user");

create policy "Users can view their notes." on notes.notes for
select to authenticated using ((select auth.uid()) = "user");

create policy "Users can update their notes." on notes.notes for
update to authenticated using ((select auth.uid()) = "user");
