import { ArrowRight, FileCheck2, Plane, ShieldCheck, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Aurora } from "@/components/site/aurora";
import { Globe } from "@/components/site/globe";
import { Reveal } from "@/components/site/reveal";
import { Button } from "@/components/ui/button";
import { NumberTicker } from "@/components/ui/number-ticker";
import { TextRotate } from "@/components/ui/text-rotate";
import { images, site } from "@/lib/site";

const destinations = ["the world.", "London.", "Toronto.", "Dubai.", "New York.", "Berlin."];

export function Hero() {
  return (
    <section className="relative -mt-[76px] overflow-hidden pt-[76px]">
      <Aurora />

      <div className="container-x relative grid items-center gap-10 pt-10 pb-16 lg:grid-cols-[1.1fr_1fr] lg:gap-6 lg:pt-16 lg:pb-24">
        <Reveal>
          <Link
            href="/about"
            className="group inline-flex items-center gap-2 rounded-full border border-brand-100 bg-white/80 py-1 pr-3 pl-1 text-xs font-semibold text-brand-800 shadow-sm backdrop-blur transition hover:border-brand-300"
          >
            <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-600 px-2.5 py-1 text-white">
              <span className="relative flex size-1.5">
                <span className="absolute inline-flex size-full animate-ping-slow rounded-full bg-white" />
                <span className="relative inline-flex size-1.5 rounded-full bg-white" />
              </span>
              CAC Registered
            </span>
            RC {site.rcNumber} · Lagos, Nigeria
            <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>

          <h1 className="mt-7 text-[2.75rem] leading-[1.02] font-extrabold tracking-[-0.035em] text-ink sm:text-6xl lg:text-[4.6rem]">
            Your brand,
            <br />
            ready for{" "}
            <TextRotate
              words={destinations}
              className="pb-2"
              wordClassName="bg-gradient-to-r from-brand-600 via-brand-500 to-sky-500 bg-clip-text pb-2 text-transparent"
            />
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-pretty text-muted">
            Branding, global documentation, business consultancy and tech solutions under one
            roof. We help ambitious people and businesses look credible and compete anywhere.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="shine h-13 px-8">
              <Link href="/contact">
                Start your project <ArrowRight />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-13 bg-white/70 px-8 backdrop-blur">
              <Link href="/services">Explore services</Link>
            </Button>
          </div>

          <dl className="mt-12 grid max-w-md grid-cols-3 divide-x divide-brand-100 rounded-2xl border border-brand-100 bg-white/70 py-4 backdrop-blur">
            {[
              { v: 6, s: "", l: "Service areas" },
              { v: 24, s: "h", l: "Reply time" },
              { v: 100, s: "%", l: "Confidential" },
            ].map((x) => (
              <div key={x.l} className="px-4 text-center">
                <dt className="sr-only">{x.l}</dt>
                <dd className="text-2xl font-extrabold tracking-tight text-brand-700 sm:text-3xl">
                  <NumberTicker value={x.v} suffix={x.s} />
                </dd>
                <dd className="mt-0.5 text-xs font-medium text-muted">{x.l}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal delay={0.15} className="relative mx-auto w-full max-w-[600px]">
          {/* Orbit rings */}
          <div aria-hidden className="absolute inset-[-6%] animate-spin-slow rounded-full border-[1.5px] border-dashed border-brand-300/80" />
          <div aria-hidden className="absolute inset-[6%] animate-spin-slower rounded-full border-[1.5px] border-brand-200">
            <span className="absolute top-1/2 -left-1.5 size-3 rounded-full bg-brand-500 shadow-[0_0_12px_rgb(47_111_230)]" />
          </div>
          <div aria-hidden className="absolute inset-[14%] rounded-full bg-brand-100/50 blur-3xl" />

          <Globe className="relative" />

          {/* Floating glass cards */}
          <div className="glass absolute top-[8%] -left-2 hidden animate-float items-center gap-3 rounded-2xl px-4 py-3 sm:flex lg:-left-10">
            <span className="grid size-10 place-items-center rounded-xl bg-brand-600 text-white">
              <Plane className="size-4.5" />
            </span>
            <span>
              <span className="block text-sm font-bold text-ink">Study & travel docs</span>
              <span className="block text-xs text-muted">UK · US · Canada · EU</span>
            </span>
          </div>

          <div className="glass absolute top-[42%] -right-2 hidden animate-float items-center gap-3 rounded-2xl px-4 py-3 [animation-delay:-2s] sm:flex lg:-right-6">
            <span className="grid size-10 place-items-center rounded-xl bg-brand-50 text-brand-600">
              <Sparkles className="size-4.5" />
            </span>
            <span>
              <span className="block text-sm font-bold text-ink">Brand identity</span>
              <span className="block text-xs text-muted">Built for global markets</span>
            </span>
          </div>

          <div className="glass absolute bottom-[4%] left-[6%] hidden animate-float items-center gap-3 rounded-2xl py-2.5 pr-4 pl-2.5 [animation-delay:-4s] sm:flex">
            <span className="relative size-11 overflow-hidden rounded-xl">
              <Image src={images.hero} alt="" fill sizes="44px" className="object-cover" />
            </span>
            <span>
              <span className="flex items-center gap-1 text-sm font-bold text-ink">
                <ShieldCheck className="size-4 text-brand-600" /> Trusted team
              </span>
              <span className="block text-xs text-muted">Lagos HQ · Remote worldwide</span>
            </span>
          </div>

          <div className="glass absolute right-[8%] bottom-[14%] hidden items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold text-brand-800 lg:flex">
            <FileCheck2 className="size-3.5 text-brand-600" /> E-invoicing ready
          </div>
        </Reveal>
      </div>
    </section>
  );
}
