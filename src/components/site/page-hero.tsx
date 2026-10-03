import type { ReactNode } from "react";

import { Aurora } from "@/components/site/aurora";
import { Eyebrow } from "@/components/site/section-heading";

export function PageHero({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="relative -mt-[76px] overflow-hidden pt-[76px]">
      <Aurora />
      <div className="container-x relative py-16 text-center lg:py-24">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mx-auto mt-6 max-w-4xl text-4xl leading-[1.08] font-extrabold tracking-tight text-balance text-ink sm:text-5xl lg:text-7xl lg:tracking-[-0.035em]">
          {title}
        </h1>
        {intro && (
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-pretty text-muted">
            {intro}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
