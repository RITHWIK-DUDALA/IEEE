import * as React from "react";

export function CircuitTrace({ className }: { className?: string }) {
  return (
    <div className={`absolute -z-10 pointer-events-none overflow-hidden w-full h-full opacity-30 ${className}`}>
      <svg
        className="absolute w-full h-full text-[var(--color-signal-teal)] motion-reduce:hidden"
        viewBox="0 0 1000 1000"
        preserveAspectRatio="none"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path
          d="M -100 200 L 200 200 L 250 250 L 500 250 L 550 300 L 800 300 L 850 350 L 1100 350"
          vectorEffect="non-scaling-stroke"
        />
        <circle cx="200" cy="200" r="4" fill="currentColor" vectorEffect="non-scaling-stroke" />
        <circle cx="500" cy="250" r="4" fill="currentColor" vectorEffect="non-scaling-stroke" />
        <circle cx="800" cy="300" r="4" fill="currentColor" vectorEffect="non-scaling-stroke" />
      </svg>
    </div>
  );
}
