import { Button, Container, FAQAccordion, Section, SectionHeading } from "@/components";
import { SITE_CONFIG } from "@/lib/siteConfig";
import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight, MessageCircle } from "lucide-react";

export const Route = createFileRoute("/faq")({
  head: () => {
    const pageUrl = `${SITE_CONFIG.seo.canonicalOrigin}/faq`;

    return {
      meta: [
        { title: "Frequently Asked Questions | WINDOWS PLAZA" },
        {
          name: "description",
          content:
            "Everything you wanted to know about WINDOWS PLAZA uPVC windows, uPVC doors and PVC doors — lifespan, noise reduction, warranty, installation and more.",
        },
        { property: "og:title", content: "FAQ — WINDOWS PLAZA" },
        {
          property: "og:description",
          content: "15 quick answers about Windows Plaza uPVC and PVC systems.",
        },
        { property: "og:url", content: pageUrl },
        { name: "twitter:title", content: "FAQ — WINDOWS PLAZA" },
        {
          name: "twitter:description",
          content: "15 quick answers about Windows Plaza uPVC and PVC systems.",
        },
        { name: "twitter:url", content: pageUrl },
      ],
      links: [{ rel: "canonical", href: pageUrl }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: FAQS.map((f) => ({
              "@type": "Question",
              name: f.question,
              acceptedAnswer: { "@type": "Answer", text: f.answer },
            })),
          }),
        },
      ],
    };
  },
  component: FAQPage,
});

const FAQS = [
  {
    question: "What is uPVC and why is it better than aluminium or wood?",
    answer:
      "uPVC (unplasticised polyvinyl chloride) is a rigid, weather-resistant polymer. Unlike wood it never rots, warps or attracts termites, and unlike aluminium it insulates against heat and sound instead of conducting them — giving you a quieter, more energy-efficient home.",
  },
  {
    question: "How long do uPVC windows and doors typically last?",
    answer:
      "Properly manufactured and installed uPVC systems last 30 to 50 years with virtually no maintenance. Our profiles are UV-stabilised for tropical climates and backed by a 10-year warranty.",
  },
  {
    question: "Can uPVC really reduce noise from outside?",
    answer:
      "Yes. Multi-chamber profiles combined with double-glazed sealed units reduce external noise by up to 40 decibels — enough to turn a busy street into a whisper indoors.",
  },
  {
    question: "Will the windows help lower my electricity bill?",
    answer:
      "Absolutely. Our thermally insulated frames and Low-E glass options can cut air-conditioning and heating loads by 25–35%, paying for themselves over a few years of use.",
  },
  {
    question: "Do you offer customised sizes, colours and designs?",
    answer:
      "Every order is made to measure. Choose from sliding, casement, tilt-and-turn, French, bi-fold and fixed systems in classic white, wood-grain laminates or premium colour finishes.",
  },
  {
    question: "How long does a typical project take from order to install?",
    answer:
      "Most residential projects are surveyed, manufactured and installed within 3 to 4 weeks. Large commercial projects follow a shared production schedule agreed in advance.",
  },
  {
    question: "Are your products safe for coastal or high-rainfall regions?",
    answer:
      "Yes — uPVC does not rust, corrode or absorb moisture, making it ideal for coastal cities and heavy monsoon regions. All units are pressure-tested for water and wind tightness.",
  },
  {
    question: "What kind of glass options are available?",
    answer:
      "We offer single glazing, double-glazed insulated units, laminated safety glass, tinted glass, frosted glass and Low-E energy-saving glass — matched to your comfort and privacy needs.",
  },
  {
    question: "Do you handle removal of existing windows and clean-up?",
    answer:
      "We do. Our install crews remove the old frames, protect your interiors, seal all joints, and hand over each opening cleaned and ready to use.",
  },
  {
    question: "What does the 10-year warranty actually cover?",
    answer:
      "It covers manufacturing defects on profiles, sealed glass units, hardware and workmanship. Any covered issue is repaired or replaced free of charge by our service team.",
  },
  {
    question: "Are uPVC windows safe in a fire?",
    answer:
      "Our uPVC profiles are self-extinguishing — they do not support combustion and stop burning as soon as the flame source is removed. They also do not emit toxic gases in normal fire scenarios.",
  },
  {
    question: "Can uPVC frames be painted later?",
    answer:
      "uPVC never needs painting — the colour runs through the material and the surface stays vibrant for decades. If you want a different look later, we recommend wood-grain foil lamination instead.",
  },
  {
    question: "Do you also service and repair windows after installation?",
    answer:
      "Yes. Every installation includes a dedicated service line and free breakdown support for the duration of your 10-year warranty. Out-of-warranty service visits are also available on request.",
  },
  {
    question: "What's the difference between uPVC doors and PVC doors?",
    answer:
      "uPVC doors are used for external openings — main entrances, balconies, patios — where strength and weather-tightness matter. PVC doors are lighter interior doors, ideal for bathrooms, bedrooms and utility spaces where water resistance is key.",
  },
];

function FAQPage() {
  return (
    <>
      <section className="relative -mt-14 md:-mt-20 pt-24 md:pt-40 pb-12 md:pb-16 bg-section">
        <Container>
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-accent">FAQ</p>
          <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground max-w-3xl leading-[1.1]">
            Answers, before you even ask.
          </h1>
          <p className="mt-5 sm:mt-6 max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed">
            Fifteen of the most common questions we hear about our uPVC and PVC systems. Can't find
            yours? Message us on WhatsApp — we usually reply within minutes.
          </p>
        </Container>
      </section>

      <Section>
        <Container>
          <SectionHeading
            eyebrow="15 questions, honest answers"
            title="Everything you wanted to know"
            description="From lifespan and noise reduction to warranty and after-sales — the essentials in one place."
          />
          <div className="max-w-3xl mx-auto">
            <FAQAccordion items={FAQS} />
          </div>
        </Container>
      </Section>

      <Section muted>
        <Container>
          <div className="rounded-xl bg-primary text-primary-foreground p-6 sm:p-8 md:p-14 text-center shadow-[var(--shadow-elevated)]">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight max-w-3xl mx-auto">
              Still have a question? We'd love to help.
            </h2>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/contact">
                  Get Free Quote <ArrowRight />
                </Link>
              </Button>
              <Button size="lg" variant="whatsapp" asChild>
                <a
                  href="https://wa.me/918341166268?text=Hi%2C%20I%20have%20a%20question%20about%20your%20products."
                  target="_blank"
                  rel="noreferrer"
                >
                  <MessageCircle /> WhatsApp Us
                </a>
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
