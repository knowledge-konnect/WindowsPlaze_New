import { t as SITE_CONFIG } from "./siteConfig-DryuP_nf.mjs";
import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { s as motion } from "../_libs/framer-motion.mjs";
import { A as Eye, B as Award, F as ClipboardCheck, M as Cog, O as Gem, T as House, U as ArrowRight, f as ShieldCheck, k as Factory, l as Target, s as Users, w as Leaf, y as MessageCircle, z as CalendarDays } from "../_libs/lucide-react.mjs";
import { n as Container, r as Section, t as Button } from "./Button-pr5z-nGg.mjs";
import { t as gallery_3_default } from "./gallery-3-GSB_2Cl4.mjs";
import { n as StatisticsCard, r as hero_home_default, t as FeatureCard } from "./StatisticsCard-DGHj598R.mjs";
import { t as SectionHeading } from "./SectionHeading-CcaGgn-G.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-Djxl256P.js
var import_jsx_runtime = require_jsx_runtime();
var STATS = [
	{
		icon: CalendarDays,
		value: 2,
		suffix: "",
		label: "Years of Operations"
	},
	{
		icon: House,
		value: 32,
		suffix: "+",
		label: "Projects Completed"
	},
	{
		icon: Users,
		value: 48,
		suffix: "+",
		label: "Happy Customers"
	},
	{
		icon: Award,
		value: 320,
		suffix: "+",
		label: "Windows Installed"
	}
];
var EXCELLENCE = [
	{
		icon: Cog,
		title: "German-grade Extrusion",
		description: "Multi-chamber profiles extruded on European-spec lines for dimensional accuracy down to the millimetre."
	},
	{
		icon: Gem,
		title: "Lead-free uPVC Compounds",
		description: "Only calcium-zinc stabilised, UV-resistant compounds — safe for your family and built for tropical sun."
	},
	{
		icon: ClipboardCheck,
		title: "42-Point Quality Checks",
		description: "Every unit passes structural, weather-tightness and finish inspections before it leaves the factory."
	},
	{
		icon: ShieldCheck,
		title: "10-Year Written Warranty",
		description: "Comprehensive cover on profiles, hardware, sealed glass units and workmanship — in writing, always."
	},
	{
		icon: Factory,
		title: "In-House Manufacturing",
		description: "From cutting to welding to glazing, everything happens under one roof — no outsourcing, no compromise."
	},
	{
		icon: Leaf,
		title: "Sustainable by Design",
		description: "Recyclable profiles, lower energy footprint and decades of service life mean less waste, more comfort."
	}
];
function AboutPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative overflow-hidden -mt-14 md:-mt-20 pt-14 md:pt-20 min-h-[calc(100svh-3.5rem)] md:min-h-0",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute inset-0 -z-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: hero_home_default,
					alt: "Windows Plaza manufacturing facility",
					fetchPriority: "high",
					loading: "eager",
					decoding: "async",
					className: "h-full w-full object-cover object-[62%_center] md:object-center"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[#084A85]/[0.38] md:bg-[#084A85]/[0.30]" })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
				className: "relative py-10 sm:py-12 md:py-28 lg:py-36",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
						initial: {
							opacity: 0,
							y: 12
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: { duration: .5 },
						className: "text-xs font-semibold tracking-[0.2em] uppercase text-white/90",
						children: "About WINDOWS PLAZA"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.h1, {
						initial: {
							opacity: 0,
							y: 16
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: .6,
							delay: .05
						},
						className: "mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white max-w-3xl leading-[1.1]",
						children: SITE_CONFIG.tagline
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
						initial: {
							opacity: 0,
							y: 16
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: .6,
							delay: .15
						},
						className: "mt-5 sm:mt-6 max-w-2xl text-base sm:text-lg text-white/85 leading-relaxed",
						children: "WINDOWS PLAZA is focused on delivering premium uPVC windows, uPVC doors and PVC doors for modern residential and commercial spaces with reliable quality and expert installation."
					})
				]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Container, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-12 lg:grid-cols-2 lg:gap-16 items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				initial: {
					opacity: 0,
					x: -24
				},
				whileInView: {
					opacity: 1,
					x: 0
				},
				viewport: {
					once: true,
					margin: "-80px"
				},
				transition: { duration: .6 },
				className: "rounded-xl overflow-hidden shadow-[var(--shadow-elevated)]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: gallery_3_default,
					alt: "Manufacturing floor",
					loading: "lazy",
					decoding: "async",
					className: "w-full h-full object-cover aspect-4/3"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-3",
					children: "Our story"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-3xl md:text-4xl font-semibold text-foreground leading-tight",
					children: "Built on trusted expertise. Focused on specialized execution."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 max-w-2xl space-y-4 text-muted-foreground leading-relaxed",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
							SITE_CONFIG.name,
							" is the dedicated uPVC windows and doors unit of",
							" ",
							SITE_CONFIG.parentCompany,
							", created to provide specialized fenestration solutions with a premium, customer-first experience."
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
							SITE_CONFIG.parentCompany,
							" is an established company committed to delivering premium building solutions across residential and commercial projects. That legacy of quality and accountability forms the foundation behind ",
							SITE_CONFIG.name,
							"."
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "At WINDOWS PLAZA, our team specializes in manufacturing and installing high-quality uPVC Windows, uPVC Doors, and PVC Doors engineered for modern homes and performance-driven commercial developments." })
					]
				})
			] })]
		}) }) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			muted: true,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Container, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-6 md:grid-cols-2",
				children: [{
					icon: Target,
					eyebrow: "Our mission",
					title: "Bring silence, safety and efficiency to every home we touch.",
					body: "To design and manufacture windows and doors so well engineered that homeowners forget they're there — until they realise how much quieter, cooler and calmer life has become."
				}, {
					icon: Eye,
					eyebrow: "Our vision",
					title: "Set the benchmark for uPVC and PVC in India.",
					body: "To be the most trusted name in fenestration across the country — known for uncompromising quality, honest pricing and a decade-long promise we always keep."
				}].map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 24
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: {
						once: true,
						margin: "-60px"
					},
					transition: {
						duration: .5,
						delay: i * .1
					},
					className: "bg-card rounded-xl border border-border p-8 md:p-10 shadow-[var(--shadow-soft)]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "inline-flex items-center justify-center size-12 rounded-xl bg-primary/10 text-primary mb-5",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.icon, { className: "size-6" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-2",
							children: item.eyebrow
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-2xl font-semibold text-primary leading-snug",
							children: item.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-muted-foreground leading-relaxed",
							children: item.body
						})
					]
				}, item.eyebrow))
			}) })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Container, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6",
			children: STATS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatisticsCard, { ...s }, s.label))
		}) }) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			muted: true,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Manufacturing excellence",
				title: "Six commitments behind every window we build.",
				description: "From raw compound to installed unit, quality is engineered in — never inspected in."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-5 md:gap-6 sm:grid-cols-2 lg:grid-cols-3",
				children: EXCELLENCE.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeatureCard, { ...f }, f.title))
			})] })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Container, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-12 lg:grid-cols-2 lg:gap-16 items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-3",
					children: "Inside the factory"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-3xl md:text-4xl font-semibold text-foreground leading-tight",
					children: "60,000 sq ft. Four production lines. One standard."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 max-w-2xl text-muted-foreground leading-relaxed",
					children: "Our facility houses dedicated cutting, welding, glazing and finishing lines, with in-house steel-reinforcement fabrication and a climate-controlled sealed glass unit (SGU) line. A closed-loop QA process tracks every unit by serial number from raw profile to installed opening."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-8 space-y-3",
					children: [
						"Fully automated cutting and welding lines",
						"In-house sealed glass unit manufacturing",
						"Galvanised steel reinforcement in every frame",
						"Serial-number traceability on every unit",
						"Trained in-house installation crews"
					].map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex items-start gap-3 text-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-1 inline-flex size-5 items-center justify-center rounded-full bg-primary/10 text-primary shrink-0",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "size-3.5" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm",
							children: f
						})]
					}, f))
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
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
					margin: "-80px"
				},
				transition: { duration: .6 },
				className: "rounded-xl overflow-hidden shadow-[var(--shadow-elevated)] order-first lg:order-last",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: gallery_3_default,
					alt: "Factory production line",
					loading: "lazy",
					decoding: "async",
					className: "w-full h-full object-cover aspect-4/3"
				})
			})]
		}) }) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			muted: true,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Container, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-xl bg-primary text-primary-foreground p-6 sm:p-8 md:p-14 text-center shadow-[var(--shadow-elevated)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight max-w-3xl mx-auto",
					children: "Ready to see the difference eighteen years of craftsmanship makes?"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex flex-wrap items-center justify-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "lg",
						variant: "secondary",
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/contact",
							children: ["Get Free Quote ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "lg",
						variant: "whatsapp",
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "https://wa.me/918341166268?text=Hi%2C%20I%27d%20like%20a%20free%20quote%20for%20uPVC%20products.",
							target: "_blank",
							rel: "noreferrer",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, {}), " WhatsApp Us"]
						})
					})]
				})]
			}) })
		})
	] });
}
//#endregion
export { AboutPage as component };
