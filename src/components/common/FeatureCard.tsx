import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

export interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

export function FeatureCard({ icon: Icon, title, description, className }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55 }}
      className={cn(
        "group relative h-full md:min-h-[248px] bg-card rounded-xl border border-border/90 p-7 md:p-8",
        "shadow-[var(--shadow-soft)] hover-lift",
        className,
      )}
    >
      <div className="inline-flex items-center justify-center size-12 rounded-[12px] bg-primary/10 text-primary mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
        <Icon className="size-6" />
      </div>
      <h3 className="text-lg md:text-[1.1rem] font-semibold text-primary mb-2.5">{title}</h3>
      <p className="text-sm md:text-[0.95rem] text-muted-foreground leading-relaxed">{description}</p>
    </motion.div>
  );
}
