import { sectors } from '@/lib/site-data'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

export function SectorsSection() {
  return (
    <section className="border-y border-border bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Sectors we serve"
          title="Trusted across commercial and public-sector environments"
          description="We understand the compliance, programme and access requirements of the sectors we work in — and plan our works accordingly."
        />

        <div className="mt-14 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {sectors.map((sector, i) => (
            <Reveal key={sector.title} delay={(i % 4) * 60}>
              <div className="flex h-full flex-col bg-card p-7">
                <span className="font-display text-sm font-bold uppercase tracking-wider text-brand">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-3 font-display text-lg font-bold tracking-tight text-card-foreground">
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
  )
}
