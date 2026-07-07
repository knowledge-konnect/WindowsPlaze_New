import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { s as motion } from "../_libs/framer-motion.mjs";
import { j as Expand } from "../_libs/lucide-react.mjs";
import { i as cn } from "./Button-pr5z-nGg.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/GalleryCard-Dh0NbFkq.js
var import_jsx_runtime = require_jsx_runtime();
function GalleryCard({ image, title, tag, onClick, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.button, {
		type: "button",
		onClick,
		initial: {
			opacity: 0,
			scale: .98
		},
		whileInView: {
			opacity: 1,
			scale: 1
		},
		viewport: {
			once: true,
			margin: "-40px"
		},
		transition: { duration: .5 },
		className: cn("group relative block w-full overflow-hidden rounded-xl border border-border/90 bg-card text-left image-zoom", "shadow-[var(--shadow-soft)] hover-lift", className),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "aspect-[4/5]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: image,
					alt: title ?? "Gallery item",
					loading: "lazy",
					className: "h-full w-full object-cover"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 bg-[#084A85]/0 group-hover:bg-[#084A85]/28 transition-colors duration-300" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-x-0 bottom-0 p-5 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-end justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						tag && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[10px] font-semibold uppercase tracking-widest text-white/85",
							children: tag
						}),
						title && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-background font-medium mt-1",
							children: title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 inline-flex items-center rounded-full bg-white/92 px-3 py-1 text-xs font-semibold text-primary shadow-sm",
							children: "View Project"
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "inline-flex size-9 items-center justify-center rounded-full bg-background/95 text-primary shadow-sm",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Expand, { className: "size-4" })
					})]
				})
			})
		]
	});
}
//#endregion
export { GalleryCard as t };
