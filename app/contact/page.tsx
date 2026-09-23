import type { Metadata } from 'next'
import { Mail, MapPin, Building2, Clock, Phone } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { EnquiryForm } from '@/components/enquiry-form'
import { company } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with New Flooring Process Ltd to discuss flooring, carpentry, refurbishment and maintenance works across London and the surrounding areas.',
}

const details = [
  {
    icon: Phone,
    label: 'Phone',
    value: company.phone,
    href: company.phoneHref,
  },
  {
    icon: Mail,
    label: 'Email',
    value: company.email,
    href: `mailto:${company.email}`,
  },
  {
    icon: MapPin,
    label: 'Address',
    value: company.address,
  },
  {
    icon: Building2,
    label: 'Company number',
    value: company.number,
  },
  {
    icon: Clock,
    label: 'Hours',
    value: 'Mon–Fri, 8:00am – 6:00pm',
  },
]

export default function ContactPage() {
  return (
    <>
      <PageHero
        breadcrumb="Contact"
        eyebrow="Contact us"
        title="Get in touch"
        description="Whether you have a project in mind or simply want advice, our team is ready to help. Send us a message and we will respond promptly."
      />

      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">
                Contact details
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Reach us directly using the details below, or complete the form
                and we will come back to you.
              </p>

              <dl className="mt-8 space-y-6">
                {details.map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand/10 text-brand">
                      <item.icon className="h-5 w-5" />
                    </span>
                    <div>
                      <dt className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                        {item.label}
                      </dt>
                      <dd className="mt-1 text-sm">
                        {item.href ? (
                          <a
                            href={item.href}
                            className="font-medium text-foreground underline-offset-4 hover:text-brand hover:underline"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <span className="font-medium text-foreground">
                            {item.value}
                          </span>
                        )}
                      </dd>
                    </div>
                  </div>
                ))}
              </dl>

              <div className="mt-10 rounded-2xl border border-border bg-secondary p-6">
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Looking for a price?{' '}
                  <a
                    href="/request-a-quote"
                    className="font-semibold text-foreground underline-offset-4 hover:text-brand hover:underline"
                  >
                    Request a detailed quote
                  </a>{' '}
                  and tell us more about your project scope and timescales.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 lg:p-10">
                <EnquiryForm variant="contact" submitLabel="Send message" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
