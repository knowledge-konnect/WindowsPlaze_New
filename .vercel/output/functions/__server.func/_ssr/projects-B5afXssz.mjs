import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { K as ArrowRight, b as MessageCircle } from "../_libs/lucide-react.mjs";
import { n as Container, r as Section, t as Button } from "./Button-pr5z-nGg.mjs";
import { t as gallery_3_default } from "./gallery-3-GSB_2Cl4.mjs";
import { t as SectionHeading } from "./SectionHeading-D1zTYUQU.mjs";
import { a as gallery_6_default, i as gallery_5_default, n as gallery_2_default, r as gallery_4_default, t as gallery_1_default } from "./gallery-6-B3HHaU8a.mjs";
import { t as GalleryCard } from "./GalleryCard-Dh0NbFkq.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/projects-B5afXssz.js
var import_jsx_runtime = require_jsx_runtime();
var PROJECTS = [
	{
		image: gallery_1_default,
		title: "Willow Lane Residence",
		tag: "Villa · Bengaluru"
	},
	{
		image: gallery_2_default,
		title: "Sunlit Kitchen Retreat",
		tag: "Interior · Mumbai"
	},
	{
		image: gallery_3_default,
		title: "Skyline Apartment",
		tag: "High-rise · Pune"
	},
	{
		image: gallery_4_default,
		title: "Heritage Entryway",
		tag: "Entry Door · Hyderabad"
	},
	{
		image: gallery_5_default,
		title: "Serene Master Suite",
		tag: "Bedroom · Chennai"
	},
	{
		image: gallery_6_default,
		title: "Garden Studio",
		tag: "Home Office · Goa"
	},
	{
		image: gallery_2_default,
		title: "Lakeview Penthouse",
		tag: "Sliding Doors · Kolkata"
	},
	{
		image: gallery_1_default,
		title: "Coastal Villa",
		tag: "Casement · Alibaug"
	},
	{
		image: gallery_4_default,
		title: "Boutique Café",
		tag: "Commercial · Bengaluru"
	}
];
function ProjectsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "relative -mt-16 md:-mt-20 pt-32 md:pt-40 pb-16 md:pb-20 bg-section",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-semibold tracking-[0.2em] uppercase text-accent",
					children: "Our work"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-4 text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground max-w-3xl leading-[1.1]",
					children: "30+ projects. One consistent standard of craftsmanship."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed",
					children: "A closer look at recent installations across homes, high-rises and commercial spaces — each one measured, manufactured and installed by our own teams."
				})
			] })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			eyebrow: "Featured projects",
			title: "Homes and buildings we've reshaped",
			description: "Hover to see the story behind each installation."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-5 md:gap-6 sm:grid-cols-2 lg:grid-cols-3",
			children: PROJECTS.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GalleryCard, {
				image: p.image,
				title: p.title,
				tag: p.tag
			}, i))
		})] }) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			muted: true,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Container, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-xl bg-primary text-primary-foreground p-10 md:p-14 text-center shadow-[var(--shadow-elevated)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-3xl md:text-4xl font-semibold leading-tight max-w-3xl mx-auto",
					children: "Your project could be next."
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
export { ProjectsPage as component };
