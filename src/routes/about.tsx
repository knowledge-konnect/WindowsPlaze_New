import factoryImg from "@/assets/gallery-3.jpg";
import heroImg from "@/assets/hero-home.jpg";
import {
  Button,
  Container,
  FeatureCard,
  Section,
  SectionHeading,
  StatisticsCard,
} from "@/components";
import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  CalendarDays,
  ClipboardCheck,
  Cog,
  Eye,
  Factory,
  Gem,
  Home as HomeIcon,
  Leaf,
  MessageCircle,
  ShieldCheck,
  Target,
  Users,
} from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About WINDOWS PLAZA — A Brand of SP Builders and Traders" },
      {
        name: "description",
        content:
          "Learn how WINDOWS PLAZA, the dedicated uPVC windows and doors brand of SP Builders and Traders, manufactures and installs premium uPVC windows, uPVC doors and PVC doors.",
      },
      { property: "og:title", content: "About WINDOWS PLAZA — Premium uPVC Windows and Doors" },
      {
        property: "og:description",
        content:
          "WINDOWS PLAZA is the customer-facing brand backed by SP Builders and Traders, focused on premium uPVC and PVC door and window solutions.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const STATS = [
  { icon: CalendarDays, value: 2, suffix: "", label: "Years of Operations" },
  { icon: HomeIcon, value: 32, suffix: "+", label: "Projects Completed" },
  { icon: Users, value: 48, suffix: "+", label: "Happy Customers" },
  { icon: Award, value: 320, suffix: "+", label: "Windows Installed" },
];

const EXCELLENCE = [
  {
    icon: Cog,
    title: "German-grade Extrusion",
    description:
      "Multi-chamber profiles extruded on European-spec lines for dimensional accuracy down to the millimetre.",
  },
  {
    icon: Gem,
    title: "Lead-free uPVC Compounds",
    description:
      "Only calcium-zinc stabilised, UV-resistant compounds — safe for your family and built for tropical sun.",
  },
  {
    icon: ClipboardCheck,
    title: "42-Point Quality Checks",
    description:
      "Every unit passes structural, weather-tightness and finish inspections before it leaves the factory.",
  },
  {
    icon: ShieldCheck,
    title: "10-Year Written Warranty",
    description:
      "Comprehensive cover on profiles, hardware, sealed glass units and workmanship — in writing, always.",
  },
  {
    icon: Factory,
    title: "In-House Manufacturing",
    description:
      "From cutting to welding to glazing, everything happens under one roof — no outsourcing, no compromise.",
  },
  {
    icon: Leaf,
    title: "Sustainable by Design",
    description:
      "Recyclable profiles, lower energy footprint and decades of service life mean less waste, more comfort.",
  },
];

function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden -mt-16 md:-mt-20 pt-16 md:pt-20">
        <div className="absolute inset-0 -z-10">
          <img
            src={heroImg}
            alt="Windows Plaza manufacturing facility"
            fetchPriority="high"
            loading="eager"
            decoding="async"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[#084A85]/[0.38] md:bg-[#084A85]/[0.30]" />
        </div>
        <Container className="relative py-20 md:py-28 lg:py-36">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xs font-semibold tracking-[0.2em] uppercase text-white/90"
          >
            About WINDOWS PLAZA
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-4 text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white max-w-3xl leading-[1.1]"
          >
            The dedicated uPVC windows and doors brand of SP Builders and Traders.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-6 max-w-2xl text-lg text-white/85 leading-relaxed"
          >
            WINDOWS PLAZA is focused on delivering premium uPVC windows, uPVC doors and PVC doors
            for modern residential and commercial spaces with reliable quality and expert
            installation.
          </motion.p>
        </Container>
      </section>

      {/* STORY */}
      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="rounded-xl overflow-hidden shadow-[var(--shadow-elevated)]"
            >
              <img
                src={factoryImg}
                alt="Manufacturing floor"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover aspect-4/3"
              />
            </motion.div>
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-3">
                Our story
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold text-foreground leading-tight">
                Built on trusted expertise. Focused on specialized execution.
              </h2>
              <div className="mt-6 max-w-2xl space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  WINDOWS PLAZA is the dedicated uPVC windows and doors brand of SP Builders and
                  Traders, created to provide specialized fenestration solutions with a premium,
                  customer-first experience.
                </p>
                <p>
                  SP Builders and Traders is an established company committed to delivering premium
                  building solutions across residential and commercial projects. That legacy of
                  quality and accountability forms the foundation behind WINDOWS PLAZA.
                </p>
                <p>
                  At WINDOWS PLAZA, our team specializes in manufacturing and installing
                  high-quality uPVC Windows, uPVC Doors, and PVC Doors engineered for modern homes
                  and performance-driven commercial developments.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* MISSION + VISION */}
      <Section muted>
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                icon: Target,
                eyebrow: "Our mission",
                title: "Bring silence, safety and efficiency to every home we touch.",
                body: "To design and manufacture windows and doors so well engineered that homeowners forget they're there — until they realise how much quieter, cooler and calmer life has become.",
              },
              {
                icon: Eye,
                eyebrow: "Our vision",
                title: "Set the benchmark for uPVC and PVC in India.",
                body: "To be the most trusted name in fenestration across the country — known for uncompromising quality, honest pricing and a decade-long promise we always keep.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.eyebrow}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-card rounded-xl border border-border p-8 md:p-10 shadow-[var(--shadow-soft)]"
              >
                <div className="inline-flex items-center justify-center size-12 rounded-xl bg-primary/10 text-primary mb-5">
                  <item.icon className="size-6" />
                </div>
                <p className="text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-2">
                  {item.eyebrow}
                </p>
                <h3 className="text-2xl font-semibold text-primary leading-snug">
                  {item.title}
                </h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">{item.body}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* STATISTICS */}
      <Section>
        <Container>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {STATS.map((s) => (
              <StatisticsCard key={s.label} {...s} />
            ))}
          </div>
        </Container>
      </Section>

      {/* MANUFACTURING EXCELLENCE / QUALITY */}
      <Section muted>
        <Container>
          <SectionHeading
            eyebrow="Manufacturing excellence"
            title="Six commitments behind every window we build."
            description="From raw compound to installed unit, quality is engineered in — never inspected in."
          />
          <div className="grid gap-5 md:gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {EXCELLENCE.map((f) => (
              <FeatureCard key={f.title} {...f} />
            ))}
          </div>
        </Container>
      </Section>

      {/* FACTORY OVERVIEW */}
      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-3">
                Inside the factory
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold text-foreground leading-tight">
                60,000 sq ft. Four production lines. One standard.
              </h2>
              <p className="mt-6 max-w-2xl text-muted-foreground leading-relaxed">
                Our facility houses dedicated cutting, welding, glazing and finishing lines, with
                in-house steel-reinforcement fabrication and a climate-controlled sealed glass unit
                (SGU) line. A closed-loop QA process tracks every unit by serial number from raw
                profile to installed opening.
              </p>
              <ul className="mt-8 space-y-3">
                {[
                  "Fully automated cutting and welding lines",
                  "In-house sealed glass unit manufacturing",
                  "Galvanised steel reinforcement in every frame",
                  "Serial-number traceability on every unit",
                  "Trained in-house installation crews",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-3 text-foreground">
                    <span className="mt-1 inline-flex size-5 items-center justify-center rounded-full bg-primary/10 text-primary shrink-0">
                      <ShieldCheck className="size-3.5" />
                    </span>
                    <span className="text-sm">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="rounded-xl overflow-hidden shadow-[var(--shadow-elevated)] order-first lg:order-last"
            >
              <img
                src={factoryImg}
                alt="Factory production line"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover aspect-4/3"
              />
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section muted>
        <Container>
          <div className="rounded-xl bg-primary text-primary-foreground p-10 md:p-14 text-center shadow-[var(--shadow-elevated)]">
            <h2 className="text-3xl md:text-4xl font-semibold leading-tight max-w-3xl mx-auto">
              Ready to see the difference eighteen years of craftsmanship makes?
            </h2>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Button size="lg" variant="accent">
                Get Free Quote <ArrowRight />
              </Button>
              <Button size="lg" variant="whatsapp">
                <MessageCircle /> WhatsApp Us
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
