"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"

export default function WhyChooseSection() {
  return (
    <section className="relative overflow-hidden pt-28 pb-14 bg-transparent border-y border-slate-800/60">
      <div className="absolute inset-0 -z-10 [mask-image:radial-gradient(70%_70%_at_20%_20%,#f8fafc_30%,transparent_70%)]">
        <div className="absolute left-[-10%] top-[-10%] h-[36rem] w-[36rem] rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">
              Why Choose
              <br />
              <span className="bg-gradient-to-r from-[#007ac3] to-[#0066a3] bg-clip-text text-transparent">
                Alpha Forex Capital
              </span>
            </h2>

            <div className="space-y-6 mb-10">
              <p className="text-lg text-slate-600 leading-loose">
                Maximize your earnings with our 1-Step challenges offering up to a{" "}
                <span className="font-semibold text-[#007ac3]">90% profit split</span> — one of the most competitive
                models in the industry. While many firms stop at 80%, we push further, ensuring you keep the majority of
                your profits with no unnecessary hurdles.
              </p>
              <p className="text-lg text-slate-600 leading-loose">
                <span className="font-bold text-[#007ac3]">Trade with confidence under elite conditions,</span> backed
                by a structure built to reward traders first. Elevate your trading journey with{" "}
                <span className="text-[#007ac3] font-medium">higher payouts</span> and{" "}
                <span className="text-[#007ac3] font-medium">stronger support</span>.
              </p>
            </div>

            <Button
              size="lg"
              className="rounded-[8px] h-12 px-8 text-base font-semibold btn-gradient text-white btn-lift shadow-[0_0_25px_rgba(56,189,248,0.8)]"
              asChild
            >
              <Link href="/privacy-policy">Find Out More</Link>
            </Button>
          </div>

          <div className="grid gap-6">
            <Card className="p-10 text-center rounded-3xl bg-white/5 border border-[#1e40af] backdrop-blur-xl shadow-[0_26px_80px_rgba(15,23,42,0.95)]">
              <div className="text-6xl md:text-7xl font-extrabold text-[#007ac3] mb-3 leading-none">125+</div>
              <div className="text-2xl text-slate-700 font-semibold">Countries</div>
              <div className="mx-auto mt-5 h-px w-24 bg-gradient-to-r from-transparent via-blue-500/60 to-transparent" />
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
