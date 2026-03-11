"use client"

import { useEffect, useState } from "react"
import { Settings } from "lucide-react"
import { ChallengeConfig, DEFAULT_CHALLENGES } from "@/lib/pricingConfig"

export default function AdminPricingPanel() {
  const [open, setOpen] = useState(false)
  const [items, setItems] = useState<ChallengeConfig[]>(DEFAULT_CHALLENGES)
  const [saving, setSaving] = useState(false)
  const [savedAt, setSavedAt] = useState<Date | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [authed, setAuthed] = useState(false)
  const [password, setPassword] = useState("")
  const [authError, setAuthError] = useState<string | null>(null)

  useEffect(() => {
    let active = true
    const load = async () => {
      try {
        const res = await fetch("/api/pricing")
        if (!res.ok) throw new Error("failed")
        const data = (await res.json()) as { challenges?: ChallengeConfig[] }
        if (!active || !data.challenges) return
        setItems(data.challenges)
      } catch {
        // fallback to defaults
        if (!active) return
        setItems(DEFAULT_CHALLENGES)
      }
    }
    load()
    return () => {
      active = false
    }
  }, [])

  const handleChange = (id: string, value: string) => {
    const numeric = Number(value.replace(/[^0-9.]/g, ""))
    setItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              price: Number.isFinite(numeric) && numeric > 0 ? Math.round(numeric) : item.price,
            }
          : item
      )
    )
  }

  const handleSave = async () => {
    setSaving(true)
    setError(null)
    try {
      const res = await fetch("/api/pricing", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ challenges: items }),
      })
      if (!res.ok) throw new Error("Failed to save")
      const data = (await res.json()) as { challenges?: ChallengeConfig[] }
      if (data.challenges) {
        setItems(data.challenges)
      }
      setSavedAt(new Date())
    } catch (e) {
      setError("Could not save. Try again.")
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-slate-900/70 text-slate-400 hover:text-[#007ac3] hover:bg-slate-900 shadow-sm shadow-slate-900/60 transition-all duration-150 opacity-40 hover:opacity-90 border border-slate-700/80"
        aria-label="Open pricing settings"
      >
        <Settings className="h-3.5 w-3.5" />
      </button>

      {open && (
        <div className="absolute bottom-9 right-0 w-72 sm:w-80 rounded-2xl bg-slate-950/95 border border-sky-500/40 shadow-[0_18px_45px_rgba(15,23,42,0.9)] backdrop-blur-xl p-3 sm:p-4 text-slate-100 text-xs sm:text-[13px] z-50">
          <div className="flex items-center justify-between mb-2">
            <p className="font-semibold text-slate-100">
              {authed ? "Pricing settings" : "Admin access"}
            </p>
            <button
              type="button"
              className="text-slate-500 hover:text-slate-200 transition-colors"
              onClick={() => {
                setOpen(false)
                setPassword("")
                setAuthError(null)
              }}
            >
              ×
            </button>
          </div>

          {!authed ? (
            <>
              <p className="text-slate-400 text-[11px] mb-3">
                Enter admin password to edit pricing.
              </p>
              <div className="flex items-center gap-2">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="flex-1 rounded-md bg-slate-900 border border-slate-700/70 px-2 py-1.5 text-xs text-slate-100 outline-none focus:border-sky-500 focus:ring-0"
                  placeholder="Password"
                />
                <button
                  type="button"
                  onClick={() => {
                    if (password === "2026") {
                      setAuthed(true)
                      setPassword("")
                      setAuthError(null)
                    } else {
                      setAuthError("Incorrect password")
                    }
                  }}
                  className="inline-flex items-center justify-center px-3 py-1.5 rounded-md bg-sky-500 hover:bg-sky-400 text-white font-semibold text-[11px] sm:text-xs transition-colors"
                >
                  Enter
                </button>
              </div>
              {authError && <p className="mt-2 text-[10px] text-red-400">{authError}</p>}
            </>
          ) : (
            <>
              <p className="text-slate-400 text-[11px] mb-3">
                Only for you. Values are stored in this browser and update the pricing banner.
              </p>

              <div className="space-y-2 max-h-56 overflow-y-auto pr-1">
                {items.map((item) => (
                  <div key={item.id} className="flex items-center justify-between gap-2">
                    <span className="text-slate-300 font-medium w-16">{item.label}</span>
                    <div className="flex-1 flex items-center gap-1.5 justify-end">
                      <span className="text-slate-500 text-[11px]">$</span>
                      <input
                        type="number"
                        inputMode="decimal"
                        className="w-24 rounded-md bg-slate-900 border border-slate-700/70 px-1.5 py-1 text-right text-xs text-slate-100 outline-none focus:border-sky-500 focus:ring-0"
                        value={item.price}
                        onChange={(e) => handleChange(item.id, e.target.value)}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-3 flex items-center justify-between gap-2">
                <button
                  type="button"
                  onClick={handleSave}
                  disabled={saving}
                  className="inline-flex items-center justify-center px-3 py-1.5 rounded-md bg-sky-500 hover:bg-sky-400 text-white font-semibold text-[11px] sm:text-xs transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {saving ? "Saving..." : "Save prices"}
                </button>
                <div className="flex flex-col items-end gap-0.5">
                  {savedAt && (
                    <span className="text-[10px] text-slate-500">
                      Saved {savedAt.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                    </span>
                  )}
                  {error && <span className="text-[10px] text-red-400">{error}</span>}
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  )
}

