import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { FaqItem } from "@/data/faq";

export function FaqSection({
  items,
  title = "Întrebări frecvente",
  id,
  quiet = false,
}: {
  items: FaqItem[];
  title?: string;
  id?: string;
  quiet?: boolean;
}) {
  return (
    <section
      id={id}
      className={
        quiet
          ? "mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14"
          : "mx-auto max-w-3xl px-4 py-20 sm:px-6 sm:py-28"
      }
    >
      <h2
        className={
          quiet
            ? "font-heading text-lg font-semibold text-foreground/80"
            : "font-heading text-2xl font-bold sm:text-3xl"
        }
      >
        {title}
      </h2>
      <Accordion className={quiet ? "mt-4" : "mt-8"}>
        {items.map((item, index) => (
          <AccordionItem key={item.question} value={`item-${index}`}>
            <AccordionTrigger className="text-left text-base font-medium">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">{item.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
