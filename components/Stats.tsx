"use client"

import { useRef, useEffect, useState } from "react"
import { useI18n } from "@/lib/i18n"

const data = [
  { key: "skills", value: 140, suffix: "+" },
  { key: "agents", value: 11, suffix: "" },
  { key: "categories", value: 12, suffix: "" },
  { key: "tokens", value: 2, prefix: "<", suffix: "K" },
]

function Counter({ to, suffix, prefix }: { to: number; suffix: string; prefix?: string }) {
  const [val, setVal] = useState(0)
  const ref = useRef<HTMLDivElement>(null!)
  const counted = useRef(false)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !counted.current) {
          counted.current = true
          const duration = 1200
          const start = performance.now()
          const tick = (now: number) => {
            const p = Math.min((now - start) / duration, 1)
            setVal(Math.floor(p * to))
            if (p < 1) requestAnimationFrame(tick)
          }
          requestAnimationFrame(tick)
        }
      },
      { threshold: 0.3 },
    )
    obs.observe(ref.current)
    return () => obs.disconnect()
  }, [to])

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-bold text-gradient mb-1">
        {prefix}{val}{suffix}
      </div>
    </div>
  )
}

export default function Stats() {
  const { t } = useI18n()

  return (
    <section className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {data.map((d, i) => (
            <div key={i}>
              <Counter to={d.value} suffix={d.suffix} prefix={d.prefix} />
              <div className="text-sm text-white/30 mt-1 text-center">{t(`stats.${d.key}`)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
