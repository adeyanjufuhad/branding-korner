import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { nav, services, site } from "@/lib/site";

const socials = [
  { label: "Instagram", href: site.socials.instagram },
  { label: "LinkedIn", href: site.socials.linkedin },
  { label: "X", href: site.socials.x },
  { label: "Facebook", href: site.socials.facebook },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-brand-900 text-white">
      <div className="pointer-events-none absolute -top-40 right-0 size-[520px] rounded-full bg-brand-600/30 blur-3xl" />
      <div className="container-x relative grid gap-12 py-16 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Image
            src="/brand/logo-white.png"
            alt="Branding Korner Global Consult Limited"
            width={504}
            height={238}
            className="h-14 w-auto"
          />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-brand-100/80">
            A Lagos-born consultancy helping people and businesses look credible, operate
            confidently and compete anywhere in the world.
          </p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  className="inline-flex rounded-full border border-white/20 px-3 py-1.5 text-xs font-medium text-white/90 transition hover:border-white/50 hover:bg-white/10"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-2">
          <h3 className="text-sm font-semibold text-white">Company</h3>
          <ul className="mt-4 space-y-3 text-sm text-brand-100/80">
            {nav.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="hover:text-white">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h3 className="text-sm font-semibold text-white">Services</h3>
          <ul className="mt-4 space-y-3 text-sm text-brand-100/80">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/services#${s.slug}`} className="hover:text-white">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h3 className="text-sm font-semibold text-white">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm text-brand-100/80">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-brand-300" />
              {site.city} · Serving clients worldwide
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 size-4 shrink-0 text-brand-300" />
              <a href={`mailto:${site.email}`} className="hover:text-white">
                {site.email}
              </a>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 size-4 shrink-0 text-brand-300" />
              <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="hover:text-white">
                {site.phone}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="container-x flex flex-col gap-2 py-6 text-xs text-brand-100/70 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p>Registered with the Corporate Affairs Commission, Nigeria · RC {site.rcNumber}</p>
        </div>
      </div>
    </footer>
  );
}
