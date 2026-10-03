"use client";

import { ArrowUpRight, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { nav } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu whenever the route changes.
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
  }

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header className="sticky top-0 z-50 px-3 pt-3 sm:px-4">
      <div
        className={cn(
          "mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 rounded-full px-3 pl-5 transition-all duration-500",
          scrolled || open
            ? "glass shadow-[0_10px_40px_-15px_rgb(4_34_92/0.3)]"
            : "border border-transparent bg-transparent",
        )}
      >
        <Link href="/" className="shrink-0" aria-label="Branding Korner home">
          <Image
            src="/brand/logo.png"
            alt="Branding Korner Global Consult Limited"
            width={504}
            height={238}
            priority
            className="h-11 w-auto lg:h-12"
          />
        </Link>

        {/* Tubelight-style nav: active pill slides between items with a glow on top */}
        <nav className="hidden items-center gap-1 rounded-full border border-brand-100/80 bg-white/70 p-1 backdrop-blur md:flex">
          {nav.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative rounded-full px-5 py-2 text-sm font-semibold transition-colors",
                  active ? "text-brand-700" : "text-ink/60 hover:text-brand-700",
                )}
              >
                {item.label}
                {active && (
                  <motion.span
                    layoutId="tubelight"
                    className="absolute inset-0 -z-10 rounded-full bg-brand-50"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  >
                    <span className="absolute -top-1 left-1/2 h-1 w-8 -translate-x-1/2 rounded-t-full bg-brand-600">
                      <span className="absolute -top-2 -left-2 h-6 w-12 rounded-full bg-brand-500/25 blur-md" />
                      <span className="absolute -top-1 h-6 w-8 rounded-full bg-brand-500/25 blur-md" />
                      <span className="absolute top-0 left-2 h-4 w-4 rounded-full bg-brand-500/25 blur-sm" />
                    </span>
                  </motion.span>
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <Button asChild size="sm" className="shine h-11 px-5">
            <Link href="/contact">
              Get started <ArrowUpRight />
            </Link>
          </Button>
        </div>

        <button
          type="button"
          className="grid size-11 place-items-center rounded-full border border-brand-100 bg-white text-brand-900 md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="glass mx-auto mt-2 flex max-w-7xl flex-col gap-1 rounded-3xl p-3 md:hidden"
          >
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-2xl px-4 py-3 text-base font-semibold",
                  isActive(item.href) ? "bg-brand-50 text-brand-700" : "text-ink",
                )}
              >
                {item.label}
              </Link>
            ))}
            <Button asChild className="mt-2">
              <Link href="/contact">
                Get started <ArrowUpRight />
              </Link>
            </Button>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
