import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { company } from '@/lib/site-data'

export function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-primary text-primary-foreground">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/hero-flooring.png"
          alt="Commercial flooring installation by New Flooring Process Ltd"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/40"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent"
          aria-hidden="true"
        />
      </div>

      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-36">
        <div className="max-w-3xl">
          <p className="inline-flex items-center gap-2 rounded-full border border-brand/40 bg-brand/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-brand">
            London commercial contractor
          </p>
          <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.03] tracking-tight text-balance sm:text-5xl lg:text-6xl xl:text-7xl">
            Professional Flooring, Carpentry &amp; Refurbishment Solutions
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/80 sm:text-xl">
            {company.name} delivers compliant, high-quality flooring,
            carpentry, refurbishment and maintenance works for commercial and
            public-sector clients across London and the surrounding areas.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button
              nativeButton={false}
            render={<Link href="/request-a-quote" />}
              size="lg"
              className="bg-brand font-semibold text-brand-foreground hover:bg-brand/90"
            >
              Request a Quote
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              nativeButton={false}
            render={<Link href="/services" />}
              size="lg"
              variant="outline"
              className="border-primary-foreground/25 bg-transparent font-semibold text-primary-foreground hover:bg-primary-foreground/10"
            >
              Explore Our Services
            </Button>
          </div>

          <dl className="mt-14 grid max-w-xl grid-cols-2 gap-x-8 gap-y-6 border-t border-primary-foreground/15 pt-8 sm:grid-cols-3">
            <div>
              <dt className="text-xs font-medium uppercase tracking-widest text-primary-foreground/50">
                Trades
              </dt>
              <dd className="mt-1 font-display text-lg font-bold">
                Flooring &amp; Carpentry
              </dd>
            </div>
            <div>
              <dt className="text-xs font-medium uppercase tracking-widest text-primary-foreground/50">
                Sectors
              </dt>
              <dd className="mt-1 font-display text-lg font-bold">
                Commercial &amp; Public
              </dd>
            </div>
            <div>
              <dt className="text-xs font-medium uppercase tracking-widest text-primary-foreground/50">
                Coverage
              </dt>
              <dd className="mt-1 font-display text-lg font-bold">
                London &amp; Surrounds
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  )
}
