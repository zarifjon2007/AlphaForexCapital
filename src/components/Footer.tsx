"use client"

import Link from "next/link"
import AdminPricingPanel from "@/components/AdminPricingPanel"

const footerNav = {
  trade: [
    { name: "Forex", href: "#" },
    { name: "Futures", href: "#" },
    { name: "Crypto", href: "#" },
  ],
  platform: [
    { name: "Home", href: "/" },
    { name: "How It Works", href: "/about" },
    { name: "Dashboard", href: "https://piptriontraders.com/login/", external: true },
  ],
  about: [
    { name: "About Us", href: "/about" },
    { name: "FAQ", href: "/faq" },
  ],
  support: [
    { name: "Help Center", href: "/faq" },
    { name: "Contact", href: "/#contact" },
  ],
}

const bottomLinks = [
  { name: "Terms and Conditions", href: "/terms" },
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Refund Policy", href: "/refunds" },
]

export default function Footer() {
  return (
    <footer className="relative bg-[#020617] text-slate-100 border-t border-slate-800/60">
      {/* Yuqori promo banner — zamonaviy pill style */}
      <div className="footer-promo-gradient w-full py-5 sm:py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left space-y-1">
            <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.28em] text-white/80">
              🎉 2 Year Anniversary Offer
            </p>
            <p className="text-lg sm:text-xl md:text-2xl font-extrabold text-white tracking-tight">
              Buy One Challenge,&nbsp;
              <span className="text-green-500">Get One Free</span>
            </p>
            <p className="hidden sm:block text-xs sm:text-sm text-white/80">
              Double your trading evaluation for the same price — limited time only.
            </p>
          </div>

          <Link
            href="https://piptriontraders.com/login/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-[8px] h-12 px-7 sm:px-8 text-sm sm:text-base font-semibold btn-gradient text-white btn-lift shadow-[0_0_25px_rgba(56,189,248,0.8)] transition-transform duration-200 hover:scale-[1.03] active:scale-[0.98]"
          >
            <span className="text-lg">🎁</span>
            <span>Start Your Free BOGO Challenge</span>
          </Link>
        </div>
      </div>

      {/* Asosiy footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-12">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10 lg:gap-16">
          
          <div className="lg:max-w-[340px]">
            <p className="mb-4 text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-cyan-300 via-sky-300 to-blue-400 bg-clip-text text-transparent">
              Alfa Forex Capital
            </p>
            <div className="rounded-2xl bg-white/5 backdrop-blur-xl border border-slate-600/60 p-4 sm:p-5 shadow-[0_24px_70px_rgba(15,23,42,0.9)]">
              <p className="text-sm text-slate-200">
                Registered in <span className="text-[#007ac3] font-semibold">Geneva</span>
              </p>
              <p className="mt-2 text-sm text-slate-300 leading-snug">
                Learn more about our simulated evaluation programs.
              </p>
              <a
                href="https://piptriontraders.com/login/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex w-full sm:w-auto items-center justify-center rounded-[8px] h-12 px-6 text-sm font-semibold btn-gradient text-white btn-lift shadow-[0_0_25px_rgba(56,189,248,0.8)] transition-transform duration-200 hover:scale-[1.03] active:scale-[0.98]"
              >
                Access Dashboard
              </a>
            </div>
          </div>

          {/* O'ng: 4 ustun linklar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-10">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-slate-100 mb-4">Trade</h3>
              <ul className="space-y-3">
                {footerNav.trade.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-sm text-slate-300 hover:text-[#00b4ff] hover:shadow-[0_0_18px_rgba(56,189,248,0.8)] transition-colors duration-200 link-hover rounded-lg py-1 px-2 -mx-2 inline-block">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-slate-100 mb-4">Platform</h3>
              <ul className="space-y-3">
                {footerNav.platform.map((link) =>
                  link.external ? (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-slate-300 hover:text-[#00b4ff] hover:shadow-[0_0_18px_rgba(56,189,248,0.8)] transition-colors duration-200 link-hover rounded-lg py-1 px-2 -mx-2 inline-block"
                      >
                        {link.name}
                      </a>
                    </li>
                  ) : (
                    <li key={link.name}>
                      <Link href={link.href} className="text-sm text-slate-300 hover:text-[#00b4ff] hover:shadow-[0_0_18px_rgba(56,189,248,0.8)] transition-colors duration-200 link-hover rounded-lg py-1 px-2 -mx-2 inline-block">
                        {link.name}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-slate-100 mb-4">About</h3>
              <ul className="space-y-3">
                {footerNav.about.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-sm text-slate-300 hover:text-[#00b4ff] hover:shadow-[0_0_18px_rgba(56,189,248,0.8)] transition-colors duration-200 link-hover rounded-lg py-1 px-2 -mx-2 inline-block">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-slate-100 mb-4">Support</h3>
              <ul className="space-y-3">
                {footerNav.support.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-sm text-slate-300 hover:text-[#00b4ff] hover:shadow-[0_0_18px_rgba(56,189,248,0.8)] transition-colors duration-200 link-hover rounded-lg py-1 px-2 -mx-2 inline-block">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Pastki chiziq — terms & copyright */}
      <div className="border-t border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex flex-wrap justify-center sm:justify-start gap-4 sm:gap-6">
              {bottomLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-xs text-slate-400 hover:text-[#00b4ff] transition-colors duration-200 link-hover rounded-lg py-1 px-2 -mx-2"
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6">
              <div className="flex items-center gap-3 text-slate-400 text-xs">
                <span>© {new Date().getFullYear()} Alpha Forex Capital. All rights reserved.</span>
              </div>
              <div className="flex items-center gap-3 text-slate-400 text-xs">
                <span className="text-slate-500">Socials:</span>
                <a href="/faq" className="hover:text-[#00b4ff]">TG</a>
                <a href="/faq" className="hover:text-[#00b4ff]">Tw</a>
                <a href="/faq" className="hover:text-[#00b4ff]">IG</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Yashirin admin settings tugmasi */}
      <div className="absolute bottom-4 right-4 sm:bottom-5 sm:right-5">
        <AdminPricingPanel />
      </div>
    </footer>
  )
}
