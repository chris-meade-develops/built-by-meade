import Link from 'next/link'
import { Mail, MapPin } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-muted/30 border-t">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="md:col-span-2 space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-foreground">
                  Chris Meade Web Development
                </h3>
                <p className="text-sm text-muted-foreground mt-2 max-w-md">
                  Professional web development services for Surrey businesses.
                  Creating modern, fast, and effective websites that drive
                  results.
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>Surrey, United Kingdom</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Mail className="h-4 w-4" />
                  <Link
                    href="mailto:hello@chrismeade.dev"
                    className="hover:text-primary transition-colors"
                  >
                    hello@chrismeade.dev
                  </Link>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-4">
                Quick Links
              </h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/services"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-4">
                Services
              </h4>
              <ul className="space-y-2">
                <li>
                  <span className="text-sm text-muted-foreground">
                    Custom Web Development
                  </span>
                </li>
                <li>
                  <span className="text-sm text-muted-foreground">
                    UI/UX Design
                  </span>
                </li>
                <li>
                  <span className="text-sm text-muted-foreground">
                    SEO & Performance
                  </span>
                </li>
                <li>
                  <span className="text-sm text-muted-foreground">
                    CMS Migration
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
            <p className="text-xs text-muted-foreground">
              © {currentYear} Chris Meade Web Development. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link
                href="/privacy"
                className="text-xs text-muted-foreground hover:text-primary transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-xs text-muted-foreground hover:text-primary transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
