"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

/** Noldan target gacha tez count-up animatsiya */
function useCountUp(
  target: number,
  durationMs: number,
  start: boolean,
  decimals = 0
) {
  const [value, setValue] = useState(0)
  useEffect(() => {
    if (!start) return
    let startTime: number
    let raf: number
    const step = (now: number) => {
      if (startTime == null) startTime = now
      const elapsed = now - startTime
      const t = Math.min(elapsed / durationMs, 1)
      const eased = 1 - Math.pow(1 - t, 2.5)
      const current = target * eased
      setValue(decimals > 0 ? Math.round(current * 10 ** decimals) / 10 ** decimals : Math.round(current))
      if (t < 1) raf = requestAnimationFrame(step)
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [target, durationMs, start, decimals])
  return value
}

const TRUST_STATS: Array<{
  numeric: number
  suffix: string
  line1: string
  line2?: string
  decimals?: number
}> = [
  { numeric: 5000, suffix: "+", line1: "Customers", line2: "worldwide" },
  { numeric: 4.8, suffix: "/5", line1: "Trustpilot", decimals: 1 },
  { numeric: 27, suffix: "M+", line1: "Paid in rewards", line2: "worldwide" },
  { numeric: 125, suffix: "+", line1: "Countries", line2: "served" },
]

export default function HeroSection() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    const t = requestAnimationFrame(() => setMounted(true))
    return () => cancelAnimationFrame(t)
  }, [])
  const countUpStarted = mounted

  return (
    <section className="relative min-h-[85vh] flex mt-[80px] flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 hero-blue-bg hero-waves hero-glow-blue pointer-events-none" />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-5 sm:px-8 pt-24 sm:pt-28 pb-8 sm:pb-12">
        <div className="grid lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] gap-10 items-center">
          {/* Chap kolonna: matnlar */}
          <div className="text-center lg:text-left lg:-ml-24">
            {/* Eyebrow — pastdan silliq tepaga */}
            <motion.div
              className="inline-flex items-center rounded-full border border-slate-200/40 bg-slate-900/40 backdrop-blur-sm px-4 py-2 text-xs sm:text-sm text-slate-300 mb-6"
              initial={{ opacity: 0, y: 180 }}
              animate={mounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 180 }}
              transition={{ duration: 0.55, ease: [0.33, 1, 0.68, 1] }}
            >
              Trade Forex, Indices, Metals &amp; Crypto
            </motion.div>

            {/* Sarlavha — pastdan silliq tepaga */}
            <motion.h1
              className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-tight text-slate-50"
              style={{
                fontFamily: '"Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              }}
              initial={{ opacity: 0, y: 220 }}
              animate={mounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 220 }}
              transition={{ duration: 0.6, delay: 0.08, ease: [0.33, 1, 0.68, 1] }}
            >
              <span className="text-[#00b4ff]">Get Funded.</span>
              <br />
              <span>Trade Your Way.</span>
            </motion.h1>

            {/* Subhead — pastdan silliq tepaga */}
            <motion.p
              className="mt-6 text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
              initial={{ opacity: 0, y: 200 }}
              animate={mounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 200 }}
              transition={{ duration: 0.55, delay: 0.2, ease: [0.33, 1, 0.68, 1] }}
            >
              Pass our simple one-phase challenge, access up to $4,000,000 in capital, and withdraw profits with
              reliable weekly payouts and transparent rules. US Traders are welcome!
            </motion.p>

            {/* Tugmalar — pastdan silliq tepaga */}
            <motion.div
              className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 180 }}
              animate={mounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 180 }}
              transition={{ duration: 0.5, delay: 0.35, ease: [0.33, 1, 0.68, 1] }}
            >
              <Button
                size="lg"
            className="rounded-[8px] h-12 px-8 text-base font-semibold btn-gradient text-white btn-lift shadow-[0_0_25px_rgba(56,189,248,0.8)]"
                asChild
              >
                <Link href="/funding">Get Funded</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-[8px] h-12 px-8 text-base font-semibold border-slate-500 text-slate-200 hover:bg-slate-800/60 hover:text-slate-50"
                asChild
              >
                <Link href="/faq">Learn More</Link>
              </Button>
            </motion.div>
          </div>

          {/* O'ng kolonna: Glassmorphism trading karta */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="hero-glass-float relative w-full max-w-sm h-[320px] md:h-[360px] rounded-3xl bg-slate-900/30 border border-slate-500/40 backdrop-blur-2xl shadow-[0_30px_90px_rgba(0,0,0,0.8)] overflow-hidden">
              {/* Ichki gradient glow */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-sky-400/10 to-transparent" />

              <div className="relative h-full px-6 py-5 flex flex-col justify-between">
                {/* Yuqori label */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-sky-500/20 border border-sky-400/40 text-sky-200">
                      $
                    </span>
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-300/80">
                        Live Trading Snapshot
                      </p>
                      <p className="text-sm font-medium text-slate-100/90">Alpha Forex Capital Desk</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-medium text-emerald-300 bg-emerald-500/15 border border-emerald-400/40 rounded-full px-2 py-1">
                    +3.4% Today
                  </span>
                </div>

                {/* Grafikka o'xshash chiziq */}
                <div className="mt-6 mb-4 h-32 rounded-2xl bg-slate-900/60 border border-slate-700/70 px-3 py-2 flex items-end gap-1 overflow-hidden">
                  {Array.from({ length: 18 }).map((_, i) => {
                    const height = 20 + ((i * 37) % 80)
                    const isAccent = i === 10 || i === 11
                    return (
                      <div
                        key={i}
                        className={`flex-1 rounded-full ${isAccent ? "bg-emerald-400" : "bg-sky-500/70"}`}
                        style={{ height: `${height}px` }}
                      />
                    )
                  })}
                </div>

                {/* Pastki metrikalar */}
                <div className="flex items-center justify-between text-xs text-slate-300/90">
                  <div>
                    <p className="uppercase tracking-[0.18em] text-slate-400">Balance</p>
                    <p className="mt-1 text-sm font-semibold text-slate-50">$245,320.00</p>
                  </div>
                  <div>
                    <p className="uppercase tracking-[0.18em] text-slate-400">Open PnL</p>
                    <p className="mt-1 text-sm font-semibold text-emerald-300">+$7,420.50</p>
                  </div>
                  <div>
                    <p className="uppercase tracking-[0.18em] text-slate-400">Risk</p>
                    <p className="mt-1 text-sm font-semibold text-amber-300">1.2%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust band — pastdan silliq tepaga */}
        <motion.div
          className="mt-16 sm:mt-20 text-center"
          initial={{ opacity: 0, y: 160 }}
          animate={mounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 160 }}
          transition={{ duration: 0.5, delay: 0.5, ease: [0.33, 1, 0.68, 1] }}
        >
          <div className="h-1 w-full max-w-2xl mx-auto bg-gradient-to-r from-transparent via-slate-500/60 to-transparent rounded-full" />
          <p className="mt-6 text-sm sm:text-base font-bold tracking-[0.2em] text-slate-400 uppercase">
            Trusted by traders worldwide
          </p>
          <ul className="mt-10 sm:mt-12 flex flex-nowrap justify-center items-stretch gap-14 sm:gap-20 max-w-6xl mx-auto">
            {TRUST_STATS.map((stat, i) => (
              <StatItem
                key={i}
                numeric={stat.numeric}
                suffix={stat.suffix}
                line1={stat.line1}
                line2={stat.line2}
                decimals={stat.decimals ?? 0}
                start={countUpStarted}
              />
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  )
}

function StatItem({
  numeric,
  suffix,
  line1,
  line2,
  decimals = 0,
  start,
}: {
  numeric: number
  suffix: string
  line1: string
  line2?: string
  decimals?: number
  start: boolean
}) {
  const value = useCountUp(numeric, 1400, start, decimals)
  const display = decimals > 0
    ? value.toFixed(1) + suffix
    : value + suffix
  return (
    <li className="inline-flex flex-col items-center text-center px-4 py-4 sm:px-5 sm:py-5 rounded-2xl bg-slate-900/40 border border-slate-700/70 backdrop-blur-xl shadow-[0_18px_45px_rgba(15,23,42,0.8)] group cursor-default min-w-[160px] sm:min-w-[190px]">
      <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-50 tabular-nums transition-transform duration-200 group-hover:scale-110 origin-center">
        {display}
      </div>
      <div className="mx-auto mt-2 h-1 w-14 sm:w-16 bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 rounded-full opacity-80" />
      <div className="mt-3 flex justify-center gap-1 text-yellow-400 text-2xl" aria-hidden>
        {"★".repeat(5)}
      </div>
      <div className="mt-2 text-base sm:text-lg text-slate-200">
        {line1}
        {line2 ? (
          <>
            <br className="hidden sm:block" /> {line2}
          </>
        ) : null}
      </div>
    </li>
  )
}
