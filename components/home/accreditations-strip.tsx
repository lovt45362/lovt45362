import Link from 'next/link'
import { Award, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const items = [
  {
    icon: Award,
    title: 'ISO 45001:2018',
    detail: 'Certified OH&S management system',
  },
  {
    icon: ShieldCheck,
    title: 'Citation H&S',
    detail: 'Independently assessed compliance',
  },
  {
    icon: CheckCircle2,
    title: 'Zero RIDDOR',
    detail: 'No reportable incidents since 2023',
  },
]

export function AccreditationsStrip() {
  return (
    <section className="border-y border-border bg-secondary py-14 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
          <Reveal className="max-w-md">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
              Accredited &amp; compliant
            </p>
            <h2 className="mt-3 font-display text-2xl font-extrabold leading-tight tracking-tight text-foreground text-balance sm:text-3xl">
              Certified to work on regulated sites
            </h2>
            <Link
              href="/health-safety"
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand transition-colors hover:text-brand/80"
            >
              View our accreditations
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>

          <div className="grid flex-1 gap-4 sm:grid-cols-3 lg:max-w-2xl">
            {items.map((item, i) => (
              <Reveal key={item.title} delay={(i % 3) * 80}>
                <div className="flex h-full items-start gap-4 rounded-xl border border-border bg-card p-5">
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand/10 text-brand">
                    <item.icon className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="font-display text-base font-bold tracking-tight text-card-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm leading-snug text-muted-foreground">
                      {item.detail}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
