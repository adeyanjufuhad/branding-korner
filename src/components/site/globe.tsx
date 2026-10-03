"use client";

import createGlobe from "cobe";
import { useEffect, useRef } from "react";

import { cn } from "@/lib/utils";

const LAGOS: [number, number] = [6.5244, 3.3792];

const destinations: [number, number][] = [
  [51.5072, -0.1276], // London
  [40.7128, -74.006], // New York
  [43.6532, -79.3832], // Toronto
  [25.2048, 55.2708], // Dubai
  [-33.8688, 151.2093], // Sydney
  [52.52, 13.405], // Berlin
  [1.3521, 103.8198], // Singapore
  [-1.2921, 36.8219], // Nairobi
  [5.6037, -0.187], // Accra
];

const BLUE: [number, number, number] = [10 / 255, 91 / 255, 189 / 255];

export function Globe({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointer = useRef<number | null>(null);
  const drag = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let width = canvas.offsetWidth;
    // Start with West Africa facing the viewer.
    let phi = 4.65;
    let frame = 0;

    const globe = createGlobe(canvas, {
      devicePixelRatio: 2,
      width: width * 2,
      height: width * 2,
      phi,
      theta: 0.22,
      dark: 0,
      diffuse: 1.1,
      mapSamples: 18000,
      mapBrightness: 5,
      mapBaseBrightness: 0.02,
      baseColor: [0.94, 0.96, 1],
      markerColor: BLUE,
      glowColor: [0.86, 0.91, 1],
      markers: [
        { location: LAGOS, size: 0.09 },
        ...destinations.map((location) => ({ location, size: 0.045 })),
      ],
      arcs: destinations.map((to) => ({ from: LAGOS, to })),
      arcColor: [0.18, 0.44, 0.9],
      arcWidth: 0.6,
      arcHeight: 0.35,
      markerElevation: 0.01,
      opacity: 0.95,
    });

    const onResize = () => {
      width = canvas.offsetWidth;
      globe.update({ width: width * 2, height: width * 2 });
    };
    window.addEventListener("resize", onResize);

    const tick = () => {
      if (pointer.current === null && !reduceMotion) phi += 0.0035;
      globe.update({ phi: phi + drag.current });
      frame = requestAnimationFrame(tick);
    };
    tick();

    requestAnimationFrame(() => {
      canvas.style.opacity = "1";
    });

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", onResize);
      globe.destroy();
    };
  }, []);

  return (
    <div className={cn("relative mx-auto aspect-square w-full max-w-[560px]", className)}>
      <canvas
        ref={canvasRef}
        aria-label="Globe showing connections from Lagos to cities around the world"
        role="img"
        className="size-full cursor-grab opacity-0 transition-opacity duration-1000 [contain:layout_paint_size] active:cursor-grabbing"
        onPointerDown={(e) => {
          pointer.current = e.clientX - drag.current * 200;
          e.currentTarget.setPointerCapture(e.pointerId);
        }}
        onPointerUp={() => {
          pointer.current = null;
        }}
        onPointerCancel={() => {
          pointer.current = null;
        }}
        onPointerMove={(e) => {
          if (pointer.current !== null) drag.current = (e.clientX - pointer.current) / 200;
        }}
      />
    </div>
  );
}
