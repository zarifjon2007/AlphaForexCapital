"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"

export default function TradingPotentialSection() {
  return (
    <section className="relative overflow-hidden py-20 pt-28 pb-20 bg-transparent border-t border-slate-800/60">
      {/* Orqa fon glowlar */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-10%] left-[15%] h-[40rem] w-[40rem] rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute bottom-[-20%] right-[-10%] h-[32rem] w-[32rem] rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-50 mb-2 leading-tight">
            Unlock Your
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-300 via-sky-300 to-blue-400 bg-clip-text text-transparent">
            Trading Potential
          </h3>
        </div>

        <Card className="p-[1px] text-center max-w-4xl mx-auto rounded-[30px] bg-gradient-to-br from-cyan-400/70 via-blue-500/40 to-emerald-400/70 shadow-[0_40px_120px_rgba(15,23,42,0.95)]">
          <div className="rounded-[28px] p-8 sm:p-10 md:p-12 border border-slate-700/60 bg-slate-950/70 backdrop-blur-3xl">
          <div className="mb-8 flex justify-center">
            <div className="sticker-float-y w-24 h-24 rounded-[22px] bg-gradient-to-br from-sky-400 via-blue-500 to-cyan-400 flex items-center justify-center shadow-[0_0_40px_rgba(56,189,248,0.95)]">
              <svg
                className="w-12 h-12 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>

          <h3 className="text-2xl sm:text-3xl md:text-[1.85rem] font-extrabold mb-5 tracking-tight">
            <span className="bg-gradient-to-r from-emerald-300 via-sky-300 to-cyan-400 bg-clip-text text-transparent">
              All challenges have a 90% profit split,
            </span>
            <br />
            <span className="text-slate-50 font-extrabold">
              increasing up to 100% after your first 3 payouts.
            </span>
          </h3>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 max-w-3xl mx-auto">
            Keep more of what you earn from day one. As you prove consistency, your profit split
            automatically scales up, rewarding you with a true long-term partnership instead of a one-time payout.
          </p>

          <Button
            size="lg"
            className="rounded-[999px] h-11 sm:h-12 px-7 sm:px-9 text-sm sm:text-base font-semibold bg-gradient-to-r from-sky-400 via-cyan-400 to-emerald-400 text-slate-950 shadow-[0_0_30px_rgba(56,189,248,0.9)] hover:shadow-[0_0_40px_rgba(56,189,248,1)] transition-transform duration-200 hover:scale-[1.04] active:scale-[0.97]"
            asChild
          >
            <Link href="#pricing">Get Started</Link>
          </Button>
          </div>
        </Card>
      </div>
    </section>
  )
}




