import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Reveal } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";
import { Button } from "@/components/ui/button";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { services } from "@/lib/site";
import { cn } from "@/lib/utils";

// Bento placement per service (lg 6-col grid)
const layout: Record<string, string> = {
  "global-documentation": "lg:col-span-4 lg:row-span-2",
  "branding-marketing": "lg:col-span-2",
  "business-consultancy": "lg:col-span-2",
  "web-tech": "lg:col-span-2",
  "recruitment-training": "lg:col-span-2",
  "trade-procurement": "lg:col-span-2",
};

const glow = {
  spread: 40,
  proximity: 64,
  inactiveZone: 0.01,
  borderWidth: 2,
  glow: true,
  disabled: false,
};

export function ServicesBento() {
  const featured = services.find((s) => s.slug === "global-documentation")!;
  const rest = services.filter((s) => s.slug !== featured.slug);

  return (
    <section className="container-x py-24 lg:py-32">
      <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
        <SectionHeading
          eyebrow="What we do"
          title={
            <>
              Six disciplines.{" "}
              <span className="bg-gradient-to-r from-brand-600 to-sky-500 bg-clip-text text-transparent">
                One trusted partner.
              </span>
            </>
          }
          intro="Whether you're building a brand, applying abroad or scaling a business, we bring the right specialists together."
        />
        <Button asChild variant="outline" className="self-start lg:self-auto">
          <Link href="/services">
            All services <ArrowUpRight />
          </Link>
        </Button>
      </div>

      <div className="mt-14 grid auto-rows-[minmax(230px,auto)] gap-4 sm:grid-cols-2 lg:grid-cols-6">
        {/* Featured card */}
        <Reveal className={cn("sm:col-span-2", layout[featured.slug])}>
          <div className="relative h-full rounded-[2rem] border border-line p-2">
            <GlowingEffect {...glow} />
            <Link
              href={`/services#${featured.slug}`}
              className="group relative flex h-full min-h-[460px] flex-col justify-end overflow-hidden rounded-[1.6rem] p-8 text-white sm:p-10"
            >
              <Image
                src={featured.image}
                alt=""
                fill
                sizes="(min-width: 1024px) 60vw, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-950 via-brand-900/70 to-brand-700/10" />
              <div className="absolute inset-0 bg-[url('/brand/world-dots.svg')] bg-cover bg-center opacity-40 mix-blend-screen" />

              <span className="absolute top-6 left-6 inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1.5 text-xs font-semibold backdrop-blur sm:top-8 sm:left-8">
                <featured.icon className="size-4" /> Most requested
              </span>
              <span className="absolute top-6 right-6 grid size-12 place-items-center rounded-full bg-white text-brand-700 transition-transform duration-300 group-hover:rotate-45 sm:top-8 sm:right-8">
                <ArrowUpRight className="size-5" />
              </span>

              <div className="relative max-w-xl">
                <h3 className="text-3xl font-bold tracking-tight sm:text-4xl">{featured.title}</h3>
                <p className="mt-3 text-lg text-brand-100">{featured.description}</p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {featured.items.slice(0, 4).map((i) => (
                    <li
                      key={i}
                      className="rounded-full border border-white/25 bg-white/10 px-3 py-1 text-sm backdrop-blur"
                    >
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
            </Link>
          </div>
        </Reveal>

        {rest.map((s, i) => (
          <Reveal key={s.slug} delay={0.05 * (i + 1)} className={layout[s.slug]}>
            <div className="relative h-full rounded-[2rem] border border-line p-2">
              <GlowingEffect {...glow} />
              <Link
                href={`/services#${s.slug}`}
                className="group relative flex h-full flex-col rounded-[1.6rem] border border-line bg-white p-6 shadow-[0_1px_2px_rgb(4_34_92/0.04)]"
              >
                <div className="flex items-start justify-between">
                  <span className="grid size-12 place-items-center rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-[0_10px_20px_-8px_rgb(10_91_189/0.6)]">
                    <s.icon className="size-5.5" />
                  </span>
                  <ArrowUpRight className="size-5 text-brand-300 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brand-600" />
                </div>
                <h3 className="mt-6 text-xl font-bold text-ink">{s.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-muted">{s.short}</p>
                <ul className="mt-auto space-y-1.5 pt-5">
                  {s.items.slice(0, 2).map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-ink/75">
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-brand-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Link>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
