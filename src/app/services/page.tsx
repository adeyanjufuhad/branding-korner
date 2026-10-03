import { ArrowRight, CheckCircle2 } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { CtaBand } from "@/components/site/cta-band";
import { PageHero } from "@/components/site/page-hero";
import { Reveal } from "@/components/site/reveal";
import { BentoGrid } from "@/components/ui/bento-grid";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/site";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Branding & digital marketing, global documentation support, business consultancy & e-invoicing, web & tech, recruitment & training, and trade & procurement.",
};

// Wide cards in the overview grid (3 columns, 3 rows on desktop)
const overviewSpan: Record<string, 2> = {
  "global-documentation": 2,
  "web-tech": 2,
  "recruitment-training": 2,
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our services"
        title={
          <>
            Everything you need to <span className="text-brand-600">grow beyond borders</span>
          </>
        }
        intro="Six connected service areas, delivered by one accountable team. Pick a single service or combine them into a complete package."
      />

      <section aria-label="Services at a glance" className="container-x -mt-6 pb-16 lg:-mt-10 lg:pb-24">
        <Reveal>
          <BentoGrid
            items={services.map((s) => ({
              title: s.title,
              description: s.short,
              icon: <s.icon className="size-5" />,
              status: s.category,
              tags: s.tags,
              meta: `${s.items.length} services`,
              cta: "View details →",
              colSpan: overviewSpan[s.slug] ?? 1,
              hasPersistentHover: s.slug === "global-documentation",
              href: `#${s.slug}`,
            }))}
          />
        </Reveal>
      </section>

      <div className="container-x space-y-6 pb-8">
        {services.map((s, i) => (
          <section
            key={s.slug}
            id={s.slug}
            className="scroll-mt-28 rounded-[2rem] border border-line bg-white p-6 sm:p-10 lg:p-12"
          >
            <div
              className={cn(
                "grid items-center gap-10 lg:grid-cols-2 lg:gap-16",
                i % 2 === 1 && "lg:[&>*:first-child]:order-2",
              )}
            >
              <Reveal>
                <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-brand-50">
                  <Image
                    src={s.image}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    className="object-cover"
                  />
                  <span className="absolute top-4 left-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold tracking-wider text-brand-700 backdrop-blur">
                    {String(i + 1).padStart(2, "0")} / {String(services.length).padStart(2, "0")}
                  </span>
                </div>
              </Reveal>
              <Reveal delay={0.08}>
                <div className="grid size-12 place-items-center rounded-2xl bg-brand-600 text-white">
                  <s.icon className="size-6" />
                </div>
                <h2 className="mt-6 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
                  {s.title}
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-muted">{s.description}</p>
                <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                  {s.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 rounded-xl bg-brand-50/70 px-3.5 py-3 text-sm font-medium text-ink/85"
                    >
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-brand-600" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Button asChild className="mt-8">
                  <Link href={`/contact?service=${s.slug}`}>
                    Enquire about this service <ArrowRight />
                  </Link>
                </Button>
              </Reveal>
            </div>
          </section>
        ))}
      </div>

      <CtaBand />
    </>
  );
}
