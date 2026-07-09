import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { s as motion } from "../_libs/framer-motion.mjs";
import { i as cn } from "./Button-pr5z-nGg.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/SectionHeading-CcaGgn-G.js
var import_jsx_runtime = require_jsx_runtime();
function SectionHeading({ eyebrow, title, description, align = "center", className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("max-w-2xl mb-12 md:mb-14", align === "center" ? "mx-auto text-center" : "text-left", className),
		children: [
			eyebrow && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.p, {
				initial: {
					opacity: 0,
					y: 8
				},
				whileInView: {
					opacity: 1,
					y: 0
				},
				viewport: { once: true },
				transition: { duration: .5 },
				className: cn("inline-flex items-center gap-3 text-[11px] font-semibold tracking-[0.22em] uppercase text-primary mb-4", align === "center" && "justify-center"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					"aria-hidden": true,
					className: "h-px w-6 bg-primary/50"
				}), eyebrow]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.h2, {
				initial: {
					opacity: 0,
					y: 16
				},
				whileInView: {
					opacity: 1,
					y: 0
				},
				viewport: { once: true },
				transition: {
					duration: .6,
					delay: .05
				},
				className: "text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] text-primary",
				children: title
			}),
			description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
				initial: {
					opacity: 0,
					y: 16
				},
				whileInView: {
					opacity: 1,
					y: 0
				},
				viewport: { once: true },
				transition: {
					duration: .6,
					delay: .15
				},
				className: "mt-4 sm:mt-5 text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed",
				children: description
			})
		]
	});
}
//#endregion
export { SectionHeading as t };
