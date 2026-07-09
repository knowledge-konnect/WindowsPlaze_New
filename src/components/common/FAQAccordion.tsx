import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
  className?: string;
}

export function FAQAccordion({ items, className }: FAQAccordionProps) {
  return (
    <Accordion type="single" collapsible className={cn("w-full space-y-3", className)}>
      {items.map((item, i) => (
        <AccordionItem
          key={i}
          value={`item-${i}`}
          className="border border-border rounded-xl bg-card px-4 sm:px-5 shadow-[var(--shadow-soft)] transition-all duration-300 data-[state=open]:border-primary/40 data-[state=open]:bg-primary/[0.02] data-[state=open]:shadow-[var(--shadow-elevated)]"
        >
          <AccordionTrigger className="text-left text-sm sm:text-base font-medium text-foreground hover:no-underline hover:text-primary py-4 sm:py-5 transition-colors duration-200 [&[data-state=open]]:text-primary">
            {item.question}
          </AccordionTrigger>
          <AccordionContent className="text-sm sm:text-base text-muted-foreground leading-relaxed pb-4 sm:pb-5">
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
