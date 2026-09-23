import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { projects } from '@/lib/site-data'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

export function CapabilitySection() {
  const featured = projects.slice(0, 3)

  return (
    <section className="border-t border-border bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Our work"
            title="Capability across every sector we serve"
            description="A selection of representative works. Project imagery and details are placeholders ready to be replaced with your own portfolio."
          />
          <Button
            nativeButton={false}
            render={<Link href="/projects" />}
            variant="outline"
            className="shrink-0 bg-transparent"
          >
            View all projects
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {featured.map((project, i) => (
            <Reveal key={project.title} delay={i * 90}>
              <article className="group overflow-hidden rounded-xl border border-border bg-card">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={project.image || '/placeholder.svg'}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-widest text-brand">
                    {project.sector}
                  </p>
                  <h3 className="mt-2 font-display text-lg font-bold tracking-tight text-card-foreground">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {project.scope}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
