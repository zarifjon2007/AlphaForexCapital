"use client"

import { useEffect, useState } from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Link from "next/link"
import AnimatedPageContent from "@/components/AnimatedPageContent"
import AnimatedSection from "@/components/AnimatedSection"
import { AnimatePresence, motion } from "framer-motion"

const steps = [
  { title: "Choose your account", desc: "From $25K to $400K — one step only." },
  { title: "Pass the evaluation", desc: "Hit your profit target. No minimum trading days." },
  { title: "Get funded", desc: "Weekly payouts, up to 100% profit split." },
]

const TESTIMONIALS = [
  {
    initials: "MT",
    name: "Marcus T.",
    label: "Funded trader",
    quote:
      "Alpha Forex Capital helped me scale from a small live account into a serious simulated funded size. The one-step model fits my style perfectly.",
  },
  {
    initials: "SK",
    name: "Sarah K.",
    label: "Swing trader",
    quote:
      "Clear rules, fast responses, and transparent risk. I can focus on execution knowing payouts are processed on time.",
  },
  {
    initials: "AM",
    name: "Alex M.",
    label: "Day trader",
    quote:
      "The dashboard and risk limits keep me disciplined. The profit split makes every good week feel meaningful.",
  },
  {
    initials: "DR",
    name: "Daniel R.",
    label: "Scalper",
    quote:
      "Execution is smooth and spreads are competitive. The one-phase evaluation means I am not stuck in months of testing.",
  },
  {
    initials: "ES",
    name: "Emily S.",
    label: "Position trader",
    quote:
      "I appreciate being able to hold over news and weekends. The rules actually support my longer-term approach.",
  },
]

export default function AboutPage() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length)
    }, 7000)
    return () => clearInterval(id)
  }, [])

  const visibleCount = 1
  const rotatingTestimonials = Array.from({ length: visibleCount }).map((_, offset) => {
    const index = (activeIndex + offset) % TESTIMONIALS.length
    return TESTIMONIALS[index]
  })

  return (
    <div className="min-h-screen bg-[#020617] text-slate-100">
      <div className="fixed top-0 left-0 right-0 z-50">
        <Header />
      </div>

      <section className="pt-44 pb-16 px-4 sm:px-6 relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute top-[-20%] left-[5%] h-[32rem] w-[32rem] rounded-full bg-blue-500/10 blur-3xl" />
          <div className="absolute bottom-[-20%] right-[-5%] h-[32rem] w-[32rem] rounded-full bg-cyan-500/10 blur-3xl" />
        </div>
        <AnimatedPageContent className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="text-slate-50">About </span>
            <span className="bg-gradient-to-r from-cyan-300 via-sky-300 to-blue-400 bg-clip-text text-transparent">
              Alpha Forex Capital
            </span>
          </h1>

          <div className="space-y-8 text-slate-300 leading-relaxed sm:leading-8">
            <p className="text-lg">
              Alpha Forex Capital is a simulated trading evaluation platform designed to help traders prove their skills
              in a risk-free environment. We offer one-step challenges with clear rules, weekly payouts, and a
              trader-first profit split of up to 100%.
            </p>
            <p className="text-lg">
              Our mission is to simplify prop trading: one phase, no minimum trading days, and transparent
              risk parameters. Trade{" "}
              <span className="font-semibold bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
                Forex, Indices, Metals, and Crypto
              </span>{" "}
              with leverage up to{" "}
              <span className="font-semibold bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
                1:500
              </span>{" "}
              on MetaTrader 5. We support weekend holding, news trading, swing trading, and EA (Expert Advisor) trading.
            </p>
            <p className="text-lg">
              Whether you are scaling from a $25K account or aiming for $400K, we provide a straightforward path
              to funded opportunities with instant payout options and a team that supports you every step of the way.
            </p>
          </div>

          <div className="mt-12 flex flex-wrap gap-4">
            <Link
              href="/funding"
              className="inline-flex items-center justify-center rounded-[8px] h-12 px-8 text-base font-semibold btn-gradient text-white btn-lift shadow-[0_0_25px_rgba(56,189,248,0.8)] transition-transform duration-200 hover:scale-[1.03] active:scale-[0.98]"
            >
              Get Funded
            </Link>
            <Link
              href="/faq"
              className="inline-flex items-center justify-center rounded-[8px] h-12 px-8 text-base font-semibold border border-slate-300/80 text-slate-100 hover:bg-white/5 transition-all duration-200 link-hover"
            >
              FAQ
            </Link>
          </div>
        </AnimatedPageContent>
      </section>

      <AnimatedSection>
        <section className="py-20 px-4 sm:px-6 bg-transparent border-t border-slate-800/60">
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-50 mb-3 leading-tight">
                Trusted and talked about
                <br className="hidden sm:block" />
                <span className="block mt-1 bg-gradient-to-r from-cyan-300 via-sky-300 to-blue-400 bg-clip-text text-transparent">
                  by traders everywhere
                </span>
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Funded traders at Alpha Forex Capital share how the one-phase evaluation,
                fast payouts, and support team helped them scale their trading.
              </p>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                className="max-w-xl mx-auto"
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
              >
                {rotatingTestimonials.map((item, idx) => (
                  <div
                    key={`${item.name}-${idx}`}
                    className="h-full rounded-3xl border border-slate-700/80 bg-white/5 backdrop-blur-xl shadow-[0_26px_80px_rgba(15,23,42,0.95)] px-6 py-7 flex flex-col"
                  >
                    <div className="flex items-center gap-4 mb-5">
                      <div className="h-11 w-11 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-sm font-semibold text-slate-900 shadow-[0_0_18px_rgba(56,189,248,0.9)]">
                        {item.initials}
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm font-semibold text-slate-50">{item.name}</span>
                        <span className="text-xs text-slate-400">{item.label}</span>
                      </div>
                    </div>

                    <div className="mb-3 text-amber-400 text-sm" aria-hidden>
                      {"★".repeat(5)}
                    </div>

                    <p className="text-sm sm:text-[15px] text-slate-200 leading-relaxed flex-1">
                      {item.quote}
                    </p>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
      <section id="how-it-works" className="py-16 sm:py-20 px-4 sm:px-6 border-t border-slate-800/60 bg-transparent">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-slate-900 mb-4">
            How it <span className="text-[#007ac3]">works</span>
          </h2>
          <p className="text-center text-slate-600 max-w-2xl mx-auto mb-12">
            One-step evaluation. Clear rules. Weekly payouts.
          </p>

          <div className="relative">
            <div className="hidden sm:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500/15 via-blue-500/30 to-blue-500/15 -translate-y-1/2" />
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6">
              {steps.map((step, i) => (
                <div key={i} className="relative flex flex-col sm:items-center text-center">
                  <div className="hidden sm:flex w-4 h-4 rounded-full bg-blue-500 ring-4 ring-blue-500/30 z-10 shrink-0 step-dot-pulse" />
                  <div className="sm:mt-4 text-left sm:text-center">
                    <span className="inline-block text-xs font-semibold text-[#007ac3] uppercase tracking-wider mb-2">
                      Step {i + 1}
                    </span>
                    <h3 className="text-lg font-semibold text-slate-900">{step.title}</h3>
                    <p className="mt-1 text-sm text-slate-600">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/funding"
              className="inline-flex items-center justify-center rounded-[8px] h-12 px-8 text-base font-semibold btn-gradient text-white btn-lift shadow-[0_0_25px_rgba(56,189,248,0.8)] transition-transform duration-200 hover:scale-[1.03] active:scale-[0.98]"
            >
              Get Funded
            </Link>
          </div>
        </div>
      </section>
      </AnimatedSection>

      <Footer />
    </div>
  )
}
