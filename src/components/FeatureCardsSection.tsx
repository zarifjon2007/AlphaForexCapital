"use client"

import { UserPlus, Key, Rocket, DollarSign, ArrowRight } from "lucide-react"

const steps = [
  {
    n: "01.",
    title: "Sign up for a challenge",
    desc: "Choose your evaluation size and complete checkout to activate your dashboard.",
    Icon: UserPlus,
  },
  {
    n: "02.",
    title: "Dashboard access",
    desc: "Log in instantly—no broker credentials required during evaluation.",
    Icon: Key,
  },
  {
    n: "03.",
    title: "Trade the evaluation",
    desc: "Follow the objectives and risk limits in our evaluation environment.",
    Icon: Rocket,
  },
  {
    n: "04.",
    title: "View performance reports",
    desc: "Track progress and payouts from clean, real-time reports.",
    Icon: DollarSign,
  },
]

export default function FeatureCardsSection() {
  return (
    <section className="relative overflow-hidden py-20 pt-28 pb-20 bg-transparent">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -left-24 -top-24 h-[34rem] w-[34rem] rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute right-[-20%] bottom-[-30%] h-[32rem] w-[32rem] rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="mb-10 md:mb-12 grid gap-6 md:grid-cols-12 items-start">
          <div className="md:col-span-6">
            <div className="flex items-center gap-2 text-sm text-slate-600 mb-3">
              <span className="inline-block h-2.5 w-2.5 rounded-full bg-blue-500 ring-2 ring-blue-500/30" />
              <span className="tracking-tight">Process of works</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
              <span className="bg-gradient-to-r from-slate-50 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
                How it works?
              </span>
            </h2>
          </div>

          <div className="md:col-span-6 flex md:justify-end">
            <div className="max-w-md md:text-right">
              <p className="text-slate-300 leading-relaxed">
                We hold exceptional expertise in each step of your journey—
                from signup to performance reporting.
              </p>
              <a
                href="/#pricing"
                className="get-started-link mt-4 inline-flex items-center gap-2 text-[#00b4ff] hover:text-[#7dd3fc] font-semibold link-hover rounded-lg py-1 -my-1"
              >
                Get Started <ArrowRight className="get-started-arrow h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="rounded-[28px] bg-white/5 backdrop-blur-xl border border-slate-800/80 shadow-[0_26px_80px_rgba(15,23,42,0.9)] overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-4">
            {steps.map(({ n, title, desc, Icon }, idx) => (
              <div
                key={n}
                className="relative p-8 sm:p-10 border-t border-slate-700/70 lg:border-t-0 lg:border-l border-slate-700/70 first:lg:border-l-0 hover:bg-white/5 hover:border-slate-500 transition-all duration-300"
              >
                {idx !== 0 && (
                  <div className="hidden lg:block absolute left-0 top-8 bottom-8 w-px bg-[#1e40af33]" />
                )}

                <div className="sticker-float-y mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/15 ring-1 ring-blue-400/60 shadow-[0_0_18px_rgba(59,130,246,0.6)] transition-all duration-300">
                  <Icon className="h-6 w-6 text-[#7dd3fc]" />
                </div>

                <div className="text-[#38bdf8] text-xl font-semibold mb-3">{n}</div>
                <h3 className="text-slate-50 text-2xl sm:text-[1.6rem] font-bold leading-snug">
                  {title}
                </h3>
                <p className="mt-4 text-slate-300 leading-relaxed">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
