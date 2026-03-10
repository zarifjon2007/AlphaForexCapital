"use client";

export default function FairRulesSection() {
  const rules = [
    {
      title: "Risk Limits",
      body:
        "Respect the maximum daily loss and overall drawdown thresholds. Breaches result in account closure to protect capital.",
    },
    {
      title: "Profit Targets",
      body:
        "Achieve the profit objective while adhering to all risk and consistency requirements.",
    },
    {
      title: "Trading Conduct",
      body:
        "Maintain fair trading practices. Prohibited actions include latency or arbitrage exploits, tick manipulation, account sharing, or multi-user logins.",
    },
    {
      title: "News & Overnight",
      body:
        "Trading around major news events and holding positions overnight or across weekends is permitted. Market risks such as gaps, spreads, and slippage remain your responsibility.",
    },
    {
      title: "EAs & Algorithms",
      body:
        "Automated strategies are allowed if used responsibly and not designed to exploit execution or data feeds.",
    },
    {
      title: "Copy Trading",
      body:
        "Permitted only within your PT accounts. External mirroring requires prior written approval.",
    },
  ];

  return (
    <section className="relative overflow-hidden py-20 pt-28 pb-20 bg-transparent">
      {/* === Background with soft blue glows === */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute right-[-10%] top-[-10%] h-[40rem] w-[40rem] rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute left-[-15%] bottom-[-20%] h-[34rem] w-[34rem] rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      {/* === Content === */}
      <div className="relative max-w-7xl mx-auto px-6">
        {/* Title */}
        <h2 className="text-5xl md:text-6xl font-bold mb-10 leading-tight">
          <span className="bg-gradient-to-r from-slate-50 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
            Fair Rules
          </span>
        </h2>

        {/* Cards */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10">
          {rules.map((r, i) => (
            <div
              key={i}
              className="relative rounded-3xl border border-blue-400/80 bg-slate-900/35 backdrop-blur-2xl p-6 md:p-7 shadow-[0_32px_110px_rgba(56,189,248,0.85)] transition-all duration-300 hover:border-blue-400 hover:shadow-[0_40px_130px_rgba(56,189,248,1)]"
            >
              {/* Icon */}
              <div className="sticker-float-y mb-5 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500/25 via-blue-500/20 to-blue-700/40 ring-1 ring-blue-300/70 shadow-[0_0_26px_rgba(56,189,248,0.8)] text-sky-50">
                {i === 0 && (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M4 12h16M4 17h10M4 7h7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  </svg>
                )}
                {i === 1 && (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M4 17l4.5-5 4 4 6.5-8"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
                {i === 2 && (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M5 7h14M5 12h9M5 17h6"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                  </svg>
                )}
                {i === 3 && (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M4 6h16M6 10h12M8 14h8M10 18h4"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                  </svg>
                )}
                {i === 4 && (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M5 5h14v10H9l-4 4V5z"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
                {i === 5 && (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M7 7h10v4H7zM5 15h6v4H5zM13 15h6v4h-6z"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </div>

              <h3 className="text-xl font-semibold bg-gradient-to-r from-slate-50 via-cyan-300 to-blue-400 bg-clip-text text-transparent mb-3">
                {r.title}
              </h3>
              <p className="text-slate-200 leading-relaxed text-sm">
                {r.body}
              </p>
              <div className="mt-4 h-0.5 w-10 bg-gradient-to-r from-blue-500/60 to-transparent rounded-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
