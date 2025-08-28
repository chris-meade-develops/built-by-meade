'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight, CheckCircle, Calendar, MessageSquare } from 'lucide-react'
import Link from 'next/link'

const guarantees = [
  'Free initial consultation',
  'Transparent pricing',
  'Regular progress updates',
  'Post-launch support included',
]

export function ServicesCallToAction() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="bg-background border rounded-3xl p-8 sm:p-12 lg:p-16 shadow-sm">
          <div className="text-center">
            {/* Header */}
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl mb-6">
              Ready to Transform Your{' '}
              <span className="text-primary">Online Presence?</span>
            </h2>
            <p className="text-lg text-muted-foreground sm:text-xl max-w-3xl mx-auto mb-12">
              Let's discuss how our proven web development process can help your
              Surrey business grow online. Get started with a free consultation
              today.
            </p>

            {/* Guarantees */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {guarantees.map((guarantee, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 justify-center sm:justify-start"
                >
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-foreground font-medium">
                    {guarantee}
                  </span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="text-base px-8 w-full sm:w-auto"
              >
                <Link href="/contact">
                  <MessageSquare className="mr-2 h-5 w-5" />
                  Start Your Project
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="text-base px-8 w-full sm:w-auto"
              >
                <Link href="/contact">
                  <Calendar className="mr-2 h-5 w-5" />
                  Book Free Consultation
                </Link>
              </Button>
            </div>

            {/* Contact Info */}
            <div className="mt-12 pt-8 border-t border-border">
              <p className="text-muted-foreground mb-4">
                Have questions? Get in touch directly:
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm">
                <a
                  href="mailto:chris@builtbymeade.com"
                  className="text-primary hover:text-primary/80 transition-colors font-medium"
                >
                  chris@builtbymeade.com
                </a>
                <div className="hidden sm:block w-1 h-1 rounded-full bg-muted-foreground" />
                <span className="text-muted-foreground">
                  Serving Godstone, Surrey & the South East
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
