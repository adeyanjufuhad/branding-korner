import {
  BadgeCheck,
  Building2,
  Clock3,
  GraduationCap,
  Landmark,
  Plus,
  Rocket,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { GlobalReach } from "@/components/home/global-reach";
import { Hero } from "@/components/home/hero";
import { Process } from "@/components/home/process";
import { ServicesBento } from "@/components/home/services-bento";
import { CtaBand } from "@/components/site/cta-band";
import { GreetingMarquee } from "@/components/site/greeting-marquee";
import { Reveal } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { images, site } from "@/lib/site";

const audiences = [
  {
    icon: GraduationCap,
    title: "Students & professionals",
    body: "Study, work and travel applications with documents that meet international expectations.",
  },
  {
    icon: Rocket,
    title: "Startups & SMEs",
    body: "Branding, websites and business structure to look established from day one.",
  },
  {
    icon: Building2,
    title: "Corporates",
    body: "Recruitment, training, procurement and corporate branding at scale.",
  },
  {
    icon: Landmark,
    title: "Public sector & NGOs",
    body: "Training programmes, feasibility studies and supply coordination.",
  },
];

const reasons = [
  `Registered with the Corporate Affairs Commission (RC ${site.rcNumber})`,
  "One partner for brand, documents, tech and business support",
  "Documents written to UK, US, Canadian and EU expectations",
  "Transparent pricing, agreed before work begins",
  "Fast turnaround with updates across time zones",
  "Strict confidentiality for every client file",
];

const faqs = [
  {
    q: "Do you work with clients outside Nigeria?",
    a: "Yes. We are based in Lagos but work remotely with clients across Africa, Europe, North America, the Middle East and Asia. Meetings run over Zoom, Google Meet or WhatsApp at a time that suits your time zone.",
  },
  {
    q: "Can you help with my study or visa application documents?",
    a: "We prepare and review supporting documents such as CVs, statements of purpose and reference letters, and guide you on financial documentation requirements. We do not issue visas or make decisions on behalf of embassies or institutions.",
  },
  {
    q: "How long does a branding project take?",
    a: "A logo and core identity typically takes 1 to 2 weeks. Full brand systems, websites and campaigns are scoped individually, and you'll get a timeline with your proposal.",
  },
  {
    q: "How do I get started?",
    a: "Send us a message through the contact page or WhatsApp. We'll book a short free consultation and follow up with a clear proposal.",
  },
];

export default function Home() {
  return (
    <>
      <Hero />
      <GreetingMarquee />
      <ServicesBento />
      <GlobalReach />
      <Process />

      {/* Why us */}
      <section className="container-x pb-24 lg:pb-32">
        <div className="relative grid items-center gap-12 overflow-hidden rounded-[2.5rem] border border-line bg-gradient-to-br from-white to-brand-50/60 p-6 sm:p-10 lg:grid-cols-2 lg:p-14">
          <div aria-hidden className="absolute -top-24 -right-24 size-80 rounded-full bg-brand-100/70 blur-3xl" />
          <Reveal className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-[0_40px_80px_-40px_rgb(4_34_92/0.5)]">
              <Image
                src={images.team}
                alt="Consultants celebrating a successful project"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="glass absolute -bottom-5 left-5 flex items-center gap-3 rounded-2xl px-5 py-4">
              <span className="grid size-10 place-items-center rounded-xl bg-brand-600 text-white">
                <Clock3 className="size-5" />
              </span>
              <span>
                <span className="block text-sm font-bold text-ink">Replies within 24 hours</span>
                <span className="block text-xs text-muted">{site.hours}</span>
              </span>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="relative">
            <SectionHeading
              eyebrow="Why Branding Korner"
              title="Local insight. International standards."
              intro="We understand the Nigerian business landscape and what global institutions, partners and customers expect. That combination is what sets our clients apart."
            />
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {reasons.map((r) => (
                <li
                  key={r}
                  className="flex items-start gap-3 rounded-2xl border border-white bg-white/80 p-3.5 text-sm font-medium text-ink/85 shadow-sm"
                >
                  <BadgeCheck className="mt-0.5 size-5 shrink-0 text-brand-600" />
                  {r}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Audiences */}
      <section className="container-x pb-24 lg:pb-32">
        <SectionHeading
          align="center"
          eyebrow="Who we serve"
          title="Built for individuals and institutions alike"
        />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {audiences.map((a, i) => (
            <Reveal key={a.title} delay={i * 0.06}>
              <div className="relative h-full rounded-[2rem] border border-line p-2">
                <GlowingEffect
                  spread={40}
                  proximity={64}
                  inactiveZone={0.01}
                  borderWidth={2}
                  glow
                  disabled={false}
                />
                <div className="group relative h-full rounded-[1.6rem] border border-line bg-white p-6">
                  <span className="grid size-14 place-items-center rounded-2xl bg-brand-50 text-brand-600 transition-colors duration-300 group-hover:bg-brand-600 group-hover:text-white">
                    <a.icon className="size-6" strokeWidth={1.8} />
                  </span>
                  <h3 className="mt-6 text-lg font-bold text-ink">{a.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-muted">{a.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="container-x grid gap-12 pb-12 lg:grid-cols-[1fr_1.4fr]">
        <SectionHeading
          eyebrow="FAQ"
          title="Questions, answered"
          intro={
            <>
              Can&apos;t find what you need?{" "}
              <Link href="/contact" className="font-semibold text-brand-600 hover:underline">
                Talk to us
              </Link>
              .
            </>
          }
        />
        <div className="space-y-3">
          {faqs.map((f) => (
            <details
              key={f.q}
              className="group rounded-2xl border border-line bg-white px-6 py-5 transition-colors open:border-brand-200 open:bg-brand-50/40"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left text-lg font-semibold text-ink [&::-webkit-details-marker]:hidden">
                {f.q}
                <span className="grid size-9 shrink-0 place-items-center rounded-full bg-brand-50 text-brand-600 transition-all duration-300 group-open:rotate-45 group-open:bg-brand-600 group-open:text-white">
                  <Plus className="size-4" />
                </span>
              </summary>
              <p className="mt-3 pr-12 text-[15px] leading-relaxed text-muted">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
