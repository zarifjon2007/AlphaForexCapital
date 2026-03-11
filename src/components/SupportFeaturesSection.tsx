"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card"
import Link from "next/link"

const supportFeatures = [
  {
    icon: "⚖️",
    title: "Transparent Evaluation",
    description:
      "Experience a transparent evaluation process with clear criteria and feedback designed to help you progress toward funded trading.",
  },
  {
    icon: "🎯",
    title: "Dedicated Account Manager",
    description:
      "Benefit from a dedicated support team available to assist you every step of the way, ensuring your questions are answered quickly and clearly.",
  },
  {
    icon: "⚠️",
    title: "Risk Management Focus",
    description:
      "Embrace a strong focus on risk management strategies to protect your capital and enhance long-term performance.",
  },
]

export default function SupportFeaturesSection() {
  return (
    <section className="relative overflow-hidden py-20 pt-28 pb-20 bg-transparent">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-10%] right-[15%] h-[38rem] w-[38rem] rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute bottom-[-25%] left-[-10%] h-[34rem] w-[34rem] rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-slate-50">
            24/7{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-sky-300 to-blue-400 bg-clip-text text-transparent">
              Live Support
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed sm:leading-8">
            In-house Support: We have a dedicated in-house support team ready to assist you. You will find the support
            options directly within your user dashboard.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {supportFeatures.map((feature, index) => (
            <Card
              key={index}
              className="group border border-slate-600/60 bg-white/5 backdrop-blur-xl shadow-[0_24px_70px_rgba(15,23,42,0.9)] rounded-2xl transition-all duration-300 hover:border-blue-500 hover:shadow-[0_30px_90px_rgba(59,130,246,0.75)]"
            >
              <CardContent className="p-8 text-center">
                <div className="sticker-float-y text-4xl mb-6">{feature.icon}</div>
                <CardTitle className="text-xl mb-4 font-semibold text-slate-50 group-hover:text-cyan-300 transition-colors">
                  {feature.title}
                </CardTitle>
                <CardDescription className="text-base leading-relaxed text-slate-300">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
