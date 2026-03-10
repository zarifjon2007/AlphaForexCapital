"use client"

import Link from "next/link"
import { motion } from "framer-motion"

export default function PromoBanner() {
  return (
    <section className="relative z-40 pt-10 sm:pt-12 pb-12 sm:pb-16 px-3 sm:px-4 md:px-6 lg:px-8">
      <div className="w-full max-w-5xl mx-auto">
        <motion.div
          className="relative overflow-hidden rounded-3xl border border-slate-700/70 bg-gradient-to-br from-[#020b1c] via-[#041436] to-[#020617] shadow-[0_30px_100px_rgba(0,0,0,0.85)]"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
        >
          {/* subtle inner glow */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-sky-500/10" />

          <div className="relative px-5 sm:px-8 md:px-10 py-6 sm:py-8 md:py-9 flex flex-col gap-6">
            {/* Top badge */}
            <motion.div
              className="inline-flex items-center self-center rounded-full border border-slate-600/70 bg-slate-900/60 px-4 py-1.5 text-[11px] sm:text-xs text-slate-200/90 tracking-[0.25em] uppercase"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, ease: [0.33, 1, 0.68, 1] }}
            >
              🎉 2 YEAR ANNIVERSARY SPECIAL 🎂
            </motion.div>

            {/* Heading */}
            <motion.h2
              className="text-center text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-50"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.05, ease: [0.33, 1, 0.68, 1] }}
            >
              ALPHA FOREX CAPITAL{" "}
              <span className="bg-gradient-to-r from-cyan-300 via-sky-300 to-blue-400 bg-clip-text text-transparent">
                2 YEAR ANNIVERSARY
              </span>
            </motion.h2>

            {/* Two cards */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 items-stretch"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: 0.12, ease: [0.33, 1, 0.68, 1] }}
            >
              {/* Left: 1 Challenge - muted */}
              <div className="relative rounded-2xl border border-slate-700/70 bg-slate-900/60 px-5 py-5 sm:px-6 sm:py-6 flex flex-col justify-between opacity-60">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-slate-800/40 via-transparent to-slate-900/80 pointer-events-none" />
                <div className="relative">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400 mb-2">Old Offer</p>
                  <p className="text-sm text-slate-300 mb-1">Buy</p>
                  <p className="text-3xl sm:text-4xl font-extrabold text-slate-400/80 line-through">
                    1 Challenge
                  </p>
                  <p className="mt-3 text-xs sm:text-sm text-slate-400">
                    Standard pricing, single evaluation account with no anniversary bonus.
                  </p>
                </div>
              </div>

              {/* Right: 2 Challenges - bright glassmorphism */}
              <div className="relative rounded-2xl border border-cyan-400/70 bg-slate-900/20 backdrop-blur-2xl shadow-[0_32px_90px_rgba(34,211,238,0.7)] px-5 py-5 sm:px-6 sm:py-6 flex flex-col justify-between overflow-hidden">
                <div className="pointer-events-none absolute -top-16 -right-10 h-44 w-44 rounded-full bg-cyan-400/30 blur-3xl" />
                <div className="pointer-events-none absolute -bottom-20 -left-8 h-44 w-44 rounded-full bg-sky-500/25 blur-3xl" />

                <div className="relative flex items-center justify-between gap-3 mb-3">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200 mb-1">
                      Anniversary BOGO
                    </p>
                    <p className="text-sm text-slate-100/90">With BOGO you now get</p>
                  </div>
                  <span className="sticker-float-y inline-flex items-center rounded-full bg-cyan-500/15 border border-cyan-300/60 px-3 py-1 text-[11px] font-semibold text-cyan-100 uppercase tracking-[0.18em]">
                    Limited
                  </span>
                </div>

                <div className="relative text-left">
                  <p className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
                    <span className="bg-gradient-to-r from-cyan-300 via-sky-300 to-emerald-300 bg-clip-text text-transparent">
                      2 Challenges
                    </span>
                  </p>
                  <p className="mt-2 text-sm text-slate-100/90">
                    Same evaluation fee, double the funded potential. Perfect for running parallel strategies.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* CTA badge + button */}
            <motion.div
              className="mt-4 text-center"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: 0.25, ease: [0.33, 1, 0.68, 1] }}
            >
              <div className="inline-flex items-center justify-center rounded-full border border-cyan-400/70 bg-cyan-500/15 px-3 py-1 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.18em] text-cyan-100 mb-3">
                LIMITED TIME
              </div>
              <motion.a
                href="https://piptriontraders.com/login/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 text-slate-950 font-semibold text-sm sm:text-base md:text-lg py-3.5 px-10 sm:px-14 uppercase tracking-[0.22em] shadow-[0_0_35px_rgba(56,189,248,0.85)]"
                animate={{ scale: [1, 1.04, 1] }}
                transition={{ duration: 1.9, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                whileHover={{ scale: 1.07 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="text-lg">🎁</span>
                <span>BUY ONE GET ONE FREE</span>
              </motion.a>
              <p className="mt-3 text-[11px] sm:text-xs text-slate-300/90">
                Celebrate 2 years of Alpha Forex Capital with our most generous evaluation offer yet.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
