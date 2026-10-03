import { cn } from "@/lib/utils";

/** Soft drifting blue light blobs over a white canvas, with a masked grid. */
export function Aurora({ className, grid = true }: { className?: string; grid?: boolean }) {
  return (
    <div aria-hidden className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      <div className="absolute -top-[20%] -right-[10%] size-[55vw] max-w-[760px] animate-aurora rounded-full bg-brand-200/60 blur-[100px]" />
      <div className="absolute top-[30%] -left-[15%] size-[45vw] max-w-[600px] animate-aurora rounded-full bg-brand-100/80 blur-[100px] [animation-delay:-6s]" />
      <div className="absolute -bottom-[25%] left-[35%] size-[40vw] max-w-[520px] animate-aurora rounded-full bg-sky-100/70 blur-[90px] [animation-delay:-12s]" />
      {grid && (
        <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_70%_60%_at_50%_30%,black,transparent_75%)]" />
      )}
    </div>
  );
}
