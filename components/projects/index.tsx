'use client'

import { Button } from '@/components/ui/button'
import { Star, ExternalLink, ArrowRight, Quote } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { getProjects } from '@/constants/projects'

export function Projects() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Recent Projects
          </h2>
          <p className="mt-4 text-lg text-muted-foreground sm:text-xl max-w-3xl mx-auto">
            Real results for real businesses. See how we've helped Surrey
            companies transform their digital presence and grow online.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-16">
          {getProjects().map((project, index) => (
            <div
              key={project.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Project Image */}
              <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="relative group">
                  {/* Project Screenshot */}
                  <div className="relative w-full rounded-lg overflow-hidden border shadow-lg">
                    <Image
                      src={project.image.src}
                      alt={project.image.alt}
                      width={584}
                      height={0}
                      className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 584px"
                      priority={index === 0}
                      onError={(e) => {
                        // Fallback to PNG if WebP fails
                        const target = e.target as HTMLImageElement
                        if (target.src.includes('.webp')) {
                          target.src =
                            project.image.fallback ||
                            project.image.src.replace('.webp', '.png')
                        }
                      }}
                    />
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-lg"></div>
                </div>
              </div>

              {/* Project Content */}
              <div
                className={`space-y-6 ${index % 2 === 1 ? 'lg:order-1' : ''}`}
              >
                <div>
                  <div className="inline-block px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full mb-4">
                    {project.category}
                  </div>
                  <h3 className="text-2xl font-bold text-foreground sm:text-3xl">
                    {project.title}
                  </h3>
                  <p className="mt-4 text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Services */}
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-3">
                    Services Provided:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.services.map((service, serviceIndex) => (
                      <span
                        key={serviceIndex}
                        className="inline-flex items-center px-3 py-1 text-xs font-medium bg-muted text-muted-foreground rounded-full"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Review */}
                <div className="bg-card border rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <div className="flex space-x-1">
                      {[...Array(project.review.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                    <Quote className="h-4 w-4 text-muted-foreground ml-auto" />
                  </div>
                  <blockquote className="text-foreground italic leading-relaxed mb-4">
                    "{project.review.text}"
                  </blockquote>
                  <footer className="text-sm">
                    <div className="font-semibold text-foreground">
                      {project.review.author}
                    </div>
                    <div className="text-muted-foreground">
                      {project.review.position}
                    </div>
                  </footer>
                </div>

                {/* CTA */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button asChild variant="outline" className="text-sm">
                    <Link
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Live Site
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-background border rounded-2xl p-8 sm:p-12 shadow-sm">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready for Your Success Story?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join these successful Surrey businesses and transform your online
              presence. Let's discuss how we can help your business grow.
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
