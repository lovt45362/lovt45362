import type { Metadata } from 'next'
import Image from 'next/image'
import {
  Building2,
  ClipboardCheck,
  ShieldCheck,
  Clock,
  FileCheck2,
  Users,
} from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'
import { CtaBand } from '@/components/cta-band'
import { sectors } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'Commercial & Public Sector',
  description:
    'A trusted flooring, carpentry and refurbishment partner for commercial clients, housing associations, councils, education, healthcare and public-sector organisations.',
}

const capabilities = [
  {
    icon: ClipboardCheck,
    title: 'Planned & responsive works',
    description:
      'Cyclical maintenance programmes and reactive repairs delivered to agreed KPIs and service levels.',
  },
  {
    icon: ShieldCheck,
    title: 'Compliance & documentation',
    description:
      'RAMS, COSHH, DBS-checked operatives where required, and full documentation for audit trails.',
  },
  {
    icon: Clock,
    title: 'Void turnarounds',
    description:
      'Rapid, compliant void refurbishment to return properties to re-let standard on tight programmes.',
  },
  {
    icon: FileCheck2,
    title: 'Framework-ready delivery',
    description:
      'Structured reporting, transparent pricing and processes suited to framework and contract delivery.',
  },
  {
    icon: Users,
    title: 'Resident-focused',
    description:
      'Courteous, considerate operatives experienced in occupied and sensitive environments.',
  },
  {
    icon: Building2,
    title: 'Estate-wide coverage',
    description:
      'Scalable resource to support single sites through to large property portfolios.',
  },
]

export default function CommercialPublicSectorPage() {
  return (
    <>
      <PageHero
        breadcrumb="Commercial & Public Sector"
        eyebrow="Commercial & public sector"
        title="A dependable partner for commercial and public-sector estates"
        description="We support property managers, housing associations, councils, education and healthcare providers with flooring, carpentry, refurbishment and maintenance services built around compliance and reliability."
      />

      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <SectionHeading
                eyebrow="Built for contract delivery"
                title="Compliance, reporting and reliability at scale"
              />
              <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground">
                <p>
                  Public-sector and commercial estates demand more than quality
                  workmanship — they require robust processes, clear
                  documentation and consistent delivery against agreed service
                  levels. We are structured to meet those demands.
                </p>
                <p>
                  From planned maintenance programmes and void turnarounds to
                  responsive repairs and full refurbishments, we provide a
                  single, accountable partner across your portfolio, with
                  transparent reporting at every stage.
                </p>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border">
                <Image
                  src="/images/commercial-site.png"
                  alt="Commercial flooring and refurbishment works in progress"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-secondary py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            align="center"
            eyebrow="Our capabilities"
            title="What we bring to every contract"
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((item, i) => (
              <Reveal key={item.title} delay={(i % 3) * 70}>
                <div className="flex h-full flex-col rounded-xl border border-border bg-card p-7">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-brand/10 text-brand">
                    <item.icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-bold tracking-tight text-card-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Sectors we serve"
            title="Experience across the built environment"
          />
          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {sectors.map((sector, i) => (
              <Reveal key={sector.title} delay={(i % 4) * 60}>
                <div className="flex h-full flex-col bg-card p-7">
                  <h3 className="font-display text-base font-bold tracking-tight text-card-foreground">
                    {sector.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {sector.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Discuss your framework or contract requirements"
        description="Tell us about your portfolio, service levels and programme. We will show you how we can support your estate."
      />
    </>
  )
}
