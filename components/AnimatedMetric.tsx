"use client";

import { useEffect, useMemo, useState } from "react";

type AnimatedMetricProps = {
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
  decimals?: number;
};

export function AnimatedMetric({
  value,
  label,
  prefix = "",
  suffix = "",
  decimals = 0
}: AnimatedMetricProps) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    let frame = 0;
    let animationFrame = 0;
    const totalFrames = 78;

    const tick = () => {
      frame += 1;
      const progress = Math.min(frame / totalFrames, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCurrent(value * eased);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(tick);
      }
    };

    animationFrame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animationFrame);
  }, [value]);

  const displayValue = useMemo(
    () =>
      current.toLocaleString("en-US", {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals
      }),
    [current, decimals]
  );

  return (
    <div className="rounded-md border border-white/10 bg-white/[0.045] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
      <p className="text-2xl font-semibold text-white md:text-3xl">
        {prefix}
        {displayValue}
        {suffix}
      </p>
      <p className="mt-2 text-xs uppercase text-slate-400">{label}</p>
    </div>
  );
}
