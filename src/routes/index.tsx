import { Link, createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  CalendarDays,
  Check,
  ClipboardCheck,
  CloudRain,
  Cog,
  DoorOpen,
  Factory,
  Gem,
  HardHat,
  Headphones,
  Home as HomeIcon,
  Leaf,
  MessageCircle,
  Package,
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
import { SITE_CONFIG, whatsAppUrl } from "@/lib/siteConfig";

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
  head: () => {
    const pageUrl = `${SITE_CONFIG.seo.canonicalOrigin}/`;

    return {
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
        { property: "og:url", content: pageUrl },
        {
          name: "twitter:title",
          content: "WINDOWS PLAZA — Premium uPVC Windows, uPVC Doors & PVC Doors",
        },
        {
          name: "twitter:description",
          content: "Premium uPVC windows, uPVC doors and PVC doors for modern homes.",
        },
        { name: "twitter:url", content: pageUrl },
      ],
      links: [{ rel: "canonical", href: pageUrl }],
    };
  },
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
  { icon: Award, value: 320, suffix: "+", label: "Windows & Doors Installed" },
  { icon: Users, value: 48, suffix: "+", label: "Happy Customers" },
  { icon: HomeIcon, value: 32, suffix: "+", label: "Projects Completed" },
  { icon: CalendarDays, value: 2, suffix: "+", label: "Years of Operation" },
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
  {
    title: "PETRA Steel Doors",
    category: "Steel Doors",
    // TODO: Replace with a real PETRA steel door product photo.
    description:
      "Premium steel doors by PETRA — built for strength, security and style. Ideal for main entrances and commercial applications.",
    image: g4,
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
    description: "EPDM gaskets and multi-point locks keep dust and grime out.",
  },
  {
    icon: Zap,
    title: "Energy Efficient",
    description:
      "Thermally insulated frames cut cooling and heating loads by up to 30%.",
  },
  {
    icon: CloudRain,
    title: "Weather Resistant",
    description:
      "UV-stable, corrosion-proof profiles built for coastal Andhra Pradesh climate.",
  },
  {
    icon: Wrench,
    title: "Low Maintenance",
    description:
      "No painting, no polishing — a quick wipe keeps them looking new for years.",
  },
  {
    icon: ShieldCheck,
    title: "Enhanced Security",
    description:
      "Multi-point locking systems and reinforced frames for added peace of mind.",
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

// TODO: Replace stock gallery images with real installation photos from Windows Plaza projects.
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
      <section className="relative overflow-hidden -mt-14 md:-mt-20 pt-14 md:pt-20 min-h-[calc(100svh-3.5rem)] md:min-h-0">
        <div className="absolute inset-0 -z-10">
          <img
            src={heroImg}
            alt="Modern home with premium uPVC windows"
            width={1920}
            height={1280}
            fetchPriority="high"
            loading="eager"
            decoding="async"
            className="h-full w-full object-cover object-[66%_center] md:object-center"
          />
          <div className="absolute inset-0 bg-[#084A85]/[0.48] md:bg-[#084A85]/[0.42]" />
        </div>

        <Container className="relative py-10 sm:py-12 md:py-32 lg:py-40">
          <div className="max-w-3xl">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/35 bg-white/12 backdrop-blur px-3 py-1 text-[11px] sm:px-4 sm:py-1.5 sm:text-xs font-medium text-white"
            >
              <span className="size-1.5 rounded-full bg-white" />
              {SITE_CONFIG.name}
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="mt-6 sm:mt-7 text-4xl sm:text-[4.15rem] md:text-[4.85rem] lg:text-[5.75rem] tracking-[-0.02em] text-white leading-[1.02]"
            >
              {SITE_CONFIG.name}
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-4 md:mt-5 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-[-0.02em] text-white/95 leading-[1.1]"
            >
              {SITE_CONFIG.headline}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-4 md:mt-5 text-sm sm:text-base font-medium tracking-[0.12em] uppercase text-white/80"
            >
              {SITE_CONFIG.tagline}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-5 sm:mt-6 text-base sm:text-lg md:text-xl text-white/85 max-w-2xl leading-relaxed"
            >
              {SITE_CONFIG.subheadline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-7 sm:mt-9 flex flex-wrap items-center gap-3 sm:gap-3.5"
            >
              <Button size="lg" variant="secondary" className="h-14 px-10 text-[1.05rem] font-semibold" asChild>
                <Link to="/contact">
                  Get Free Quote <ArrowRight />
                </Link>
              </Button>
              <Button size="lg" variant="whatsapp" asChild>
                <a href={whatsAppUrl()} target="_blank" rel="noreferrer">
                  <MessageCircle /> WhatsApp Us
                </a>
              </Button>
            </motion.div>

            <motion.ul
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-4 flex flex-wrap items-center gap-2 text-xs sm:text-sm text-white/90"
              aria-label="Free services included"
            >
              {SITE_CONFIG.trustBadges.map((item) => (
                <li
                  key={item}
                  className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1.5"
                >
                  <Check className="size-4 shrink-0" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </motion.ul>

            <motion.ul
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mt-4 sm:mt-5 flex flex-wrap items-center gap-2 text-xs sm:text-sm text-white"
            >
              {[
                "Factory Direct Manufacturing",
                "Professional Installation",
                "10-Year Warranty",
              ].map((item) => (
                <li
                  key={item}
                  className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1.5"
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
              className="mt-8 sm:mt-12 grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 max-w-xl"
            >
              {HERO_HIGHLIGHTS.map(({ icon: Icon, label }) => (
                <li
                  key={label}
                  className="flex items-center gap-2 rounded-xl bg-white/15 backdrop-blur border border-white/30 px-2.5 py-2 sm:px-3 sm:py-2.5 text-xs sm:text-sm font-medium text-white"
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

      {/* 3b. BRAND PARTNERS */}
      <Section className="bg-section">
        <Container>
          <SectionHeading
            eyebrow="Trusted partners"
            title="Trusted Profile & Hardware Partners"
            description="We source profiles and hardware from industry-leading partners for lasting performance."
          />
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
            {SITE_CONFIG.partners.map((partner, i) => {
              const isDoor = partner.name.toLowerCase().includes("door");
              // BAYDEE → deep green; PETRA → dark steel
              const palette = isDoor
                ? { bg: "#1C2128", accent: "#6B7280", icon: "#9CA3AF", label: "#F3F4F6" }
                : { bg: "#0B7A5C", accent: "#064E3B", icon: "#FFFFFF", label: "#ECFDF5" };
              return partner.logoSrc ? (
                <img
                  key={partner.name}
                  src={partner.logoSrc}
                  alt={partner.logoAlt}
                  className="h-16 object-contain"
                  loading="lazy"
                />
              ) : (
                <motion.div
                  key={partner.name}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  style={{ background: palette.bg }}
                  className="group flex items-center gap-4 rounded-2xl px-7 py-5 shadow-[var(--shadow-elevated)] hover-lift min-w-[230px]"
                  role="img"
                  aria-label={partner.logoAlt}
                >
                  <div
                    style={{ background: palette.accent, color: palette.icon }}
                    className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl transition-opacity duration-300 group-hover:opacity-90"
                  >
                    {isDoor ? (
                      <DoorOpen className="size-5" />
                    ) : (
                      <Package className="size-5" />
                    )}
                  </div>
                  <div>
                    <p style={{ color: palette.label }} className="text-sm font-bold tracking-wide leading-tight">
                      {partner.name}
                    </p>
                    <p style={{ color: palette.label }} className="mt-0.5 text-xs opacity-70">
                      Authorized Partner
                    </p>
                  </div>
                </motion.div>
              );
            })}
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
              <Button variant="whatsapp" asChild>
                <a href={whatsAppUrl("Hi, I have a question about your uPVC products.")} target="_blank" rel="noreferrer">
                  <MessageCircle /> Ask on WhatsApp
                </a>
              </Button>
            </div>
            <FAQAccordion items={FAQS} />
          </div>
        </Container>
      </Section>

      {/* 9b. FOUNDER */}
      <Section muted>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55 }}
            className="mx-auto max-w-lg text-center rounded-xl border border-border bg-card p-8 md:p-10 shadow-[var(--shadow-soft)]"
          >
            <h3 className="text-xl font-semibold text-primary">Need Expert Advice?</h3>
            <p className="mt-3 text-lg font-medium text-foreground">{SITE_CONFIG.founder.name}</p>
            <p className="mt-1 text-sm text-muted-foreground">{SITE_CONFIG.founder.title}</p>
            <ul className="mt-5 grid gap-2 text-sm text-muted-foreground" aria-label="Founder consultation benefits">
              {[
                "Free Measurement",
                "Free Quotation",
                "Professional Consultation",
              ].map((item) => (
                <li key={item} className="inline-flex items-center justify-center gap-2">
                  <Check className="size-4 text-primary" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Button className="mt-6" size="lg" asChild>
              <a href={SITE_CONFIG.founder.phone.href}>
                <PhoneCall className="size-4" /> Call Now
              </a>
            </Button>
          </motion.div>
        </Container>
      </Section>

      {/* 9c. SERVICE AREAS */}
      <Section>
        <Container>
          <SectionHeading
            eyebrow="Service areas"
            title="We Proudly Serve"
            description="Premium uPVC windows and doors across coastal Andhra Pradesh and nearby districts."
          />
          <div className="flex flex-wrap justify-center gap-3">
            {SITE_CONFIG.serviceAreas.map((area) => (
              <span
                key={area}
                className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/15"
              >
                {area}
              </span>
            ))}
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
            className="relative overflow-hidden rounded-xl bg-primary text-primary-foreground p-6 sm:p-8 md:p-16 lg:p-20 shadow-[var(--shadow-elevated)]"
          >
            <div className="relative max-w-2xl">
              <p className="text-xs font-semibold tracking-[0.25em] uppercase text-primary-foreground/85">
                Ready when you are
              </p>
              <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
                Let's design windows and doors your home will love for decades.
              </h2>
              <p className="mt-5 text-base md:text-lg text-primary-foreground/80 leading-relaxed">
                Get a free consultation and a transparent, itemised quote within 24 hours — no
                obligations, no pressure.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button size="lg" variant="secondary" asChild>
                  <Link to="/contact">
                    Get Free Quote <ArrowRight />
                  </Link>
                </Button>
                <Button size="lg" variant="whatsapp" asChild>
                  <a href={whatsAppUrl("Hi, I'd like a free quote for my project.")} target="_blank" rel="noreferrer">
                    <MessageCircle /> WhatsApp Us
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        </Container>
      </Section>
    </>
  );
}
