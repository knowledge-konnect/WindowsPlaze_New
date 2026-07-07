import { o as __toESM } from "../_runtime.mjs";
import { r as require_react } from "../_libs/@hookform/resolvers+[...].mjs";
import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { o as useScroll, r as useSpring, s as motion } from "../_libs/framer-motion.mjs";
import { U as ArrowUp, _ as Phone, y as MessageCircle } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/FloatingActions-BotpVHoc.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var WHATSAPP_NUMBER = "918341166268";
var PHONE_NUMBER = "+918341166268";
function FloatingActions() {
	const { scrollYProgress } = useScroll();
	const scaleX = useSpring(scrollYProgress, {
		stiffness: 120,
		damping: 24,
		mass: .2
	});
	const [showTop, setShowTop] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setShowTop(window.scrollY > 600);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			"aria-hidden": "true",
			style: { scaleX },
			className: "fixed top-0 left-0 right-0 z-[60] h-0.5 bg-primary origin-left"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "fixed z-40 right-4 md:right-6 bottom-4 md:bottom-6 hidden md:flex flex-col items-end gap-3",
			children: [showTop && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => window.scrollTo({
					top: 0,
					behavior: "smooth"
				}),
				"aria-label": "Scroll back to top",
				className: "hidden md:inline-flex size-11 items-center justify-center rounded-full bg-background border border-border text-foreground shadow-[var(--shadow-elevated)] hover:-translate-y-0.5 transition-transform",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUp, { className: "size-5" })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi! I'd like to get a quote for uPVC windows or doors.")}`,
				target: "_blank",
				rel: "noreferrer",
				"aria-label": "Chat with us on WhatsApp",
				className: "inline-flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[var(--shadow-elevated)] hover:scale-105 transition-transform",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "size-6" })
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "fixed z-40 right-3 bottom-3 flex items-center gap-2 md:hidden",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: `tel:${PHONE_NUMBER}`,
				"aria-label": "Call us",
				className: "inline-flex size-11 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-[var(--shadow-elevated)] hover:scale-105 transition-transform",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-5" })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi! I'd like to get a quote for uPVC windows or doors.")}`,
				target: "_blank",
				rel: "noreferrer",
				"aria-label": "Chat with us on WhatsApp",
				className: "inline-flex size-11 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[var(--shadow-elevated)] hover:scale-105 transition-transform",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "size-5" })
			})]
		})
	] });
}
//#endregion
export { FloatingActions };
