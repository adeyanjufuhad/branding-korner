import type { ReactNode } from "react";

import { PageHero } from "@/components/site/page-hero";

export type LegalSection = { heading: string; body: ReactNode };

export function LegalPage({
  title,
  intro,
  updated,
  sections,
}: {
  title: string;
  intro: string;
  updated: string;
  sections: LegalSection[];
}) {
  return (
    <>
      <PageHero eyebrow={`Last updated ${updated}`} title={title} intro={intro} />
      <section className="container-x max-w-3xl pb-24">
        <div className="space-y-10 rounded-[2rem] border border-line bg-white p-6 sm:p-10">
          {sections.map((s, i) => (
            <div key={s.heading}>
              <h2 className="text-xl font-bold text-ink">
                <span className="mr-2 text-brand-600">{String(i + 1).padStart(2, "0")}.</span>
                {s.heading}
              </h2>
              <div className="mt-3 space-y-3 text-[15px] leading-relaxed text-muted [&_a]:font-semibold [&_a]:text-brand-600 [&_a:hover]:underline [&_li]:ml-5 [&_li]:list-disc [&_ul]:space-y-1.5">
                {s.body}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
