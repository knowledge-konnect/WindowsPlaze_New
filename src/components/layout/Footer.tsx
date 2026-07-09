import { BrandMark } from "@/components/common/BrandMark";
import { Container } from "@/components/layout/Container";
import { SITE_CONFIG } from "@/lib/siteConfig";
import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";

const COL_LINKS = [
  {
    title: "Products",
    links: [
      { label: "uPVC Windows", href: "/products#upvc-windows" },
      { label: "uPVC Doors", href: "/products#upvc-doors" },
      { label: "PVC Doors", href: "/products#pvc-doors" },
      { label: "Custom Solutions", href: "/contact" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Gallery", href: "/projects" },
      { label: "Testimonials", href: "/projects" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Brochure", href: "/contact" },
      { label: "FAQs", href: "/faq" },
      { label: "Warranty", href: "/faq" },
      { label: "Installation", href: "/faq" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-[#111827] border-t border-white/10 text-white">
      <Container className="py-16">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div>
            <Link to="/" className="block">
              <div className="flex items-center gap-3">
                <BrandMark className="size-9 md:size-11" onDark />
                <span className="block text-sm font-semibold tracking-[0.18em] uppercase text-white">
                  {SITE_CONFIG.name}
                </span>
              </div>
              <span className="mt-1 block text-sm text-white/80">{SITE_CONFIG.headline}</span>
              <span className="mt-1 block text-xs text-white/70 uppercase tracking-[0.08em]">
                {SITE_CONFIG.tagline}
              </span>
            </Link>
            <p className="mt-4 text-sm text-white/80 leading-relaxed max-w-sm">
              Precision-engineered uPVC and PVC windows and doors — built for silence, safety and
              lasting beauty.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-white/82">
              {SITE_CONFIG.phones.map((phone) => (
                <li key={phone.href} className="flex items-center gap-2.5">
                  <Phone className="size-4 text-primary" />
                  <a href={phone.href} className="hover:text-white transition-colors">
                    {phone.display}
                  </a>
                </li>
              ))}
              <li className="flex items-center gap-2.5">
                <Mail className="size-4 text-primary" />
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="hover:text-white transition-colors"
                >
                  {SITE_CONFIG.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="size-4 text-primary mt-0.5" />
                <a
                  href={SITE_CONFIG.address.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors"
                >
                  {SITE_CONFIG.address.full}
                </a>
              </li>
            </ul>

            <div className="mt-7">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/70">
                Authorized Partner
              </p>
              <div className="mt-3 flex flex-wrap items-center gap-3">
                {SITE_CONFIG.partners.map((partner) =>
                  partner.logoSrc ? (
                    <img
                      key={partner.name}
                      src={partner.logoSrc}
                      alt={partner.logoAlt}
                      loading="lazy"
                      className="h-9 w-auto rounded-md bg-white px-2 py-1 shadow-sm ring-1 ring-black/5"
                    />
                  ) : (
                    <span
                      key={partner.name}
                      className="inline-flex rounded-md border border-white/70 bg-white px-3 py-1.5 text-xs font-medium text-slate-900 shadow-sm"
                    >
                      {/* TODO: Add official partner logo asset */}
                      {partner.name}
                    </span>
                  ),
                )}
              </div>
            </div>
          </div>

          {COL_LINKS.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold text-white mb-4 tracking-wide">{col.title}</h4>
              <ul className="space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-sm text-white/80 hover:text-white transition-colors"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="text-xs text-white/75">
            <p>© 2026 {SITE_CONFIG.name}.</p>
            <p>{SITE_CONFIG.tagline}.</p>
            <p>All Rights Reserved.</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
