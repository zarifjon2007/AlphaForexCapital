"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function RealTradersSection() {
  return (
    <section className="relative overflow-hidden py-20 pt-28 pb-20 bg-transparent border-t border-slate-800/60">
      {/* Katta moviy glow – Hero uslubida */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-[-8%] top-[-12%] h-[40rem] w-[40rem] rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute right-[-10%] bottom-[-20%] h-[36rem] w-[36rem] rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-5xl md:text-6xl font-bold text-slate-50 mb-8 leading-tight">
              Real traders,{" "}
              <span className="bg-gradient-to-r from-cyan-300 via-sky-300 to-blue-400 bg-clip-text text-transparent">
                real results.
              </span>
            </h2>

            <p className="text-lg text-slate-300 mb-12 leading-relaxed">
              See how our funded traders are cashing in on their success with seamless{" "}
              <span className="font-semibold text-[#007ac3]">payouts</span> and life-changing opportunities. Join our{" "}
              <span className="font-semibold text-[#007ac3]">Discord</span> to verify payouts and learn from the community.
            </p>

            <Button
              size="lg"
              className="rounded-[8px] h-12 px-8 text-base font-semibold btn-gradient text-white btn-lift shadow-[0_0_25px_rgba(56,189,248,0.8)]"
              asChild
            >
              <Link href="/funding">Get Funded</Link>
            </Button>
          </div>

          <div className="relative flex justify-center">
            <div className="group relative max-w-lg w-full rounded-3xl border border-[#1e40af] bg-white/5 backdrop-blur-xl p-6 sm:p-7 shadow-[0_30px_100px_rgba(15,23,42,0.95)]">
              <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-blue-400/0 group-hover:ring-blue-400/60 transition" />
              <div className="relative z-10 flex flex-col gap-4">
                <div className="inline-flex items-center gap-2 rounded-full bg-[#007ac3]/15 text-[#007ac3] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] w-max mx-auto border border-[#1e40af]/60">
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#007ac3] text-white text-[10px]">
                    ℹ
                  </span>
                  Registered in Geneva
                </div>
                <p className="text-center text-slate-200 text-sm sm:text-base leading-relaxed">
                  Alpha Forex Capital operates a simulated evaluation program and is{" "}
                  <span className="font-semibold text-slate-50">registered in Geneva</span>. We focus on transparent
                  conditions, fast evaluations, and reliable trader support.
                </p>
                <p className="text-center text-xs sm:text-sm text-slate-400">
                  This registration relates to our evaluation and education services only and does not represent a
                  brokerage or investment firm license.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider accent */}
        <div className="mt-20 h-px w-full bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
      </div>
    </section>
  )
}

