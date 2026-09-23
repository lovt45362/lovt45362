import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { company } from '@/lib/site-data'

export function CtaBand({
  title = 'Ready to discuss your project?',
  description = 'Tell us about your scope, programme and location. We will provide a clear, competitive quotation.',
}: {
  title?: string
  description?: string
}) {
  return (
    <section className="bg-brand">
      <div className="mx-auto flex max-w-7xl flex-col items-start gap-8 px-4 py-14 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8 lg:py-16">
        <div className="max-w-2xl">
          <h2 className="font-display text-2xl font-extrabold tracking-tight text-brand-foreground sm:text-3xl text-balance">
            {title}
          </h2>
          <p className="mt-3 text-base leading-relaxed text-brand-foreground/80">
            {description}
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button
            nativeButton={false}
            render={<Link href="/request-a-quote" />}
            size="lg"
            className="bg-primary font-semibold text-primary-foreground hover:bg-primary/90"
          >
            Request a Quote
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button
            render={<a href={`mailto:${company.email}`} />}
            size="lg"
            variant="outline"
            className="border-brand-foreground/30 bg-transparent font-semibold text-brand-foreground hover:bg-brand-foreground/10"
          >
            Email Us
          </Button>
        </div>
      </div>
    </section>
  )
}
