-- Migration: add_email_to_survey_responses
-- Adiciona campo email diretamente na tabela survey_responses para facilitar acesso

-- Adicionar coluna email na tabela survey_responses
ALTER TABLE survey_responses 
ADD COLUMN email VARCHAR(255);

-- Preencher emails existentes fazendo JOIN com waitlist
UPDATE survey_responses sr
SET email = w.email
FROM waitlist w
WHERE sr.waitlist_id = w.id;

-- Tornar o campo email obrigatório para novos registros
ALTER TABLE survey_responses
ALTER COLUMN email SET NOT NULL;

-- Criar índice para busca por email
CREATE INDEX idx_survey_responses_email ON survey_responses(email);

-- Adicionar comentário explicativo
COMMENT ON COLUMN survey_responses.email IS 'Email do usuário, duplicado da tabela waitlist para acesso direto'; 