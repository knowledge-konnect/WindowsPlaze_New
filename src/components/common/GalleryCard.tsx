import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Expand } from "lucide-react";

export interface GalleryCardProps {
  image: string;
  title?: string;
  tag?: string;
  onClick?: () => void;
  className?: string;
}

export function GalleryCard({ image, title, tag, onClick, className }: GalleryCardProps) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5 }}
      className={cn(
        "group relative block w-full overflow-hidden rounded-xl border border-border/90 bg-card text-left image-zoom",
        "shadow-[var(--shadow-soft)] hover-lift",
        className,
      )}
    >
      <div className="aspect-[4/5]">
        <img
          src={image}
          alt={title ?? "Gallery item"}
          loading="lazy"
          decoding="async"
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-[#084A85]/0 group-hover:bg-[#084A85]/28 transition-colors duration-300" />
      <div className="absolute inset-x-0 bottom-0 p-5 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
        <div className="flex items-end justify-between gap-3">
          <div>
            {tag && (
              <p className="text-[10px] font-semibold uppercase tracking-widest text-white/85">
                {tag}
              </p>
            )}
            {title && <p className="text-background font-medium mt-1">{title}</p>}
            <p className="mt-2 inline-flex items-center rounded-full bg-white/92 px-3 py-1 text-xs font-semibold text-primary shadow-sm">
              View Project
            </p>
          </div>
          <span className="inline-flex size-9 items-center justify-center rounded-full bg-background/95 text-primary shadow-sm">
            <Expand className="size-4" />
          </span>
        </div>
      </div>
    </motion.button>
  );
}
