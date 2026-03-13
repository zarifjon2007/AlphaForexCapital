"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { DEFAULT_CHALLENGES, WHOP_CHECKOUT_URLS } from "@/lib/pricingConfig"

export default function FundingOfferSection() {
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
        // fallback: leave defaults
      }
    }

    load()

    return () => {
      active = false
    }
  }, [])

  const selectedChallenge =
    challenges.find((c) => c.id === selectedId) ?? challenges.find((c) => c.id === "100K") ?? challenges[0]

  const formattedPrice = selectedChallenge
    ? `$${selectedChallenge.price.toLocaleString()}`
    : "$0"
  const checkoutUrl =
    WHOP_CHECKOUT_URLS[selectedChallenge?.id ?? "100K"] ?? "/#pricing"

  return (
    <section
      id="pricing"
      className="relative max-w-7xl mx-auto px-4 sm:px-6 pb-12 mt-7 bg-gradient-to-br from-[#020b1c] via-[#041436] to-[#020617] rounded-3xl"
    >
      <motion.div
        className="rounded-3xl bg-[#030712] shadow-[0_30px_90px_rgba(0,0,0,0.9)] border border-slate-800/80 overflow-hidden"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
      >
        {/* Model */}
        <div className="grid gap-6 border-b border-slate-800 px-4 sm:px-8 py-6 sm:py-7 bg-[#020624]">
          <div className="grid gap-4 sm:grid-cols-[minmax(0,2fr)_minmax(0,1.3fr)] items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-300 mb-2">Model</p>
              <div className="inline-flex items-center gap-2 rounded-full bg-[#020624] text-white px-4 py-1.5 text-xs sm:text-sm font-semibold border border-[#1e40af] shadow-[0_0_22px_rgba(30,64,175,0.8)]">
                <span className="inline-flex h-6 px-2 items-center justify-center rounded-full bg-[#1e40af]/80 text-[11px] uppercase tracking-[0.16em]">
                  Most Popular
                </span>
                <span>One Step</span>
              </div>
              <div className="mt-3 text-xs sm:text-sm text-slate-200 space-y-0.5">
                <p>
                  <span className="font-semibold text-slate-50">Phase 1:</span> 10% Profit Target
                </p>
                <p className="text-slate-400 text-[11px] sm:text-xs">
                  Pass the evaluation phase to unlock your Performance Account and earn certificates.
                </p>
              </div>
            </div>

            {/* Model type & platform */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-[#1e40af] bg-white/5 backdrop-blur-xl px-4 py-4 flex flex-col justify-between shadow-[0_22px_60px_rgba(15,23,42,0.9)]">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-300 mb-2">Model Type</p>
                <div className="inline-flex w-max items-center rounded-full bg-[#007ac3]/10 text-[#007ac3] px-4 py-1.5 text-xs font-semibold border border-[#007ac3]/40">
                  PRO
                </div>
              </div>
              <div className="rounded-2xl border border-[#1e40af] bg-white/5 backdrop-blur-xl px-4 py-4 flex flex-col justify-between shadow-[0_22px_60px_rgba(15,23,42,0.9)]">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-300 mb-2">Platform</p>
                <div className="inline-flex items-center gap-2 rounded-full bg-[#007ac3] text-white px-4 py-1.5 text-xs font-semibold shadow-[0_0_22px_rgba(56,189,248,0.8)]">
                  <span>Meta Trader 5</span>
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/10 border border-white/30 text-[10px]">
                    5
                  </span>
                </div>
                <p className="mt-1 text-[11px] text-slate-400">Most Popular</p>
              </div>
            </div>
          </div>
        </div>

        {/* Account Size tabs */}
        <div className="border-b border-slate-800 px-4 sm:px-8 py-4 sm:py-5">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-300 mb-3">Account Size</p>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {challenges.map((challenge) => (
              <button
                key={challenge.id}
                type="button"
                onClick={() => setSelectedId(challenge.id)}
                className={`rounded-full px-4 sm:px-5 py-2 text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  selectedChallenge?.id === challenge.id
                    ? "bg-[#007ac3] text-white shadow-[0_0_25px_rgba(59,130,246,0.9)]"
                    : "bg-slate-900/60 text-slate-200 border border-slate-700 hover:border-[#007ac3] hover:text-[#007ac3]"
                }`}
              >
                {challenge.label.replace("$", "")}
              </button>
            ))}
          </div>
        </div>

        {/* Spring event pricing banner */}
        <div className="px-4 sm:px-8 py-6 sm:py-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 rounded-2xl bg-transparent border border-[#1e3a8a] backdrop-blur-xl bg-white/5 shadow-[0_26px_80px_rgba(15,23,42,0.9)] px-4 sm:px-6 py-5 sm:py-6">
              <div className="space-y-1">
                <p className="text-xs sm:text-[11px] uppercase tracking-[0.22em] text-cyan-300/90">
                  🌱 Spring Trading Event
                </p>
              <p className="text-3xl sm:text-4xl font-extrabold text-slate-50">{formattedPrice}</p>
              <p className="mt-1 text-[11px] sm:text-xs text-slate-300/90">One-time evaluation fee</p>
              <p className="mt-2 text-[11px] sm:text-xs text-slate-300/90">
                🌸 Limited time spring promotion with double the challenges.
              </p>
            </div>

            <div className="flex-1 flex flex-col gap-3 md:items-end">
              <div className="inline-flex items-center rounded-full bg-white/10 text-cyan-200 px-4 sm:px-5 py-2 text-xs sm:text-sm font-semibold border border-cyan-400/70 shadow-[0_0_22px_rgba(56,189,248,0.8)] self-start md:self-end">
                🎁 BUY 1 GET 1 FREE – GET 2x {selectedChallenge?.label ?? "$100K"}!
              </div>
              <motion.a
                href={checkoutUrl}
                target="_blank"
                rel="noopener noreferrer"
                animate={{
                  boxShadow: [
                    "0 0 0 0 rgba(56,189,248,0.0)",
                    "0 0 40px 10px rgba(56,189,248,0.9)",
                    "0 0 0 0 rgba(56,189,248,0.0)",
                  ],
                  scale: [1, 1.03, 1],
                }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut",
                }}
                className="inline-flex items-center justify-center gap-2 rounded-[999px] bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 text-slate-950 font-semibold text-xs sm:text-sm px-5 sm:px-6 py-2.5 uppercase tracking-[0.16em]"
              >
                🎉 CLAIM SPRING OFFER – GET FREE CHALLENGE 🌸
              </motion.a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

