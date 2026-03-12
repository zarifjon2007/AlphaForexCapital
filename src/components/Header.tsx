"use client"

import { useState } from "react"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import Logo from "@/app/highlights/photo_2026-03-11_09-13-37.jpg"

export default function Header() {
  const [showBanner, setShowBanner] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="w-full bg-black/95 backdrop-blur-sm shadow-[0_14px_35px_rgba(15,23,42,0.95)] relative z-50">
      {/* Top info bar — ko'k (rasmdagi kabi) */}
      {showBanner && (
        <div className="w-full bg-[#007ac3] text-white animate-fade-in">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-1.5 relative">
            <p className="text-center text-[11px] xs:text-xs sm:text-sm font-semibold leading-snug tracking-wide">
              🎉 ALPHA FOREX CAPITAL SPRING TRADING EVENT 🎂
            </p>
            <button
              type="button"
              aria-label="Dismiss announcement"
              onClick={() => setShowBanner(false)}
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-lg px-2 py-1 text-white/90 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/60 transition-all duration-200"
            >
              ×
            </button>
          </div>
        </div>
      )}

      {/* Nav bar — logo bilan bir xil dark background */}
      <div className="w-full px-4 sm:px-6 py-1.5 sm:py-2 bg-black border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center flex-shrink-0">
            <Image
              src={Logo}
              alt="Alpha Forex Capital Logo"
              width={200}
              height={200}
              className="object-contain w-[140px] xs:w-[160px] sm:w-[180px]"
              priority
              unoptimized
            />
          </Link>

          {/* O'rta: nav linklar — markazda */}
          <nav className="hidden md:flex flex-1 items-center justify-center gap-6">
            <Link
              href="/"
              className={`nav-link-hover px-3 py-2 text-base font-semibold rounded-lg ${
                pathname === "/"
                  ? "text-[#00b4ff]"
                  : "text-slate-200 hover:text-[#00b4ff]"
              }`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`nav-link-hover px-3 py-2 text-base font-semibold rounded-lg ${
                pathname === "/about"
                  ? "text-[#00b4ff]"
                  : "text-slate-200 hover:text-[#00b4ff]"
              }`}
            >
              About
            </Link>
            <Link
              href="/faq"
              className={`nav-link-hover px-3 py-2 text-base font-semibold rounded-lg ${
                pathname === "/faq"
                  ? "text-[#00b4ff]"
                  : "text-slate-200 hover:text-[#00b4ff]"
              }`}
            >
              FAQ
            </Link>
          </nav>

          {/* O'ng: action tugmalar */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              className="rounded-[8px] h-12 px-8 text-base font-semibold border-[#007ac3] text-[#007ac3] bg-transparent hover:bg-[#007ac3]/5 hover:text-[#007ac3] hover:border-[#007ac3] transition-colors"
            >
              Log in
            </Button>
            <Button
              size="sm"
              className="rounded-[8px] h-12 px-8 text-base font-semibold btn-gradient text-white btn-lift shadow-[0_0_25px_rgba(56,189,248,0.8)]"
              asChild
            >
              <Link href="/#pricing">Get Started</Link>
            </Button>
          </div>

          {/* Mobile: o'ngdagi tugmalar + menu */}
          <div className="md:hidden flex items-center gap-2">
            <Button variant="outline" size="sm" className="border-[#007ac3] text-[#007ac3] bg-transparent cursor-not-allowed opacity-70">
              Log in
            </Button>
            <button
              type="button"
              aria-label="Open menu"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              onClick={() => setMenuOpen((v) => !v)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-slate-300 bg-slate-50 text-slate-700 hover:bg-slate-100 hover:border-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#007ac3] transition-all duration-200"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>

        <div id="mobile-menu" hidden={!menuOpen} className="md:hidden relative z-50">
          <div className="absolute right-4 left-4 mt-2 rounded-2xl border border-slate-200 bg-white p-4 shadow-xl animate-fade-in">
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className={`block rounded-xl px-4 py-3 text-base font-semibold transition-all duration-200 ${
                pathname === "/"
                  ? "text-[#007ac3] bg-[#007ac3]/10"
                  : "text-slate-800 hover:bg-slate-100"
              }`}
            >
              Home
            </Link>
            <Link
              href="/about"
              onClick={() => setMenuOpen(false)}
              className={`block rounded-xl px-4 py-3 text-base font-semibold transition-all duration-200 ${
                pathname === "/about"
                  ? "text-[#007ac3] bg-[#007ac3]/10"
                  : "text-slate-800 hover:bg-slate-100"
              }`}
            >
              About
            </Link>
            <Link href="/faq" onClick={() => setMenuOpen(false)} className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-100 transition-all duration-200">
              FAQ
            </Link>
            <Link
              href="/#pricing"
              onClick={() => setMenuOpen(false)}
              className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-100 transition-all duration-200"
            >
              Get Started
            </Link>
            <a
              href="https://piptriontraders.com/login/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-100 transition-all duration-200"
            >
              Log in / Dashboard
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
