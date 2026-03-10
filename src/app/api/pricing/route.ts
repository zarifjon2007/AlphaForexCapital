import { NextResponse } from "next/server"
import { ChallengeConfig, DEFAULT_CHALLENGES } from "@/lib/pricingConfig"

let currentChallenges: ChallengeConfig[] = DEFAULT_CHALLENGES

export async function GET() {
  return NextResponse.json({ challenges: currentChallenges })
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

    currentChallenges = cleaned

    return NextResponse.json({ challenges: currentChallenges })
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 })
  }
}

