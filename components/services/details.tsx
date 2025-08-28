'use client'

import {
  Globe,
  Smartphone,
  Search,
  ShoppingCart,
  Database,
  Shield,
  Zap,
  Users,
} from 'lucide-react'

const services = [
  {
    title: 'Website Design & Development',
    description:
      'Custom websites built with modern technologies for optimal performance and user experience.',
    icon: Globe,
    features: [
      'Responsive mobile-first design',
      'Modern framework development',
      'Performance optimization',
      'Cross-browser compatibility',
    ],
  },
  {
    title: 'E-commerce Solutions',
    description:
      'Complete online stores with secure payment processing and inventory management.',
    icon: ShoppingCart,
    features: [
      'Secure payment gateways',
      'Inventory management',
      'Order tracking systems',
      'Customer account portals',
    ],
  },
  {
    title: 'CMS Migration & Setup',
    description:
      'Seamless migration from legacy systems to modern content management solutions.',
    icon: Database,
    features: [
      'WordPress to modern CMS',
      'Content preservation',
      'URL structure maintenance',
      'SEO preservation',
    ],
  },
  {
    title: 'SEO Optimization',
    description:
      'Comprehensive SEO strategies to improve your search engine rankings and visibility.',
    icon: Search,
    features: [
      'Technical SEO audits',
      'Local business optimization',
      'Content optimization',
      'Performance improvements',
    ],
  },
  {
    title: 'Mobile Optimization',
    description:
      'Ensure your website works perfectly on all devices with responsive design.',
    icon: Smartphone,
    features: [
      'Mobile-first approach',
      'Touch-friendly interfaces',
      'Fast loading speeds',
      'App-like experiences',
    ],
  },
  {
    title: 'Performance & Security',
    description:
      'Fast, secure websites that protect your business and provide excellent user experience.',
    icon: Shield,
    features: [
      'SSL certificate setup',
      'Security best practices',
      'Speed optimization',
      'Regular backups',
    ],
  },
]

const benefits = [
  {
    title: 'Increased Online Visibility',
    description:
      'Get found by more customers through improved SEO and local search optimization.',
    icon: Search,
  },
  {
    title: 'Better User Experience',
    description:
      'Keep visitors engaged with fast, responsive, and intuitive website design.',
    icon: Users,
  },
  {
    title: 'Improved Performance',
    description:
      'Lightning-fast websites that load quickly and rank better in search engines.',
    icon: Zap,
  },
]

export function ServiceDetails() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Comprehensive Web Solutions
          </h2>
          <p className="mt-4 text-lg text-muted-foreground sm:text-xl max-w-3xl mx-auto">
            From simple websites to complex e-commerce platforms, we provide
            everything you need to succeed online.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-background border rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-4">
                <service.icon className="h-6 w-6 text-primary" />
              </div>

              <h3 className="text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>

              <p className="text-muted-foreground mb-4 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-center gap-2 text-sm"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-foreground sm:text-3xl mb-4">
              Why Choose Our Services?
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We focus on delivering real business results, not just pretty
              websites.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mx-auto mb-4">
                  <benefit.icon className="h-8 w-8 text-primary" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">
                  {benefit.title}
                </h4>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
