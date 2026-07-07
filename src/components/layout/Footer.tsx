import { BrandMark } from "@/components/common/BrandMark";
import { Container } from "@/components/layout/Container";
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
                <BrandMark className="size-9 md:size-11" />
                <span className="block text-sm font-semibold tracking-[0.18em] uppercase text-white">
                  WINDOWS PLAZA
                </span>
              </div>
              <span className="mt-1 block text-sm text-white/80">
                Premium uPVC Windows & Doors
              </span>
              <span className="mt-1 block text-xs text-white/70 uppercase tracking-[0.08em]">
                SP Builders and Traders
              </span>
            </Link>
            <p className="mt-4 text-sm text-white/80 leading-relaxed max-w-sm">
              Precision-engineered uPVC and PVC windows and doors — built for silence, safety and
              lasting beauty.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-white/82">
              <li className="flex items-center gap-2.5">
                <Phone className="size-4 text-primary" />
                <a href="tel:+919876543210" className="hover:text-white transition-colors">
                  +91 9876543210
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="size-4 text-primary" />
                <a href="tel:+918765432109" className="hover:text-white transition-colors">
                  +91 8765432109
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="size-4 text-primary" />
                <a href="tel:+918341166268" className="hover:text-white transition-colors">
                  +91 8341166268
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="size-4 text-primary" />
                <a
                  href="mailto:hello@windowsplaza.in"
                  className="hover:text-white transition-colors"
                >
                  hello@windowsplaza.in
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="size-4 text-primary mt-0.5" />
                <a
                  href="https://maps.google.com/?q=Rajula+Tallavalasa+Tallavalasa+Near+Thirumala+College+Bheemunipatnam+Visakhapatnam+Andhra+Pradesh+531162"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Rajula Tallavalasa, Tallavalasa, Near Thirumala College, Bheemunipatnam,
                  Visakhapatnam, Andhra Pradesh - 531162
                </a>
              </li>
            </ul>
          </div>

          {COL_LINKS.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold text-white mb-4 tracking-wide">
                {col.title}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="text-sm text-white/80 hover:text-white transition-colors">
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
            <p>© 2026 Windows Plaza.</p>
            <p>A Brand of SP Builders and Traders.</p>
            <p>All Rights Reserved.</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
