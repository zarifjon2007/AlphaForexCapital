"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Rocket, X } from "lucide-react"

type TimeLeft = {
  hours: string
  minutes: string
  seconds: string
}

function getNextMidnight(): number {
  const now = new Date()
  const next = new Date(now)
  next.setHours(24, 0, 0, 0)
  return next.getTime()
}

function computeTimeLeft(deadline: number): TimeLeft {
  const now = Date.now()
  let diff = Math.max(0, deadline - now)

  const hours = Math.floor(diff / (1000 * 60 * 60))
  diff -= hours * 1000 * 60 * 60
  const minutes = Math.floor(diff / (1000 * 60))
  diff -= minutes * 1000 * 60
  const seconds = Math.floor(diff / 1000)

  const pad = (v: number) => v.toString().padStart(2, "0")

  return {
    hours: pad(hours),
    minutes: pad(minutes),
    seconds: pad(seconds),
  }
}

export default function AnniversaryOfferModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [deadline] = useState<number>(() => getNextMidnight())
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() => computeTimeLeft(getNextMidnight()))

  useEffect(() => {
    const openTimeout = setTimeout(() => {
      setIsOpen(true)
    }, 15000)

    const countdownInterval = setInterval(() => {
      setTimeLeft((prev) => {
        const next = computeTimeLeft(deadline)
        if (next.hours === prev.hours && next.minutes === prev.minutes && next.seconds === prev.seconds) {
          return prev
        }
        return next
      })
    }, 1000)

    return () => {
      clearTimeout(openTimeout)
      clearInterval(countdownInterval)
    }
  }, [deadline])

  const handleClose = () => {
    setIsOpen(false)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-950/40 backdrop-blur-sm px-4 sm:px-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="relative w-full max-w-sm sm:max-w-md rounded-3xl bg-gradient-to-b from-sky-700 via-sky-800 to-slate-950 text-white shadow-[0_30px_80px_rgba(15,23,42,0.95)] border border-sky-400/40 overflow-hidden"
            initial={{ opacity: 0, y: -60, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -40, scale: 0.97 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Yopish tugmasi */}
            <button
              type="button"
              onClick={handleClose}
              className="absolute right-3.5 top-3.5 rounded-full bg-slate-900/70 p-1.5 text-slate-300 hover:text-white hover:bg-slate-900 transition-colors"
              aria-label="Close anniversary offer"
            >
              <X className="h-3.5 w-3.5" />
            </button>

            {/* Yuqori ikon */}
            <div className="flex flex-col items-center justify-center pt-7 pb-3 sm:pt-8 sm:pb-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#007ac3]/80 shadow-lg shadow-[#007ac3]/40 mb-3">
                <Rocket className="h-6 w-6" />
              </div>
              <p className="text-[11px] sm:text-xs uppercase tracking-[0.22em] text-black">
                ✨ SPRING TRADING EVENT ✨
              </p>
            </div>

            {/* Asosiy matn */}
            <div className="px-6 sm:px-8 text-center">
              <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight mb-1">Spring Trading Event</h2>
              <p className="text-green-400 text-lg sm:text-xl font-extrabold mb-3 sm:mb-4 flex items-center justify-center gap-1.5">
                <span>Spring Special – Buy One, Get One Free</span>
                <motion.span
                  className="inline-block text-2xl sm:text-3xl"
                  animate={{ rotate: [-15, 15, -15] }}
                  transition={{ duration: 1.4, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                >
                  🎁
                </motion.span>
              </p>
              <p className="text-[#007ac3]/90 text-xs sm:text-sm mb-5">
                Celebrate the new season with us. Purchase any challenge and receive a second challenge of equal or lesser
                value completely free.
              </p>
            </div>

            {/* Timer blok */}
            <div className="px-6 sm:px-8 pb-5 sm:pb-6">
              <div className="rounded-2xl bg-slate-950/70 border border-sky-500/40 px-4 py-4 sm:px-5 sm:py-5 text-center">
                <p className="text-[11px] sm:text-xs font-semibold tracking-[0.18em] text-[#007ac3]/80 mb-3">
                  OFFER ENDS IN
                </p>
                <div className="flex items-center justify-center gap-2 sm:gap-3">
                  {[
                    { label: "HOURS", value: timeLeft.hours },
                    { label: "MINS", value: timeLeft.minutes },
                    { label: "SECS", value: timeLeft.seconds },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="w-16 sm:w-20 rounded-xl bg-slate-900/90 border border-sky-500/40 px-2 py-2.5 sm:py-3 flex flex-col items-center justify-center"
                    >
                      <span className="text-lg sm:text-xl font-extrabold tracking-tight text-red-400 drop-shadow-[0_0_18px_rgba(248,113,113,0.9)]">
                        {item.value}
                      </span>
                      <span className="mt-0.5 text-[9px] sm:text-[10px] tracking-[0.18em] text-slate-300/80">
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="px-6 sm:px-8 pb-5 sm:pb-6">
              <motion.a
                href="/#pricing"
                className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 text-slate-950 font-semibold text-sm sm:text-base py-3 sm:py-3.5 shadow-lg shadow-emerald-400/60 hover:shadow-emerald-300/80 transition-colors"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 1.8, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
              >
                <Rocket className="mr-2 h-4 w-4" />
                Claim Spring Offer
              </motion.a>
              <p className="mt-3 text-[10px] sm:text-[11px] text-slate-200/80 text-center">
                Limited time spring offer. Terms and conditions apply.
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

