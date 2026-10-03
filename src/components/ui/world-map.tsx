"use client";

/**
 * Adapted from Aceternity's "World Map" on 21st.dev
 * (https://21st.dev/@manuarora700/components/world-map).
 * The dotted map is pre-generated with `dotted-map` into /public/brand/world-dots.svg
 * so no map computation runs in the browser; arcs share the same 139×70 viewBox.
 */

import { motion, useInView, useReducedMotion } from "motion/react";
import { useRef } from "react";

import { cn } from "@/lib/utils";

const VIEW_W = 139;
const VIEW_H = 70;

export const mapPins = {
  lagos: [70.5, 39.84],
  london: [69.5, 17.32],
  newYork: [39, 23.38],
  toronto: [36.5, 22.52],
  dubai: [92.5, 31.18],
  sydney: [132.5, 57.16],
  berlin: [75, 16.45],
  singapore: [112.5, 41.57],
  nairobi: [85, 42.44],
  johannesburg: [81, 52.83],
  saoPaulo: [50.5, 51.96],
} as const satisfies Record<string, readonly [number, number]>;

export type PinId = keyof typeof mapPins;

type Route = { to: PinId; label: string };

function curve([x1, y1]: readonly [number, number], [x2, y2]: readonly [number, number]) {
  const mx = (x1 + x2) / 2;
  const lift = Math.min(18, Math.hypot(x2 - x1, y2 - y1) * 0.35);
  const my = Math.min(y1, y2) - lift;
  return `M ${x1} ${y1} Q ${mx} ${my} ${x2} ${y2}`;
}

export function WorldMap({
  from = "lagos",
  routes,
  className,
}: {
  from?: PinId;
  routes: Route[];
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reduce = useReducedMotion();
  const origin = mapPins[from];

  return (
    <div ref={ref} className={cn("relative aspect-[139/70] w-full select-none", className)}>
      {/* eslint-disable-next-line @next/next/no-img-element -- static SVG, no optimisation needed */}
      <img
        src="/brand/world-dots.svg"
        alt=""
        aria-hidden
        draggable={false}
        className="pointer-events-none absolute inset-0 size-full [mask-image:linear-gradient(to_bottom,transparent,black_8%,black_92%,transparent)]"
      />
      <svg
        viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
        className="pointer-events-none absolute inset-0 size-full overflow-visible"
        role="img"
        aria-label={`Routes from Lagos to ${routes.map((r) => r.label).join(", ")}`}
      >
        <defs>
          <linearGradient id="wm-line" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#2f6fe6" stopOpacity="0" />
            <stop offset="12%" stopColor="#2f6fe6" stopOpacity="1" />
            <stop offset="88%" stopColor="#0a5bbd" stopOpacity="1" />
            <stop offset="100%" stopColor="#0a5bbd" stopOpacity="0" />
          </linearGradient>
        </defs>

        {routes.map((r, i) => {
          const d = curve(origin, mapPins[r.to]);
          return (
            <g key={r.to}>
              <motion.path
                id={`wm-route-${r.to}`}
                d={d}
                fill="none"
                stroke="url(#wm-line)"
                strokeWidth={0.35}
                strokeLinecap="round"
                initial={{ pathLength: reduce ? 1 : 0 }}
                animate={inView ? { pathLength: 1 } : undefined}
                transition={{ duration: 1.2, delay: 0.25 * i, ease: "easeOut" }}
              />
              {/* A small "plane" that keeps travelling the route once it is drawn */}
              {inView && !reduce && (
                <circle r={0.55} fill="#0a5bbd">
                  <animateMotion
                    dur={`${3.2 + (i % 3) * 0.6}s`}
                    begin={`${0.25 * i + 1.2}s`}
                    repeatCount="indefinite"
                    keyPoints="0;1"
                    keyTimes="0;1"
                    calcMode="linear"
                  >
                    <mpath href={`#wm-route-${r.to}`} />
                  </animateMotion>
                </circle>
              )}
            </g>
          );
        })}

        {[from, ...routes.map((r) => r.to)].map((id, i) => {
          const [x, y] = mapPins[id];
          const home = id === from;
          return (
            <g key={id}>
              <circle cx={x} cy={y} r={home ? 1 : 0.65} fill={home ? "#04225c" : "#0a5bbd"} />
              <circle cx={x} cy={y} r={home ? 1 : 0.65} fill="#0a5bbd" opacity={0.5}>
                <animate
                  attributeName="r"
                  from={home ? 1 : 0.65}
                  to={home ? 4.5 : 3}
                  dur="2s"
                  begin={`${i * 0.2}s`}
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  from="0.5"
                  to="0"
                  dur="2s"
                  begin={`${i * 0.2}s`}
                  repeatCount="indefinite"
                />
              </circle>
            </g>
          );
        })}
      </svg>

      {/* City labels as HTML so they stay crisp at any size */}
      {[{ to: from, label: "Lagos HQ" } as Route, ...routes].map((r, i) => {
        const [x, y] = mapPins[r.to];
        const home = r.to === from;
        return (
          <motion.span
            key={r.to}
            initial={{ opacity: 0, y: 4 }}
            animate={inView ? { opacity: 1, y: 0 } : undefined}
            transition={{ delay: home ? 0.1 : 0.25 * (i - 1) + 1, duration: 0.4 }}
            style={{ left: `${(x / VIEW_W) * 100}%`, top: `${(y / VIEW_H) * 100}%` }}
            className={cn(
              "absolute hidden -translate-x-1/2 translate-y-[calc(-100%-10px)] rounded-full px-2 py-0.5 text-[10px] font-semibold whitespace-nowrap shadow-sm sm:block lg:text-xs",
              home
                ? "bg-brand-900 text-white"
                : "border border-brand-100 bg-white/95 text-brand-800",
            )}
          >
            {r.label}
          </motion.span>
        );
      })}
    </div>
  );
}
