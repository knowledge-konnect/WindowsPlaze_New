import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

export function Container({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("container-page", className)} {...props} />;
}

export function Section({
  className,
  muted,
  ...props
}: HTMLAttributes<HTMLElement> & { muted?: boolean }) {
  return (
    <section
      className={cn("section-y bg-background", muted && "bg-section", className)}
      {...props}
    />
  );
}
