"use client"

import { useEffect, useState } from "react"

export default function LoadingOverlay() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timeout = setTimeout(() => setVisible(false), 1200)
    return () => clearTimeout(timeout)
  }, [])

  if (!visible) return null

  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center bg-[#020617]">
      <div className="flex flex-col items-center gap-4">
        <span className="text-slate-100 text-lg font-semibold tracking-[0.2em] uppercase">
          Loading
        </span>
        <div className="mt-2 h-10 w-10 rounded-full border-2 border-sky-400 border-t-transparent animate-[spin_0.8s_linear_infinite]" />
      </div>
    </div>
  )
}

