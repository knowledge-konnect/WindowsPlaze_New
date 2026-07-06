import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef } from "react";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl font-medium " +
  "transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 " +
  "disabled:pointer-events-none disabled:opacity-50 " +
  "[&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-primary-foreground shadow-[var(--shadow-elevated)] " +
          "hover:bg-primary-hover hover:shadow-[var(--shadow-hover)] hover:-translate-y-0.5 active:translate-y-0",
        secondary:
          "bg-background text-foreground border border-border shadow-[var(--shadow-soft)] " +
          "hover:bg-section hover:border-primary/30 hover:-translate-y-0.5 active:translate-y-0",
        accent:
          "bg-primary text-primary-foreground shadow-[var(--shadow-elevated)] " +
          "hover:bg-primary-hover hover:shadow-[var(--shadow-hover)] hover:-translate-y-0.5",
        whatsapp:
          "bg-[#25D366] text-white shadow-[var(--shadow-elevated)] " +
          "hover:bg-[#25D366] hover:shadow-[var(--shadow-hover)] hover:-translate-y-0.5",
        outline:
          "border border-primary text-primary bg-transparent hover:bg-primary hover:text-primary-foreground hover:-translate-y-0.5",
        ghost: "text-foreground hover:bg-section hover:-translate-y-0.5",
        link: "text-primary underline-offset-4 hover:underline p-0 h-auto",
      },
      size: {
        sm: "h-9 px-4 text-sm",
        md: "h-11 px-6 text-sm",
        lg: "h-13 px-8 text-base",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp className={cn(buttonVariants({ variant, size }), className)} ref={ref} {...props} />
    );
  },
);
Button.displayName = "Button";
