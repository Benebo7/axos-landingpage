# Supabase Configuration - Axos

## Project Information

- **Project**: Axos waitlist
- **ID**: kantyhlatszzrhqxfecr
- **URL**: https://kantyhlatszzrhqxfecr.supabase.co
- **Region**: sa-east-1 (São Paulo)

## Environment Variables Configuration

Create a `.env.local` file in the project root with the following variables:

```bash
NEXT_PUBLIC_SUPABASE_URL=https://kantyhlatszzrhqxfecr.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImthbnR5aGxhdHN6enJocXhmZWNyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDYyMzkzNDUsImV4cCI6MjA2MTgxNTM0NX0.za5zHQw4unrpCl5Nc25D9CFE_AP9FiBVcLhXAs63MC4
```

## Database Structure

### Table: `waitlist`
- **id**: UUID (primary key)
- **email**: VARCHAR(255) (unique, required)
- **created_at**: TIMESTAMP WITH TIME ZONE
- **survey_completed**: BOOLEAN (default: false)

### Table: `survey_responses`
- **id**: UUID (primary key)
- **waitlist_id**: UUID (foreign key to waitlist)
- **email**: VARCHAR(255) (required) - User email
- **features**: TEXT[] (array of selected features)
- **risk_profile**: VARCHAR(50) ('conservador', 'moderado', 'arrojado')
- **investment_amount**: VARCHAR(50) (optional)
- **experience**: VARCHAR(50) ('iniciante', 'intermediario', 'avancado')
- **goals**: TEXT[] (array of goals)
- **created_at**: TIMESTAMP WITH TIME ZONE

## Funcionalidades Implementadas

1. **Cadastro de Email**: O usuário pode se cadastrar na lista de espera
2. **Verificação de Duplicatas**: Sistema verifica se o email já está cadastrado
3. **Pesquisa de Preferências**: Pop-up com 4 etapas para coletar preferências do usuário
4. **Segurança RLS**: Row Level Security configurado para proteção dos dados
5. **Email nas Respostas**: O email do usuário é armazenado diretamente na tabela de respostas

## Como Testar

1. Certifique-se de que as variáveis de ambiente estão configuradas
2. Execute o projeto: `npm run dev`
3. Acesse http://localhost:3000
4. Role até a seção "Comece a investir com IA"
5. Cadastre um email
6. Responda a pesquisa de preferências

## Acessar os Dados

Para visualizar os dados cadastrados, você pode:

1. Acessar o painel do Supabase: https://app.supabase.com/project/kantyhlatszzrhqxfecr
2. Usar o Table Editor para ver os registros
3. Executar queries SQL no SQL Editor

## Queries Úteis

```sql
-- Ver todos os emails cadastrados
SELECT * FROM waitlist ORDER BY created_at DESC;

-- Ver respostas da pesquisa (agora com email direto)
SELECT 
    email,
    features,
    risk_profile,
    experience,
    goals,
    created_at
FROM survey_responses
ORDER BY created_at DESC;

-- Ver respostas completas com dados da waitlist
SELECT 
    sr.email,
    sr.features,
    sr.risk_profile,
    sr.experience,
    sr.goals,
    sr.created_at as survey_date,
    w.created_at as signup_date
FROM survey_responses sr
JOIN waitlist w ON w.id = sr.waitlist_id
ORDER BY sr.created_at DESC;

-- Estatísticas da lista de espera
SELECT * FROM get_waitlist_stats();

-- Análise de preferências mais comuns
SELECT 
    unnest(features) as feature,
    COUNT(*) as count
FROM survey_responses
GROUP BY feature
ORDER BY count DESC;

-- Distribuição de perfil de risco
SELECT 
    risk_profile,
    COUNT(*) as count,
    ROUND(COUNT(*)::numeric / (SELECT COUNT(*) FROM survey_responses) * 100, 2) as percentage
FROM survey_responses
GROUP BY risk_profile
ORDER BY count DESC;
``` 