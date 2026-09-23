import type { Metadata } from 'next'
import {
  ShieldCheck,
  Award,
  ClipboardCheck,
  GraduationCap,
  Scale,
  CheckCircle2,
} from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'
import { CtaBand } from '@/components/cta-band'
import {
  accreditations,
  safetyStats,
  safetyMeasures,
  credentials,
  legalRegister,
} from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'Health & Safety and Accreditations',
  description:
    'New Flooring Process Ltd is certified to ISO 45001:2018 with a fully managed health & safety system, an exemplary RIDDOR record and independently assessed compliance.',
}

export default function HealthSafetyPage() {
  return (
    <>
      <PageHero
        breadcrumb="Health & Safety"
        eyebrow="Health, safety & compliance"
        title="Certified, independently assessed and safety-led"
        description="Health & safety is built into how we plan and deliver every project. We are certified to ISO 45001:2018 and maintain a fully documented management system with an exemplary safety record."
      />

      {/* Safety record */}
      <section className="border-b border-border bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            align="center"
            eyebrow="Our safety record"
            title="Zero reportable incidents, July 2023 – July 2026"
            description="Across the full reporting period New Flooring Process Ltd has recorded no RIDDOR-reportable accidents, dangerous occurrences, lost-time injuries or enforcement notices."
          />
          <div className="mt-14 grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-5">
            {safetyStats.map((stat, i) => (
              <Reveal key={stat.label} delay={(i % 4) * 70}>
                <div className="flex h-full flex-col items-center justify-center rounded-xl border border-border bg-card px-6 py-10 text-center">
                  <span className="font-display text-5xl font-extrabold tracking-tight text-brand lg:text-6xl">
                    {stat.value}
                  </span>
                  <span className="mt-3 text-sm font-medium leading-snug text-muted-foreground text-balance">
                    {stat.label}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditations */}
      <section className="bg-secondary py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Accreditations"
            title="Certifications that back our commitment"
          />
          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {accreditations.map((item, i) => {
              const Icon = i === 0 ? Award : i === 1 ? ShieldCheck : ClipboardCheck
              return (
                <Reveal key={item.title} delay={(i % 3) * 80}>
                  <article className="flex h-full flex-col rounded-2xl border border-border bg-card p-8">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-brand/10 text-brand">
                      <Icon className="h-6 w-6" />
                    </span>
                    <h3 className="mt-6 font-display text-xl font-bold tracking-tight text-card-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm font-semibold text-brand">
                      {item.issuer}
                    </p>
                    {item.reference && (
                      <p className="mt-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                        {item.reference}
                      </p>
                    )}
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                      {item.detail}
                    </p>
                    {item.meta && (
                      <dl className="mt-6 space-y-2 border-t border-border pt-5 text-sm">
                        {item.meta.map((m) => (
                          <div
                            key={m.label}
                            className="flex justify-between gap-4"
                          >
                            <dt className="text-muted-foreground">{m.label}</dt>
                            <dd className="font-semibold text-card-foreground">
                              {m.value}
                            </dd>
                          </div>
                        ))}
                      </dl>
                    )}
                  </article>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Managed safety system */}
      <section className="border-y border-border bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <SectionHeading
                eyebrow="Managed safety system"
                title="Controls embedded across every project"
                description="Our ISO 45001 management system is maintained through an annual internal audit programme, monthly workplace inspections and regular management review."
              />
            </div>
            <ul className="grid gap-x-6 gap-y-3.5 sm:grid-cols-2">
              {safetyMeasures.map((measure, i) => (
                <Reveal as="li" key={measure} delay={(i % 6) * 50}>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                    <span className="text-sm leading-relaxed text-foreground">
                      {measure}
                    </span>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Competence */}
      <section className="bg-secondary py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-brand/10 text-brand">
              <GraduationCap className="h-6 w-6" />
            </span>
            <SectionHeading
              eyebrow="Competence & training"
              title="Qualified, current and site-ready"
            />
          </div>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Site management is led by a director holding current construction
            management, safety and first-aid qualifications, supported by
            approved subcontractors whose competence, insurance and
            accreditation are verified before appointment.
          </p>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {credentials.map((cred, i) => (
              <Reveal key={cred.title} delay={(i % 4) * 60}>
                <div className="flex h-full flex-col rounded-xl border border-border bg-card p-6">
                  <h3 className="font-display text-base font-bold leading-snug tracking-tight text-card-foreground text-balance">
                    {cred.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {cred.detail}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Legal register */}
      <section className="border-t border-border bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-brand/10 text-brand">
              <Scale className="h-6 w-6" />
            </span>
            <SectionHeading
              eyebrow="Legal & regulatory compliance"
              title="Working within the framework"
            />
          </div>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
            We maintain a legal register of the health & safety legislation
            applicable to our work, with controls and audits in place to
            evidence ongoing compliance.
          </p>
          <div className="mt-12 overflow-hidden rounded-2xl border border-border">
            <table className="w-full border-collapse text-left text-sm">
              <thead>
                <tr className="bg-primary text-primary-foreground">
                  <th className="px-5 py-4 font-display text-xs font-bold uppercase tracking-wider">
                    Aspect
                  </th>
                  <th className="px-5 py-4 font-display text-xs font-bold uppercase tracking-wider">
                    Legislation
                  </th>
                </tr>
              </thead>
              <tbody>
                {legalRegister.map((row, i) => (
                  <tr
                    key={row.legislation}
                    className={
                      i % 2 === 0 ? 'bg-card' : 'bg-secondary/60'
                    }
                  >
                    <td className="border-t border-border px-5 py-4 font-semibold text-foreground">
                      {row.aspect}
                    </td>
                    <td className="border-t border-border px-5 py-4 text-muted-foreground">
                      {row.legislation}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
