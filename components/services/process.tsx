'use client'

import {
  MessageSquare,
  Search,
  Palette,
  Code,
  Rocket,
  TrendingUp,
  ArrowRight,
} from 'lucide-react'

const processSteps = [
  {
    number: '01',
    title: 'Discovery & Strategy',
    description:
      'We start by understanding your business goals, target audience, and technical requirements through detailed consultation.',
    icon: MessageSquare,
    details: [
      'Business requirements analysis',
      'Competitor research',
      'Technical architecture planning',
      'Project timeline & milestones',
    ],
  },
  {
    number: '02',
    title: 'Research & Planning',
    description:
      'Deep dive into your industry, competitors, and user behavior to create a data-driven strategy.',
    icon: Search,
    details: [
      'Market research & analysis',
      'User journey mapping',
      'Content strategy planning',
      'SEO keyword research',
    ],
  },
  {
    number: '03',
    title: 'Design & Prototyping',
    description:
      'Create stunning, user-focused designs that represent your brand and convert visitors into customers.',
    icon: Palette,
    details: [
      'Wireframing & mockups',
      'Brand-aligned visual design',
      'Mobile-first responsive design',
      'User experience optimization',
    ],
  },
  {
    number: '04',
    title: 'Development & Testing',
    description:
      'Build your website using modern technologies with a focus on performance, security, and maintainability.',
    icon: Code,
    details: [
      'Clean, semantic code',
      'Performance optimization',
      'Cross-browser testing',
      'Security best practices',
    ],
  },
  {
    number: '05',
    title: 'Launch & Migration',
    description:
      'Seamlessly deploy your new website with minimal downtime and comprehensive testing.',
    icon: Rocket,
    details: [
      'Pre-launch testing checklist',
      'DNS & hosting setup',
      'Content migration (if needed)',
      'SSL certificate installation',
    ],
  },
  {
    number: '06',
    title: 'Growth & Optimization',
    description:
      'Monitor performance and continuously optimize for better results and user experience.',
    icon: TrendingUp,
    details: [
      'Analytics setup & monitoring',
      'Performance tracking',
      'SEO optimization',
      'Ongoing support & maintenance',
    ],
  },
]

export function ProcessSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Our Development Process
          </h2>
          <p className="mt-4 text-lg text-muted-foreground sm:text-xl max-w-3xl mx-auto">
            A proven 6-step methodology that ensures your project is delivered
            on time, on budget, and exceeds your expectations.
          </p>
        </div>

        {/* Process Steps */}
        <div className="space-y-16 lg:space-y-24">
          {processSteps.map((step, index) => (
            <div
              key={step.number}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Step Content */}
              <div
                className={`space-y-6 ${index % 2 === 1 ? 'lg:order-2' : ''}`}
              >
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10">
                    <step.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-4xl font-bold text-primary/20">
                    {step.number}
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-foreground sm:text-3xl mb-4">
                    {step.title}
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Details List */}
                <ul className="space-y-3">
                  {step.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      <span className="text-foreground">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Step Visualization */}
              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="relative">
                  {/* Main Card */}
                  <div className="bg-card border rounded-2xl p-8 shadow-sm">
                    <div className="text-center">
                      <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-primary/10 mb-6">
                        <step.icon className="h-10 w-10 text-primary" />
                      </div>
                      <h4 className="text-xl font-semibold text-foreground mb-2">
                        Step {step.number.replace('0', '')}
                      </h4>
                      <p className="text-muted-foreground">{step.title}</p>
                    </div>
                  </div>

                  {/* Connection Arrow (except for last item) */}
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute -bottom-12 left-1/2 -translate-x-1/2">
                      <ArrowRight className="h-6 w-6 text-primary/40 rotate-90" />
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
