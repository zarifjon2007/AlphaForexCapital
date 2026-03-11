"use client";

const FEATURES = [
  { id: "1", title: "Payouts On-Demand", desc: "Cash out your profits anytime, even multiple times a day.", href: "/#pricing" },
  { id: "2", title: "Lightning-Fast Funding", desc: "Pass the challenge in just 1 trade. No time limits, no restrictions.", href: "/#pricing" },
  { id: "3", title: "Trader-Friendly Rules", desc: "No consistency rules, no profit caps, no limits—trade your way with full freedom.", href: "/#pricing" },
  { id: "4", title: "Elite Trading Conditions", desc: "Tier-1 exchange liquidity, ultra-tight spreads, and deep order books for a pro-level edge.", href: "/#pricing" },
];

export default function TransparencySection() {
  return (
    <section className="relative overflow-hidden py-12 sm:py-16 md:py-20 pt-28 pb-12 sm:pb-16 md:pb-20 bg-transparent">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-[-10%] top-[-12%] h-[38rem] w-[38rem] rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute right-[-15%] bottom-[-20%] h-[32rem] w-[32rem] rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12">
          <div className="lg:col-span-5">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-slate-50 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
                Transparency
              </span>
            </h2>
            <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed sm:leading-8 max-w-prose">
              At Alpha Forex Capital, transparency is at the core of everything we do.
              You'll always know the rules, fees, and evaluation criteria before you start;
              simulated accounts mirror real-market pricing; evaluations follow published
              profit and risk parameters; and reviews or compliance checks run on a clear
              batch schedule displayed in your portal. Payouts are processed promptly, your
              strategy and intellectual property remain yours, and your personal data is
              protected. From execution policies to support response times, we ensure
              clarity at every step so you can trade with confidence.
            </p>
            <div className="mt-6 h-px w-24 bg-gradient-to-r from-blue-500/80 to-blue-300/70" />
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-9">
              {FEATURES.map((f) => (
                <article
                  key={f.id}
                  className="relative rounded-3xl border border-slate-600/60 bg-white/5 backdrop-blur-xl p-5 sm:p-6 md:p-7 shadow-[0_24px_70px_rgba(15,23,42,0.9)] transition-all duration-300 hover:border-blue-500 hover:shadow-[0_30px_90px_rgba(59,130,246,0.75)]"
                >
                  <div className="relative flex gap-4 sm:gap-5">
                    <div className="shrink-0">
                      <div className="sticker-float-y relative h-12 w-12 sm:h-14 sm:w-14 rounded-2xl bg-blue-500/20 ring-1 ring-blue-400/70 shadow-[0_0_22px_rgba(59,130,246,0.9)] grid place-items-center">
                        <span className="text-xl sm:text-2xl font-semibold text-slate-50">{f.id}</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg sm:text-xl font-semibold text-slate-50 tracking-tight">{f.title}</h3>
                      <p className="mt-2 text-slate-300 text-sm sm:text-base leading-relaxed">{f.desc}</p>
                      <div className="mt-4 sm:mt-5">
                        <a
                          href={f.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="transparency-link inline-flex items-center text-[#00b4ff] hover:text-[#7dd3fc] font-medium link-hover rounded-lg py-1 -my-1"
                        >
                          Get Started
                          <span className="transparency-arrow ml-2 text-lg" aria-hidden>→</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
