import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'

export function IntroSection() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
              Established London contractor
            </p>
            <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight tracking-tight text-foreground text-balance sm:text-4xl">
              Specialist flooring and refurbishment, delivered to a commercial
              standard
            </h2>
          </Reveal>
          <Reveal className="lg:col-span-7" delay={120}>
            <div className="space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
              <p>
                New Flooring Process Ltd is a London-based contractor providing
                flooring, carpentry, refurbishment, planned maintenance and
                fit-out services. We work with main contractors, property
                managers, housing associations, councils and public-sector
                organisations to deliver dependable results.
              </p>
              <p>
                Every project is managed with a focus on health &amp; safety,
                programme certainty and quality workmanship — whether that is a
                single floor installation, a full internal refurbishment or an
                ongoing maintenance contract.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 font-semibold text-foreground transition-colors hover:text-brand"
              >
                More about New Flooring Process
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
