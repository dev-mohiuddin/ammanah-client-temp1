// app/components/faq.tsx
"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  return (
    <section id="faq" className="py-16 bg-background text-foreground">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl font-bold text-center mb-10">
          Frequently Asked Questions
        </h2>

        <Accordion type="single" collapsible className="space-y-4">
          <AccordionItem value="item-1">
            <AccordionTrigger>How do I place a food order?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Simply browse the menu, add your favorite dishes to the cart, and
              proceed to checkout. You can pay online or opt for cash on
              delivery if available.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>
              Can I schedule an order for later?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Yes! During checkout, you can choose a specific time for delivery
              or pickup that suits your schedule.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>Do you offer home delivery?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Absolutely. We offer fast and safe home delivery within selected
              zones. Delivery times are shown during checkout.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger>
              What payment methods do you accept?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              We accept debit/credit cards, mobile banking (e.g., bKash, Nagad),
              and cash on delivery.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger>
              Can I customize my order (e.g., remove onions)?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Yes, you can add notes or customization instructions before
              confirming your order. We try our best to meet your preferences.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6">
            <AccordionTrigger>Is there a minimum order value?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Some locations may require a minimum order for delivery. The
              requirement will be displayed at checkout if applicable.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
