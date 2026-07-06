import { cn } from "@/lib/utils";
import { animate, motion, useInView, useMotionValue, useTransform } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { useEffect, useRef } from "react";

export interface StatisticsCardProps {
  value: number;
  suffix?: string;
  label: string;
  icon?: LucideIcon;
  className?: string;
}

export function StatisticsCard({
  value,
  suffix = "+",
  label,
  icon: Icon,
  className,
}: StatisticsCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest).toLocaleString());

  useEffect(() => {
    if (inView) {
      const controls = animate(count, value, { duration: 1.6, ease: [0.22, 1, 0.36, 1] });
      return controls.stop;
    }
  }, [inView, value, count]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={cn(
        "h-full md:min-h-[220px] bg-card rounded-xl border border-border/90 p-6 md:p-8 text-center shadow-[var(--shadow-soft)] hover-lift",
        className,
      )}
    >
      {Icon && (
        <div className="inline-flex size-11 items-center justify-center rounded-[12px] bg-primary/10 text-primary mb-4">
          <Icon className="size-5" />
        </div>
      )}
      <div className="flex items-baseline justify-center gap-1">
        <motion.span className="text-4xl md:text-5xl font-semibold text-primary tabular-nums">
          {rounded}
        </motion.span>
        {suffix && (
          <span className="text-2xl md:text-3xl font-semibold text-primary">{suffix}</span>
        )}
      </div>
      <p className="mt-2.5 text-sm md:text-base text-muted-foreground">{label}</p>
    </motion.div>
  );
}
