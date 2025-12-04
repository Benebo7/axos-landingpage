-- Migration 003: store survey on waitlist as JSONB and drop survey_responses

-- Add survey JSONB and submitted timestamp to waitlist
ALTER TABLE waitlist
ADD COLUMN IF NOT EXISTS survey JSONB,
ADD COLUMN IF NOT EXISTS survey_submitted_at TIMESTAMP WITH TIME ZONE;

-- Keep survey_completed (already exists from initial migration)

-- Drop no-longer-needed survey_responses table and its related objects
DROP TABLE IF EXISTS survey_responses CASCADE;

-- Optional: comments
COMMENT ON COLUMN waitlist.survey IS 'Survey answers stored as JSONB';
COMMENT ON COLUMN waitlist.survey_submitted_at IS 'Timestamp when survey was submitted';

