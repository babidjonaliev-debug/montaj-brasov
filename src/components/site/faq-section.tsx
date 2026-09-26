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
}: {
  items: FaqItem[];
  title?: string;
  id?: string;
}) {
  return (
    <section id={id} className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <h2 className="font-heading text-2xl font-bold sm:text-3xl">{title}</h2>
      <Accordion className="mt-8">
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
