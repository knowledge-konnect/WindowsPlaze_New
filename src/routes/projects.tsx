import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";
import { Button, Container, GalleryCard, Section, SectionHeading } from "@/components";
import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight, MessageCircle } from "lucide-react";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects & Gallery — Recent Installations | WINDOWS PLAZA" },
      {
        name: "description",
        content:
          "Explore a curated gallery of WINDOWS PLAZA recent uPVC and PVC window and door installations — villas, apartments, and commercial spaces.",
      },
      { property: "og:title", content: "Projects — WINDOWS PLAZA" },
      {
        property: "og:description",
        content: "A showcase of homes and buildings transformed by our windows and doors.",
      },
      { property: "og:url", content: "/projects" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: ProjectsPage,
});

const PROJECTS = [
  { image: g1, title: "Willow Lane Residence", tag: "Villa · Bengaluru" },
  { image: g2, title: "Sunlit Kitchen Retreat", tag: "Interior · Mumbai" },
  { image: g3, title: "Skyline Apartment", tag: "High-rise · Pune" },
  { image: g4, title: "Heritage Entryway", tag: "Entry Door · Hyderabad" },
  { image: g5, title: "Serene Master Suite", tag: "Bedroom · Chennai" },
  { image: g6, title: "Garden Studio", tag: "Home Office · Goa" },
  { image: g2, title: "Lakeview Penthouse", tag: "Sliding Doors · Kolkata" },
  { image: g1, title: "Coastal Villa", tag: "Casement · Alibaug" },
  { image: g4, title: "Boutique Café", tag: "Commercial · Bengaluru" },
];

function ProjectsPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative -mt-16 md:-mt-20 pt-32 md:pt-40 pb-16 md:pb-20 bg-section">
        <Container>
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-accent">Our work</p>
          <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground max-w-3xl leading-[1.1]">
            30+ projects. One consistent standard of craftsmanship.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            A closer look at recent installations across homes, high-rises and commercial spaces —
            each one measured, manufactured and installed by our own teams.
          </p>
        </Container>
      </section>

      {/* GRID */}
      <Section>
        <Container>
          <SectionHeading
            eyebrow="Featured projects"
            title="Homes and buildings we've reshaped"
            description="Hover to see the story behind each installation."
          />
          <div className="grid gap-5 md:gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PROJECTS.map((p, i) => (
              <GalleryCard key={i} image={p.image} title={p.title} tag={p.tag} />
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section muted>
        <Container>
          <div className="rounded-xl bg-primary text-primary-foreground p-10 md:p-14 text-center shadow-[var(--shadow-elevated)]">
            <h2 className="text-3xl md:text-4xl font-semibold leading-tight max-w-3xl mx-auto">
              Your project could be next.
            </h2>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/contact">
                  Get Free Quote <ArrowRight />
                </Link>
              </Button>
              <Button size="lg" variant="whatsapp" asChild>
                <a
                  href="https://wa.me/918341166268?text=Hi%2C%20I%27d%20like%20a%20free%20quote%20for%20my%20project."
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
