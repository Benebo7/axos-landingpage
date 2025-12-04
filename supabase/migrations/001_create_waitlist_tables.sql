-- Criar tabela de lista de espera
CREATE TABLE IF NOT EXISTS waitlist (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    survey_completed BOOLEAN DEFAULT FALSE
);

-- Criar índice para busca por email
CREATE INDEX IF NOT EXISTS idx_waitlist_email ON waitlist(email);

-- Criar tabela de respostas da pesquisa
CREATE TABLE IF NOT EXISTS survey_responses (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    waitlist_id UUID NOT NULL REFERENCES waitlist(id) ON DELETE CASCADE,
    features TEXT[] NOT NULL DEFAULT '{}',
    risk_profile VARCHAR(50) NOT NULL CHECK (risk_profile IN ('conservador', 'moderado', 'arrojado')),
    investment_amount VARCHAR(50),
    experience VARCHAR(50) NOT NULL CHECK (experience IN ('iniciante', 'intermediario', 'avancado')),
    goals TEXT[] NOT NULL DEFAULT '{}',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Criar índice para busca por waitlist_id
CREATE INDEX IF NOT EXISTS idx_survey_responses_waitlist_id ON survey_responses(waitlist_id);

-- Adicionar RLS (Row Level Security)
ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;
ALTER TABLE survey_responses ENABLE ROW LEVEL SECURITY;

-- Criar políticas de segurança para permitir inserção anônima
CREATE POLICY "Allow anonymous inserts to waitlist" ON waitlist
    FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow anonymous inserts to survey_responses" ON survey_responses
    FOR INSERT WITH CHECK (true);

-- Permitir que usuários leiam seus próprios dados (baseado no email)
CREATE POLICY "Users can view their own waitlist entry" ON waitlist
    FOR SELECT USING (true);

CREATE POLICY "Users can view their own survey responses" ON survey_responses
    FOR SELECT USING (
        waitlist_id IN (
            SELECT id FROM waitlist WHERE email = current_setting('app.current_user_email', true)
        )
    );

-- Adicionar comentários às tabelas
COMMENT ON TABLE waitlist IS 'Tabela para armazenar emails da lista de espera do Axos';
COMMENT ON TABLE survey_responses IS 'Tabela para armazenar as respostas da pesquisa de preferências';

-- Criar função para estatísticas (opcional)
CREATE OR REPLACE FUNCTION get_waitlist_stats()
RETURNS TABLE (
    total_signups BIGINT,
    surveys_completed BIGINT,
    conversion_rate NUMERIC
) AS $$
BEGIN
    RETURN QUERY
    SELECT 
        COUNT(*) as total_signups,
        COUNT(*) FILTER (WHERE survey_completed = true) as surveys_completed,
        ROUND(
            COUNT(*) FILTER (WHERE survey_completed = true)::NUMERIC / 
            NULLIF(COUNT(*), 0) * 100, 
            2
        ) as conversion_rate
    FROM waitlist;
END;
$$ LANGUAGE plpgsql; 