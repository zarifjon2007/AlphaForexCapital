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
          <h2 className="text-5xl md:text-6xl font-bold text-slate-50 mb-4 leading-tight">
            Unlock Your
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-300 via-sky-300 to-blue-400 bg-clip-text text-transparent">
            Trading Potential
          </h3>
        </div>

        <Card className="p-[1px] text-center max-w-4xl mx-auto rounded-[28px] bg-gradient-to-br from-cyan-500/40 via-sky-500/10 to-blue-600/40 shadow-[0_30px_90px_rgba(15,23,42,0.95)]">
          <div className="rounded-[26px] p-8 sm:p-10 md:p-12 border border-slate-700/70 bg-slate-900/60 backdrop-blur-2xl">
          <div className="mb-8 flex justify-center">
            <div className="sticker-float-y w-24 h-24 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center shadow-[0_0_35px_rgba(59,130,246,0.9)]">
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

          <h3 className="text-2xl sm:text-3xl md:text-[1.7rem] font-bold text-slate-50 mb-6 tracking-tight">
            From{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-sky-300 to-blue-400 bg-clip-text text-transparent">
              90% Profit Share
            </span>
          </h3>

          <p className="text-lg text-slate-300 leading-relaxed mb-8 max-w-3xl mx-auto">
            At Alpha Forex Capital, we value the skill and dedication of our traders.
            That’s why we offer a <span className="text-[#007ac3] font-semibold">90% profit share</span> for those in the funding stage.
            Withdraw your earnings every two weeks and enjoy rewards that match your performance.
          </p>

          <Button
            size="lg"
            className="rounded-[10px] h-11 sm:h-12 px-7 sm:px-8 text-sm sm:text-base font-semibold btn-gradient text-white btn-lift shadow-[0_0_25px_rgba(56,189,248,0.8)] transition-transform duration-200 hover:scale-[1.03] active:scale-[0.98]"
            asChild
          >
            <Link href="/funding">Get Funded</Link>
          </Button>
          </div>
        </Card>
      </div>
    </section>
  )
}




