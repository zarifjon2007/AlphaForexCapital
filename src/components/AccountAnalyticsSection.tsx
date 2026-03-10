"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import clsx from "clsx"

export default function AccountAnalyticsSection() {
  return (
    <section className="relative overflow-hidden py-20 pt-28 pb-20 bg-white border-t border-slate-200">
      <div className="absolute inset-0 bg-white" />

      <div className="absolute inset-0 -z-10 [mask-image:radial-gradient(70%_70%_at_80%_20%,#fff_30%,transparent_70%)]">
        <div className="absolute right-[-10%] top-[-10%] h-[38rem] w-[38rem] rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      <div className="pointer-events-none absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white to-transparent" />
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-8 leading-tight">
              Detailed Account{" "}
              <span className="bg-gradient-to-r from-[#007ac3] to-[#0066a3] bg-clip-text text-transparent">
                Analytics
              </span>
            </h2>

            <p className="text-lg text-slate-600 mb-12 leading-relaxed">
              Gain insights with our comprehensive account metrics, providing a clear
              overview of your trading performance. Monitor your progress and make
              informed decisions to optimise your strategies.
            </p>

            <Button
              size="lg"
              className="rounded-[8px] h-12 px-8 text-base font-semibold btn-gradient text-white btn-lift shadow-[0_0_25px_rgba(56,189,248,0.8)]"
              asChild
            >
              <Link href="/funding">Get Funded</Link>
            </Button>
          </div>

          {/* Right Image Mockup */}
          <div className="relative flex justify-center">
            <div className="rounded-2xl border border-slate-200 bg-white p-3 shadow-lg card-hover">
              <Image
                src="/analytics.JPG"
                alt="Account Analytics"
                width={600}
                height={400}
                className="rounded-xl object-contain"
                priority
              />
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-20 h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

        {/* ===== Two always-filled marquees ===== */}
        <div className="mt-16 space-y-8">
          <MarqueeRow
            dir="right"
            speed={14}
            className="text-slate-800 font-semibold text-base sm:text-lg md:text-xl"
            phrase="Trade Forex, Indices, Metals & Crypto •"
          />
          <MarqueeRow
            dir="left"
            speed={18}
            className="bg-clip-text text-transparent font-extrabold leading-tight text-3xl sm:text-5xl md:text-6xl bg-gradient-to-r from-[#007ac3] to-[#0066a3]"
            phrase="Get Simulated Funding Today •"
          />
        </div>
      </div>

      {/* Scoped CSS */}
      <style jsx>{`
        .marquee {
          --fade: 72px;
          mask-image: linear-gradient(
            to right,
            transparent,
            black var(--fade),
            black calc(100% - var(--fade)),
            transparent
          );
          -webkit-mask-image: linear-gradient(
            to right,
            transparent,
            black var(--fade),
            black calc(100% - var(--fade)),
            transparent
          );
        }
        @media (max-width: 640px) {
          .marquee {
            --fade: 28px;
          }
        }

        .track {
          display: flex;
          width: max-content;
          will-change: transform;
          gap: 3rem;
        }

        @keyframes scrollLeft {
          from {
            transform: translateX(0%);
          }
          to {
            transform: translateX(-50%);
          }
        }
        @keyframes scrollRight {
          from {
            transform: translateX(-50%);
          }
          to {
            transform: translateX(0%);
          }
        }
      `}</style>
    </section>
  )
}

/** Reusable, gapless marquee row */
function MarqueeRow({
  phrase,
  className,
  dir = "left",
  speed = 18,
}: {
  phrase: string
  className?: string
  dir?: "left" | "right"
  speed?: number
}) {
  const chunk = Array.from({ length: 12 }).map(() => phrase.trim()).join(" ")

  return (
    <div className="marquee overflow-hidden">
      <div
        className={clsx("track", "whitespace-nowrap")}
        style={{
          animation: `${dir === "left" ? "scrollLeft" : "scrollRight"} ${speed}s linear infinite`,
        }}
      >
        <span className={clsx(className)}>{chunk}</span>
        <span className={clsx(className)} aria-hidden="true">
          {chunk}
        </span>
      </div>
    </div>
  )
}




