"use client"

import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Link from "next/link"
import { motion } from "framer-motion"

const steps = [
  { title: "Choose your account", desc: "From $25K to $400K — one step only." },
  { title: "Pass the evaluation", desc: "Hit your profit target. No minimum trading days." },
  { title: "Get funded", desc: "Weekly payouts, up to 100% profit split." },
]

const fadeUp = {
  hidden: { opacity: 0, y: 240 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      delay: i * 0.12,
      ease: [0.33, 1, 0.68, 1],
    },
  }),
}

export default function HighlightsPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <div className="fixed top-0 left-0 right-0 z-50">
        <Header />
      </div>

      <section className="pt-32 pb-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-slate-900"
            initial={{ opacity: 0, y: 240 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65, ease: [0.33, 1, 0.68, 1] }}
          >
            How it <span className="text-[#007ac3]">works</span>
          </motion.h1>
          <motion.p
            className="text-center text-slate-600 max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, delay: 0.08, ease: [0.33, 1, 0.68, 1] }}
          >
            One-step evaluation. Clear rules. Weekly payouts.
          </motion.p>

          <div className="relative">
            <div className="hidden sm:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400/50 via-blue-500 to-blue-400/50 -translate-y-1/2" />
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6">
              {steps.map((step, i) => (
                <motion.div
                  key={i}
                  className="relative flex flex-col sm:items-center text-center"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  custom={i}
                  variants={fadeUp}
                >
                  <div className="hidden sm:flex w-4 h-4 rounded-full bg-blue-500 ring-4 ring-blue-500/30 z-10 shrink-0" />
                  <div className="sm:mt-4 text-left sm:text-center">
                    <span className="inline-block text-xs font-semibold text-[#007ac3] uppercase tracking-wider mb-2">
                      Step {i + 1}
                    </span>
                    <h2 className="text-lg font-semibold text-slate-900">{step.title}</h2>
                    <p className="mt-1 text-sm text-slate-600">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, delay: 0.12, ease: [0.33, 1, 0.68, 1] }}
          >
            <Link
              href="/funding"
              className="inline-flex items-center justify-center rounded-[8px] h-12 px-8 text-base font-semibold btn-gradient text-white btn-lift shadow-[0_0_25px_rgba(56,189,248,0.8)] transition-transform duration-200 hover:scale-[1.03] active:scale-[0.98]"
            >
              Get Funded
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
