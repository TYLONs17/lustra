"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { forwardRef, useTransition } from "react";
import { cn } from "@/lib/utils";

interface NavLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  className?: string;
  activeClassName?: string;
  pendingClassName?: string;
  exact?: boolean; // match exact path
  children: React.ReactNode;
}

const NavLink = forwardRef<HTMLAnchorElement, NavLinkProps>(
  ({ href, className, activeClassName, pendingClassName, exact = false, children, onClick, ...props }, ref) => {
    const pathname = usePathname();
    const router = useRouter();
    const [isPending, startTransition] = useTransition();

    // Determine if the link is active
    const isActive = exact ? pathname === href : pathname?.startsWith(href);

    // Handle click to start transition (optional)
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (onClick) onClick(e);
      startTransition(() => {
        router.prefetch(href); // optional: prefetch on click
      });
    };

    return (
      <Link
        href={href}
        ref={ref}
        className={cn(
          className,
          isActive && activeClassName,
          isPending && pendingClassName
        )}
        onClick={handleClick}
        {...props}
      >
        {children}
      </Link>
    );
  }
);

NavLink.displayName = "NavLink";

export { NavLink };
