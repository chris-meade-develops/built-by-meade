'use client'

import { Button } from '@/components/ui/button'
import {
  ExternalLink,
  ArrowRight,
  TrendingUp,
  Clock,
  Users,
  Zap,
  Star,
  Quote,
} from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const caseStudies = [
  {
    id: 1,
    title: 'Handsdown Academies',
    subtitle: 'Martial Arts Gym Chain',
    description:
      'Complete website modernization and CMS migration for a growing martial arts academy chain.',
    image: {
      src: '/handsdown-site-screenshot.webp',
      fallback: '/handsdown-site-screenshot.png',
      alt: 'Handsdown Academies website redesign',
    },
    link: 'https://handsdownacademies.co.uk',
    challenge:
      "Handsdown Academies had an outdated WordPress website that was difficult to manage and didn't reflect their professional brand. Content updates were slow and the site wasn't optimized for mobile users.",
    solution:
      'We completely redesigned the website with a modern, responsive design and migrated from WordPress to Strapi CMS for better content management. The new site features class schedules, instructor profiles, and an improved user experience.',
    results: [
      { metric: 'Page Load Speed', improvement: '60% faster', icon: Zap },
      {
        metric: 'Mobile Experience',
        improvement: '100% responsive',
        icon: Users,
      },
      { metric: 'Content Updates', improvement: '5x easier', icon: Clock },
      {
        metric: 'Brand Perception',
        improvement: 'Significantly improved',
        icon: TrendingUp,
      },
    ],
    technologies: [
      'React',
      'Strapi CMS',
      'Modern Hosting',
      'Performance Optimization',
    ],
    testimonial: {
      text: 'Chris transformed our outdated website into a modern, professional platform. The migration from WordPress to Strapi has made content management so much easier for our team. The new design perfectly represents our brand and the performance improvements are remarkable.',
      author: 'Kalon Page',
      position: 'Director, Handsdown Academies',
      rating: 5,
    },
  },
  {
    id: 2,
    title: 'The Collar Crew',
    subtitle: 'Dog Walking Service',
    description:
      'Platform migration and SEO optimization that tripled online inquiries for a local dog walking business.',
    image: {
      src: '/collar-crew-screenshot.webp',
      fallback: '/collar-crew-screenshot.png',
      alt: 'The Collar Crew website redesign',
    },
    link: 'https://thecollarcrew.co.uk',
    challenge:
      "The Collar Crew was struggling with a slow, outdated GoDaddy/WordPress setup that wasn't generating leads. Their website wasn't ranking well in local searches and the design didn't inspire confidence in potential customers.",
    solution:
      'We migrated from the legacy WordPress setup to a modern static site optimized for speed and SEO. The new design focuses on local search optimization, customer testimonials, and clear calls-to-action to convert visitors into customers.',
    results: [
      {
        metric: 'Online Inquiries',
        improvement: '3x increase',
        icon: TrendingUp,
      },
      { metric: 'Page Load Speed', improvement: '70% faster', icon: Zap },
      {
        metric: 'Local Search Ranking',
        improvement: 'Top 3 positions',
        icon: Users,
      },
      {
        metric: 'Customer Conversion',
        improvement: '40% improvement',
        icon: Clock,
      },
    ],
    technologies: [
      'Static Site Generation',
      'SEO Optimization',
      'Local Business Schema',
      'Performance Optimization',
    ],
    testimonial: {
      text: 'The difference Chris made to our online presence is incredible. Moving away from our old GoDaddy setup to this new website has brought us so many new customers. The SEO improvements alone have tripled our online inquiries!',
      author: 'Tom Livermore',
      position: 'Owner, The Collar Crew',
      rating: 5,
    },
  },
]

export function CaseStudies() {
  return (
    <section id="case-studies" className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Real Results, Real Impact
          </h2>
          <p className="mt-4 text-lg text-muted-foreground sm:text-xl max-w-3xl mx-auto">
            See how our proven process has transformed Surrey businesses and
            delivered measurable results.
          </p>
        </div>

        {/* Case Studies */}
        <div className="space-y-24">
          {caseStudies.map((study, index) => (
            <div
              key={study.id}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
            >
              {/* Project Image */}
              <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="relative group">
                  <div className="relative w-full rounded-2xl overflow-hidden border shadow-lg">
                    <Image
                      src={study.image.src}
                      alt={study.image.alt}
                      width={600}
                      height={400}
                      className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 600px"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement
                        if (target.src.includes('.webp')) {
                          target.src =
                            study.image.fallback ||
                            study.image.src.replace('.webp', '.png')
                        }
                      }}
                    />
                  </div>
                  <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-2xl" />
                </div>
              </div>

              {/* Case Study Content */}
              <div
                className={`space-y-8 ${index % 2 === 1 ? 'lg:order-1' : ''}`}
              >
                {/* Header */}
                <div>
                  <div className="inline-block px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full mb-4">
                    Case Study {study.id}
                  </div>
                  <h3 className="text-3xl font-bold text-foreground mb-2">
                    {study.title}
                  </h3>
                  <p className="text-lg text-primary font-medium mb-4">
                    {study.subtitle}
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    {study.description}
                  </p>
                </div>

                {/* Challenge & Solution */}
                <div className="space-y-6">
                  <div className="bg-muted/50 rounded-lg p-6">
                    <h4 className="font-semibold text-foreground mb-2">
                      The Challenge
                    </h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {study.challenge}
                    </p>
                  </div>

                  <div className="bg-primary/5 rounded-lg p-6">
                    <h4 className="font-semibold text-foreground mb-2">
                      Our Solution
                    </h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {study.solution}
                    </p>
                  </div>
                </div>

                {/* Results */}
                <div>
                  <h4 className="font-semibold text-foreground mb-4">
                    Key Results
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {study.results.map((result, resultIndex) => (
                      <div
                        key={resultIndex}
                        className="flex items-center gap-3 bg-background border rounded-lg p-4"
                      >
                        <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10">
                          <result.icon className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-foreground">
                            {result.metric}
                          </div>
                          <div className="text-xs text-primary font-semibold">
                            {result.improvement}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="font-semibold text-foreground mb-3">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {study.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="inline-flex items-center px-3 py-1 text-xs font-medium bg-muted text-muted-foreground rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Testimonial */}
                <div className="bg-card border rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <div className="flex space-x-1">
                      {[...Array(study.testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                    <Quote className="h-4 w-4 text-muted-foreground ml-auto" />
                  </div>
                  <blockquote className="text-foreground italic leading-relaxed mb-4">
                    "{study.testimonial.text}"
                  </blockquote>
                  <footer className="text-sm">
                    <div className="font-semibold text-foreground">
                      {study.testimonial.author}
                    </div>
                    <div className="text-muted-foreground">
                      {study.testimonial.position}
                    </div>
                  </footer>
                </div>

                {/* CTA */}
                <Button asChild variant="outline" className="w-full sm:w-auto">
                  <Link
                    href={study.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Live Website
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-8 sm:p-12">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Be Our Next Success Story?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join these successful Surrey businesses and transform your online
              presence with our proven development process.
            </p>
            <Button asChild size="lg" className="text-base px-8">
              <Link href="/contact">
                Start Your Project Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
