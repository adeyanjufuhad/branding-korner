import { ArrowRight, MessageCircle } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

export function CtaBand() {
  return (
    <section className="container-x py-20 lg:py-28">
      <div className="relative isolate overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-brand-600 via-brand-700 to-brand-900 px-6 py-16 text-center sm:px-12 lg:py-24">
        {/* eslint-disable-next-line @next/next/no-img-element -- decorative static SVG */}
        <img
          src="/brand/world-dots.svg"
          alt=""
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-1/2 -z-10 w-full -translate-y-1/2 opacity-40 [filter:brightness(0)_invert(1)] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_75%)]"
        />
        <div aria-hidden className="absolute -top-40 left-1/2 -z-10 size-[520px] -translate-x-1/2 rounded-full bg-sky-400/40 blur-[110px]" />
        <div aria-hidden className="absolute -right-20 -bottom-40 -z-10 size-[380px] rounded-full bg-brand-400/40 blur-[100px]" />

        <div className="relative mx-auto max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-semibold tracking-wide text-white uppercase backdrop-blur">
            Free consultation
          </span>
          <h2 className="mt-6 text-4xl font-bold tracking-tight text-balance text-white sm:text-5xl lg:text-6xl">
            Ready to take your brand global?
          </h2>
          <p className="mt-5 text-lg text-brand-100">
            Tell us where you are and where you want to go. We&apos;ll map out the branding,
            documents and support to get you there.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild variant="white" size="lg" className="h-13 px-8">
              <Link href="/contact">
                Book a free consultation <ArrowRight />
              </Link>
            </Button>
            <Button asChild variant="outline-white" size="lg" className="h-13 px-8 backdrop-blur">
              <a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noopener noreferrer">
                <MessageCircle /> Chat on WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
