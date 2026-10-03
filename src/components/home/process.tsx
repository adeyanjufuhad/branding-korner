"use client";

import { MessagesSquare, PenTool, Rocket, Search } from "lucide-react";
import { motion, useScroll, useSpring } from "motion/react";
import { useRef } from "react";

import { SectionHeading } from "@/components/site/section-heading";

const steps = [
  {
    icon: Search,
    title: "Discover",
    body: "A free consultation to understand your goals, market and timeline, wherever you are.",
  },
  {
    icon: PenTool,
    title: "Plan",
    body: "A clear proposal with scope, deliverables and pricing. No surprises, no jargon.",
  },
  {
    icon: MessagesSquare,
    title: "Deliver",
    body: "Our specialists execute, with regular updates on WhatsApp, email or calls.",
  },
  {
    icon: Rocket,
    title: "Go global",
    body: "You launch, apply or expand, and we stay on hand for what comes next.",
  },
];

export function Process() {
  const ref = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 85%", "end 55%"] });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <section className="container-x py-24 lg:py-32">
      <SectionHeading
        align="center"
        eyebrow="How we work"
        title="From first call to global launch"
        intro="A simple, transparent process that works whether we meet in Lagos or on a video call from across the world."
      />

      <ol ref={ref} className="relative mt-16 grid gap-10 lg:grid-cols-4 lg:gap-6">
        {/* Track + scroll-driven fill (horizontal on desktop, vertical on mobile) */}
        <div aria-hidden className="absolute top-8 right-[12.5%] left-[12.5%] hidden h-0.5 rounded bg-brand-100 lg:block">
          <motion.div
            style={{ scaleX: progress }}
            className="h-full origin-left rounded bg-gradient-to-r from-brand-500 to-sky-400"
          />
        </div>
        <div aria-hidden className="absolute top-8 bottom-8 left-8 w-0.5 rounded bg-brand-100 lg:hidden">
          <motion.div
            style={{ scaleY: progress }}
            className="h-full w-full origin-top rounded bg-gradient-to-b from-brand-500 to-sky-400"
          />
        </div>

        {steps.map((step, i) => (
          <motion.li
            key={step.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.12 }}
            className="relative flex gap-6 lg:flex-col lg:items-center lg:text-center"
          >
            <span className="relative z-10 grid size-16 shrink-0 place-items-center rounded-2xl border border-brand-100 bg-white text-brand-600 shadow-[0_15px_30px_-15px_rgb(10_91_189/0.5)]">
              <step.icon className="size-6" />
              <span className="absolute -top-2 -right-2 grid size-6 place-items-center rounded-full bg-brand-600 text-[10px] font-bold text-white ring-4 ring-white">
                {i + 1}
              </span>
            </span>
            <div>
              <h3 className="text-lg font-bold text-ink lg:mt-6">{step.title}</h3>
              <p className="mt-2 max-w-[17rem] text-[15px] leading-relaxed text-muted">{step.body}</p>
            </div>
          </motion.li>
        ))}
      </ol>
    </section>
  );
}
