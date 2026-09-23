import Image from 'next/image'
import { CheckCircle2 } from 'lucide-react'
import { whyChooseUs } from '@/lib/site-data'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

export function WhyUsSection() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal className="order-2 lg:order-1">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border">
              <Image
                src="/images/about-team.png"
                alt="New Flooring Process Ltd site team reviewing plans on a project"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          <div className="order-1 lg:order-2">
            <SectionHeading
              eyebrow="Why choose us"
              title="A dependable partner for compliant, quality-driven works"
              description="We combine professional project management with directly managed trades to deliver reliable outcomes on every contract."
            />
            <ul className="mt-10 space-y-6">
              {whyChooseUs.map((item, i) => (
                <Reveal as="li" key={item.title} delay={i * 80}>
                  <div className="flex gap-4">
                    <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-brand" />
                    <div>
                      <h3 className="font-display text-lg font-bold tracking-tight text-foreground">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
