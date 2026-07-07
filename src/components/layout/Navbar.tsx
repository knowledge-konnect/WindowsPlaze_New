import { Button } from "@/components/common/Button";
import { Container } from "@/components/layout/Container";
import { cn } from "@/lib/utils";
import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, PanelsTopLeft, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/products", label: "Products" },
  { to: "/projects", label: "Projects" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
        "bg-[#084A85]/95 backdrop-blur-sm border-b border-white/12 shadow-[var(--shadow-soft)]",
      )}
    >
      <Container
        className={cn(
          "flex h-16 items-center justify-between gap-4 transition-[height] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
          scrolled ? "md:h-[68px]" : "md:h-20",
        )}
      >
        <Link to="/" className="shrink-0 inline-flex items-center gap-2.5" aria-label="Windows Plaza home">
          <span className="inline-flex size-9 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-[var(--shadow-soft)]">
            <PanelsTopLeft className="size-5" />
          </span>
          <span>
            <span className="block text-sm font-semibold tracking-[0.18em] uppercase text-white">
              WINDOWS PLAZA
            </span>
            <span className="hidden sm:block text-[0.65rem] font-medium text-white/80 leading-tight">
              A Brand of SP Builders & Traders
            </span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              activeOptions={{ exact: true }}
              className="px-4 py-2 text-sm font-medium text-white/75 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#084A85]"
              activeProps={{
                className:
                  "px-4 py-2 text-sm font-semibold !text-primary bg-white rounded-lg border border-white shadow-[var(--shadow-soft)]",
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="tel:+918341166268"
            className="inline-flex items-center gap-1.5 rounded-lg border border-white/30 bg-white/10 px-3.5 py-2 text-sm font-medium text-white shadow-[var(--shadow-soft)] hover:border-white/55 hover:bg-white/16 transition-colors"
          >
            <Phone className="size-4" /> Call Now
          </a>
          <Button size="sm" asChild>
            <Link to="/contact">Get a Quote</Link>
          </Button>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((s) => !s)}
          className="md:hidden inline-flex size-10 items-center justify-center rounded-lg border border-white/25 bg-white/10 text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#084A85]"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </Container>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-white/0 via-white/45 to-white/0"
      />

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden bg-[#084A85]/96 border-t border-white/12"
          >
            <Container className="py-4 flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  activeOptions={{ exact: true }}
                  onClick={() => setOpen(false)}
                  className="px-3 py-3 rounded-lg text-white/90 font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#084A85]"
                  activeProps={{
                    className:
                      "px-3 py-3 rounded-lg font-semibold !text-primary bg-white border border-white",
                  }}
                >
                  {link.label}
                </Link>
              ))}
              <Button className="mt-3 w-full" asChild>
                <Link to="/contact" onClick={() => setOpen(false)}>
                  Get a Quote
                </Link>
              </Button>
              <a
                href="tel:+918341166268"
                className="inline-flex w-full items-center justify-center gap-1.5 rounded-lg border border-white/50 bg-transparent px-3.5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/10"
              >
                <Phone className="size-4" /> Call Now
              </a>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
