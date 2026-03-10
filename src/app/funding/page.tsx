"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { motion } from "framer-motion"
import FundingOfferSection from "@/components/FundingOfferSection"

type Plan = {
  amount: string
  price: string
  features: string[]
  link: string
}

const plans: Plan[] = [
  { amount: "$25K", price: "299", features: [], link: "https://pay.boomfi.xyz/38JNcPeBgSmUsB7LZ7M1iMFNWR5" },
  { amount: "$50K", price: "349", features: [], link: "https://pay.boomfi.xyz/30sIUuV8vd5Hg2loW5Jmmpm00Vv" },
  { amount: "$100K", price: "549", features: [], link: "https://pay.boomfi.xyz/30sIksp8Yy44Zofy7RDISvZgtQb" },
  { amount: "$200K", price: "1049", features: [], link: "https://pay.boomfi.xyz/30sIvT6D7fOpVEmb3GGDKYYtesb" },
  { amount: "$300K", price: "1499", features: [], link: "https://pay.boomfi.xyz/30sIxqNXB4rUeIzI5QnChRP7hAz" },
  { amount: "$400K", price: "1999", features: [], link: "https://pay.boomfi.xyz/30sIzxJuUQTVX3nMSrPHqvYMtL6" },
]

const rows = [
  { k: "Trading Period", s1: "Unlimited", f: "Unlimited" },
  { k: "Profit Target", s1: "10%", f: "—" },
  { k: "Maximum Daily Loss", s1: "5%", f: "5%" },
  { k: "Maximum Loss", s1: "10%", f: "10%" },
  { k: "Account Leverage", s1: "1:100 Max", f: "1:100 Max" },
  { k: "Rewards", s1: "—", f: "Every 7 Days" },
  { k: "Profit Split", s1: "—", f: "Up To 100%" },
]

export default function FundingPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <div className="fixed top-0 left-0 right-0 z-50">
        <Header />
      </div>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 [mask-image:radial-gradient(80%_80%_at_50%_15%,#fff_30%,transparent_70%)]">
          <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 h-[40rem] w-[60rem] rounded-full bg-blue-500/10 blur-3xl" />
        </div>

        <motion.div
          className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-36 pb-10 text-center"
          initial={{ opacity: 0, y: 240 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.65, ease: [0.33, 1, 0.68, 1] }}
        >
          <div className="inline-flex items-center justify-center rounded-full border border-slate-300 px-4 py-1 text-xs sm:text-sm text-slate-600">
            Trade Forex, Indices, Metals &amp; Crypto
          </div>

          <h1 className="mt-6 text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight text-slate-900">
            Get <span className="text-[#007ac3]">Funded</span> Today
          </h1>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {plans.map((p) => (
              <a
                key={p.amount}
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-slate-300 px-3 sm:px-5 py-2 text-xs sm:text-sm md:text-base text-slate-700 hover:text-slate-900 hover:border-[#007ac3] hover:bg-[#007ac3]/10 transition-all duration-200 link-hover"
              >
                {p.amount.replace("$", "")} | {p.price} USD
              </a>
            ))}
          </div>
        </motion.div>

        {/* Yangi model / account-size / anniversary bo'limi */}
        <FundingOfferSection />

        <motion.div
          className="relative max-w-6xl mx-auto px-0 sm:px-6 pb-16"
          initial={{ opacity: 0, y: 240 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{ duration: 0.65, delay: 0.1, ease: [0.33, 1, 0.68, 1] }}
        >
          <div className="overflow-x-auto">
            <div className="min-w-[520px] sm:min-w-[650px] mx-4 sm:mx-0 rounded-[28px] bg-white text-slate-900 shadow-xl border border-slate-200 overflow-hidden">
              <div className="grid grid-cols-[0.9fr_1fr_1fr] items-center px-4 sm:px-10 py-4 sm:py-6 border-b border-slate-200">
                <div />
                <div className="text-lg sm:text-2xl md:text-3xl font-semibold text-center">Step 1</div>
                <div className="text-lg sm:text-2xl md:text-3xl font-semibold text-center">Funded</div>
              </div>
              <div className="divide-y divide-slate-200 text-xs sm:text-sm md:text-base">
                {rows.map((r) => (
                  <div key={r.k} className="grid grid-cols-[0.9fr_1fr_1fr] px-4 sm:px-10 py-4 sm:py-5">
                    <div className="font-medium text-slate-800">{r.k}</div>
                    <div className="text-center text-slate-600">{r.s1}</div>
                    <div className="text-center text-slate-600">{r.f}</div>
                  </div>
                ))}
              </div>
              <div className="h-2 w-full bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
            </div>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  )
}
