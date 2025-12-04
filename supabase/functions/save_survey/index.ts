/* eslint-disable */
/* @ts-nocheck */
import "jsr:@supabase/functions-js/edge-runtime.d.ts"
import { createClient } from "jsr:@supabase/supabase-js@2"

type Survey = {
  features: string[]
  risk_profile: "conservador" | "moderado" | "arrojado"
  experience: "iniciante" | "intermediario" | "avancado"
  investment_amount?: string
  goals: string[]
}

Deno.serve(async (req: Request) => {
  function cors(originHeader: string | null) {
    const allowed = (Deno.env.get("ALLOWED_ORIGINS") || "")
      .split(",")
      .map(s => s.trim())
      .filter(Boolean)

    const allowOrigin =
      allowed.length === 0
        ? "*"
        : allowed.includes(originHeader ?? "")
          ? (originHeader as string)
          : allowed[0]

    return {
      "Access-Control-Allow-Origin": allowOrigin,
      "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Vary": "Origin",
    }
  }

  const headers = cors(req.headers.get("Origin"))

  if (req.method === "OPTIONS") {
    return new Response("ok", { headers })
  }
  try {
    const { email, survey } = await req.json() as { email?: string; survey?: Survey }
    const normalized = (email || "").trim().toLowerCase()

    if (!normalized || !survey) {
      return new Response(JSON.stringify({ ok: false, error: "invalid_payload" }), { status: 400, headers: { ...headers, "Content-Type": "application/json" } })
    }
    if (!Array.isArray(survey.features) || survey.features.length === 0) {
      return new Response(JSON.stringify({ ok: false, error: "features_required" }), { status: 400, headers: { ...headers, "Content-Type": "application/json" } })
    }
    if (!survey.risk_profile || !survey.experience) {
      return new Response(JSON.stringify({ ok: false, error: "profile_required" }), { status: 400, headers: { ...headers, "Content-Type": "application/json" } })
    }
    if (!Array.isArray(survey.goals) || survey.goals.length === 0) {
      return new Response(JSON.stringify({ ok: false, error: "goals_required" }), { status: 400, headers: { ...headers, "Content-Type": "application/json" } })
    }

    const url = Deno.env.get("SUPABASE_URL")
    const serviceRole = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")
    if (!url || !serviceRole) {
      return new Response(JSON.stringify({ ok: false, error: "missing_server_env" }), { status: 500, headers: { ...headers, "Content-Type": "application/json" } })
    }

    const admin = createClient(url, serviceRole)

    const { error } = await admin
      .from("waitlist")
      .update({
        survey,
        survey_submitted_at: new Date().toISOString(),
        survey_completed: true,
      })
      .eq("email", normalized)

    if (error) {
      return new Response(JSON.stringify({ ok: false, error: "update_failed" }), { status: 500, headers: { ...headers, "Content-Type": "application/json" } })
    }

    return new Response(JSON.stringify({ ok: true }), { status: 200, headers: { ...headers, "Content-Type": "application/json" } })
  } catch {
    return new Response(JSON.stringify({ ok: false, error: "bad_request" }), { status: 400, headers: { ...headers, "Content-Type": "application/json" } })
  }
})


