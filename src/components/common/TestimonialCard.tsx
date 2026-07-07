import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

export interface TestimonialCardProps {
  quote: string;
  name: string;
  role?: string;
  avatar?: string;
  rating?: number;
  className?: string;
}

export function TestimonialCard({
  quote,
  name,
  role,
  avatar,
  rating = 5,
  className,
}: TestimonialCardProps) {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55 }}
      className={cn(
        "relative h-full bg-card rounded-xl border border-border/90 p-6 sm:p-8 md:p-9 shadow-[var(--shadow-soft)] hover-lift",
        className,
      )}
    >
      <Quote className="absolute top-6 right-6 size-8 text-primary/10" />
      <div className="flex gap-0.5 mb-6">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} className="size-4 fill-primary text-primary" />
        ))}
      </div>
      <blockquote className="text-foreground/95 leading-relaxed text-[1rem] md:text-[1.02rem]">
        "{quote}"
      </blockquote>
      <figcaption className="mt-7 flex items-center gap-3.5">
        {avatar ? (
          <img
            src={avatar}
            alt={name}
            className="size-11 rounded-full object-cover border border-border shadow-sm"
          />
        ) : (
          <div className="size-11 rounded-full bg-primary/10 text-primary grid place-items-center font-semibold shadow-sm">
            {name.charAt(0)}
          </div>
        )}
        <div>
          <div className="font-semibold text-sm text-primary">{name}</div>
          {role && <div className="text-xs text-muted-foreground/90">{role}</div>}
        </div>
      </figcaption>
    </motion.figure>
  );
}
