import type { Metadata } from 'next'
import { HeroSection } from '@/components/home/hero-section'
import { IntroSection } from '@/components/home/intro-section'
import { AccreditationsStrip } from '@/components/home/accreditations-strip'
import { ServicesSection } from '@/components/home/services-section'
import { SectorsSection } from '@/components/home/sectors-section'
import { WhyUsSection } from '@/components/home/why-us-section'
import { CapabilitySection } from '@/components/home/capability-section'
import { CtaBand } from '@/components/cta-band'

export const metadata: Metadata = {
  title:
    'Commercial Flooring, Carpentry & Refurbishment Contractor in London',
  description:
    'New Flooring Process Ltd delivers commercial flooring installation, subfloor preparation, carpentry, refurbishment, fit-out, planned maintenance and responsive repairs across London for commercial and public-sector clients.',
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <IntroSection />
      <AccreditationsStrip />
      <ServicesSection />
      <SectorsSection />
      <WhyUsSection />
      <CapabilitySection />
      <CtaBand />
    </>
  )
}
