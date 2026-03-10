"use client"

import { useState } from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { ChevronDown } from "lucide-react"
import AnimatedPageContent from "@/components/AnimatedPageContent"

const faqs = [
  {
    question: "How to get started?",
    answer: "Easy! Simply click here and press \"Start\" on the plan you want to go with. Remember, the bigger your plan, the more value you get! You will then be brought to an Account Creation page, where you can create your account, pay, and receive your code to get full access and start trading!"
  },
  {
    question: "What is Alpha Forex Capital?",
    answer:
      "Alpha Forex Capital is a simulated trading evaluation platform designed to assess and develop traders through realistic trading challenges. We provide a virtual environment where traders can prove their skills and potentially qualify for simulated funded accounts based on performance."
  },
  {
    question: "How does the evaluation process work?",
    answer: "You start by purchasing a trading challenge. You must meet specific profit targets without breaching rules like maximum drawdown or daily loss limits. If successful, you may be offered a simulated funded account to continue trading under stricter risk controls."
  },
  {
    question: "How much leverage is offered?",
    answer: "We offer up to 1:100 leverage on all simulated accounts. Leverage may vary depending on account size or asset class."
  },
  {
    question: "Is there an age requirement to join?",
    answer: "Yes. You must be at least 18 years old or the age of majority in your country to participate."
  },
  {
    question: "How does the profit target work?",
    answer: "Each challenge has a set profit target you must hit within the evaluation period (e.g., 10%). Hitting this target without violating drawdown rules qualifies you for our simulated funded stage."
  },
  {
    question: "Are there restrictions on trading style?",
    answer: "We allow most trading styles including scalping, swing trading, and news trading. However, trade copying outside of your accounts, latency arbitrage, and tick manipulation are strictly prohibited."
  },
  {
    question: "How is the drawdown calculated?",
    answer: "We use two drawdown rules: Daily drawdown: Maximum loss in a 24-hour period (e.g., 5%). Maximum drawdown: Total allowed loss from the highest equity peak (e.g., 10%). Violating either results in challenge failure."
  }
]

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index],
    )
  }

  return (
    <div className="min-h-screen bg-[#020617] text-slate-100">
      <div className="fixed top-0 left-0 right-0 z-50">
        <Header />
      </div>

      <div className="pt-40 pb-20 px-4 sm:px-6 relative overflow-hidden">
        {/* Orqa fon glowlar */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute top-[-20%] left-[5%] h-[32rem] w-[32rem] rounded-full bg-blue-500/10 blur-3xl" />
          <div className="absolute bottom-[-20%] right-[-5%] h-[32rem] w-[32rem] rounded-full bg-cyan-500/10 blur-3xl" />
        </div>

        <AnimatedPageContent className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight">
              <span className="text-slate-50">Frequently Asked </span>
              <span className="bg-gradient-to-r from-cyan-300 via-sky-300 to-blue-400 bg-clip-text text-transparent">
                Questions
              </span>
            </h1>
            <p className="text-slate-300 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
              Find quick answers about our one-phase evaluation, profit split, rules, and payouts — all in one place.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Collapsible
                key={index}
                open={openItems.includes(index)}
                onOpenChange={() => toggleItem(index)}
              >
                <CollapsibleTrigger className="w-full">
                  <div className="flex items-center justify-between w-full px-5 py-4 sm:px-6 sm:py-5 rounded-2xl border border-slate-700/80 bg-white/5 hover:bg-white/10 backdrop-blur-xl shadow-[0_20px_60px_rgba(15,23,42,0.9)] text-left transition-colors duration-200">
                    <h3 className="text-base sm:text-lg font-semibold text-slate-50">
                      {faq.question}
                    </h3>
                    <ChevronDown
                      className={`w-5 h-5 text-[#00b4ff] transition-transform duration-200 ${
                        openItems.includes(index) ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <div className="mt-2 px-5 py-4 sm:px-6 sm:py-5 rounded-2xl border border-slate-700/80 bg-slate-900/60 backdrop-blur-xl">
                    <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            ))}
          </div>
        </AnimatedPageContent>
      </div>

      <Footer />
    </div>
  )
}
