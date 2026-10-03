"use client";

import { useSyncExternalStore } from "react";

import { cities } from "@/lib/site";
import { cn } from "@/lib/utils";

function format(date: Date, tz: string) {
  return new Intl.DateTimeFormat("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone: tz,
  }).format(date);
}

const subscribe = (onChange: () => void) => {
  const id = setInterval(onChange, 15_000);
  return () => clearInterval(id);
};
// Snapshot is the current minute, so it stays stable between ticks.
const getMinute = () => Math.floor(Date.now() / 60_000);
// Times are unknown on the server; render placeholders until hydrated.
const getServerMinute = () => null;

export function WorldClocks({ className }: { className?: string }) {
  const minute = useSyncExternalStore(subscribe, getMinute, getServerMinute);
  const now = minute === null ? null : new Date(minute * 60_000);

  return (
    <ul className={cn("grid grid-cols-2 gap-3 sm:grid-cols-3", className)}>
      {cities.map(({ city, tz, home }) => (
        <li
          key={city}
          className={cn(
            "rounded-2xl border px-4 py-3",
            home ? "border-brand-600 bg-brand-600 text-white" : "border-line bg-white",
          )}
        >
          <p
            className={cn(
              "text-xs font-medium tracking-wide uppercase",
              home ? "text-brand-100" : "text-muted",
            )}
          >
            {city}
            {home && " · HQ"}
          </p>
          <p
            className={cn(
              "mt-1 font-mono text-xl font-semibold tabular-nums",
              home ? "text-white" : "text-brand-900",
            )}
          >
            {now ? format(now, tz) : "--:--"}
          </p>
        </li>
      ))}
    </ul>
  );
}
