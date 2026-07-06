import { Link } from "@tanstack/react-router";
import { motion, useScroll, useSpring } from "framer-motion";
import { ArrowRight, ArrowUp, MessageCircle, Phone } from "lucide-react";
import { useEffect, useState } from "react";

const WHATSAPP_NUMBER = "918341166268";
const PHONE_NUMBER = "+918341166268";

export function FloatingActions() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.2 });
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Scroll progress bar */}
      <motion.div
        aria-hidden="true"
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 z-[60] h-0.5 bg-primary origin-left"
      />

      {/* Floating side actions (desktop + mobile) */}
      <div className="fixed z-40 right-4 md:right-6 bottom-4 md:bottom-6 hidden md:flex flex-col items-end gap-3">
        {showTop && (
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Scroll back to top"
            className="hidden md:inline-flex size-11 items-center justify-center rounded-full bg-background border border-border text-foreground shadow-[var(--shadow-elevated)] hover:-translate-y-0.5 transition-transform"
          >
            <ArrowUp className="size-5" />
          </button>
        )}

        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
            "Hi! I'd like to get a quote for uPVC windows or doors.",
          )}`}
          target="_blank"
          rel="noreferrer"
          aria-label="Chat with us on WhatsApp"
          className="inline-flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[var(--shadow-elevated)] hover:scale-105 transition-transform"
        >
          <MessageCircle className="size-6" />
        </a>
      </div>

      {/* Mobile floating call + WhatsApp */}
      <div className="fixed z-40 right-4 bottom-20 flex items-center gap-2.5 md:hidden">
        <a
          href={`tel:${PHONE_NUMBER}`}
          aria-label="Call us"
          className="inline-flex size-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-[var(--shadow-elevated)] hover:scale-105 transition-transform"
        >
          <Phone className="size-5" />
        </a>
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
            "Hi! I'd like to get a quote for uPVC windows or doors.",
          )}`}
          target="_blank"
          rel="noreferrer"
          aria-label="Chat with us on WhatsApp"
          className="inline-flex size-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[var(--shadow-elevated)] hover:scale-105 transition-transform"
        >
          <MessageCircle className="size-5" />
        </a>
      </div>

      {/* Mobile sticky Get Quote bar */}
      <div className="md:hidden fixed z-40 left-4 bottom-4">
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-4 h-11 text-sm font-semibold shadow-[var(--shadow-elevated)] hover:bg-primary-hover hover:-translate-y-0.5 transition-all"
          aria-label="Get a free quote"
        >
          Get Quote <ArrowRight className="size-4" />
        </Link>
      </div>
    </>
  );
}
