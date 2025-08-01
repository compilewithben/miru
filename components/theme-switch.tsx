"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function ThemeSwitch() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const isDark = theme === "dark"

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative flex items-center w-14 h-7 bg-muted rounded-full p-1 transition-all duration-300 hover:bg-muted/80"
      aria-label="Toggle theme"
    >
      <div
        className={`relative flex items-center justify-center w-5 h-5 bg-background rounded-full shadow-sm transition-all duration-300 ${
          isDark ? "translate-x-7" : "translate-x-0"
        }`}
      >
        {isDark ? (
          <Moon className="w-3 h-3 text-foreground" />
        ) : (
          <Sun className="w-3 h-3 text-foreground" />
        )}
      </div>
      <div className="absolute inset-0 flex items-center justify-between px-2 pointer-events-none">
        <Sun className={`w-3 h-3 transition-opacity ${isDark ? "opacity-30" : "opacity-0"}`} />
        <Moon className={`w-3 h-3 transition-opacity ${isDark ? "opacity-0" : "opacity-30"}`} />
      </div>
    </button>
  )
}