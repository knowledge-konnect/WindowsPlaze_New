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
          className="border border-border rounded-xl bg-card px-4 sm:px-5 shadow-[var(--shadow-soft)] transition-colors data-[state=open]:border-primary/35"
        >
          <AccordionTrigger className="text-left text-sm sm:text-base font-medium text-foreground hover:no-underline py-4 sm:py-5">
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
