import { ContactForm } from '@/components/form'
import { PageTransition } from '@/components/page-transition'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact | Chris Meade Web Development | Surrey',
  description:
    'Get in touch with Chris Meade Web Development. Professional web development services in Surrey and the South East. Free consultation available.',
}

export default function ContactPage() {
  return (
    <PageTransition>
      <main className="min-h-screen bg-background">
        {/* Hero Section with Contact Form */}
        <section className="relative py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Let's Work
                <span className="text-primary"> Together</span>
              </h1>
              <p className="mt-6 text-lg text-muted-foreground sm:text-xl lg:text-xl max-w-3xl mx-auto">
                Ready to transform your digital presence? Tell us about your
                project and we'll get back to you within 24 hours with a
                detailed proposal.
              </p>
            </div>

            {/* Contact Form */}
            <div className="max-w-4xl mx-auto">
              <ContactForm />
            </div>

            {/* Additional Contact Information */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="space-y-2">
                <h3 className="font-semibold text-foreground">
                  Quick Response
                </h3>
                <p className="text-sm text-muted-foreground">
                  We typically respond to all inquiries within 24 hours
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-foreground">
                  Free Consultation
                </h3>
                <p className="text-sm text-muted-foreground">
                  All Surrey-based businesses get a free initial consultation
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-foreground">Local Service</h3>
                <p className="text-sm text-muted-foreground">
                  Based in Surrey, serving the South East with personal
                  attention
                </p>
              </div>
            </div>
          </div>

          {/* Background Pattern */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute left-1/2 top-0 ml-[-38rem] h-[25rem] w-[81.25rem] dark:[mask-image:linear-gradient(white,transparent)]">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 opacity-40 [mask-image:radial-gradient(farthest-side_at_top,white,transparent)]"></div>
            </div>
          </div>
        </section>
      </main>
    </PageTransition>
  )
}
