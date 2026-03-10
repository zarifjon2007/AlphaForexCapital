export type ChallengeConfig = {
  id: string
  label: string
  price: number
}

export const DEFAULT_CHALLENGES: ChallengeConfig[] = [
  { id: "10K", label: "$10K", price: 199 },
  { id: "25K", label: "$25K", price: 299 },
  { id: "50K", label: "$50K", price: 349 },
  { id: "100K", label: "$100K", price: 549 },
  { id: "200K", label: "$200K", price: 1050 },
  { id: "300K", label: "$300K", price: 1500 },
  { id: "400K", label: "$400K", price: 1995 },
  { id: "1M", label: "$1M", price: 3599 },
]

// challenge price for 100K used as scale base
export const BASE_OUR_PRICE_100K = DEFAULT_CHALLENGES.find((c) => c.id === "100K")?.price ?? 549

export const PRICING_STORAGE_KEY = "afc_pricing_v1"

export function loadChallengesFromStorage(): ChallengeConfig[] {
  if (typeof window === "undefined") return DEFAULT_CHALLENGES

  try {
    const raw = window.localStorage.getItem(PRICING_STORAGE_KEY)
    if (!raw) return DEFAULT_CHALLENGES
    const parsed = JSON.parse(raw) as Partial<ChallengeConfig[]> | null
    if (!Array.isArray(parsed)) return DEFAULT_CHALLENGES

    const cleaned: ChallengeConfig[] = []
    for (const def of DEFAULT_CHALLENGES) {
      const match = (parsed as any[]).find((c) => c && c.id === def.id)
      const price = typeof match?.price === "number" && match.price > 0 ? match.price : def.price
      cleaned.push({ ...def, price })
    }
    return cleaned
  } catch {
    return DEFAULT_CHALLENGES
  }
}

export function saveChallengesToStorage(challenges: ChallengeConfig[]) {
  if (typeof window === "undefined") return
  try {
    window.localStorage.setItem(PRICING_STORAGE_KEY, JSON.stringify(challenges))
    window.dispatchEvent(new CustomEvent("afc-pricing-updated"))
  } catch {
    // ignore
  }
}

