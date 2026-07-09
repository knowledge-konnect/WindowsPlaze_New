import { o as __toESM } from "../_runtime.mjs";
import { r as require_react } from "../_libs/@hookform/resolvers+[...].mjs";
import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { a as useMotionValue, i as useTransform, n as animate, s as motion, t as useInView } from "../_libs/framer-motion.mjs";
import { i as cn } from "./Button-pr5z-nGg.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/StatisticsCard-DGHj598R.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var hero_home_default = "/assets/hero-home-BTnqyeRO.jpg";
function FeatureCard({ icon: Icon, title, description, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		initial: {
			opacity: 0,
			y: 20
		},
		whileInView: {
			opacity: 1,
			y: 0
		},
		viewport: {
			once: true,
			margin: "-60px"
		},
		transition: { duration: .55 },
		className: cn("group relative h-full md:min-h-[248px] bg-card rounded-xl border border-border/90 p-7 md:p-8", "shadow-[var(--shadow-soft)] hover-lift", className),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "inline-flex items-center justify-center size-12 rounded-[12px] bg-primary/10 text-primary mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-6" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "text-lg md:text-[1.1rem] font-semibold text-primary mb-2.5",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm md:text-[0.95rem] text-muted-foreground leading-relaxed",
				children: description
			})
		]
	});
}
function StatisticsCard({ value, suffix = "+", label, icon: Icon, className }) {
	const ref = (0, import_react.useRef)(null);
	const inView = useInView(ref, {
		once: true,
		margin: "-40px"
	});
	const count = useMotionValue(0);
	const rounded = useTransform(count, (latest) => Math.round(latest).toLocaleString());
	(0, import_react.useEffect)(() => {
		if (inView) return animate(count, value, {
			duration: 1.6,
			ease: [
				.22,
				1,
				.36,
				1
			]
		}).stop;
	}, [
		inView,
		value,
		count
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		ref,
		initial: {
			opacity: 0,
			y: 20
		},
		whileInView: {
			opacity: 1,
			y: 0
		},
		viewport: { once: true },
		transition: { duration: .5 },
		className: cn("h-full md:min-h-[220px] bg-card rounded-xl border border-border/90 p-6 md:p-8 text-center shadow-[var(--shadow-soft)] hover-lift hover:scale-[1.01]", className),
		children: [
			Icon && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "inline-flex size-11 items-center justify-center rounded-[12px] bg-primary/10 text-primary mb-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-5" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-baseline justify-center gap-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
					className: "text-4xl md:text-5xl font-semibold text-primary tabular-nums",
					children: rounded
				}), suffix && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-2xl md:text-3xl font-semibold text-primary",
					children: suffix
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2.5 text-sm md:text-base text-muted-foreground",
				children: label
			})
		]
	});
}
//#endregion
export { StatisticsCard as n, hero_home_default as r, FeatureCard as t };
