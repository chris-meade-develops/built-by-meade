import { Button } from '@/components/ui/button'
import { getServices } from '@/constants/services'
import { ArrowRight, CheckCircle } from 'lucide-react'
import Link from 'next/link'

export function Services() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Professional Web Development Services
          </h2>
          <p className="mt-4 text-lg text-muted-foreground sm:text-xl max-w-3xl mx-auto">
            Comprehensive digital solutions to help your Surrey business grow
            online. From design to development to optimization.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {getServices().map((service, index) => {
            const IconComponent = service.icon
            return (
              <div
                key={index}
                className="relative group bg-card border rounded-lg p-8 shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-1"
              >
                {/* Icon */}
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-6">
                  <IconComponent className={`h-6 w-6 ${service.color}`} />
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-foreground">
                    {service.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-sm text-muted-foreground"
                      >
                        <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              </div>
            )
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-muted/50 rounded-2xl p-8 sm:p-12">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Let's discuss your project and see how we can help your business
              grow online.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-base px-8">
                <Link href="/contact">
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                variant="outline"
                asChild
                size="lg"
                className="text-base px-8"
              >
                <Link href="/services">View Our Process & Case Studies</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
