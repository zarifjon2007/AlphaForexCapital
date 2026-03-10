"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function BatchSection() {
  return (
    <section className="relative overflow-hidden py-20 pt-28 pb-20 bg-white border-t border-slate-200">
      <div className="absolute inset-0 bg-white" />

      <div className="absolute inset-0 -z-10 [mask-image:radial-gradient(70%_70%_at_50%_30%,#fff_30%,transparent_70%)]">
        <div className="absolute top-[-10%] left-[10%] h-[40rem] w-[40rem] rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      <div className="pointer-events-none absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white to-transparent" />
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />

      {/* Content */}
      <div className="relative max-w-5xl mx-auto px-6 min-h-[60vh] flex flex-col items-center justify-center text-center">
        {/* Heading */}
        <h2 className="text-5xl md:text-6xl font-bold text-slate-900 leading-tight">
          Our New{" "}
          <span className="bg-gradient-to-r from-[#007ac3] to-[#0066a3] bg-clip-text text-transparent">
            Batch
          </span>{" "}
          <span className="bg-gradient-to-r from-[#007ac3] to-[#0066a3] bg-clip-text text-transparent">
            System
          </span>
        </h2>

        <p className="mt-8 text-lg text-slate-600 leading-relaxed max-w-3xl">
          To keep growth healthy and transparent, we activate a new cohort of funded accounts every month.
          With each release, we share payout information and batch metrics, so you can see exactly how we’re
          progressing and paying.
        </p>

        {/* CTA */}
        <div className="mt-10">
          <Button
            size="lg"
            className="px-8 py-5 text-base font-semibold btn-gradient text-white btn-lift rounded-xl"
            asChild
          >
            <Link href="/Batches">Batches</Link>
          </Button>
        </div>

        {/* Stats row */}
        <div className="mt-16 w-full">
          <div className="flex flex-col md:flex-row items-center justify-center text-center text-slate-900">
            <Metric
              number={
                <>
                  3<span className="ml-1">Y</span>
                </>
              }
              label="Years in business"
            />

            {/* Divider */}
            <div className="hidden md:block h-12 w-px bg-slate-300 mx-10" />

            <Metric
              number={
                <>
                  42<span className="ml-1 text-[#007ac3]">+</span>
                </>
              }
              label="Team Members"
            />

            {/* Divider */}
            <div className="hidden md:block h-12 w-px bg-slate-300 mx-10" />

            <Metric
              number={
                <>
                  100<span className="ml-1 text-[#007ac3]">%</span>
                </>
              }
              label="Payout Requests Paid Out"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function Metric({ number, label }: { number: React.ReactNode; label: string }) {
  return (
    <div className="py-6 px-4">
      <div className="text-4xl md:text-5xl font-semibold tracking-tight">{number}</div>
      <div className="mt-2 text-base text-slate-600">{label}</div>
    </div>
  )
}
