import Link from 'next/link'
import { Mail, MapPin, Phone, ShieldCheck } from 'lucide-react'
import { company, nav, services } from '@/lib/site-data'
import { Logo } from '@/components/logo'

export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:pr-6">
            <div className="inline-flex rounded-lg bg-background px-4 py-3">
              <Logo className="h-28" />
            </div>
            <p className="mt-4 text-sm leading-relaxed text-primary-foreground/70">
              London-based flooring, carpentry and refurbishment contractor
              delivering compliant, high-quality works for commercial and
              public-sector clients.
            </p>
            <div className="mt-5 inline-flex items-center gap-2 rounded-md border border-brand/40 bg-brand/10 px-3 py-2">
              <ShieldCheck className="h-4 w-4 shrink-0 text-brand" />
              <Link
                href="/health-safety"
                className="text-xs font-semibold uppercase tracking-wider text-primary-foreground transition-colors hover:text-brand"
              >
                Certified to ISO 45001:2018
              </Link>
            </div>
          </div>

          <div>
            <h2 className="font-display text-sm font-bold uppercase tracking-wider">
              Services
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services#${s.slug}`}
                    className="text-primary-foreground/70 transition-colors hover:text-brand"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-display text-sm font-bold uppercase tracking-wider">
              Quick Links
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-primary-foreground/70 transition-colors hover:text-brand"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/request-a-quote"
                  className="text-primary-foreground/70 transition-colors hover:text-brand"
                >
                  Request a Quote
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-sm font-bold uppercase tracking-wider">
              Contact
            </h2>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-3 text-primary-foreground/70">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                <span>{company.address}</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                <a
                  href={company.phoneHref}
                  className="text-primary-foreground/70 transition-colors hover:text-brand"
                >
                  {company.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                <a
                  href={`mailto:${company.email}`}
                  className="break-all text-primary-foreground/70 transition-colors hover:text-brand"
                >
                  {company.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-primary-foreground/15 pt-8 text-xs text-primary-foreground/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {year} {company.name}. All rights reserved. Registered in
            England &amp; Wales, company number {company.number}.
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <Link
              href="/privacy-policy"
              className="transition-colors hover:text-brand"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="transition-colors hover:text-brand"
            >
              Terms &amp; Conditions
            </Link>
            <Link
              href="/accessibility"
              className="transition-colors hover:text-brand"
            >
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
