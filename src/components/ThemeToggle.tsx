"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // Set mounted to true on the next tick after the initial render
  React.useEffect(() => {
    setMounted(true);
  }, []);

  // IMPORTANT: Return a placeholder with the same dimensions 
  // to prevent layout shift, but don't render the logic yet.
  if (!mounted) {
    return <div className="w-9 h-9" aria-hidden="true" />;
  }

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="relative flex items-center justify-center w-9 h-9 rounded-md transition-all hover:scale-105 group"
    >
      <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-gold" />
      <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-gold" />
      
      <span className="absolute inset-0 rounded-md opacity-0 group-hover:opacity-100 transition-opacity bg-gold/15 blur-md" />
    </button>
  );
}