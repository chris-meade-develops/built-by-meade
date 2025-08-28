import type { Metadata } from 'next'
import { ServicesHero } from '@/components/services/hero'
import { ProcessSection } from '@/components/services/process'
import { ServiceDetails } from '@/components/services/details'
import { CaseStudies } from '@/components/services/case-studies'
import { ServicesCallToAction } from '@/components/services/cta'
import { PageTransition } from '@/components/page-transition'
import { ScrollAnimation } from '@/components/scroll-animation'

export const metadata: Metadata = {
  title:
    'Web Development Services | Process & Case Studies | Chris Meade Surrey',
  description:
    'Discover our proven web development process and see real case studies from Surrey businesses. From WordPress migrations to modern static sites, we deliver results that grow your business.',
  keywords:
    'web development process, case studies Surrey, WordPress migration, static site development, SEO optimization, website redesign Surrey, web developer process',
  openGraph: {
    title: 'Web Development Services & Case Studies | Chris Meade Surrey',
    description:
      'See how we help Surrey businesses transform their online presence through our proven web development process.',
    url: 'https://builtbymeade.com/services',
    type: 'website',
  },
}

export default function ServicesPage() {
  return (
    <PageTransition>
      <div className="min-h-screen">
        <ScrollAnimation delay={0.2} direction="up">
          <ServicesHero />
        </ScrollAnimation>
        <ScrollAnimation delay={0.2} direction="up">
          <ProcessSection />
        </ScrollAnimation>
        <ScrollAnimation delay={0.2} direction="up">
          <ServiceDetails />
        </ScrollAnimation>
        <ScrollAnimation delay={0.2} direction="up">
          <CaseStudies />
        </ScrollAnimation>
        <ServicesCallToAction />
      </div>
    </PageTransition>
  )
}
