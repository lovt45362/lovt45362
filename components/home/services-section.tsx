import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { services } from '@/lib/site-data'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

export function ServicesSection() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="What we do"
          title="A single contractor for flooring, carpentry and refurbishment"
          description="From subfloor preparation to finished floors, joinery and complete fit-out, we deliver integrated works packages under one point of responsibility."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.slug} delay={(i % 3) * 80}>
              <Link
                href={`/services#${service.slug}`}
                className="group flex h-full flex-col rounded-xl border border-border bg-card p-7 transition-all hover:border-brand/50 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display text-xl font-bold tracking-tight text-card-foreground">
                    {service.title}
                  </h3>
                  <ArrowUpRight className="h-5 w-5 shrink-0 text-muted-foreground transition-colors group-hover:text-brand" />
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {service.short}
                </p>
                <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-foreground">
                  Learn more
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
