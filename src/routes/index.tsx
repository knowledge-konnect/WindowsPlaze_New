import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  Bug,
  CalendarDays,
  Check,
  ClipboardCheck,
  CloudRain,
  Cog,
  Droplets,
  Factory,
  Gem,
  HardHat,
  Headphones,
  Home as HomeIcon,
  Leaf,
  MessageCircle,
  PhoneCall,
  Ruler,
  Settings2,
  ShieldCheck,
  Sparkles,
  Truck,
  Users,
  Volume2,
  VolumeX,
  Wind,
  Wrench,
  Zap,
} from "lucide-react";

import {
  Button,
  Container,
  FAQAccordion,
  FeatureCard,
  GalleryCard,
  ProductCard,
  Section,
  SectionHeading,
  StatisticsCard,
  TestimonialCard,
} from "@/components";

import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";
import heroImg from "@/assets/hero-home.jpg";
import productPvcDoor from "@/assets/product-pvc-door.jpg";
import productUpvcDoor from "@/assets/product-upvc-door.jpg";
import productWindow from "@/assets/product-upvc-window.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "WINDOWS PLAZA — Premium uPVC Windows, uPVC Doors & PVC Doors" },
      {
        name: "description",
        content:
          "WINDOWS PLAZA offers premium uPVC windows, uPVC doors and PVC doors for modern homes. Manufactured with precision, installed by experts, and built to last.",
      },
      { property: "og:title", content: "WINDOWS PLAZA — Premium uPVC Windows & PVC Doors" },
      {
        property: "og:description",
        content: "Premium uPVC windows, uPVC doors and PVC doors for modern homes.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

/* ---------------- data ---------------- */

const HERO_HIGHLIGHTS = [
  { icon: Leaf, label: "Energy Efficient" },
  { icon: CloudRain, label: "Weather Resistant" },
  { icon: Volume2, label: "Sound Insulation" },
  { icon: Sparkles, label: "Low Maintenance" },
];

const STATS = [
  { icon: CalendarDays, value: 2, suffix: "", label: "Years of Operations" },
  { icon: HomeIcon, value: 32, suffix: "+", label: "Projects Completed" },
  { icon: Users, value: 48, suffix: "+", label: "Happy Customers" },
  { icon: Award, value: 320, suffix: "+", label: "Windows Installed" },
];

const WHY_US = [
  {
    icon: Factory,
    title: "Factory-Direct Manufacturing",
    description:
      "Every profile is extruded, welded and finished in our own facility — no middlemen, no compromises on quality.",
  },
  {
    icon: Gem,
    title: "Premium Grade Materials",
    description:
      "Lead-free uPVC compounds, galvanised steel reinforcement and imported hardware built to last decades.",
  },
  {
    icon: Settings2,
    title: "Fully Customised Solutions",
    description:
      "Sliding, casement, tilt-and-turn, French, or bespoke — sized and styled precisely for your space.",
  },
  {
    icon: HardHat,
    title: "Professional Installation",
    description:
      "Trained in-house crews follow a 42-point installation checklist for a clean, weather-tight finish.",
  },
  {
    icon: ShieldCheck,
    title: "10-Year Warranty",
    description:
      "Comprehensive cover on profiles, hardware and workmanship, backed by responsive after-sales support.",
  },
  {
    icon: Truck,
    title: "On-Time Delivery",
    description:
      "Streamlined production planning means your project moves from measurement to install without delay.",
  },
];

const PRODUCTS = [
  {
    title: "uPVC Windows",
    category: "Windows",
    description:
      "Sliding, casement and tilt-and-turn systems that flood your space with light while sealing out noise and weather.",
    image: productWindow,
  },
  {
    title: "uPVC Doors",
    category: "Doors",
    description:
      "French, sliding and bi-fold doors engineered for smooth operation, secure locking and lasting curb appeal.",
    image: productUpvcDoor,
  },
  {
    title: "PVC Doors",
    category: "Interiors",
    description:
      "Lightweight, waterproof interior doors ideal for bathrooms, kitchens and utility spaces — moisture-proof for life.",
    image: productPvcDoor,
  },
];

const BENEFITS = [
  {
    icon: VolumeX,
    title: "Noise Reduction",
    description:
      "Up to 40 dB acoustic dampening with multi-chamber profiles and sealed glass units.",
  },
  {
    icon: Wind,
    title: "Dust Resistant",
    description:
      "EPDM gaskets and multi-point locks form an airtight seal against dust and pollen.",
  },
  {
    icon: Zap,
    title: "Energy Saving",
    description:
      "Thermally insulated frames cut cooling and heating loads by up to 30% year-round.",
  },
  {
    icon: Droplets,
    title: "100% Waterproof",
    description: "Engineered drainage and welded corners keep monsoon rain firmly on the outside.",
  },
  {
    icon: Bug,
    title: "Termite Proof",
    description: "uPVC is inorganic — termites, borers and fungus can't touch it, ever.",
  },
  {
    icon: Wrench,
    title: "Low Maintenance",
    description:
      "No painting, polishing or sealing. A soft cloth and mild soap keep them factory-fresh.",
  },
];

const PROCESS = [
  {
    icon: PhoneCall,
    step: "01",
    title: "Consultation",
    description:
      "Share your requirements — we recommend the right systems, glass and hardware for your space and budget.",
  },
  {
    icon: Ruler,
    step: "02",
    title: "Site Measurement",
    description:
      "Our surveyor visits, measures every opening to the millimetre and confirms the final specification.",
  },
  {
    icon: Cog,
    step: "03",
    title: "Manufacturing",
    description:
      "Your windows and doors are cut, welded and glazed at our factory under strict QA checks.",
  },
  {
    icon: ClipboardCheck,
    step: "04",
    title: "Installation",
    description:
      "Trained crews install, seal and test every unit on site — usually completed in a single day.",
  },
  {
    icon: Headphones,
    step: "05",
    title: "Support",
    description:
      "Enjoy a 10-year warranty and a dedicated service line for anything you need, long after install.",
  },
];

const GALLERY = [
  { image: g1, title: "Willow Lane Residence", tag: "Villa" },
  { image: g2, title: "Sunlit Kitchen Retreat", tag: "Interior" },
  { image: g3, title: "Skyline Apartment", tag: "High-rise" },
  { image: g4, title: "Heritage Entryway", tag: "Entry Door" },
  { image: g5, title: "Serene Master Suite", tag: "Bedroom" },
  { image: g6, title: "Garden Studio", tag: "Home Office" },
];

const TESTIMONIALS = [
  {
    quote:
      "Great first experience with the team. They explained every option clearly and finished our sliding windows neatly. The house feels much quieter now.",
    name: "S. Lakshmi",
    role: "Homeowner, Madhurawada, Vizag",
    rating: 5,
  },
  {
    quote:
      "We installed uPVC windows for our new floor in Gajuwaka. Fit and finish are good, and their installation crew was on time and professional.",
    name: "K. Ravi Teja",
    role: "Homeowner, Gajuwaka, Vizag",
    rating: 5,
  },
  {
    quote:
      "Pricing was transparent and the support was responsive from measurement to handover. Happy with the quality of both windows and balcony door.",
    name: "N. Harika & Family",
    role: "Apartment Owners, PM Palem, Vizag",
    rating: 5,
  },
];

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
];

/* ---------------- page ---------------- */

function Home() {
  return (
    <>
      {/* 1. HERO */}
      <section className="relative overflow-hidden -mt-16 md:-mt-20 pt-16 md:pt-20">
        <div className="absolute inset-0 -z-10">
          <img
            src={heroImg}
            alt="Modern home with premium uPVC windows"
            width={1920}
            height={1280}
            fetchPriority="high"
            loading="eager"
            decoding="async"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[#084A85]/[0.38] md:bg-[#084A85]/[0.30]" />
        </div>

        <Container className="relative py-20 md:py-32 lg:py-40">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/35 bg-white/12 backdrop-blur px-4 py-1.5 text-xs font-medium text-white"
            >
              <span className="size-1.5 rounded-full bg-white" />
              WINDOWS PLAZA
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="mt-6 text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-[-0.02em] text-white leading-[1.02]"
            >
              <span className="block">WINDOWS PLAZA</span>
              <span className="mt-3 block text-lg md:text-xl lg:text-2xl font-medium tracking-normal text-white/85">
                A Brand of SP Builders and Traders
              </span>
              <span className="mt-4 block text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] tracking-[-0.02em]">
                Premium uPVC Windows & <em className="not-italic text-white/90">PVC Doors</em> for
                Modern Homes
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-6 text-lg md:text-xl text-white/85 max-w-xl leading-relaxed"
            >
              Manufactured with precision.
              <br />
              Installed by experts.
              <br />
              Built to last.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <Button size="lg">
                Get Free Quote <ArrowRight />
              </Button>
              <Button size="lg" variant="whatsapp">
                <MessageCircle /> WhatsApp Us
              </Button>
            </motion.div>

            <motion.ul
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-5 flex flex-wrap items-center gap-2.5 text-sm text-white"
            >
              {[
                "Factory Direct Manufacturing",
                "Professional Installation",
                "10-Year Warranty",
              ].map((item) => (
                <li
                  key={item}
                  className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3.5 py-1.5"
                >
                  <Check className="size-4 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </motion.ul>

            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-xl"
            >
              {HERO_HIGHLIGHTS.map(({ icon: Icon, label }) => (
                <li
                  key={label}
                  className="flex items-center gap-2 rounded-xl bg-white/15 backdrop-blur border border-white/30 px-3 py-2.5 text-sm font-medium text-white"
                >
                  <Icon className="size-4 text-white shrink-0" />
                  <span className="truncate">{label}</span>
                </li>
              ))}
            </motion.ul>
          </div>
        </Container>
      </section>

      {/* 2. STATISTICS */}
      <Section className="bg-section">
        <Container>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {STATS.map((s) => (
              <StatisticsCard key={s.label} {...s} />
            ))}
          </div>
        </Container>
      </Section>

      {/* 3. WHY CHOOSE US */}
      <Section>
        <Container>
          <SectionHeading
            eyebrow="Why choose us"
            title="Engineered by us. Installed by us. Owned by you."
            description="Six reasons homeowners, architects and developers choose WINDOWS PLAZA for their windows and doors."
          />
          <div className="grid gap-5 md:gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {WHY_US.map((f) => (
              <FeatureCard key={f.title} {...f} />
            ))}
          </div>
        </Container>
      </Section>

      {/* 4. PRODUCT CATEGORIES */}
      <Section muted>
        <Container>
          <SectionHeading
            eyebrow="Product categories"
            title="Systems built around how you live"
            description="Three signature product families — each precision-engineered, endlessly configurable."
          />
          <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {PRODUCTS.map((p) => (
              <ProductCard key={p.title} {...p} />
            ))}
          </div>
        </Container>
      </Section>

      {/* 5. BENEFITS */}
      <Section>
        <Container>
          <SectionHeading
            eyebrow="The uPVC difference"
            title="Six benefits you feel every single day"
            description="From your morning coffee to a stormy night — quieter, cleaner, cooler, calmer."
          />
          <div className="grid gap-5 md:gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {BENEFITS.map((b) => (
              <FeatureCard key={b.title} {...b} />
            ))}
          </div>
        </Container>
      </Section>

      {/* 6. OUR PROCESS */}
      <Section muted>
        <Container>
          <SectionHeading
            eyebrow="How it works"
            title="A five-step journey, zero surprises"
            description="From your first call to a decade of after-sales — a clear, coordinated experience end to end."
          />
          <div className="relative grid gap-6 md:grid-cols-3 lg:grid-cols-5">
            {PROCESS.map((p, i) => (
              <motion.div
                key={p.step}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative bg-card rounded-xl border border-border p-6 shadow-[var(--shadow-soft)] hover-lift"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="inline-flex size-11 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                    <p.icon className="size-5" />
                  </div>
                  <span className="text-2xl font-semibold text-muted-foreground/40 tabular-nums">
                    {p.step}
                  </span>
                </div>
                <h3 className="text-base font-semibold text-primary">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {p.description}
                </p>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 7. FEATURED PROJECTS */}
      <Section>
        <Container>
          <SectionHeading
            eyebrow="Featured projects"
            title="A closer look at recent installations"
            description="Villas, apartments, commercial spaces — each one measured, made and installed by our own teams."
          />
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 md:gap-6 [column-fill:_balance]">
            {GALLERY.map((g, i) => (
              <div key={i} className="mb-5 md:mb-6 break-inside-avoid">
                <GalleryCard image={g.image} title={g.title} tag={g.tag} />
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 8. TESTIMONIALS */}
      <Section muted>
        <Container>
          <SectionHeading
            eyebrow="Loved by homeowners"
            title="Real installations. Real feedback."
            description="Thousands of families and hundreds of developers have made the switch to WINDOWS PLAZA."
          />
          <div className="grid gap-6 md:gap-8 lg:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <TestimonialCard key={t.name} {...t} />
            ))}
          </div>
        </Container>
      </Section>

      {/* 9. FAQ */}
      <Section>
        <Container>
          <div className="grid lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-16 items-start">
            <div className="lg:sticky lg:top-28">
              <SectionHeading
                align="left"
                eyebrow="Answers"
                title="Everything you wanted to ask"
                description="Ten of the most common questions we hear before a project begins. Something else? Just ping us on WhatsApp."
                className="mb-8"
              />
              <Button variant="whatsapp">
                <MessageCircle /> Ask on WhatsApp
              </Button>
            </div>
            <FAQAccordion items={FAQS} />
          </div>
        </Container>
      </Section>

      {/* 10. CTA */}
      <Section className="relative overflow-hidden">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-xl bg-primary text-primary-foreground p-10 md:p-16 lg:p-20 shadow-[var(--shadow-elevated)]"
          >
            <div className="relative max-w-2xl">
              <p className="text-xs font-semibold tracking-[0.25em] uppercase text-primary-foreground/85">
                Ready when you are
              </p>
              <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
                Let's design windows and doors your home will love for decades.
              </h2>
              <p className="mt-5 text-base md:text-lg text-primary-foreground/80 leading-relaxed">
                Get a free consultation and a transparent, itemised quote within 24 hours — no
                obligations, no pressure.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button size="lg" variant="accent">
                  Get Free Quote <ArrowRight />
                </Button>
                <Button
                  size="lg"
                  variant="whatsapp"
                >
                  <MessageCircle /> WhatsApp Us
                </Button>
              </div>
            </div>
          </motion.div>
        </Container>
      </Section>
    </>
  );
}
