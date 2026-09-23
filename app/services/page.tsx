import type { Metadata } from 'next'
import Link from 'next/link'
import { Check, ArrowRight } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { Reveal } from '@/components/reveal'
import { CtaBand } from '@/components/cta-band'
import { Button } from '@/components/ui/button'
import { services } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Commercial flooring installation, subfloor preparation, carpentry and joinery, refurbishment and fit-out, planned maintenance, responsive repairs and void works across London.',
}

export default function ServicesPage() {
  return (
    <>
      <PageHero
        breadcrumb="Services"
        eyebrow="Our services"
        title="Complete flooring, carpentry and refurbishment services"
        description="A single contractor for the full scope of internal works — from subfloor preparation and floor finishes to carpentry, fit-out and ongoing maintenance."
      />

      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-20 lg:space-y-28">
            {services.map((service, i) => (
              <div
                key={service.slug}
                id={service.slug}
                className="scroll-mt-28"
              >
                <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
                  <Reveal className="lg:col-span-5">
                    <p className="font-display text-sm font-bold uppercase tracking-widest text-brand">
                      {String(i + 1).padStart(2, '0')}
                    </p>
                    <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight tracking-tight text-foreground text-balance sm:text-4xl">
                      {service.title}
                    </h2>
                    <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                      {service.description}
                    </p>
                    <Button
                      nativeButton={false}
              render={<Link href="/request-a-quote" />}
                      className="mt-8 bg-brand font-semibold text-brand-foreground hover:bg-brand/90"
                    >
                      Enquire about this service
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Reveal>

                  <Reveal className="lg:col-span-7" delay={120}>
                    <div className="rounded-2xl border border-border bg-card p-8 lg:p-10">
                      <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                        What&apos;s included
                      </h3>
                      <ul className="mt-6 grid gap-4 sm:grid-cols-2">
                        {service.points.map((point) => (
                          <li key={point} className="flex gap-3">
                            <Check className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                            <span className="text-sm leading-relaxed text-card-foreground">
                              {point}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Reveal>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
