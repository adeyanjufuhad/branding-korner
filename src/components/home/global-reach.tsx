import { Reveal } from "@/components/site/reveal";
import { Eyebrow } from "@/components/site/section-heading";
import { WorldClocks } from "@/components/site/world-clocks";
import { WorldMap } from "@/components/ui/world-map";

export function GlobalReach() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-brand-50/70 to-white py-24 lg:py-32">
      <div className="container-x">
        <Reveal className="mx-auto max-w-3xl text-center">
          <Eyebrow>Global reach</Eyebrow>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-balance text-ink sm:text-5xl lg:text-6xl">
            Based in Lagos.{" "}
            <span className="bg-gradient-to-r from-brand-600 to-sky-500 bg-clip-text text-transparent">
              Working in every time zone.
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted">
            Our clients study in Toronto, trade with Dubai, hire from London and sell to New
            York. We make sure their brand and paperwork are ready wherever they&apos;re headed.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-12 lg:mt-16">
          <WorldMap
            routes={[
              { to: "london", label: "London" },
              { to: "toronto", label: "Toronto" },
              { to: "newYork", label: "New York" },
              { to: "saoPaulo", label: "São Paulo" },
              { to: "berlin", label: "Berlin" },
              { to: "dubai", label: "Dubai" },
              { to: "nairobi", label: "Nairobi" },
              { to: "johannesburg", label: "Johannesburg" },
              { to: "singapore", label: "Singapore" },
              { to: "sydney", label: "Sydney" },
            ]}
          />
        </Reveal>

        <Reveal delay={0.15} className="mx-auto mt-10 max-w-5xl">
          <WorldClocks className="lg:grid-cols-6" />
        </Reveal>
      </div>
    </section>
  );
}
