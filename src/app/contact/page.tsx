import { Clock3, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import type { Metadata } from "next";

import { PageHero } from "@/components/site/page-hero";
import { WorldClocks } from "@/components/site/world-clocks";
import { site } from "@/lib/site";

import { ContactForm } from "./contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${site.name}. Free consultations for clients in Nigeria and worldwide.`,
};

const channels = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Chat with us instantly",
    href: `https://wa.me/${site.whatsapp}`,
    external: true,
  },
  { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
  { icon: Phone, label: "Phone", value: site.phone, href: `tel:${site.phone.replace(/\s/g, "")}` },
  { icon: MapPin, label: "Office", value: `${site.city}` },
  { icon: Clock3, label: "Hours", value: site.hours },
];

export default async function ContactPage({ searchParams }: PageProps<"/contact">) {
  const { service } = await searchParams;

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Let&apos;s start a <span className="text-brand-600">conversation</span>
          </>
        }
        intro="Wherever you are in the world, we're a message away. Tell us what you need and we'll reply within 24 hours."
      />

      <section className="container-x grid gap-8 pb-24 lg:grid-cols-[1fr_1.5fr]">
        <aside className="space-y-4">
          {channels.map((c) => {
            const inner = (
              <>
                <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-600 transition group-hover:bg-brand-600 group-hover:text-white">
                  <c.icon className="size-5" />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs font-semibold tracking-wide text-muted uppercase">
                    {c.label}
                  </span>
                  <span className="block truncate font-semibold text-ink">{c.value}</span>
                </span>
              </>
            );
            const cls =
              "group flex items-center gap-4 rounded-2xl border border-line bg-white p-4 transition";
            return c.href ? (
              <a
                key={c.label}
                href={c.href}
                className={`${cls} hover:border-brand-200 hover:shadow-md`}
                {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                {inner}
              </a>
            ) : (
              <div key={c.label} className={cls}>
                {inner}
              </div>
            );
          })}

          <div className="rounded-2xl border border-line bg-brand-50/60 p-5">
            <p className="mb-4 text-sm font-semibold text-ink">Local time around the world</p>
            <WorldClocks className="sm:grid-cols-2" />
          </div>
        </aside>

        <div className="rounded-[2rem] border border-line bg-white p-6 shadow-[0_30px_60px_-40px_rgb(4_34_92/0.35)] sm:p-10">
          <h2 className="text-2xl font-bold text-ink">Send us a message</h2>
          <p className="mt-2 mb-8 text-muted">Free consultation · No obligation</p>
          <ContactForm defaultService={typeof service === "string" ? service : undefined} />
        </div>
      </section>
    </>
  );
}
