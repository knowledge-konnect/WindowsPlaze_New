import { SITE_CONFIG, whatsAppUrl } from "@/lib/siteConfig";
import { motion, useScroll, useSpring } from "framer-motion";
import { ArrowUp, MessageCircle, Phone } from "lucide-react";
import { useEffect, useState } from "react";

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
      <motion.div
        aria-hidden="true"
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 z-[60] h-0.5 bg-primary origin-left"
      />

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
          href={whatsAppUrl()}
          target="_blank"
          rel="noreferrer"
          aria-label="Chat with us on WhatsApp"
          className="inline-flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[var(--shadow-elevated)] hover:scale-105 transition-transform"
        >
          <MessageCircle className="size-6" />
        </a>

        <a
          href={SITE_CONFIG.primaryPhone.href}
          aria-label="Call us"
          className="inline-flex size-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-[var(--shadow-elevated)] hover:scale-105 transition-transform"
        >
          <Phone className="size-6" />
        </a>
      </div>

      <div className="fixed z-40 right-3 md:right-4 bottom-[calc(env(safe-area-inset-bottom)+0.75rem)] flex items-center gap-2 md:hidden">
        <a
          href={SITE_CONFIG.primaryPhone.href}
          aria-label="Call us"
          className="inline-flex size-11 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-[var(--shadow-elevated)] hover:scale-105 transition-transform"
        >
          <Phone className="size-5" />
        </a>
        <a
          href={whatsAppUrl()}
          target="_blank"
          rel="noreferrer"
          aria-label="Chat with us on WhatsApp"
          className="inline-flex size-11 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[var(--shadow-elevated)] hover:scale-105 transition-transform"
        >
          <MessageCircle className="size-5" />
        </a>
      </div>
    </>
  );
}
