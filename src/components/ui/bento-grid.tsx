/**
 * Bento Grid by Kokonut UI, from 21st.dev
 * (https://21st.dev/@kokonutd/components/bento-grid).
 * Adapted for Branding Korner: brand blues, light-only (dark: variants removed so
 * dark-mode visitors still see the white site), optional `href` to make cards links.
 */

import Link from "next/link";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export interface BentoItem {
  title: string;
  description: string;
  icon: ReactNode;
  status?: string;
  tags?: string[];
  meta?: string;
  cta?: string;
  colSpan?: 1 | 2;
  hasPersistentHover?: boolean;
  href?: string;
}

interface BentoGridProps {
  items: BentoItem[];
  className?: string;
}

function BentoCard({ item }: { item: BentoItem }) {
  return (
    <>
      <div
        className={cn(
          "absolute inset-0 transition-opacity duration-300",
          item.hasPersistentHover ? "opacity-100" : "opacity-0 group-hover:opacity-100",
        )}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgb(10_91_189/0.07)_1px,transparent_1px)] bg-[length:4px_4px]" />
      </div>

      <div className="relative flex h-full flex-col space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex size-10 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-brand-500 group-hover:to-brand-700 group-hover:text-white">
            {item.icon}
          </div>
          <span className="rounded-lg bg-brand-50 px-2 py-1 text-xs font-semibold text-brand-700 backdrop-blur-sm transition-colors duration-300 group-hover:bg-brand-100">
            {item.status || "Active"}
          </span>
        </div>

        <div className="space-y-2">
          <h3 className="text-[17px] font-bold tracking-tight text-ink">
            {item.title}
            {item.meta && (
              <span className="ml-2 text-xs font-medium text-muted">{item.meta}</span>
            )}
          </h3>
          <p className="text-sm leading-snug text-muted">{item.description}</p>
        </div>

        <div className="mt-auto flex flex-wrap items-center justify-between gap-2 pt-2">
          <div className="flex flex-wrap items-center gap-1.5 text-xs text-muted">
            {item.tags?.map((tag) => (
              <span
                key={tag}
                className="rounded-md bg-brand-50/70 px-2 py-1 backdrop-blur-sm transition-colors duration-200 hover:bg-brand-100"
              >
                #{tag}
              </span>
            ))}
          </div>
          <span className="text-xs font-semibold text-brand-600 opacity-0 transition-opacity group-hover:opacity-100">
            {item.cta || "Explore →"}
          </span>
        </div>
      </div>

      <div
        className={cn(
          "absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-transparent via-brand-100/60 to-transparent p-px transition-opacity duration-300",
          item.hasPersistentHover ? "opacity-100" : "opacity-0 group-hover:opacity-100",
        )}
      />
    </>
  );
}

function BentoGrid({ items, className }: BentoGridProps) {
  return (
    <div className={cn("mx-auto grid max-w-7xl grid-cols-1 gap-3 md:grid-cols-3", className)}>
      {items.map((item) => {
        const cls = cn(
          "group relative isolate overflow-hidden rounded-2xl p-5 transition-all duration-300",
          "border border-line bg-white",
          "hover:-translate-y-0.5 hover:shadow-[0_12px_30px_-12px_rgb(4_34_92/0.18)] will-change-transform",
          item.colSpan === 2 ? "md:col-span-2" : "col-span-1",
          item.hasPersistentHover && "-translate-y-0.5 shadow-[0_12px_30px_-12px_rgb(4_34_92/0.18)]",
        );
        return item.href ? (
          <Link key={item.title} href={item.href} className={cls}>
            <BentoCard item={item} />
          </Link>
        ) : (
          <div key={item.title} className={cls}>
            <BentoCard item={item} />
          </div>
        );
      })}
    </div>
  );
}

export { BentoGrid };
