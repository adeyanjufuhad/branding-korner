import { Compass, Eye, Globe2, HeartHandshake, Lightbulb, ShieldCheck, Target } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";

import { CtaBand } from "@/components/site/cta-band";
import { PageHero } from "@/components/site/page-hero";
import { Reveal } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";
import { WorldClocks } from "@/components/site/world-clocks";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { images, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: `About ${site.name}: a Lagos-based consultancy helping people and businesses compete globally.`,
};

const values = [
  {
    icon: ShieldCheck,
    title: "Integrity",
    body: "Honest advice, accurate documents and clear pricing, every time.",
  },
  {
    icon: Globe2,
    title: "Global mindset",
    body: "We design and write for the audience you're trying to reach, wherever they are.",
  },
  {
    icon: Lightbulb,
    title: "Creativity",
    body: "Ideas that make brands memorable and businesses stand out.",
  },
  {
    icon: HeartHandshake,
    title: "Partnership",
    body: "We stay invested in your outcome long after delivery.",
  },
];

const facts = [
  ["Legal name", site.name],
  ["Registration", `RC ${site.rcNumber}`],
  ["Incorporated", site.incorporated],
  ["Regulator", "Corporate Affairs Commission, Nigeria"],
  ["Headquarters", site.city],
  ["Reach", "Clients worldwide, remote-first"],
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title={
          <>
            A Nigerian consultancy with a <span className="text-brand-600">global outlook</span>
          </>
        }
        intro="Branding Korner was founded on a simple belief: talent and ambition from anywhere deserve to be presented to the world with confidence."
      />

      <section className="container-x grid items-center gap-14 pb-24 lg:grid-cols-2">
        <Reveal>
          <div className="relative aspect-[5/4] overflow-hidden rounded-[2rem]">
            <Image
              src={images.about}
              alt="Two consultants reviewing work together"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <SectionHeading eyebrow="Our story" title="Where your brand meets the world" />
          <div className="mt-6 space-y-4 text-[17px] leading-relaxed text-muted">
            <p>
              Too many talented people and promising businesses get overlooked because their
              brand, documents or online presence don&apos;t match the standards of the
              markets they&apos;re trying to reach.
            </p>
            <p>
              Branding Korner Global Consult Limited closes that gap. From our base in Lagos,
              we combine creative branding, professional documentation, business advisory,
              technology and trade support, so our clients can apply, partner, hire and sell
              anywhere with confidence.
            </p>
            <p>
              Our name says it all: a corner where brands are shaped, and a gateway from that
              corner to the rest of the world.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="bg-brand-50/60 py-24">
        <div className="container-x grid gap-5 md:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-[2rem] bg-brand-600 p-10 text-white">
              <Target className="size-9 text-brand-200" strokeWidth={1.6} />
              <h2 className="mt-6 text-2xl font-bold">Our mission</h2>
              <p className="mt-3 text-lg leading-relaxed text-brand-100">
                To equip individuals and organisations with the branding, documentation and
                business support they need to compete and succeed on the global stage.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="h-full rounded-[2rem] border border-line bg-white p-10">
              <Eye className="size-9 text-brand-600" strokeWidth={1.6} />
              <h2 className="mt-6 text-2xl font-bold text-ink">Our vision</h2>
              <p className="mt-3 text-lg leading-relaxed text-muted">
                To be Africa&apos;s most trusted gateway for brands and people going global,
                known for quality, integrity and results.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="container-x mt-20">
          <SectionHeading align="center" eyebrow="Our values" title="What guides our work" />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.06}>
                <div className="relative h-full rounded-[2rem] border border-line p-2">
                  <GlowingEffect
                    spread={40}
                    proximity={64}
                    inactiveZone={0.01}
                    borderWidth={2}
                    glow
                    disabled={false}
                  />
                  <div className="relative h-full rounded-[1.6rem] border border-line bg-white p-6">
                    <div className="grid size-11 place-items-center rounded-xl bg-brand-50 text-brand-600">
                      <v.icon className="size-5" />
                    </div>
                    <h3 className="mt-5 text-lg font-bold text-ink">{v.title}</h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-muted">{v.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x grid gap-14 py-24 lg:grid-cols-2">
        <Reveal>
          <SectionHeading
            eyebrow="Company profile"
            title="Fully registered and accountable"
            intro="We are a private limited company incorporated under the Companies and Allied Matters Act 2020."
          />
          <dl className="mt-8 divide-y divide-line rounded-3xl border border-line bg-white">
            {facts.map(([k, v]) => (
              <div key={k} className="flex flex-col gap-1 px-6 py-4 sm:flex-row sm:justify-between sm:gap-6">
                <dt className="text-sm font-medium text-muted">{k}</dt>
                <dd className="text-sm font-semibold text-ink sm:text-right">{v}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
        <Reveal delay={0.1}>
          <SectionHeading
            eyebrow="Always on"
            title={
              <>
                <Compass className="mr-2 inline size-8 -translate-y-1 text-brand-600" />
                Your time zone is our time zone
              </>
            }
            intro="We schedule calls and deliver updates around you, whether you're in Lagos, London or Los Angeles."
          />
          <WorldClocks className="mt-8" />
        </Reveal>
      </section>

      <CtaBand />
    </>
  );
}
