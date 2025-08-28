'use client'

import * as React from 'react'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

import { Switch } from '@/components/ui/switch'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="flex items-center space-x-2">
        <Sun className="h-4 w-4 text-muted-foreground" />
        <Switch disabled className="opacity-50" />
        <Moon className="h-4 w-4 text-muted-foreground" />
      </div>
    )
  }

  const isDark = theme === 'dark'

  return (
    <div className="flex items-center space-x-2">
      <Sun
        className={`h-4 w-4 transition-colors ${
          isDark ? 'text-muted-foreground' : 'text-primary'
        }`}
      />
      <Switch
        checked={isDark}
        onCheckedChange={(checked) => setTheme(checked ? 'dark' : 'light')}
        aria-label="Toggle dark mode"
      />
      <Moon
        className={`h-4 w-4 transition-colors ${
          isDark ? 'text-primary' : 'text-muted-foreground'
        }`}
      />
    </div>
  )
}
