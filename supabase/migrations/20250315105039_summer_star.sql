/*
  # Update audit submissions table policies

  1. Changes
    - Drop existing policies if they exist
    - Create new policy for public inserts
    - Update read policy for authenticated users

  2. Security
    - Enable RLS
    - Allow public inserts
    - Restrict read access to authenticated users for their own submissions
*/

-- Drop existing policies if they exist
DO $$ 
BEGIN
  DROP POLICY IF EXISTS "Users can read own submissions" ON audit_submissions;
  DROP POLICY IF EXISTS "Allow public to insert submissions" ON audit_submissions;
END $$;

-- Create table if it doesn't exist
CREATE TABLE IF NOT EXISTS audit_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  company_name text NOT NULL,
  job_title text NOT NULL,
  challenges text[] NOT NULL,
  team_size text NOT NULL,
  manual_hours text NOT NULL,
  priority text NOT NULL,
  contact text NOT NULL,
  workflow text,
  current_tools text,
  goals text,
  created_at timestamptz DEFAULT now(),
  status text DEFAULT 'pending'
);

-- Enable RLS
ALTER TABLE audit_submissions ENABLE ROW LEVEL SECURITY;

-- Allow public inserts
CREATE POLICY "Allow public to insert submissions"
  ON audit_submissions
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Allow authenticated users to read their own submissions
CREATE POLICY "Users can read own submissions"
  ON audit_submissions
  FOR SELECT
  TO authenticated
  USING (auth.uid() IN (
    SELECT auth.uid()
    FROM auth.users
    WHERE auth.users.email = audit_submissions.contact
  ));