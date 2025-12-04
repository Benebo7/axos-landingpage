/* eslint-disable */
/* @ts-nocheck */
import "jsr:@supabase/functions-js/edge-runtime.d.ts"
import { createClient } from "jsr:@supabase/supabase-js@2"

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

Deno.serve(async (req: Request) => {
  const headers = cors(req.headers.get("Origin"))

  if (req.method === "OPTIONS") {
    return new Response("ok", { headers })
  }

  try {
    const { email } = await req.json() as { email?: string }
    const normalized = (email || "").trim().toLowerCase()

    if (!normalized || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(normalized)) {
      return new Response(JSON.stringify({ ok: false, error: "invalid_email" }), { status: 400, headers: { ...headers, "Content-Type": "application/json" } })
    }

    const url = Deno.env.get("SUPABASE_URL")
    const serviceRole = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")
    if (!url || !serviceRole) {
      return new Response(JSON.stringify({ ok: false, error: "missing_server_env" }), { status: 500, headers: { ...headers, "Content-Type": "application/json" } })
    }

    const admin = createClient(url, serviceRole)

    const { error } = await admin
      .from("waitlist")
      .insert({ email: normalized })
      .single()

    if (error) {
      // Duplicate key error (unique constraint) -> 23505 in Postgres
      if ((error as any).code === "23505" || error.message?.includes("duplicate")) {
        return new Response(JSON.stringify({ ok: false, code: "duplicate" }), { status: 409, headers: { ...headers, "Content-Type": "application/json" } })
      }
      return new Response(JSON.stringify({ ok: false, error: "insert_failed" }), { status: 500, headers: { ...headers, "Content-Type": "application/json" } })
    }

    return new Response(JSON.stringify({ ok: true }), { status: 200, headers: { ...headers, "Content-Type": "application/json" } })
  } catch {
    return new Response(JSON.stringify({ ok: false, error: "bad_request" }), { status: 400, headers: { ...headers, "Content-Type": "application/json" } })
  }
})


