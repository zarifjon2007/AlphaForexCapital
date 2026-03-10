"use client"

type Review = {
  name: string
  flag: string
  text: string
}

const reviews: Review[] = [
  {
    name: "Gary Foote",
    flag: "🇨🇦",
    text:
      "By far one of the best prop firms i've used, i couldn't be happier. I have now completed 3 evaluations and just received my first payout! I couldn't recommend this company enough and i'm glad i made the decision to sign up with them!",
  },
  {
    name: "Ophelia Osbourne",
    flag: "🇬🇧",
    text:
      "Couldn't be happier with the Service, I get all my trade executed on time. 10/10 Service and great prop firm Support",
  },
  {
    name: "Jack Lambert",
    flag: "🇺🇸",
    text:
      "Passed my Alpha Forex Capital challenge using Funded Flow Trading’s EA, I just set it up and spend 2 minutes a day checking over my account. The EA handled everything, and when payout time came, it was smooth and instant. This combo is unmatched in trading. Took home $6,700 and already scaling to $150k.",
  },
]

function Stars() {
  return (
    <div className="flex gap-1 mb-4">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          className="w-5 h-5 fill-current text-[#007ac3]"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 0 0-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 0 0 .951-.69l1.07-3.292Z" />
        </svg>
      ))}
    </div>
  )
}

export default function OnboardingSection() {
  return (
    <section className="relative py-20 pt-28 pb-20 bg-white border-t border-slate-200">
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-4 leading-tight">
            What Traders Might
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#007ac3] to-[#0066a3] bg-clip-text text-transparent">
            Say About Us
          </h3>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {reviews.map((r, idx) => (
            <div
              key={idx}
              className="bg-slate-50 rounded-2xl border border-slate-200 shadow-sm p-6 card-hover"
            >
              <Stars />
              <p className="text-slate-700 leading-relaxed">{r.text}</p>
              <div className="mt-6 font-medium text-slate-900">
                {r.name} <span className="ml-1">{r.flag}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
