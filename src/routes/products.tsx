import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";
import pvcDoorImg from "@/assets/product-pvc-door.jpg";
import upvcDoorImg from "@/assets/product-upvc-door.jpg";
import windowImg from "@/assets/product-upvc-window.jpg";
import { Button, Container, Section, SectionHeading } from "@/components";
import { Link, createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Check, MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — uPVC Windows, uPVC Doors & PVC Doors | WINDOWS PLAZA" },
      {
        name: "description",
        content:
          "Explore WINDOWS PLAZA's complete range of uPVC windows (sliding, casement, fixed, tilt & turn), uPVC doors and PVC bathroom and designer doors.",
      },
      { property: "og:title", content: "Our Products — WINDOWS PLAZA" },
      {
        property: "og:description",
        content:
          "Sliding, casement, French, tilt-and-turn and more — engineered for silence, security and lifelong performance.",
      },
      { property: "og:url", content: "/products" },
    ],
    links: [{ rel: "canonical", href: "/products" }],
  }),
  component: ProductsPage,
});

interface Product {
  title: string;
  image: string;
  description: string;
  features: string[];
  applications: string[];
}

interface Category {
  slug: string;
  title: string;
  intro: string;
  products: Product[];
}

const CATEGORIES: Category[] = [
  {
    slug: "upvc-windows",
    title: "uPVC Windows",
    intro:
      "Precision-engineered window systems that flood your rooms with light while sealing out noise, dust and weather.",
    products: [
      {
        title: "Sliding Windows",
        image: windowImg,
        description:
          "Space-saving horizontal sashes that glide effortlessly on stainless-steel rollers — perfect for balconies and wide openings.",
        features: [
          "Twin or triple-track configurations",
          "Multi-point locking with anti-lift blocks",
          "Integrated mosquito mesh option",
          "Up to 3.6 m width without mullion",
        ],
        applications: ["Living rooms", "Balconies", "Bedrooms", "Kitchens"],
      },
      {
        title: "Casement Windows",
        image: g1,
        description:
          "Side-hung windows that swing open like a door for full ventilation and unobstructed views.",
        features: [
          "Full 90° opening for maximum airflow",
          "Espagnolette multi-point locking",
          "Concealed hinges for a clean look",
          "Optional friction stays",
        ],
        applications: ["Bedrooms", "Studies", "Bathrooms", "Villa facades"],
      },
      {
        title: "Fixed Windows",
        image: g2,
        description:
          "Non-opening picture windows for uninterrupted views and maximum daylight — ideal for stairwells and feature walls.",
        features: [
          "Slim sightlines for expansive glass",
          "Sealed for zero air leakage",
          "Custom shapes and sizes",
          "Compatible with laminated safety glass",
        ],
        applications: ["Stairwells", "Double-height walls", "Feature walls", "Foyers"],
      },
      {
        title: "Tilt & Turn Windows",
        image: g5,
        description:
          "European-style windows that tilt inward for secure ventilation or swing fully open for cleaning and airflow.",
        features: [
          "Dual-mode: tilt for ventilation, turn for full open",
          "Inward opening — safe for high-rises",
          "Enhanced security with concealed hardware",
          "Easy interior cleaning",
        ],
        applications: ["High-rise apartments", "Master bedrooms", "Home offices", "Kitchens"],
      },
      {
        title: "Combination Windows",
        image: g6,
        description:
          "Bespoke assemblies combining fixed, sliding and openable sashes into one architectural statement.",
        features: [
          "Mix fixed + sliding + casement in one frame",
          "Reinforced mullions for large spans",
          "Custom geometry and mullion patterns",
          "Colour-matched hardware options",
        ],
        applications: ["Villa facades", "Living rooms", "Commercial lobbies", "Terraces"],
      },
    ],
  },
  {
    slug: "upvc-doors",
    title: "uPVC Doors",
    intro:
      "Weather-tight external doors that combine the warmth of a home with the security of a fortress.",
    products: [
      {
        title: "Sliding Doors",
        image: upvcDoorImg,
        description:
          "Large-span sliding doors that dissolve the boundary between indoors and out — smooth, secure and stunning.",
        features: [
          "2 or 3 track systems up to 6 m wide",
          "Stainless-steel tandem rollers",
          "Multi-point hook locks",
          "Low-threshold option for barrier-free living",
        ],
        applications: ["Balconies", "Patios", "Garden entrances", "Poolside"],
      },
      {
        title: "French Doors",
        image: g4,
        description:
          "Elegant twin-leaf doors that open wide to bring the outdoors in — a timeless classic in uPVC.",
        features: [
          "Fully openable double-leaf design",
          "Astragal seal for weather-tightness",
          "Optional Georgian bar detailing",
          "Espagnolette multi-point locking",
        ],
        applications: ["Garden doors", "Living rooms", "Terraces", "Villas"],
      },
      {
        title: "Casement Doors",
        image: g1,
        description:
          "Single or double-leaf swing doors engineered for daily use, secure locking and lasting curb appeal.",
        features: [
          "Reinforced with galvanised steel core",
          "Anti-lift heavy-duty hinges",
          "Multi-point locking as standard",
          "Weather-sealed threshold",
        ],
        applications: ["Main entrances", "Utility doors", "Side entries", "Rear yards"],
      },
    ],
  },
  {
    slug: "pvc-doors",
    title: "PVC Doors",
    intro:
      "Lightweight, waterproof interior doors — perfect for the wet, humid corners of your home.",
    products: [
      {
        title: "Bathroom Doors",
        image: pvcDoorImg,
        description:
          "100% waterproof PVC doors that shrug off steam, splashes and humidity — no swelling, warping or rot.",
        features: [
          "Fully waterproof PVC core",
          "Anti-fungal and anti-termite",
          "Lightweight — easy on hinges",
          "Wipe-clean matte finish",
        ],
        applications: ["Bathrooms", "Wet balconies", "Servant toilets", "Utility"],
      },
      {
        title: "Bedroom Doors",
        image: g5,
        description:
          "Solid-core PVC interior doors in wood-grain finishes — the warmth of wood, without the maintenance.",
        features: [
          "Sound-dampening solid core",
          "Realistic wood-grain laminates",
          "Concealed hinges available",
          "Optional glass inserts",
        ],
        applications: ["Bedrooms", "Studies", "Guest rooms", "Walk-in closets"],
      },
      {
        title: "Designer Doors",
        image: g6,
        description:
          "Statement PVC doors with premium laminate finishes, decorative moulding and custom hardware.",
        features: [
          "Bespoke moulding and inlay patterns",
          "Premium hardware in matte black, brass or chrome",
          "High-pressure laminate finishes",
          "Made-to-measure sizing",
        ],
        applications: ["Master suites", "Feature entrances", "Pooja rooms", "Home theatres"],
      },
    ],
  },
];

const PETRA_STEEL_DOOR = {
  title: "PETRA Steel Doors",
  // TODO: Replace with a real PETRA steel door product photo.
  image: g4,
  description:
    "Premium GI steel doors from PETRA, engineered for security, durability and a refined modern look.",
  features: [
    "Galvanized steel construction",
    "Multi-point locking system",
    "Weather-resistant finish",
    "Suitable for homes and commercial spaces",
  ],
  applications: ["Main entrances", "Villas", "Offices", "Commercial buildings"],
};

function ProductCardExtended({ product }: { product: Product }) {
  const waMsg = encodeURIComponent(`Hi, I'd like to enquire about your ${product.title}.`);
  const topFeatures = product.features.slice(0, 3);
  const topApplications = product.applications.slice(0, 3);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55 }}
      className="group h-full rounded-xl border border-border bg-card shadow-[var(--shadow-soft)] overflow-hidden transition-shadow duration-300 hover:shadow-[var(--shadow-hover)]"
    >
      <div className="image-zoom aspect-[4/3] bg-section">
        <img
          src={product.image}
          alt={product.title}
          loading="lazy"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex h-full flex-col p-5 md:p-6">
        <h3 className="text-lg md:text-xl font-semibold text-foreground">{product.title}</h3>
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{product.description}</p>

        <div className="mt-5">
          <p className="mb-2 text-xs font-semibold tracking-widest uppercase text-accent">Features</p>
          <ul className="space-y-1.5">
            {topFeatures.map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm text-foreground/90">
                <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {topApplications.map((a) => (
            <span
              key={a}
              className="inline-flex items-center rounded-full border border-border bg-section px-2.5 py-1 text-xs font-medium text-foreground/80"
            >
              {a}
            </span>
          ))}
        </div>

        <div className="mt-auto pt-5">
          <a
            href={`https://wa.me/918341166268?text=${waMsg}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-full"
          >
            <Button variant="whatsapp" className="w-full justify-center">
              <MessageCircle /> Enquire on WhatsApp
            </Button>
          </a>
        </div>
      </div>
    </motion.div>
  );
}

function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState(CATEGORIES[0]?.slug ?? "");

  useEffect(() => {
    const sections = CATEGORIES.map((c) => document.getElementById(c.slug)).filter(
      (el): el is HTMLElement => el != null,
    );
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target?.id) {
          setActiveCategory(visible.target.id);
        }
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0.15, 0.3, 0.5] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* HERO */}
      <section className="relative -mt-14 md:-mt-20 pt-24 md:pt-40 pb-12 md:pb-20 bg-section">
        <Container>
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-accent">
            Our products
          </p>
          <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground max-w-3xl leading-[1.1]">
            The complete range of uPVC & PVC systems, in one place.
          </h1>
          <p className="mt-5 sm:mt-6 max-w-xl text-base sm:text-lg text-muted-foreground leading-relaxed">
            Windows, external doors and interior doors — engineered, manufactured and installed by a
            single team you can trust. Explore each system below.
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {CATEGORIES.map((c) => (
              <a
                key={c.slug}
                href={`#${c.slug}`}
                className={`inline-flex items-center rounded-full border px-4 py-2 text-sm font-medium transition-colors ${activeCategory === c.slug
                  ? "border-primary/40 bg-primary/10 text-primary"
                  : "border-border bg-background text-foreground/80 hover:text-primary hover:border-primary/30"
                  }`}
              >
                {c.title}
              </a>
            ))}
          </div>
        </Container>
      </section>

      {CATEGORIES.map((cat, idx) => (
        <Section key={cat.slug} muted={idx % 2 === 1} className="scroll-mt-24" id={cat.slug}>
          <Container>
            <SectionHeading
              eyebrow={`Category · ${idx + 1}`}
              title={cat.title}
              description={cat.intro}
            />
            <div className="grid items-stretch gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {cat.products.map((p) => (
                <ProductCardExtended key={p.title} product={p} />
              ))}
            </div>
          </Container>
        </Section>
      ))}

      {/* PETRA STEEL DOORS */}
      <Section className="bg-section">
        <Container>
          <SectionHeading
            eyebrow="Authorized partner"
            title="PETRA Steel Doors"
            description="One featured steel door option from PETRA, shown with an official product image from their website."
          />
          <div className="mx-auto max-w-3xl">
            <ProductCardExtended product={PETRA_STEEL_DOOR} />
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section>
        <Container>
          <div className="rounded-xl bg-primary text-primary-foreground p-6 sm:p-8 md:p-14 text-center shadow-[var(--shadow-elevated)]">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight max-w-3xl mx-auto">
              Not sure which system is right for your space?
            </h2>
            <p className="mt-4 text-primary-foreground/80 max-w-xl mx-auto">
              Share your requirements and our team will recommend the perfect fit — usually within
              24 hours.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/contact">
                  Get Free Quote <ArrowRight />
                </Link>
              </Button>
              <a
                href="https://wa.me/918341166268?text=Hi%2C%20I%20want%20a%20quote%20for%20your%20products."
                target="_blank"
                rel="noreferrer"
              >
                <Button size="lg" variant="whatsapp">
                  <MessageCircle /> WhatsApp Us
                </Button>
              </a>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
