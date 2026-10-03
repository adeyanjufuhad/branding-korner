import { greetings } from "@/lib/site";

export function GreetingMarquee() {
  const row = [...greetings, ...greetings];
  return (
    <div className="relative overflow-hidden border-y border-line bg-white py-5">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white to-transparent" />
      <ul className="flex w-max animate-marquee items-center gap-10" aria-label="Hello in many languages">
        {row.map((word, i) => (
          <li
            key={i}
            aria-hidden={i >= greetings.length}
            className="flex items-center gap-10 text-2xl font-semibold whitespace-nowrap text-brand-900/80 sm:text-3xl"
          >
            {word}
            <span className="size-2 rounded-full bg-brand-300" />
          </li>
        ))}
      </ul>
    </div>
  );
}
