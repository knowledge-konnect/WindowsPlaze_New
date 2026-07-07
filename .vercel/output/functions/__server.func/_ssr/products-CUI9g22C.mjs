import { o as __toESM } from "../_runtime.mjs";
import { r as require_react } from "../_libs/@hookform/resolvers+[...].mjs";
import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { s as motion } from "../_libs/framer-motion.mjs";
import { G as ArrowRight, y as MessageCircle, z as Check } from "../_libs/lucide-react.mjs";
import { n as Container, r as Section, t as Button } from "./Button-pr5z-nGg.mjs";
import { t as SectionHeading } from "./SectionHeading-tv2hhjRs.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as gallery_6_default, i as gallery_5_default, n as gallery_2_default, r as gallery_4_default, t as gallery_1_default } from "./gallery-6-B3HHaU8a.mjs";
import { n as product_upvc_door_default, r as product_upvc_window_default, t as product_pvc_door_default } from "./product-upvc-window-B9nSMe6t.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/products-CUI9g22C.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var CATEGORIES = [
	{
		slug: "upvc-windows",
		title: "uPVC Windows",
		intro: "Precision-engineered window systems that flood your rooms with light while sealing out noise, dust and weather.",
		products: [
			{
				title: "Sliding Windows",
				image: product_upvc_window_default,
				description: "Space-saving horizontal sashes that glide effortlessly on stainless-steel rollers — perfect for balconies and wide openings.",
				features: [
					"Twin or triple-track configurations",
					"Multi-point locking with anti-lift blocks",
					"Integrated mosquito mesh option",
					"Up to 3.6 m width without mullion"
				],
				applications: [
					"Living rooms",
					"Balconies",
					"Bedrooms",
					"Kitchens"
				]
			},
			{
				title: "Casement Windows",
				image: gallery_1_default,
				description: "Side-hung windows that swing open like a door for full ventilation and unobstructed views.",
				features: [
					"Full 90° opening for maximum airflow",
					"Espagnolette multi-point locking",
					"Concealed hinges for a clean look",
					"Optional friction stays"
				],
				applications: [
					"Bedrooms",
					"Studies",
					"Bathrooms",
					"Villa facades"
				]
			},
			{
				title: "Fixed Windows",
				image: gallery_2_default,
				description: "Non-opening picture windows for uninterrupted views and maximum daylight — ideal for stairwells and feature walls.",
				features: [
					"Slim sightlines for expansive glass",
					"Sealed for zero air leakage",
					"Custom shapes and sizes",
					"Compatible with laminated safety glass"
				],
				applications: [
					"Stairwells",
					"Double-height walls",
					"Feature walls",
					"Foyers"
				]
			},
			{
				title: "Tilt & Turn Windows",
				image: gallery_5_default,
				description: "European-style windows that tilt inward for secure ventilation or swing fully open for cleaning and airflow.",
				features: [
					"Dual-mode: tilt for ventilation, turn for full open",
					"Inward opening — safe for high-rises",
					"Enhanced security with concealed hardware",
					"Easy interior cleaning"
				],
				applications: [
					"High-rise apartments",
					"Master bedrooms",
					"Home offices",
					"Kitchens"
				]
			},
			{
				title: "Combination Windows",
				image: gallery_6_default,
				description: "Bespoke assemblies combining fixed, sliding and openable sashes into one architectural statement.",
				features: [
					"Mix fixed + sliding + casement in one frame",
					"Reinforced mullions for large spans",
					"Custom geometry and mullion patterns",
					"Colour-matched hardware options"
				],
				applications: [
					"Villa facades",
					"Living rooms",
					"Commercial lobbies",
					"Terraces"
				]
			}
		]
	},
	{
		slug: "upvc-doors",
		title: "uPVC Doors",
		intro: "Weather-tight external doors that combine the warmth of a home with the security of a fortress.",
		products: [
			{
				title: "Sliding Doors",
				image: product_upvc_door_default,
				description: "Large-span sliding doors that dissolve the boundary between indoors and out — smooth, secure and stunning.",
				features: [
					"2 or 3 track systems up to 6 m wide",
					"Stainless-steel tandem rollers",
					"Multi-point hook locks",
					"Low-threshold option for barrier-free living"
				],
				applications: [
					"Balconies",
					"Patios",
					"Garden entrances",
					"Poolside"
				]
			},
			{
				title: "French Doors",
				image: gallery_4_default,
				description: "Elegant twin-leaf doors that open wide to bring the outdoors in — a timeless classic in uPVC.",
				features: [
					"Fully openable double-leaf design",
					"Astragal seal for weather-tightness",
					"Optional Georgian bar detailing",
					"Espagnolette multi-point locking"
				],
				applications: [
					"Garden doors",
					"Living rooms",
					"Terraces",
					"Villas"
				]
			},
			{
				title: "Casement Doors",
				image: gallery_1_default,
				description: "Single or double-leaf swing doors engineered for daily use, secure locking and lasting curb appeal.",
				features: [
					"Reinforced with galvanised steel core",
					"Anti-lift heavy-duty hinges",
					"Multi-point locking as standard",
					"Weather-sealed threshold"
				],
				applications: [
					"Main entrances",
					"Utility doors",
					"Side entries",
					"Rear yards"
				]
			}
		]
	},
	{
		slug: "pvc-doors",
		title: "PVC Doors",
		intro: "Lightweight, waterproof interior doors — perfect for the wet, humid corners of your home.",
		products: [
			{
				title: "Bathroom Doors",
				image: product_pvc_door_default,
				description: "100% waterproof PVC doors that shrug off steam, splashes and humidity — no swelling, warping or rot.",
				features: [
					"Fully waterproof PVC core",
					"Anti-fungal and anti-termite",
					"Lightweight — easy on hinges",
					"Wipe-clean matte finish"
				],
				applications: [
					"Bathrooms",
					"Wet balconies",
					"Servant toilets",
					"Utility"
				]
			},
			{
				title: "Bedroom Doors",
				image: gallery_5_default,
				description: "Solid-core PVC interior doors in wood-grain finishes — the warmth of wood, without the maintenance.",
				features: [
					"Sound-dampening solid core",
					"Realistic wood-grain laminates",
					"Concealed hinges available",
					"Optional glass inserts"
				],
				applications: [
					"Bedrooms",
					"Studies",
					"Guest rooms",
					"Walk-in closets"
				]
			},
			{
				title: "Designer Doors",
				image: gallery_6_default,
				description: "Statement PVC doors with premium laminate finishes, decorative moulding and custom hardware.",
				features: [
					"Bespoke moulding and inlay patterns",
					"Premium hardware in matte black, brass or chrome",
					"High-pressure laminate finishes",
					"Made-to-measure sizing"
				],
				applications: [
					"Master suites",
					"Feature entrances",
					"Pooja rooms",
					"Home theatres"
				]
			}
		]
	}
];
function ProductCardExtended({ product }) {
	const waMsg = encodeURIComponent(`Hi, I'd like to enquire about your ${product.title}.`);
	const topFeatures = product.features.slice(0, 3);
	const topApplications = product.applications.slice(0, 3);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
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
		transition: { duration: .55 },
		className: "group h-full rounded-xl border border-border bg-card shadow-[var(--shadow-soft)] overflow-hidden transition-shadow duration-300 hover:shadow-[var(--shadow-hover)]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "image-zoom aspect-[4/3] bg-section",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: product.image,
				alt: product.title,
				loading: "lazy",
				className: "h-full w-full object-cover"
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex h-full flex-col p-5 md:p-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-lg md:text-xl font-semibold text-foreground",
					children: product.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground leading-relaxed",
					children: product.description
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-2 text-xs font-semibold tracking-widest uppercase text-accent",
						children: "Features"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "space-y-1.5",
						children: topFeatures.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-start gap-2 text-sm text-foreground/90",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "mt-0.5 size-4 shrink-0 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: f })]
						}, f))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-5 flex flex-wrap gap-2",
					children: topApplications.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "inline-flex items-center rounded-full border border-border bg-section px-2.5 py-1 text-xs font-medium text-foreground/80",
						children: a
					}, a))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-auto pt-5",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: `https://wa.me/918341166268?text=${waMsg}`,
						target: "_blank",
						rel: "noreferrer",
						className: "inline-flex w-full",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "whatsapp",
							className: "w-full justify-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, {}), " Enquire on WhatsApp"]
						})
					})
				})
			]
		})]
	});
}
function ProductsPage() {
	const [activeCategory, setActiveCategory] = (0, import_react.useState)(CATEGORIES[0]?.slug ?? "");
	(0, import_react.useEffect)(() => {
		const sections = CATEGORIES.map((c) => document.getElementById(c.slug)).filter((el) => el != null);
		if (sections.length === 0) return;
		const observer = new IntersectionObserver((entries) => {
			const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
			if (visible?.target?.id) setActiveCategory(visible.target.id);
		}, {
			rootMargin: "-30% 0px -55% 0px",
			threshold: [
				.15,
				.3,
				.5
			]
		});
		sections.forEach((section) => observer.observe(section));
		return () => observer.disconnect();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "relative -mt-14 md:-mt-20 pt-24 md:pt-40 pb-12 md:pb-20 bg-section",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-semibold tracking-[0.2em] uppercase text-accent",
					children: "Our products"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground max-w-3xl leading-[1.1]",
					children: "The complete range of uPVC & PVC systems, in one place."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 sm:mt-6 max-w-xl text-base sm:text-lg text-muted-foreground leading-relaxed",
					children: "Windows, external doors and interior doors — engineered, manufactured and installed by a single team you can trust. Explore each system below."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 flex flex-wrap gap-2",
					children: CATEGORIES.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: `#${c.slug}`,
						className: `inline-flex items-center rounded-full border px-4 py-2 text-sm font-medium transition-colors ${activeCategory === c.slug ? "border-primary/40 bg-primary/10 text-primary" : "border-border bg-background text-foreground/80 hover:text-primary hover:border-primary/30"}`,
						children: c.title
					}, c.slug))
				})
			] })
		}),
		CATEGORIES.map((cat, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			muted: idx % 2 === 1,
			className: "scroll-mt-24",
			id: cat.slug,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: `Category · ${idx + 1}`,
				title: cat.title,
				description: cat.intro
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid items-stretch gap-6 sm:grid-cols-2 xl:grid-cols-3",
				children: cat.products.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCardExtended, { product: p }, p.title))
			})] })
		}, cat.slug)),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Container, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-xl bg-primary text-primary-foreground p-6 sm:p-8 md:p-14 text-center shadow-[var(--shadow-elevated)]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight max-w-3xl mx-auto",
					children: "Not sure which system is right for your space?"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-primary-foreground/80 max-w-xl mx-auto",
					children: "Share your requirements and our team will recommend the perfect fit — usually within 24 hours."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex flex-wrap items-center justify-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "lg",
						variant: "secondary",
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/contact",
							children: ["Get Free Quote ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "https://wa.me/918341166268?text=Hi%2C%20I%20want%20a%20quote%20for%20your%20products.",
						target: "_blank",
						rel: "noreferrer",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							size: "lg",
							variant: "whatsapp",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, {}), " WhatsApp Us"]
						})
					})]
				})
			]
		}) }) })
	] });
}
//#endregion
export { ProductsPage as component };
