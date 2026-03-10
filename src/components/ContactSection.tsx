"use client"

import Link from "next/link"

const socials = [
  { name: "Instagram", href: "/faq" },
  { name: "Twitter", href: "/faq" },
  { name: "Telegram", href: "/faq" },
]

export default function ContactSection() {
  return (
    <section id="contact" className="relative pt-28 pb-16 sm:pb-20 px-4 sm:px-6 bg-transparent border-t border-slate-800/60">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-20%] left-[10%] h-[30rem] w-[30rem] rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute bottom-[-20%] right-[10%] h-[26rem] w-[26rem] rounded-full bg-cyan-500/10 blur-3xl" />
      </div>
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-2">
          <span className="bg-gradient-to-r from-slate-50 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
            Contact
          </span>
        </h2>
        <p className="text-sm sm:text-base text-slate-300 mb-8 leading-relaxed sm:leading-7">
          Reach out via Telegram or our socials — we&apos;ll get back to you quickly.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          {socials.map((s) => (
            <Link
              key={s.name}
              href={s.href}
              className={`inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm sm:text-base font-semibold transition-all duration-200 link-hover
              ${
                s.name === "Instagram"
                  ? "border-pink-500 shadow-[0_0_22px_rgba(236,72,153,0.9)] bg-white/5 text-pink-200"
                  : s.name === "Twitter"
                  ? "border-sky-500 shadow-[0_0_22px_rgba(56,189,248,0.9)] bg-white/5 text-sky-200"
                  : "border-cyan-400 shadow-[0_0_22px_rgba(34,211,238,0.9)] bg-white/5 text-cyan-200"
              } hover:scale-105`}
            >
              {s.name}
            </Link>
          ))}
        </div>
      </div>
      <div className="mt-12 h-px w-full bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
    </section>
  )
}
