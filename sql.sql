-- Create Enum for Appointment Status
CREATE TYPE appointment_status AS ENUM ('pending', 'confirmed', 'canceled_by_client', 'canceled_by_admin', 'completed');


-----------------------------TABLES CREATION-------------------------------------
-- 1. Admin Profiles
CREATE TABLE admin_profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT NOT NULL UNIQUE,
  phone TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Businesses
CREATE TABLE businesses (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  admin_id UUID NOT NULL REFERENCES admin_profiles(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  category TEXT,
  social_links JSONB DEFAULT '{}',
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. Branches
CREATE TABLE branches (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  business_id UUID NOT NULL REFERENCES businesses(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  address TEXT,
  phone TEXT,
  operating_hours JSONB DEFAULT '{}',
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. Services
CREATE TABLE services (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  business_id UUID NOT NULL REFERENCES businesses(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  description TEXT,
  duration_minutes INTEGER NOT NULL,
  price NUMERIC(10, 2) NOT NULL,
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 5. Weekly Schedules
CREATE TABLE weekly_schedules (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  service_id UUID NOT NULL REFERENCES services(id) ON DELETE CASCADE,
  branch_id UUID NOT NULL REFERENCES branches(id) ON DELETE CASCADE,
  day_of_week INTEGER CHECK (day_of_week >= 0 AND day_of_week <= 6),
  start_time TIME NOT NULL,
  end_time TIME NOT NULL,
  capacity_limit INTEGER DEFAULT 1
);

-- 6. Staff
CREATE TABLE staff (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  branch_id UUID NOT NULL REFERENCES branches(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  background_experience TEXT,
  specialty TEXT,
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 7. Client Profiles
CREATE TABLE client_profiles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT UNIQUE,
  phone TEXT,
  instagram_handle TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 8. Appointments
CREATE TABLE appointments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  client_id UUID NOT NULL REFERENCES client_profiles(id) ON DELETE CASCADE,
  service_id UUID NOT NULL REFERENCES services(id) ON DELETE CASCADE,
  branch_id UUID NOT NULL REFERENCES branches(id) ON DELETE CASCADE,
  staff_id UUID REFERENCES staff(id) ON DELETE SET NULL,
  start_datetime TIMESTAMPTZ NOT NULL,
  end_datetime TIMESTAMPTZ NOT NULL,
  status appointment_status DEFAULT 'pending',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-----------------------------POLICIES-------------------------------------
---------------------------------------------------------
-- 1. ENABLE ROW LEVEL SECURITY ON ALL TABLES
---------------------------------------------------------
ALTER TABLE admin_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE businesses ENABLE ROW LEVEL SECURITY;
ALTER TABLE branches ENABLE ROW LEVEL SECURITY;
ALTER TABLE services ENABLE ROW LEVEL SECURITY;
ALTER TABLE weekly_schedules ENABLE ROW LEVEL SECURITY;
ALTER TABLE staff ENABLE ROW LEVEL SECURITY;
ALTER TABLE client_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE appointments ENABLE ROW LEVEL SECURITY;


---------------------------------------------------------
-- 2. ADMIN PROFILES POLICIES
---------------------------------------------------------
-- Admins can only view and update their own profile data.
CREATE POLICY "Admins can view own profile" 
ON admin_profiles FOR SELECT 
USING (auth.uid() = id);

CREATE POLICY "Admins can update own profile" 
ON admin_profiles FOR UPDATE 
USING (auth.uid() = id);


---------------------------------------------------------
-- 3. BUSINESSES POLICIES
---------------------------------------------------------
-- Anyone can view businesses that are active.
CREATE POLICY "Public can view active businesses" 
ON businesses FOR SELECT 
USING (is_active = true);

-- Admins have full control over businesses they own.
CREATE POLICY "Admins can manage their own businesses" 
ON businesses FOR ALL 
USING (auth.uid() = admin_id);


---------------------------------------------------------
-- 4. BRANCHES POLICIES
---------------------------------------------------------
-- Anyone can view active branches.
CREATE POLICY "Public can view active branches" 
ON branches FOR SELECT 
USING (is_active = true);

-- Admins can manage branches if they own the parent business.
CREATE POLICY "Admins can manage their branches" 
ON branches FOR ALL 
USING (
  EXISTS (
    SELECT 1 FROM businesses 
    WHERE businesses.id = branches.business_id 
    AND businesses.admin_id = auth.uid()
  )
);


---------------------------------------------------------
-- 5. SERVICES POLICIES
---------------------------------------------------------
-- Anyone can view active services.
CREATE POLICY "Public can view active services" 
ON services FOR SELECT 
USING (is_active = true);

-- Admins can manage services if they own the parent business.
CREATE POLICY "Admins can manage their services" 
ON services FOR ALL 
USING (
  EXISTS (
    SELECT 1 FROM businesses 
    WHERE businesses.id = services.business_id 
    AND businesses.admin_id = auth.uid()
  )
);


---------------------------------------------------------
-- 6. WEEKLY SCHEDULES POLICIES
---------------------------------------------------------
-- Anyone can view the schedules to know when to book.
CREATE POLICY "Public can view schedules" 
ON weekly_schedules FOR SELECT 
USING (true);

-- Admins can manage schedules for their branches.
CREATE POLICY "Admins can manage schedules" 
ON weekly_schedules FOR ALL 
USING (
  EXISTS (
    SELECT 1 FROM branches 
    JOIN businesses ON branches.business_id = businesses.id 
    WHERE branches.id = weekly_schedules.branch_id 
    AND businesses.admin_id = auth.uid()
  )
);


---------------------------------------------------------
-- 7. STAFF POLICIES
---------------------------------------------------------
-- Anyone can view active staff members.
CREATE POLICY "Public can view active staff" 
ON staff FOR SELECT 
USING (is_active = true);

-- Admins can manage staff for their branches.
CREATE POLICY "Admins can manage staff" 
ON staff FOR ALL 
USING (
  EXISTS (
    SELECT 1 FROM branches 
    JOIN businesses ON branches.business_id = businesses.id 
    WHERE branches.id = staff.branch_id 
    AND businesses.admin_id = auth.uid()
  )
);


---------------------------------------------------------
-- 8. CLIENT PROFILES POLICIES
---------------------------------------------------------
-- Anyone can create a client profile (useful for public booking forms).
CREATE POLICY "Anyone can insert a client profile" 
ON client_profiles FOR INSERT 
WITH CHECK (true);

-- Authenticated admins can view client profiles.
CREATE POLICY "Admins can view clients" 
ON client_profiles FOR SELECT 
USING (auth.role() = 'authenticated');


---------------------------------------------------------
-- 9. APPOINTMENTS (RESERVATIONS) POLICIES
---------------------------------------------------------
-- Anyone can create an appointment.
CREATE POLICY "Anyone can create an appointment" 
ON appointments FOR INSERT 
WITH CHECK (true);

-- Admins can manage (view, update, cancel) appointments tied to their branches.
CREATE POLICY "Admins can manage their appointments" 
ON appointments FOR ALL 
USING (
  EXISTS (
    SELECT 1 FROM branches 
    JOIN businesses ON branches.business_id = businesses.id 
    WHERE branches.id = appointments.branch_id 
    AND businesses.admin_id = auth.uid()
  )
);

