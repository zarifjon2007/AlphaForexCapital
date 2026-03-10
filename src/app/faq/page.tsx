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
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <div className="fixed top-0 left-0 right-0 z-50">
        <Header />
      </div>

      <div className="pt-40 pb-20 px-4 sm:px-6">
        <AnimatedPageContent className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 leading-tight text-slate-900">
              Frequently Asked{" "}
              <span className="bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
                Questions
              </span>
            </h1>
            <p className="text-slate-600 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
              Find clear answers about our evaluation model, profit split, rules, and payouts — all in one clean view.
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
                  <div className="flex items-center justify-between w-full px-5 py-4 sm:px-6 sm:py-5 rounded-2xl border border-slate-200 bg-white hover:bg-slate-50 shadow-[0_10px_25px_rgba(255,255,255,0.2)] hover:shadow-[0_16px_40px_rgba(255,255,255,0.32)] text-left transition-all duration-300 ease-out">
                    <h3 className="text-base sm:text-lg font-semibold text-slate-900">
                      {faq.question}
                    </h3>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-500 transition-transform duration-200 ${
                        openItems.includes(index) ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                </CollapsibleTrigger>
                <CollapsibleContent className="data-[state=closed]:animate-none data-[state=open]:animate-none">
                  <div className="mt-2 px-5 py-4 sm:px-6 sm:py-5 rounded-2xl border border-slate-200 bg-slate-50 shadow-[0_8px_20px_rgba(255,255,255,0.16)] hover:shadow-[0_14px_32px_rgba(255,255,255,0.26)] transition-all duration-300 ease-out">
                    <p className="text-sm sm:text-base text-slate-800 leading-relaxed">
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
