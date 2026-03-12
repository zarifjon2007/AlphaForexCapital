"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { BASE_OUR_PRICE_100K, DEFAULT_CHALLENGES, loadChallengesFromStorage } from "@/lib/pricingConfig"
const COMPETITORS = [
  { name: "FTMO", price: "$540" },
  { name: "The5ers", price: "$475" },
  { name: "MyForexFunds", price: "$499" },
]
const BOGO_PRICE = "$275"

export default function AnniversaryPromoSection() {
  const [selectedId, setSelectedId] = useState<string>("100K")
  const [challenges, setChallenges] = useState(DEFAULT_CHALLENGES)

  useEffect(() => {
    let active = true

    const load = async () => {
      try {
        const res = await fetch("/api/pricing")
        if (!res.ok) throw new Error("failed")
        const data = (await res.json()) as { challenges?: typeof DEFAULT_CHALLENGES }
        if (!active || !data?.challenges) return
        setChallenges(data.challenges)
      } catch {
        if (!active) return
        setChallenges(loadChallengesFromStorage())
      }
    }

    load()

    return () => {
      active = false
    }
  }, [])

  const selectedChallenge =
    challenges.find((c) => c.id === selectedId) ?? challenges.find((c) => c.id === "100K") ?? challenges[0]

  const rawPrice = selectedChallenge?.price ?? BASE_OUR_PRICE_100K
  const bogoPerUnit = Number.isFinite(rawPrice) && rawPrice > 0 ? Math.round(rawPrice / 2) : 275
  const scaleFactor =
    Number.isFinite(rawPrice) && rawPrice > 0 && BASE_OUR_PRICE_100K > 0 ? rawPrice / BASE_OUR_PRICE_100K : 1

  const scaledCompetitors = COMPETITORS.map((c) => {
    const base = Number(c.price.replace(/[^0-9.]/g, ""))
    const scaled = Number.isFinite(base) && base > 0 ? Math.round(base * scaleFactor) : base
    return {
      ...c,
      displayPrice: `$${Number(scaled || 0).toLocaleString()}`,
    }
  })

  return (
    <section className="relative z-40 py-16 sm:py-20 px-3 sm:px-4 lg:px-6 overflow-hidden bg-[#020624]">
      <div className="relative max-w-4xl mx-auto">
        {/* 1. Top banner — joyning pastidan chiqadi */}
        <motion.div
          className="text-center py-2 mb-5"
          initial={{ opacity: 0, y: 48 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
          >
            <p className="inline-flex items-center justify-center gap-1 sm:gap-2 rounded-full bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600 px-4 sm:px-5 py-1.5 text-[10px] sm:text-xs font-semibold tracking-[0.16em] text-white border border-white/20 shadow-[0_0_18px_rgba(56,189,248,0.55)]">
              <span className="hidden sm:inline">🌱</span>
              SPRING TRADING EVENT = LOWEST PRICES EVER
              <span className="hidden sm:inline">🌸</span>
            </p>
        </motion.div>

        {/* 2. Main heading */}
        <motion.h2
          className="text-center text-2xl sm:text-3xl md:text-4xl font-bold mb-10 leading-tight tracking-tight sm:tracking-normal"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, delay: 0.1, ease: [0.33, 1, 0.68, 1] }}
        >
          <span className="text-green-500">LOWEST PRICE</span>{" "}
          <span className="text-white">Trading Evaluation Challenges</span>{" "}
          <span className="bg-gradient-to-r from-red-500 to-orange-400 bg-clip-text text-transparent">EVER</span>
        </motion.h2>

        {/* 3. Challenge size tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.33, 1, 0.68, 1] }}
        >
          {challenges.map((challenge) => (
            <button
              key={challenge.id}
              type="button"
              onClick={() => setSelectedId(challenge.id)}
              className={`rounded-full px-4 py-2.5 text-sm font-semibold transition-all duration-200 ${
                selectedChallenge?.id === challenge.id
                  ? "bg-sky-500 text-white shadow-lg shadow-sky-500/30"
                  : "bg-slate-700/80 text-[#007ac3] border border-[#007ac3]/30 hover:border-[#007ac3]/50"
              }`}
            >
              {challenge.label}
            </button>
          ))}
        </motion.div>

        {/* 4–5. Combined offer + comparison card (yana zamonaviy dizayn) */}
        <motion.div
          className="rounded-3xl bg-slate-950/80 backdrop-blur-2xl shadow-[0_40px_120px_rgba(0,0,0,0.95)] border border-slate-800/80 mb-8 overflow-hidden"
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.33, 1, 0.68, 1] }}
        >
          {/* Yuqori rangli chiziq */}
          <div className="h-1 w-full bg-gradient-to-r from-green-400 via-[#007ac3] to-sky-300" />

          <div className="p-5 sm:p-7 md:p-8 space-y-6">
            {/* Bizning taklif bloklari */}
            <div className="grid gap-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] items-stretch">
              {/* Chap: Asosiy narx */}
              <div className="relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-xl shadow-[0_26px_70px_rgba(0,0,0,0.8)] border border-cyan-500/40 px-5 py-4 sm:py-5">
              <div className="pointer-events-none absolute inset-x-0 -top-10 h-24 bg-gradient-to-b from-slate-200/10 to-transparent" />
                <div className="relative">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-300 mb-1">
                    Our Anniversary Deal
                  </p>
                  <p className="text-sm text-slate-200">
                    Buy a <span className="font-semibold">{selectedChallenge?.label ?? "$100K"}</span> Challenge for
                  </p>
                  <p className="mt-1 text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
                    {selectedChallenge?.price ?? "$549"}
                  </p>
                  <p className="mt-1 text-xs text-slate-400">
                    One-time evaluation fee – no hidden costs.
                  </p>
                </div>
              </div>

              {/* O'ng: BOGO highlight kartasi */}
              <div className="relative overflow-hidden rounded-2xl bg-white/4 backdrop-blur-xl px-5 py-4 sm:py-5 shadow-[0_26px_80px_rgba(22,163,74,0.45)] border border-emerald-400/60">
                <div className="pointer-events-none absolute -right-12 -top-10 h-32 w-32 rounded-full bg-emerald-300/15 blur-3xl" />
                <div className="pointer-events-none absolute -left-10 -bottom-10 h-32 w-32 rounded-full bg-emerald-400/20 blur-3xl" />
                <div className="relative">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-900 mb-1">
                    BOGO Upgrade
                  </p>
                  <p className="text-sm text-emerald-300">
                    With BOGO you get
                  </p>
                  <p className="mt-1 text-2xl sm:text-3xl font-extrabold text-emerald-300">
                    2x {selectedChallenge?.label ?? "$100K"}
                  </p>
                  <p className="mt-1 text-base sm:text-lg font-semibold text-emerald-200">
                    = ${bogoPerUnit.toLocaleString()}{" "}
                    <span className="font-normal">per</span>{" "}
                    <span className="font-bold">{selectedChallenge?.label ?? "$100K"}</span>
                  </p>
                  <p className="mt-2 inline-flex items-center gap-1 rounded-full bg-emerald-400/10 px-3 py-1 text-[11px] font-semibold tracking-[0.16em] text-emerald-200">
                    ✅ 50% effective discount per challenge
                  </p>
                </div>
              </div>
            </div>

            {/* Raqobatchilar bilan taqqoslash – qorong'i karta */}
            <div className="rounded-2xl bg-slate-900/95 border border-slate-700 px-4 sm:px-5 py-4 sm:py-5">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
                <p className="text-sm font-semibold tracking-wide text-slate-50">
                  Compare total price for{" "}
                  <span className="text-green-400">
                    2x {selectedChallenge?.label ?? "$100K"} account
                  </span>
                </p>
                <span className="inline-flex items-center gap-2 rounded-full bg-green-500/20 border border-green-400/60 px-3 py-1.5 text-xs font-semibold text-green-200">
                  ⭐ Best value with Alpha Forex Capital
                </span>
              </div>

              <div className="flex flex-wrap gap-2 sm:gap-3 mb-3">
                {scaledCompetitors.map((c) => (
                  <div
                    key={c.name}
                    className="inline-flex items-center gap-2 rounded-full bg-slate-800/90 border border-red-500/50 px-3 py-1.5 text-xs sm:text-sm shadow-sm shadow-slate-900/60"
                  >
                    <span className="font-semibold text-slate-50">{c.name}</span>
                    <span className="font-semibold text-red-500">{c.displayPrice}</span>
                    <span className="text-[11px] text-slate-300">single challenge</span>
                  </div>
                ))}

                <div className="inline-flex flex-col items-start justify-center rounded-full bg-green-500 text-slate-950 px-9 py-1.5 text-xs sm:text-sm shadow-md shadow-green-400/80">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold">Alpha Forex Capital</span>
                    <span className="font-extrabold">${bogoPerUnit.toLocaleString()}</span>
                  </div>
                  <span className="text-[11px] font-medium leading-snug">
                    per challenge (BOGO)
                  </span>
                </div>
              </div>

              <p className="mt-1 text-xs sm:text-sm text-slate-200">
                <span className="block">
                  <span className="mr-1">💡</span>
                  Thanks to BOGO, you effectively pay
                </span>
                <span className="block font-semibold text-green-400">
                  50% less per challenge
                </span>
                <span className="block">
                  compared to any competitor.
                </span>
              </p>
            </div>
          </div>
        </motion.div>

        {/* 6. CTA button */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.4, ease: [0.33, 1, 0.68, 1] }}
        >
          <motion.a
            href="/#pricing"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 text-slate-950 font-semibold text-xs sm:text-sm py-2.5 sm:py-3 px-6 sm:px-8 uppercase tracking-[0.18em] shadow-[0_0_24px_rgba(56,189,248,0.7)]"
            animate={{ scale: [1, 1.04, 1] }}
            transition={{ duration: 1.9, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.98 }}
          >
            🎉 Get Your Spring BOGO Deal Now
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
