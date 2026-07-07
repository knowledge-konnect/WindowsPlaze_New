import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { K as ArrowRight, b as MessageCircle } from "../_libs/lucide-react.mjs";
import { n as Container, r as Section, t as Button } from "./Button-pr5z-nGg.mjs";
import { t as SectionHeading } from "./SectionHeading-D1zTYUQU.mjs";
import { t as FAQS } from "./faq-D2P9Ap9H.mjs";
import { t as FAQAccordion } from "./FAQAccordion-BkF074PW.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/faq-H29MMwqx.js
var import_jsx_runtime = require_jsx_runtime();
function FAQPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "relative -mt-16 md:-mt-20 pt-32 md:pt-40 pb-12 md:pb-16 bg-section",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-semibold tracking-[0.2em] uppercase text-accent",
					children: "FAQ"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-4 text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground max-w-3xl leading-[1.1]",
					children: "Answers, before you even ask."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed",
					children: "Fifteen of the most common questions we hear about our uPVC and PVC systems. Can't find yours? Message us on WhatsApp — we usually reply within minutes."
				})
			] })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			eyebrow: "15 questions, honest answers",
			title: "Everything you wanted to know",
			description: "From lifespan and noise reduction to warranty and after-sales — the essentials in one place."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "max-w-3xl mx-auto",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FAQAccordion, { items: FAQS })
		})] }) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			muted: true,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Container, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-xl bg-primary text-primary-foreground p-10 md:p-14 text-center shadow-[var(--shadow-elevated)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-3xl md:text-4xl font-semibold leading-tight max-w-3xl mx-auto",
					children: "Still have a question? We'd love to help."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex flex-wrap items-center justify-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						size: "lg",
						variant: "accent",
						children: ["Get Free Quote ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						size: "lg",
						variant: "whatsapp",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, {}), " WhatsApp Us"]
					})]
				})]
			}) })
		})
	] });
}
//#endregion
export { FAQPage as component };
