import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowRight, Code2, Palette, Zap } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="flex flex-col justify-center space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium bg-muted/50 w-fit">
              <Zap className="mr-2 h-4 w-4 text-primary" />
              Professional Web Development
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Build Your Digital
                <span className="text-primary"> Presence</span>
              </h1>

              {/* Subheading */}
              <p className="text-lg text-muted-foreground sm:text-xl lg:text-xl max-w-xl">
                Custom websites, e-commerce solutions, and digital marketing
                that help local businesses grow online.
              </p>
            </div>

            {/* Features */}
            <div className="sm:flex gap-4 py-4">
              <div className="flex items-center space-x-2">
                <Palette className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">Modern Design</span>
              </div>
              <div className="flex items-center space-x-2">
                <Code2 className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">Custom Development</span>
              </div>

              <div className="flex items-center space-x-2">
                <Zap className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">Fast Performance</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="text-base px-8 py-3">
                <Link href="/contact">
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>

              <Button
                variant="outline"
                asChild
                size="lg"
                className="text-base px-8 py-3"
              >
                <Link href="/services">View Our Services</Link>
              </Button>
            </div>

            {/* Social Proof */}
            <div className="pt-4">
              <p className="text-sm text-muted-foreground mb-3">
                Trusted by businesses
              </p>
              <div className="flex items-center space-x-6 text-xs text-muted-foreground">
                <span>✓ 5+ Years Experience</span>
                <span>✓ Local Surrey Business</span>
                <span>✓ Fast Turnaround</span>
              </div>
            </div>
          </div>

          {/* Right Content - Image/Illustration */}
          <div className="relative">
            <div className="relative mx-auto">
              {/* Website SVG Illustration - Large and Clean */}
              <div className="flex h-full items-start justify-center pt-4">
                <svg
                  viewBox="0 0 200 140"
                  className="w-full h-full"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Browser Window */}
                  <rect
                    x="10"
                    y="5"
                    width="180"
                    height="130"
                    rx="8"
                    fill="#f8fafc"
                    stroke="#e2e8f0"
                    strokeWidth="2"
                  />

                  {/* Browser Header */}
                  <rect
                    x="10"
                    y="5"
                    width="180"
                    height="25"
                    rx="8"
                    fill="#f1f5f9"
                  />

                  {/* Browser Dots */}
                  <circle cx="25" cy="17.5" r="3" fill="#ef4444" />
                  <circle cx="35" cy="17.5" r="3" fill="#f59e0b" />
                  <circle cx="45" cy="17.5" r="3" fill="#10b981" />

                  {/* Address Bar */}
                  <rect
                    x="60"
                    y="12"
                    width="120"
                    height="11"
                    rx="5"
                    fill="#e2e8f0"
                  />

                  {/* Page Content - Header */}
                  <rect
                    x="25"
                    y="40"
                    width="150"
                    height="8"
                    rx="2"
                    fill="var(--primary)"
                  />

                  {/* Page Content - Navigation */}
                  <rect
                    x="25"
                    y="55"
                    width="40"
                    height="4"
                    rx="2"
                    fill="#6366f1"
                  />
                  <rect
                    x="70"
                    y="55"
                    width="35"
                    height="4"
                    rx="2"
                    fill="#8b5cf6"
                  />
                  <rect
                    x="110"
                    y="55"
                    width="30"
                    height="4"
                    rx="2"
                    fill="#06b6d4"
                  />

                  {/* Page Content - Main Section */}
                  <rect
                    x="25"
                    y="70"
                    width="80"
                    height="50"
                    rx="4"
                    fill="#dbeafe"
                  />

                  {/* Page Content - Sidebar */}
                  <rect
                    x="115"
                    y="70"
                    width="60"
                    height="20"
                    rx="4"
                    fill="#f3e8ff"
                  />
                  <rect
                    x="115"
                    y="100"
                    width="60"
                    height="20"
                    rx="4"
                    fill="#ecfdf5"
                  />

                  {/* Floating Elements */}
                  <circle
                    cx="160"
                    cy="45"
                    r="8"
                    fill="#3b82f6"
                    fillOpacity="0.7"
                  />
                  <circle
                    cx="40"
                    cy="125"
                    r="6"
                    fill="#10b981"
                    fillOpacity="0.7"
                  />
                </svg>
              </div>
            </div>
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
  )
}
