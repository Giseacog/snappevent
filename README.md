# 🚀 SupaReact

**SupaReact** is a high-performance boilerplate designed to skyrocket your development speed. It combines the power of **React + Vite** with the robustness of **Supabase** as a Backend-as-a-Service, all organized under the principles of **Screaming Architecture**.

This repository is ready to be forked, configured in 5 minutes, and deployed to production.

## ✨ Key Features

- 🔐 **Full Auth Flow**: Login, Registration, Password Recovery, and Email Verification pre-configured.
- 🏗️ **Screaming Architecture**: A folder structure that screams its intent and domain logic.
- 🎨 **Tailwind CSS + OKLCH**: Modern color system and theme configuration ready to go.
- 🔄 **React Query + Mappers**: Async state management with data transformation (DB -> UI) layer.
- 🛡️ **Protected Routes**: Built-in authentication middleware to guard your views.
- 🎭 **Framer Motion**: Basic UI animations and transitions out of the box.

---

## 🛠️ Project Structure

The project follows an architecture where the `src` folder clearly communicates its functionality:

```text
src/
├── api/             # Services (auth and item CRUD example) & Mappers (DB to Frontend data transformation)
├── config/          # Supabase client config
├── context/         # AuthContext (onAuthStateChange) and ModalContext
├── global/          # Reusable components (Async, Forms, Modals, Navbar)
├── hooks/           # Domain hooks (React Query) calling the services
├── layouts/         # Page templates (MainLayout, AuthLayout)
├── pages/           # Application views (Auth flow, Home with CRUD samples)
├── routes/          # Centralized router and Guards (ProtectedRoute/PublicRoute)
├── types/           # TypeScript definitions (Entities, Forms, Responses)
└── motion/          # Basic animation presets
```


## 🚀 Quick Start

### 1. Clone & Install
```bash
git clone git@github.com:robertovallin2/snapp-supareact.git
cd supareact
npm install
```


### 2. Environment Variables
Create a `.env` file in the root based on the `.envSample` and fill in your Supabase credentials.

#### How to get your Supabase credentials

1. Go to https://supabase.com and log in.
2. Open your project dashboard.
3. In the left sidebar, click on **Project Settings**.
4. Go to the **API** section.
5. Copy the following values:
   - **Project URL** → This will be your `VITE_SUPABASE_URL`
   - **anon public key** → This will be your `VITE_SUPABASE_ANON_KEY`

Then create your `.env` file in the root of the project:

```bash
VITE_FRONTEND_URL=http://localhost:5173
VITE_SUPABASE_URL=YOUR_SUPABASE_URL
VITE_SUPABASE_ANON_KEY=YOUR_SUPABASE_ANON_KEY
```

## ⚙️ Supabase Auth Configuration

To ensure the authentication flows (Email Confirmation and Password Recovery) work correctly, you must whitelist the redirect URLs in your Supabase Dashboard:

1. Go to **Authentication > URL Configuration**.
2. Set **Site URL** to your main app URL (e.g., `http://localhost:5173` for development, change to your domain after deploying).
3. In **Redirect URLs**, add the following paths:

| Flow | Redirect Path |
| :--- | :--- |
| **Email Verification** | `http://localhost:5173/email-verified` |
| **Password Reset** | `http://localhost:5173/reset-password` |

> [!IMPORTANT]
> When you deploy to production (Vercel, Netlify, etc.), remember to add the corresponding production URLs (e.g., `https://your-app.vercel.app/reset-password`) in this same section in Supabase.


## ⚡ Supabase Setup (SQL)
To make the Auth system and CRUD examples work, run the following scripts in your Supabase SQL Editor:

A. Profiles & Auto-Sync
This script creates a profiles table that automatically syncs whenever a new user signs up via auth.users.

```bash
-- 1. Create Profiles Table
create table profiles (
  id uuid references auth.users on delete cascade primary key,
  full_name text,
  email text unique,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 2. Create the Trigger Function
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, full_name, email)
  values (
    new.id, 
    new.raw_user_meta_data->>'full_name',
    new.email
  );
  return new;
end;
$$ language plpgsql security definer;

-- 3. Bind Trigger
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();
```


B. Sample CRUD Table (Items) with RLS
A sample table to test Create, Read, Update, and Delete operations with Row Level Security.

```bash
-- Create sample table to test CRUD with real table
create table items (
  id uuid default uuid_generate_v4() primary key,
  name text not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  deactivated_at timestamp with time zone default timezone('utc'::text, now()) 
);

-- Enable Row Level Security (RLS)
alter table public.items enable row level security;

-- Policies for Authenticated Users
create policy "Read: Authenticated users" on public.items for select to authenticated using (true);
create policy "Create: Authenticated users" on public.items for insert to authenticated with check (true);
create policy "Update: Authenticated users" on public.items for update to authenticated using (true);
create policy "Delete: Authenticated users" on public.items for delete to authenticated using (true);
```


## 🎨 Theming
The project uses the latest Tailwind CSS engine with colors defined in OKLCH format. You can customize them in index.css:

```bash
@theme {
    /* Primary Color Palette */
    --color-primary-500: oklch(0.5347 0.1337 264.323);
    /* Secondary Color Palette */
    --color-secondary-500: oklch(0.5446 0.1538 298.533);
    /* Danger Color Palette */
    --color-danger-500: oklch(0.5562 0.1977 12.727);
}
```


## 📦 Deployment
This project includes a vercel.json configuration ready for Vercel, ensuring Single Page Application (SPA) routing works perfectly. Simply connect your repo and deploy!

Fork this repo and start building something amazing! 🚀

