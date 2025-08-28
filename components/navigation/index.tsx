'use client'

import * as React from 'react'
import Link from 'next/link'
import { Menu } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { Separator } from '@/components/ui/separator'
import { ThemeToggle } from '@/components/theme-toggle'
import { useIsMobile } from '@/hooks/use-mobile'
import { getNavItems } from '@/constants/navigation'

export function NavigationBar() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [mounted, setMounted] = React.useState(false)

  const navigationItems = getNavItems()

  React.useEffect(() => {
    setMounted(true)
  }, [])

  const mobile = useIsMobile()

  React.useEffect(() => {
    if (!mobile) setIsOpen(false)
  }, [mobile])

  // Prevent hydration mismatch by not rendering interactive parts until mounted
  if (!mounted) {
    return (
      <header className="sticky top-0 z-50  w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex h-16 items-center justify-between px-4 md:px-6 max-w-7xl mx-auto">
          {/* Logo/Brand */}
          <Link
            href="/"
            className="font-code flex items-center space-x-2 text-xl font-bold text-foreground hover:text-foreground/80 transition-colors"
          >
            <span>&lt;BuiltByMeade/&gt;</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex items-center space-x-8">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-base font-medium text-foreground/80 hover:text-foreground transition-colors hover:underline underline-offset-4"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA Button */}
            <Button asChild className="ml-4">
              <Link href="/contact">Get Started</Link>
            </Button>

            {/* Theme Toggle */}
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button (Static) */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
      </header>
    )
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 items-center justify-between px-4 md:px-6 max-w-7xl mx-auto">
        {/* Logo/Brand */}
        <Link
          href="/"
          className="font-code flex items-center space-x-2 text-xl font-bold   text-foreground hover:text-foreground/80 transition-colors"
        >
          <span>&lt;BuiltByMeade/&gt;</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <nav className="flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-base font-medium text-foreground/80 hover:text-foreground transition-colors hover:underline underline-offset-4"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <Button asChild className="ml-4">
            <Link href="/contact">Get Started</Link>
          </Button>

          {/* Theme Toggle */}
          <ThemeToggle />
        </div>

        {/* Mobile Navigation */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-full sm:w-[400px] md:w-[450px] p-6"
            >
              <div className="flex flex-col space-y-6 mt-2">
                {/* Mobile Brand */}
                <SheetTitle>
                  <div className="px-0">
                    <Link
                      href="/"
                      className="text-xl font-bold text-foreground"
                      onClick={() => setIsOpen(false)}
                    >
                      Chris Meade Web Development
                    </Link>
                  </div>
                </SheetTitle>

                <Separator />

                {/* Mobile Navigation Links */}
                <nav className="flex flex-col space-y-3">
                  {navigationItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="px-4 py-3 text-base font-medium text-foreground/80 hover:text-foreground hover:bg-accent rounded-md transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}

                  {/* Mobile CTA Button */}
                  <div className="pt-6 px-4">
                    <Button
                      asChild
                      className="w-full h-12"
                      onClick={() => setIsOpen(false)}
                    >
                      <Link href="/contact">Get Started</Link>
                    </Button>
                  </div>
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
