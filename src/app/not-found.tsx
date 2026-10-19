import { ArrowLeft, Compass } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { services } from "@/lib/site";

export default function NotFound() {
  return (
    <section className="relative -mt-[76px] overflow-hidden pt-[76px]">
      <div className="pointer-events-none absolute inset-0 bg-dots [mask-image:radial-gradient(ellipse_60%_70%_at_50%_30%,black,transparent)]" />
      <div className="container-x relative flex flex-col items-center py-24 text-center lg:py-32">
        <span className="grid size-16 place-items-center rounded-2xl bg-brand-50 text-brand-600">
          <Compass className="size-8" />
        </span>
        <p className="mt-8 text-sm font-bold tracking-widest text-brand-600 uppercase">Error 404</p>
        <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-ink sm:text-6xl">
          This page went off the map
        </h1>
        <p className="mt-5 max-w-lg text-lg text-muted">
          The page you&apos;re looking for doesn&apos;t exist or has moved. Let&apos;s get you
          back on course.
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Button asChild size="lg">
            <Link href="/">
              <ArrowLeft /> Back to home
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/contact">Contact us</Link>
          </Button>
        </div>
        <ul className="mt-14 flex max-w-3xl flex-wrap justify-center gap-2">
          {services.map((s) => (
            <li key={s.slug}>
              <Link
                href={`/services#${s.slug}`}
                className="inline-flex rounded-full border border-line bg-white px-4 py-2 text-sm font-medium text-brand-900 transition hover:border-brand-300 hover:bg-brand-50"
              >
                {s.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
