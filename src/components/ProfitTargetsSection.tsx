"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"

export default function ProfitTargetsSection() {
  return (
    <section className="relative overflow-hidden py-20 pt-28 pb-20 bg-transparent border-t border-slate-800/60">
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-[-10%] right-[10%] h-[40rem] w-[40rem] rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute top-[-20%] left-[-10%] h-[32rem] w-[32rem] rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <Card className="p-[1px] text-center max-w-4xl mx-auto rounded-[28px] bg-gradient-to-br from-cyan-500/40 via-sky-500/10 to-blue-600/40 shadow-[0_30px_90px_rgba(15,23,42,0.95)]">
          <div className="rounded-[26px] p-8 sm:p-10 md:p-12 border border-slate-700/70 bg-slate-900/60 backdrop-blur-2xl">
          {/* Badges */}
          <div className="mb-8 flex justify-center gap-4">
            {/* Left badge */}
            <div className="bg-white rounded-2xl px-6 py-4 shadow-lg transform rotate-2">
              <div className="flex items-center gap-3">
                <div className="sticker-float-y w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center shadow-[0_0_18px_rgba(59,130,246,0.7)]">
                  <span className="text-white text-sm font-bold">OS</span>
                </div>
                <div>
                  <div className="text-[#007ac3] text-sm font-medium">One Step</div>
                  <div className="text-2xl font-bold text-slate-50">10%</div>
                </div>
              </div>
            </div>

            {/* Right badge */}
            <div className="bg-white rounded-2xl px-6 py-4 shadow-lg transform -rotate-2">
              <div className="flex items-center gap-3">
                <div className="sticker-float-y w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center shadow-[0_0_18px_rgba(59,130,246,0.7)]">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <div>
                  <div className="text-[#007ac3] text-sm font-medium">Funded!</div>
                </div>
              </div>
            </div>
          </div>

          {/* Heading */}
          <h3 className="text-2xl sm:text-3xl md:text-[1.7rem] font-bold text-slate-50 mb-6 text-center leading-tight tracking-tight max-w-xs sm:max-w-none mx-auto">
            <span className="text-slate-50">Achievable </span>
            <span className="bg-gradient-to-r from-cyan-300 via-sky-300 to-blue-400 bg-clip-text text-transparent">
              Profit Targets
            </span>
          </h3>

          {/* Copy */}
          <p className="text-lg text-slate-300 leading-relaxed mb-8 max-w-3xl mx-auto">
            Our profit targets are structured to be both attainable and highly competitive within the industry.
            Depending on the challenge selected, targets are set at{" "}
            <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent font-semibold">
              10%
            </span>
            , offering traders realistic and balanced benchmarks.
          </p>

          {/* CTA */}
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

