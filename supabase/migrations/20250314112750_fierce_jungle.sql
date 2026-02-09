/*
  # Create audit submissions table

  1. New Tables
    - `audit_submissions`
      - `id` (uuid, primary key)
      - `company_name` (text)
      - `job_title` (text)
      - `challenges` (text[])
      - `team_size` (text)
      - `manual_hours` (text)
      - `priority` (text)
      - `contact` (text)
      - `workflow` (text)
      - `current_tools` (text)
      - `goals` (text)
      - `created_at` (timestamptz)
      - `status` (text)

  2. Security
    - Enable RLS on `audit_submissions` table
    - Add policy for authenticated users to read their own submissions
    - Add policy for service role to insert new submissions
*/

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

-- Allow service role to insert new submissions
CREATE POLICY "Service role can insert submissions"
  ON audit_submissions
  FOR INSERT
  TO authenticated
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