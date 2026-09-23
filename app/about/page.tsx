import type { Metadata } from 'next'
import Image from 'next/image'
import { ShieldCheck, Building2, Users, Target } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'
import { CtaBand } from '@/components/cta-band'
import { company, whyChooseUs } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'New Flooring Process Ltd is a London-based flooring, carpentry and refurbishment contractor delivering compliant, quality-driven works for commercial and public-sector clients.',
}

const values = [
  {
    icon: Target,
    title: 'Reliability',
    description:
      'We do what we say we will, on programme and to the agreed standard.',
  },
  {
    icon: ShieldCheck,
    title: 'Safety',
    description:
      'Health & safety is embedded in how we plan and deliver every project.',
  },
  {
    icon: Users,
    title: 'Partnership',
    description:
      'We build long-term relationships with clients, contractors and estates teams.',
  },
  {
    icon: Building2,
    title: 'Quality',
    description:
      'Directly managed trades and rigorous quality control on every contract.',
  },
]

export default function AboutPage() {
  return (
    <>
      <PageHero
        breadcrumb="About"
        eyebrow="About us"
        title="A London flooring and refurbishment contractor built on reliability"
        description="We deliver flooring, carpentry, refurbishment and maintenance works for commercial and public-sector clients — with professional project management at the core of everything we do."
      />

      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border">
                <Image
                  src="/images/about-team.png"
                  alt="New Flooring Process Ltd team on site"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
            <Reveal delay={120}>
              <SectionHeading
                eyebrow="Who we are"
                title="Specialists in flooring, carpentry and internal refurbishment"
              />
              <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground">
                <p>
                  {company.name} is a London-based contractor providing a
                  complete range of flooring, carpentry, refurbishment,
                  fit-out and maintenance services. We support main
                  contractors, property managers, housing associations,
                  councils and public-sector organisations.
                </p>
                <p>
                  Our strength is bringing multiple trades together under a
                  single, professionally managed point of responsibility. That
                  means fewer interfaces for our clients, tighter quality
                  control and greater programme certainty from start to
                  finish.
                </p>
                <p>
                  Whether it is a one-off floor installation, a full internal
                  refurbishment, a void turnaround or an ongoing planned
                  maintenance contract, we deliver dependable results with
                  clear communication throughout.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-secondary py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            align="center"
            eyebrow="Our values"
            title="The principles behind every project"
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, i) => (
              <Reveal key={value.title} delay={(i % 4) * 70}>
                <div className="flex h-full flex-col rounded-xl border border-border bg-card p-7">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-brand/10 text-brand">
                    <value.icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-bold tracking-tight text-card-foreground">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <SectionHeading
                eyebrow="Why clients choose us"
                title="A contractor you can rely on"
              />
              <ul className="mt-10 space-y-6">
                {whyChooseUs.map((item, i) => (
                  <Reveal as="li" key={item.title} delay={i * 70}>
                    <div className="border-l-2 border-brand pl-5">
                      <h3 className="font-display text-lg font-bold tracking-tight text-foreground">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </ul>
            </div>

            <Reveal delay={120}>
              <div className="rounded-2xl border border-border bg-card p-8 lg:p-10">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-brand/10 text-brand">
                  <ShieldCheck className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-2xl font-bold tracking-tight text-card-foreground">
                  Health &amp; safety compliant
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  We operate to recognised health &amp; safety standards, with
                  RAMS, COSHH assessments and safe systems of work in place
                  across our operations. Our compliance is independently
                  assessed.
                </p>
                <dl className="mt-8 space-y-4 border-t border-border pt-6 text-sm">
                  <div className="flex justify-between gap-4">
                    <dt className="text-muted-foreground">
                      H&amp;S compliance ref.
                    </dt>
                    <dd className="font-semibold text-foreground">
                      ATLCC-0000076045
                    </dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-muted-foreground">Company no.</dt>
                    <dd className="font-semibold text-foreground">
                      {company.number}
                    </dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-muted-foreground">Based in</dt>
                    <dd className="font-semibold text-foreground">
                      {company.location}
                    </dd>
                  </div>
                </dl>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
