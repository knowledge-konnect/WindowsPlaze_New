import { Container } from "@/components/layout/Container";
import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";

const COL_LINKS = [
  {
    title: "Products",
    links: [
      { label: "uPVC Windows", to: "/products/windows" },
      { label: "uPVC Doors", to: "/products/upvc-doors" },
      { label: "PVC Doors", to: "/products/pvc-doors" },
      { label: "Custom Solutions", to: "/products/custom" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", to: "/about" },
      { label: "Gallery", to: "/gallery" },
      { label: "Testimonials", to: "/testimonials" },
      { label: "Contact", to: "/contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Brochure", to: "/brochure" },
      { label: "FAQs", to: "/faq" },
      { label: "Warranty", to: "/warranty" },
      { label: "Installation", to: "/installation" },
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
              <span className="block text-sm font-semibold tracking-[0.18em] uppercase text-white">
                WINDOWS PLAZA
              </span>
              <span className="mt-1 block text-sm text-white/80">
                Windows Plaza – Premium uPVC Windows
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
                <Phone className="size-4 text-primary" /> +91 9876543210
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="size-4 text-primary" /> +91 8765432109
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="size-4 text-primary" /> +91 8341166268
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="size-4 text-primary" /> hello@windowsplaza.in
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="size-4 text-primary mt-0.5" /> Rajula Tallavalasa, Tallavalasa, Near Thirumala College, Bheemunipatnam, Visakhapatnam, Andhra Pradesh – 531162
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
                    <Link
                      to={l.to}
                      className="text-sm text-white/80 hover:text-white transition-colors"
                    >
                      {l.label}
                    </Link>
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
