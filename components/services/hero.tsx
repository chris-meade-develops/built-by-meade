'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight, CheckCircle, Clock, Users, Trophy } from 'lucide-react'
import Link from 'next/link'

const stats = [
  { icon: Users, label: 'Happy Clients', value: '50+' },
  { icon: Clock, label: 'Years Experience', value: '5+' },
  { icon: Trophy, label: 'Projects Completed', value: '100+' },
  { icon: CheckCircle, label: 'Success Rate', value: '100%' },
]

export function ServicesHero() {
  return (
    <section className="relative py-20 sm:py-24 lg:py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full">
          <div className="w-full h-full bg-grid-pattern opacity-20" />
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            ✨ Proven Web Development Process
          </div>

          {/* Headline */}
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            From Concept to <span className="text-primary">Launch</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-3xl mx-auto sm:text-xl">
            Our proven 6-step web development process transforms Surrey
            businesses through modern, performance-optimized websites that
            actually drive results.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button asChild size="lg" className="text-base px-8">
              <Link href="/contact">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="ghost" size="lg" className="text-base">
              <Link href="#case-studies">View Case Studies</Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 gap-8 sm:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-3">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-foreground">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
