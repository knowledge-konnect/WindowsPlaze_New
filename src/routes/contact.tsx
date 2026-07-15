import { Button, Container, Section, SectionHeading } from "@/components";
import { SITE_CONFIG, whatsAppUrl } from "@/lib/siteConfig";
import { zodResolver } from "@hookform/resolvers/zod";
import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  Clock,
  Factory,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
} from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Windows Plaza — Get a Free Quote" },
      {
        name: "description",
        content:
          "Contact WINDOWS PLAZA for premium uPVC windows, uPVC doors and PVC doors. Book a free site visit, call, WhatsApp, or visit our manufacturing facility.",
      },
      { property: "og:title", content: "Contact Windows Plaza" },
      {
        property: "og:description",
        content:
          `${SITE_CONFIG.tagline}. Free quote in 24 hours by call, WhatsApp, or site visit.`,
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const PRODUCTS = [
  "uPVC Windows",
  "uPVC Doors",
  "PVC Bathroom Doors",
  "PVC Bedroom Doors",
  "Not sure yet",
];

const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  phone: z
    .string()
    .trim()
    .min(7, "Please enter a valid phone number")
    .max(20, "Phone number too long")
    .regex(/^[+\d\s\-()]+$/, "Only digits, spaces and + - ( ) allowed"),
  email: z.string().trim().email("Please enter a valid email").max(255),
  city: z.string().trim().min(2, "Please enter your city").max(80),
  product: z.string().min(1, "Please choose a product"),
  message: z.string().trim().min(5, "Please add a short message").max(1000),
});

type ContactValues = z.infer<typeof contactSchema>;

function ContactPage() {
  const [submitted, setSubmitted] = useState<ContactValues | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    getValues,
    reset,
  } = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
    mode: "onBlur",
    defaultValues: { name: "", phone: "", email: "", city: "", product: "", message: "" },
  });

  const buildWhatsAppMessage = (values: Partial<ContactValues>) => {
    return [
      "Hi! I'd like to enquire about your products.",
      values.name && `Name: ${values.name}`,
      values.phone && `Phone: ${values.phone}`,
      values.email && `Email: ${values.email}`,
      values.city && `City: ${values.city}`,
      values.product && `Interested in: ${values.product}`,
      values.message && `Details: ${values.message}`,
    ]
      .filter(Boolean)
      .join("\n");
  };

  const onSubmit = (values: ContactValues) => {
    setSubmitted(values);
    window.open(whatsAppUrl(buildWhatsAppMessage(values)), "_blank", "noopener");
    reset();

    toast.success("Opening WhatsApp", {
      description: "Your enquiry details are ready to send on WhatsApp.",
    });
  };

  const openWhatsApp = () => {
    window.open(whatsAppUrl(buildWhatsAppMessage(getValues())), "_blank", "noopener");
  };

  const inputCls =
    "h-11 w-full rounded-xl border border-border bg-background px-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors";

  return (
    <>
      {/* HERO */}
      <section className="relative -mt-14 md:-mt-20 pt-24 md:pt-40 pb-12 md:pb-16 bg-section">
        <Container>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground max-w-3xl leading-[1.1]">
            Contact Windows Plaza
          </h1>
          <p className="mt-4 text-xs font-semibold tracking-[0.2em] uppercase text-accent">
            {SITE_CONFIG.tagline}
          </p>
          <p className="mt-5 sm:mt-6 max-w-xl text-base sm:text-lg text-muted-foreground leading-relaxed">
            Tell us a little about your project — our team will get back to you with a free quote,
            usually within 24 hours.
          </p>
        </Container>
      </section>

      {/* FORM + BUSINESS DETAILS */}
      <Section>
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr]">
            {/* FORM */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55 }}
              className="bg-card rounded-xl border border-border p-6 md:p-10 shadow-[var(--shadow-soft)]"
            >
              <SectionHeading
                align="left"
                eyebrow="Inquiry form"
                title="Get a free quote"
                description="Fill this out and we'll be in touch shortly."
                className="mb-8"
              />

              {submitted ? (
                <div
                  className="rounded-xl border border-primary/30 bg-primary/5 p-8 text-center"
                  role="status"
                  aria-live="polite"
                >
                  <div className="inline-flex size-14 items-center justify-center rounded-full bg-primary text-primary-foreground mb-4">
                    <CheckCircle2 className="size-7" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    Thanks, {submitted.name.split(" ")[0]}!
                  </h3>
                  <p className="mt-2 text-muted-foreground">
                    Your enquiry has been prepared in WhatsApp. Send the message there to reach our team.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="grid gap-5 sm:grid-cols-2"
                  noValidate
                >
                  <Field label="Full name" error={errors.name?.message} htmlFor="c-name">
                    <input
                      id="c-name"
                      className={inputCls}
                      placeholder="Your name"
                      maxLength={100}
                      autoComplete="name"
                      aria-invalid={!!errors.name}
                      {...register("name")}
                    />
                  </Field>
                  <Field label="Phone" error={errors.phone?.message} htmlFor="c-phone">
                    <input
                      id="c-phone"
                      className={inputCls}
                      placeholder={SITE_CONFIG.phones[1].display}
                      inputMode="tel"
                      autoComplete="tel"
                      maxLength={20}
                      aria-invalid={!!errors.phone}
                      {...register("phone")}
                    />
                  </Field>
                  <Field label="Email" error={errors.email?.message} htmlFor="c-email">
                    <input
                      id="c-email"
                      className={inputCls}
                      type="email"
                      placeholder="you@example.com"
                      autoComplete="email"
                      maxLength={255}
                      aria-invalid={!!errors.email}
                      {...register("email")}
                    />
                  </Field>
                  <Field label="City" error={errors.city?.message} htmlFor="c-city">
                    <input
                      id="c-city"
                      className={inputCls}
                      placeholder="e.g. Visakhapatnam"
                      autoComplete="address-level2"
                      maxLength={80}
                      aria-invalid={!!errors.city}
                      {...register("city")}
                    />
                  </Field>
                  <Field
                    label="Interested product"
                    error={errors.product?.message}
                    className="sm:col-span-2"
                    htmlFor="c-product"
                  >
                    <select
                      id="c-product"
                      className={inputCls}
                      aria-invalid={!!errors.product}
                      {...register("product")}
                    >
                      <option value="">Select a product</option>
                      {PRODUCTS.map((p) => (
                        <option key={p} value={p}>
                          {p}
                        </option>
                      ))}
                    </select>
                  </Field>
                  <Field
                    label="Message"
                    error={errors.message?.message}
                    className="sm:col-span-2"
                    htmlFor="c-message"
                  >
                    <textarea
                      id="c-message"
                      className={inputCls + " h-32 py-3 resize-none"}
                      placeholder="Tell us about your project, approximate number of openings, timeline..."
                      maxLength={1000}
                      aria-invalid={!!errors.message}
                      {...register("message")}
                    />
                  </Field>
                  <div className="sm:col-span-2 flex flex-wrap items-center gap-3 pt-2">
                    <Button type="submit" size="lg" disabled={isSubmitting}>
                      <MessageCircle /> Send on WhatsApp
                    </Button>
                    <Button type="button" size="lg" variant="whatsapp" onClick={openWhatsApp}>
                      <Send /> Open WhatsApp
                    </Button>
                  </div>
                </form>
              )}
            </motion.div>

            {/* BUSINESS DETAILS */}
            <div className="space-y-6">
              <div className="bg-card rounded-xl border border-border p-6 md:p-8 shadow-[var(--shadow-soft)]">
                <h3 className="text-lg font-semibold text-foreground mb-6">Business details</h3>
                <ul className="space-y-5">
                  {[
                    ...SITE_CONFIG.phones.map((phone, index) => ({
                      icon: Phone,
                      label: `Phone ${index + 1}`,
                      value: phone.display,
                      href: phone.href,
                    })),
                    {
                      icon: MessageCircle,
                      label: "WhatsApp",
                      value: SITE_CONFIG.whatsapp.display,
                      href: whatsAppUrl(),
                    },
                    {
                      icon: Mail,
                      label: "Email",
                      value: SITE_CONFIG.email,
                      href: `mailto:${SITE_CONFIG.email}`,
                    },
                    {
                      icon: Factory,
                      label: "Factory address",
                      value: SITE_CONFIG.address.full,
                      href: SITE_CONFIG.address.mapsUrl,
                    },
                  ].map((item) => (
                    <li key={item.label} className="flex items-start gap-3">
                      <span className="inline-flex size-9 items-center justify-center rounded-lg bg-primary/10 text-primary shrink-0">
                        <item.icon className="size-4" />
                      </span>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                          {item.label}
                        </p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-sm font-medium text-foreground">{item.value}</p>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-card rounded-xl border border-border p-6 md:p-8 shadow-[var(--shadow-soft)]">
                <div className="flex items-center gap-3 mb-5">
                  <span className="inline-flex size-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Clock className="size-4" />
                  </span>
                  <h3 className="text-lg font-semibold text-foreground">Business hours</h3>
                </div>
                <ul className="space-y-2.5 text-sm">
                  {[
                    ["Monday – Friday", "9:00 AM – 7:00 PM"],
                    ["Saturday", "10:00 AM – 5:00 PM"],
                    ["Sunday", "By appointment"],
                  ].map(([d, t]) => (
                    <li
                      key={d}
                      className="flex items-center justify-between border-b border-border last:border-0 pb-2 last:pb-0"
                    >
                      <span className="text-muted-foreground">{d}</span>
                      <span className="font-medium text-foreground">{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* MAP */}
      <Section muted>
        <Container>
          <SectionHeading
            eyebrow="Come visit"
            title="Our manufacturing facility"
            description="Walk our factory floor, see how your windows are made, and meet the team behind them."
          />
          <div className="relative rounded-xl overflow-hidden border border-border shadow-[var(--shadow-soft)] aspect-video bg-section">
            <iframe
              title={`${SITE_CONFIG.name} location on Google Maps`}
              src={SITE_CONFIG.address.mapsEmbedUrl}
              className="absolute inset-0 h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            <div className="absolute bottom-4 right-4">
              <a href={SITE_CONFIG.address.mapsUrl} target="_blank" rel="noreferrer">
                <Button variant="secondary" size="sm">
                  <MapPin /> Open in Google Maps
                </Button>
              </a>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}

function Field({
  label,
  error,
  children,
  className = "",
  htmlFor,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
  className?: string;
  htmlFor?: string;
}) {
  return (
    <div className={"block " + className}>
      <label htmlFor={htmlFor} className="mb-2 block text-sm font-medium text-foreground">
        {label}
      </label>
      {children}
      {error && (
        <p className="mt-1.5 block text-xs text-destructive" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
