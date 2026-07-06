import { cn } from "@/lib/utils";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export interface ProductCardProps {
  title: string;
  category?: string;
  description?: string;
  image: string;
  href?: string;
  className?: string;
}

export function ProductCard({
  title,
  category,
  description,
  image,
  href = "#",
  className,
}: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6 }}
      className={cn(
        "group relative bg-card rounded-xl border border-border/90 overflow-hidden",
        "shadow-[var(--shadow-soft)] hover-lift",
        className,
      )}
    >
      <Link to={href as string} className="block">
        <div className="image-zoom aspect-[4/3] bg-section">
          <img src={image} alt={title} className="h-full w-full object-cover" loading="lazy" />
        </div>
        <div className="p-6">
          {category && (
            <p className="text-xs font-semibold tracking-widest uppercase text-accent mb-2">
              {category}
            </p>
          )}
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-lg font-semibold text-primary group-hover:text-primary-hover transition-colors">
              {title}
            </h3>
            <ArrowUpRight className="size-5 text-muted-foreground group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-300" />
          </div>
          {description && (
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{description}</p>
          )}
        </div>
      </Link>
    </motion.div>
  );
}
