import type { Metadata } from 'next'
import Image from 'next/image'
import { MapPin } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { Reveal } from '@/components/reveal'
import { CtaBand } from '@/components/cta-band'
import { projects } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'A selection of flooring, carpentry and refurbishment projects delivered by New Flooring Process Ltd across commercial and public-sector environments in London.',
}

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        breadcrumb="Projects"
        eyebrow="Our work"
        title="Projects delivered across every sector"
        description="Representative examples of our flooring, carpentry and refurbishment work. Imagery and details shown here are placeholders, ready to be replaced with your own portfolio."
      />

      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            {projects.map((project, i) => (
              <Reveal key={project.title} delay={(i % 2) * 90}>
                <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={project.image || '/placeholder.svg'}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute left-4 top-4 rounded-full bg-brand px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand-foreground">
                      {project.sector}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-7">
                    <h2 className="font-display text-xl font-bold tracking-tight text-card-foreground">
                      {project.title}
                    </h2>
                    <p className="mt-1 inline-flex items-center gap-1.5 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4 text-brand" />
                      {project.location}
                    </p>
                    <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {project.summary}
                    </p>
                    <dl className="mt-6 space-y-3 border-t border-border pt-5 text-sm">
                      <div>
                        <dt className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                          Scope
                        </dt>
                        <dd className="mt-1 text-card-foreground">
                          {project.scope}
                        </dd>
                      </div>
                      <div>
                        <dt className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                          Value
                        </dt>
                        <dd className="mt-1 text-card-foreground">
                          {project.value}
                        </dd>
                      </div>
                    </dl>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
