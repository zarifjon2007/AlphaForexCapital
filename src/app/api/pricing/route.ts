import { NextResponse } from "next/server"
import { ChallengeConfig, DEFAULT_CHALLENGES } from "@/lib/pricingConfig"
import { supabase } from "@/lib/supabaseServer"

const TABLE = "challenges"

async function getFromDb(): Promise<ChallengeConfig[] | null> {
  if (!supabase) return null

  const { data, error } = await supabase
    .from(TABLE)
    .select("id, label, price")
    .order("price", { ascending: true })

  if (error) {
    console.error("Supabase pricing GET error:", error.message)
    return null
  }
  if (!data || data.length === 0) return null

  return data as ChallengeConfig[]
}

async function seedDefaultsIfNeeded() {
  if (!supabase) return
  const existing = await getFromDb()
  if (existing && existing.length > 0) return

  const { error } = await supabase.from(TABLE).upsert(
    DEFAULT_CHALLENGES.map((c) => ({
      id: c.id,
      label: c.label,
      price: c.price,
    })),
    { onConflict: "id" },
  )
  if (error) {
    console.error("Supabase seed defaults error:", error.message)
  }
}

export async function GET() {
  // If Supabase configured, fetch from DB; otherwise fall back to defaults.
  if (supabase) {
    await seedDefaultsIfNeeded()
    const fromDb = await getFromDb()
    if (fromDb) {
      return NextResponse.json({ challenges: fromDb })
    }
  }

  return NextResponse.json({ challenges: DEFAULT_CHALLENGES })
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as { challenges?: Partial<ChallengeConfig>[] } | null
    if (!body || !Array.isArray(body.challenges)) {
      return NextResponse.json({ error: "Invalid body" }, { status: 400 })
    }

    const cleaned: ChallengeConfig[] = []

    for (const def of DEFAULT_CHALLENGES) {
      const match = body.challenges.find((c) => c && c.id === def.id)
      const price = typeof match?.price === "number" && match.price > 0 ? Math.round(match.price) : def.price
      cleaned.push({ ...def, price })
    }

    // Update DB if configured, otherwise just return cleaned values
    if (supabase) {
      const payload = cleaned.map((c) => ({
        id: c.id,
        label: c.label,
        price: c.price,
      }))
      const { error } = await supabase.from(TABLE).upsert(payload, { onConflict: "id" })
      if (error) {
        console.error("Supabase pricing POST error:", error.message)
        return NextResponse.json({ error: "Failed to save to database" }, { status: 500 })
      }
    }

    return NextResponse.json({ challenges: cleaned })
  } catch (e) {
    console.error("Pricing POST JSON error:", e)
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 })
  }
}


