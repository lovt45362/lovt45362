import type { Metadata } from 'next'
import { Mail, Clock, MapPin, Check } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { EnquiryForm } from '@/components/enquiry-form'
import { company } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'Request a Quote',
  description:
    'Request a free, no-obligation quotation for flooring, carpentry, refurbishment or maintenance works from New Flooring Process Ltd.',
}

const assurances = [
  'Free, no-obligation quotation',
  'Clear, itemised and competitive pricing',
  'Fast response from an experienced team',
  'Advice on specification and compliance',
]

export default function RequestAQuotePage() {
  return (
    <>
      <PageHero
        breadcrumb="Request a Quote"
        eyebrow="Request a quote"
        title="Tell us about your project"
        description="Share a few details and our team will get back to you with a clear, competitive quotation."
      />

      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">
                What to expect
              </h2>
              <ul className="mt-6 space-y-4">
                {assurances.map((item) => (
                  <li key={item} className="flex gap-3">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                    <span className="text-sm leading-relaxed text-muted-foreground">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <dl className="mt-10 space-y-5 border-t border-border pt-8">
                <div className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                      Email
                    </dt>
                    <dd className="mt-1 text-sm">
                      <a
                        href={`mailto:${company.email}`}
                        className="font-medium text-foreground underline-offset-4 hover:text-brand hover:underline"
                      >
                        {company.email}
                      </a>
                    </dd>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                      Coverage
                    </dt>
                    <dd className="mt-1 text-sm font-medium text-foreground">
                      {company.location} &amp; surrounding areas
                    </dd>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                      Response time
                    </dt>
                    <dd className="mt-1 text-sm font-medium text-foreground">
                      Within one working day
                    </dd>
                  </div>
                </div>
              </dl>
            </div>

            <div className="lg:col-span-7">
              <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 lg:p-10">
                <EnquiryForm variant="quote" submitLabel="Request quote" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
