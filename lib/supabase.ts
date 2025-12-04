import { createClient } from '@supabase/supabase-js'
import type { SupabaseClient } from '@supabase/supabase-js'

// Configurações do Supabase (você precisará adicionar as variáveis de ambiente)
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://mock.supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'mock-key'

// Mock somente via retornos condicionais; o cliente sempre é real para evitar erros de tipo em build
const isDevelopment = process.env.NODE_ENV === 'development' && (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY)

export const supabase: SupabaseClient = createClient(supabaseUrl, supabaseAnonKey)

// Tipos TypeScript para as tabelas
export interface WaitlistEntry {
  id?: string
  email: string
  created_at?: string
  survey_completed?: boolean
}

export interface SurveyPayload {
  features: string[]
  risk_profile: 'conservador' | 'moderado' | 'arrojado'
  investment_amount?: string
  experience: 'iniciante' | 'intermediario' | 'avancado'
  goals: string[]
}

// Funções auxiliares para interagir com o banco
export const waitlistService = {
  async addEmail(email: string): Promise<{ data: any; error: any }> {
    if (isDevelopment) {
      console.log('📧 Mock: Adicionando email à lista de espera:', email)
      return Promise.resolve({
        data: { ok: true },
        error: null
      })
    }

    const { data, error } = await supabase.functions.invoke('register_waitlist', {
      body: { email }
    })

    // Normalize duplicate responses from the Edge Function.
    // The function may indicate duplicates via a returned HTTP 409 (in `error.status`) OR
    // by returning a JSON payload like { ok: false, code: 'duplicate' } in `data`.
    if ((error as any)?.status === 409) {
      return { data: null, error: { code: 'duplicate' } }
    }

    // `data` can be an object or a JSON string depending on the client; try to detect duplicate there too.
    try {
      const payload = typeof data === 'string' ? JSON.parse(data) : data
      if (payload && (payload.code === 'duplicate' || (payload.ok === false && payload.code === 'duplicate'))) {
        return { data: null, error: { code: 'duplicate' } }
      }
    } catch (e) {
      // ignore parse errors
    }

    return { data, error }
  },

  async saveSurvey(email: string, surveyData: SurveyPayload): Promise<{ error: any }> {
    if (isDevelopment) {
      console.log('📊 Mock: Salvando pesquisa:', { email, surveyData })
      return Promise.resolve({ error: null })
    }

    const { error } = await supabase.functions.invoke('save_survey', {
      body: { email, survey: surveyData }
    })
    return { error }
  },

  // checkEmailExists removido para evitar enumeração de emails

  // getSurveyResponses removido no Option A (dados ficam em waitlist.survey)
} 