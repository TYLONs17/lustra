import { useState, useEffect } from "react";

const MOBILE_BREAKPOINT = 768;

export function useIsMobile(): boolean {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window === "undefined") return; // SSR guard

    const checkIsMobile = () => setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);

    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);

    // Initial check
    checkIsMobile();

    // Listen for changes
    mql.addEventListener("change", checkIsMobile);

    return () => mql.removeEventListener("change", checkIsMobile);
  }, []);

  return isMobile;
}
