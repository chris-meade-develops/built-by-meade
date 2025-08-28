'use client'

import { Button } from '@/components/ui/button'
import {
  Users,
  CheckCircle,
  ArrowRight,
  MapPin,
  Clock,
  Award,
} from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { getProcessSteps, getSkills } from '@/constants/about'

export function About() {
  const processSteps = getProcessSteps()
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            About Chris Meade
          </h2>
          <p className="mt-4 text-lg text-muted-foreground sm:text-xl max-w-3xl mx-auto">
            Passionate about helping Surrey businesses succeed online with
            modern web development solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-20">
          {/* About Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground">
                Your Local Web Development Partner
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                With over 5 years of experience in web development, I specialize
                in helping small and medium businesses in Surrey and the South
                East transform their digital presence. My journey began with a
                passion for combining creative design with cutting-edge
                technology to solve real business problems.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I believe that every business deserves a professional, fast, and
                effective website that not only looks great but actually drives
                results. That's why I focus on creating websites that are not
                just visually appealing, but also optimized for search engines,
                user experience, and conversions.
              </p>
            </div>

            {/* Location & Credentials */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-6">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-primary" />
                <div>
                  <div className="font-semibold text-sm">Based in</div>
                  <div className="text-sm text-muted-foreground">
                    Surrey, UK
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-primary" />
                <div>
                  <div className="font-semibold text-sm">Experience</div>
                  <div className="text-sm text-muted-foreground">5+ Years</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Award className="h-5 w-5 text-primary" />
                <div>
                  <div className="font-semibold text-sm">Projects</div>
                  <div className="text-sm text-muted-foreground">
                    50+ Completed
                  </div>
                </div>
              </div>
            </div>

            {/* Skills */}
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4">
                Technical Expertise
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {getSkills().map((skill, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden border shadow-lg">
              <Image
                src="/profile.webp"
                alt="Chris Meade - Web Developer"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
                priority
                onError={(e) => {
                  // Fallback to JPEG if WebP fails
                  const target = e.target as HTMLImageElement
                  if (target.src.includes('.webp')) {
                    target.src = '/profile.jpeg'
                  }
                }}
              />
            </div>
          </div>
        </div>

        {/* Development Process */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-foreground sm:text-3xl mb-4">
              My Development Process
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A proven methodology that ensures your project is delivered on
              time, within budget, and exceeds your expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => {
              const IconComponent = step.icon
              return (
                <div key={index} className="relative">
                  <div className="bg-card border rounded-lg p-6 text-center h-full">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-4">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <div className="text-sm font-medium text-primary mb-2">
                      Step {step.step}
                    </div>
                    <h4 className="text-lg font-semibold text-foreground mb-3">
                      {step.title}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Connection Line */}
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-border transform -translate-y-1/2 z-10" />
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* Why Choose Me */}
        <div className="bg-muted/50 rounded-2xl p-8 sm:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground sm:text-3xl mb-4">
              Why Choose a Local Developer?
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Working with a Surrey-based developer means better communication,
              local market understanding, and ongoing support you can rely on.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="w-12 h-12 rounded-lg bg-primary/10 mx-auto mb-4 flex items-center justify-center">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">
                Local Knowledge
              </h4>
              <p className="text-sm text-muted-foreground">
                Understanding of the Surrey market and local business needs
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 rounded-lg bg-primary/10 mx-auto mb-4 flex items-center justify-center">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">
                Personal Service
              </h4>
              <p className="text-sm text-muted-foreground">
                Direct communication and personalized attention to your project
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 rounded-lg bg-primary/10 mx-auto mb-4 flex items-center justify-center">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">
                Ongoing Support
              </h4>
              <p className="text-sm text-muted-foreground">
                Continued maintenance and updates to keep your site running
                smoothly
              </p>
            </div>
          </div>

          <div className="text-center">
            <Button asChild size="lg" className="text-base px-8">
              <Link href="/contact">
                Let's Work Together
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
