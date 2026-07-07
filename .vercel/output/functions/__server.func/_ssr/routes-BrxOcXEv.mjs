import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { s as motion } from "../_libs/framer-motion.mjs";
import { A as Factory, B as Check, D as Headphones, E as House, F as CloudRain, G as ArrowUpRight, H as Bug, K as ArrowRight, L as ClipboardCheck, N as Droplets, O as HardHat, P as Cog, T as Leaf, U as Award, V as CalendarDays, a as VolumeX, b as MessageCircle, c as Truck, d as Sparkles, f as ShieldCheck, g as Quote, h as Ruler, i as Wind, k as Gem, o as Volume2, p as Settings2, r as Wrench, s as Users, t as Zap, u as Star, v as PhoneCall } from "../_libs/lucide-react.mjs";
import { i as cn, n as Container, r as Section, t as Button } from "./Button-pr5z-nGg.mjs";
import { t as gallery_3_default } from "./gallery-3-GSB_2Cl4.mjs";
import { n as StatisticsCard, r as hero_home_default, t as FeatureCard } from "./StatisticsCard-DenOCVQL.mjs";
import { t as SectionHeading } from "./SectionHeading-D1zTYUQU.mjs";
import { t as FAQAccordion } from "./FAQAccordion-BkF074PW.mjs";
import { a as gallery_6_default, i as gallery_5_default, n as gallery_2_default, r as gallery_4_default, t as gallery_1_default } from "./gallery-6-B3HHaU8a.mjs";
import { n as product_upvc_door_default, r as product_upvc_window_default, t as product_pvc_door_default } from "./product-upvc-window-B9nSMe6t.mjs";
import { t as GalleryCard } from "./GalleryCard-Dh0NbFkq.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BrxOcXEv.js
var import_jsx_runtime = require_jsx_runtime();
function ProductCard({ title, category, description, image, href = "#", className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
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
		transition: { duration: .6 },
		className: cn("group relative bg-card rounded-xl border border-border/90 overflow-hidden", "shadow-[var(--shadow-soft)] hover-lift", className),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
			to: href,
			className: "block",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "image-zoom aspect-[4/3] bg-section",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: image,
					alt: title,
					className: "h-full w-full object-cover",
					loading: "lazy"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "p-6",
				children: [
					category && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold tracking-widest uppercase text-accent mb-2",
						children: category
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-lg font-semibold text-primary group-hover:text-primary-hover transition-colors",
							children: title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-5 text-muted-foreground group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-300" })]
					}),
					description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted-foreground leading-relaxed",
						children: description
					})
				]
			})]
		})
	});
}
function TestimonialCard({ quote, name, role, avatar, rating = 5, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.figure, {
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
		className: cn("relative h-full bg-card rounded-xl border border-border/90 p-8 md:p-9 shadow-[var(--shadow-soft)] hover-lift", className),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Quote, { className: "absolute top-6 right-6 size-8 text-primary/10" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex gap-0.5 mb-6",
				children: Array.from({ length: rating }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "size-4 fill-primary text-primary" }, i))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
				className: "text-foreground/95 leading-relaxed text-[1rem] md:text-[1.02rem]",
				children: [
					"\"",
					quote,
					"\""
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
				className: "mt-7 flex items-center gap-3.5",
				children: [avatar ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: avatar,
					alt: name,
					className: "size-11 rounded-full object-cover border border-border shadow-sm"
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "size-11 rounded-full bg-primary/10 text-primary grid place-items-center font-semibold shadow-sm",
					children: name.charAt(0)
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "font-semibold text-sm text-primary",
					children: name
				}), role && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-xs text-muted-foreground/90",
					children: role
				})] })]
			})
		]
	});
}
var HERO_HIGHLIGHTS = [
	{
		icon: Leaf,
		label: "Energy Efficient"
	},
	{
		icon: CloudRain,
		label: "Weather Resistant"
	},
	{
		icon: Volume2,
		label: "Sound Insulation"
	},
	{
		icon: Sparkles,
		label: "Low Maintenance"
	}
];
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
var WHY_US = [
	{
		icon: Factory,
		title: "Factory-Direct Manufacturing",
		description: "Every profile is extruded, welded and finished in our own facility — no middlemen, no compromises on quality."
	},
	{
		icon: Gem,
		title: "Premium Grade Materials",
		description: "Lead-free uPVC compounds, galvanised steel reinforcement and imported hardware built to last decades."
	},
	{
		icon: Settings2,
		title: "Fully Customised Solutions",
		description: "Sliding, casement, tilt-and-turn, French, or bespoke — sized and styled precisely for your space."
	},
	{
		icon: HardHat,
		title: "Professional Installation",
		description: "Trained in-house crews follow a 42-point installation checklist for a clean, weather-tight finish."
	},
	{
		icon: ShieldCheck,
		title: "10-Year Warranty",
		description: "Comprehensive cover on profiles, hardware and workmanship, backed by responsive after-sales support."
	},
	{
		icon: Truck,
		title: "On-Time Delivery",
		description: "Streamlined production planning means your project moves from measurement to install without delay."
	}
];
var PRODUCTS = [
	{
		title: "uPVC Windows",
		category: "Windows",
		description: "Sliding, casement and tilt-and-turn systems that flood your space with light while sealing out noise and weather.",
		image: product_upvc_window_default
	},
	{
		title: "uPVC Doors",
		category: "Doors",
		description: "French, sliding and bi-fold doors engineered for smooth operation, secure locking and lasting curb appeal.",
		image: product_upvc_door_default
	},
	{
		title: "PVC Doors",
		category: "Interiors",
		description: "Lightweight, waterproof interior doors ideal for bathrooms, kitchens and utility spaces — moisture-proof for life.",
		image: product_pvc_door_default
	}
];
var BENEFITS = [
	{
		icon: VolumeX,
		title: "Noise Reduction",
		description: "Up to 40 dB acoustic dampening with multi-chamber profiles and sealed glass units."
	},
	{
		icon: Wind,
		title: "Dust Resistant",
		description: "EPDM gaskets and multi-point locks form an airtight seal against dust and pollen."
	},
	{
		icon: Zap,
		title: "Energy Saving",
		description: "Thermally insulated frames cut cooling and heating loads by up to 30% year-round."
	},
	{
		icon: Droplets,
		title: "100% Waterproof",
		description: "Engineered drainage and welded corners keep monsoon rain firmly on the outside."
	},
	{
		icon: Bug,
		title: "Termite Proof",
		description: "uPVC is inorganic — termites, borers and fungus can't touch it, ever."
	},
	{
		icon: Wrench,
		title: "Low Maintenance",
		description: "No painting, polishing or sealing. A soft cloth and mild soap keep them factory-fresh."
	}
];
var PROCESS = [
	{
		icon: PhoneCall,
		step: "01",
		title: "Consultation",
		description: "Share your requirements — we recommend the right systems, glass and hardware for your space and budget."
	},
	{
		icon: Ruler,
		step: "02",
		title: "Site Measurement",
		description: "Our surveyor visits, measures every opening to the millimetre and confirms the final specification."
	},
	{
		icon: Cog,
		step: "03",
		title: "Manufacturing",
		description: "Your windows and doors are cut, welded and glazed at our factory under strict QA checks."
	},
	{
		icon: ClipboardCheck,
		step: "04",
		title: "Installation",
		description: "Trained crews install, seal and test every unit on site — usually completed in a single day."
	},
	{
		icon: Headphones,
		step: "05",
		title: "Support",
		description: "Enjoy a 10-year warranty and a dedicated service line for anything you need, long after install."
	}
];
var GALLERY = [
	{
		image: gallery_1_default,
		title: "Willow Lane Residence",
		tag: "Villa"
	},
	{
		image: gallery_2_default,
		title: "Sunlit Kitchen Retreat",
		tag: "Interior"
	},
	{
		image: gallery_3_default,
		title: "Skyline Apartment",
		tag: "High-rise"
	},
	{
		image: gallery_4_default,
		title: "Heritage Entryway",
		tag: "Entry Door"
	},
	{
		image: gallery_5_default,
		title: "Serene Master Suite",
		tag: "Bedroom"
	},
	{
		image: gallery_6_default,
		title: "Garden Studio",
		tag: "Home Office"
	}
];
var TESTIMONIALS = [
	{
		quote: "Great first experience with the team. They explained every option clearly and finished our sliding windows neatly. The house feels much quieter now.",
		name: "S. Lakshmi",
		role: "Homeowner, Madhurawada, Vizag",
		rating: 5
	},
	{
		quote: "We installed uPVC windows for our new floor in Gajuwaka. Fit and finish are good, and their installation crew was on time and professional.",
		name: "K. Ravi Teja",
		role: "Homeowner, Gajuwaka, Vizag",
		rating: 5
	},
	{
		quote: "Pricing was transparent and the support was responsive from measurement to handover. Happy with the quality of both windows and balcony door.",
		name: "N. Harika & Family",
		role: "Apartment Owners, PM Palem, Vizag",
		rating: 5
	}
];
var FAQS = [
	{
		question: "What is uPVC and why is it better than aluminium or wood?",
		answer: "uPVC (unplasticised polyvinyl chloride) is a rigid, weather-resistant polymer. Unlike wood it never rots, warps or attracts termites, and unlike aluminium it insulates against heat and sound instead of conducting them — giving you a quieter, more energy-efficient home."
	},
	{
		question: "How long do uPVC windows and doors typically last?",
		answer: "Properly manufactured and installed uPVC systems last 30 to 50 years with virtually no maintenance. Our profiles are UV-stabilised for tropical climates and backed by a 10-year warranty."
	},
	{
		question: "Can uPVC really reduce noise from outside?",
		answer: "Yes. Multi-chamber profiles combined with double-glazed sealed units reduce external noise by up to 40 decibels — enough to turn a busy street into a whisper indoors."
	},
	{
		question: "Will the windows help lower my electricity bill?",
		answer: "Absolutely. Our thermally insulated frames and Low-E glass options can cut air-conditioning and heating loads by 25–35%, paying for themselves over a few years of use."
	},
	{
		question: "Do you offer customised sizes, colours and designs?",
		answer: "Every order is made to measure. Choose from sliding, casement, tilt-and-turn, French, bi-fold and fixed systems in classic white, wood-grain laminates or premium colour finishes."
	},
	{
		question: "How long does a typical project take from order to install?",
		answer: "Most residential projects are surveyed, manufactured and installed within 3 to 4 weeks. Large commercial projects follow a shared production schedule agreed in advance."
	},
	{
		question: "Are your products safe for coastal or high-rainfall regions?",
		answer: "Yes — uPVC does not rust, corrode or absorb moisture, making it ideal for coastal cities and heavy monsoon regions. All units are pressure-tested for water and wind tightness."
	},
	{
		question: "What kind of glass options are available?",
		answer: "We offer single glazing, double-glazed insulated units, laminated safety glass, tinted glass, frosted glass and Low-E energy-saving glass — matched to your comfort and privacy needs."
	},
	{
		question: "Do you handle removal of existing windows and clean-up?",
		answer: "We do. Our install crews remove the old frames, protect your interiors, seal all joints, and hand over each opening cleaned and ready to use."
	},
	{
		question: "What does the 10-year warranty actually cover?",
		answer: "It covers manufacturing defects on profiles, sealed glass units, hardware and workmanship. Any covered issue is repaired or replaced free of charge by our service team."
	}
];
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative overflow-hidden -mt-16 md:-mt-20 pt-16 md:pt-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute inset-0 -z-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: hero_home_default,
					alt: "Modern home with premium uPVC windows",
					width: 1920,
					height: 1280,
					fetchPriority: "high",
					loading: "eager",
					decoding: "async",
					className: "h-full w-full object-cover"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[#084A85]/[0.38] md:bg-[#084A85]/[0.30]" })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Container, {
				className: "relative py-20 md:py-32 lg:py-40",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-2xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.span, {
							initial: {
								opacity: 0,
								y: 12
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: { duration: .5 },
							className: "inline-flex items-center gap-2 rounded-full border border-white/35 bg-white/12 backdrop-blur px-4 py-1.5 text-xs font-medium text-white",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-1.5 rounded-full bg-white" }), "WINDOWS PLAZA"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h1, {
							initial: {
								opacity: 0,
								y: 20
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: {
								duration: .7,
								delay: .05
							},
							className: "mt-6 text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-[-0.02em] text-white leading-[1.02]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block",
									children: "WINDOWS PLAZA"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mt-3 block text-lg md:text-xl lg:text-2xl font-medium tracking-normal text-white/85",
									children: "A Brand of SP Builders and Traders"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "mt-4 block text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] tracking-[-0.02em]",
									children: [
										"Premium uPVC Windows & ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
											className: "not-italic text-white/90",
											children: "PVC Doors"
										}),
										" for Modern Homes"
									]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.p, {
							initial: {
								opacity: 0,
								y: 20
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: {
								duration: .7,
								delay: .15
							},
							className: "mt-6 text-lg md:text-xl text-white/85 max-w-xl leading-relaxed",
							children: [
								"Manufactured with precision.",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"Installed by experts.",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"Built to last."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: {
								opacity: 0,
								y: 20
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: {
								duration: .7,
								delay: .25
							},
							className: "mt-8 flex flex-wrap items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								size: "lg",
								children: ["Get Free Quote ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								size: "lg",
								variant: "whatsapp",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, {}), " WhatsApp Us"]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.ul, {
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
								delay: .3
							},
							className: "mt-5 flex flex-wrap items-center gap-2.5 text-sm text-white",
							children: [
								"Factory Direct Manufacturing",
								"Professional Installation",
								"10-Year Warranty"
							].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3.5 py-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-4 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item })]
							}, item))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.ul, {
							initial: {
								opacity: 0,
								y: 20
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: {
								duration: .7,
								delay: .35
							},
							className: "mt-12 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-xl",
							children: HERO_HIGHLIGHTS.map(({ icon: Icon, label }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-center gap-2 rounded-xl bg-white/15 backdrop-blur border border-white/30 px-3 py-2.5 text-sm font-medium text-white",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-4 text-white shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "truncate",
									children: label
								})]
							}, label))
						})
					]
				})
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			className: "bg-section",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Container, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6",
				children: STATS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatisticsCard, { ...s }, s.label))
			}) })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			eyebrow: "Why choose us",
			title: "Engineered by us. Installed by us. Owned by you.",
			description: "Six reasons homeowners, architects and developers choose WINDOWS PLAZA for their windows and doors."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-5 md:gap-6 sm:grid-cols-2 lg:grid-cols-3",
			children: WHY_US.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeatureCard, { ...f }, f.title))
		})] }) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			muted: true,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Product categories",
				title: "Systems built around how you live",
				description: "Three signature product families — each precision-engineered, endlessly configurable."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3",
				children: PRODUCTS.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, { ...p }, p.title))
			})] })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			eyebrow: "The uPVC difference",
			title: "Six benefits you feel every single day",
			description: "From your morning coffee to a stormy night — quieter, cleaner, cooler, calmer."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-5 md:gap-6 sm:grid-cols-2 lg:grid-cols-3",
			children: BENEFITS.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeatureCard, { ...b }, b.title))
		})] }) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			muted: true,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "How it works",
				title: "A five-step journey, zero surprises",
				description: "From your first call to a decade of after-sales — a clear, coordinated experience end to end."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative grid gap-6 md:grid-cols-3 lg:grid-cols-5",
				children: PROCESS.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
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
						delay: i * .08
					},
					className: "relative bg-card rounded-xl border border-border p-6 shadow-[var(--shadow-soft)] hover-lift",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between mb-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "inline-flex size-11 items-center justify-center rounded-xl bg-primary text-primary-foreground",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(p.icon, { className: "size-5" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-2xl font-semibold text-muted-foreground/40 tabular-nums",
								children: p.step
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-base font-semibold text-primary",
							children: p.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted-foreground leading-relaxed",
							children: p.description
						})
					]
				}, p.step))
			})] })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			eyebrow: "Featured projects",
			title: "A closer look at recent installations",
			description: "Villas, apartments, commercial spaces — each one measured, made and installed by our own teams."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "columns-1 sm:columns-2 lg:columns-3 gap-5 md:gap-6 [column-fill:_balance]",
			children: GALLERY.map((g, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-5 md:mb-6 break-inside-avoid",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GalleryCard, {
					image: g.image,
					title: g.title,
					tag: g.tag
				})
			}, i))
		})] }) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			muted: true,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Loved by homeowners",
				title: "Real installations. Real feedback.",
				description: "Thousands of families and hundreds of developers have made the switch to WINDOWS PLAZA."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-6 md:gap-8 lg:grid-cols-3",
				children: TESTIMONIALS.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TestimonialCard, { ...t }, t.name))
			})] })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Container, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-16 items-start",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:sticky lg:top-28",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					align: "left",
					eyebrow: "Answers",
					title: "Everything you wanted to ask",
					description: "Ten of the most common questions we hear before a project begins. Something else? Just ping us on WhatsApp.",
					className: "mb-8"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "whatsapp",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, {}), " Ask on WhatsApp"]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FAQAccordion, { items: FAQS })]
		}) }) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			className: "relative overflow-hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Container, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
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
					margin: "-80px"
				},
				transition: { duration: .6 },
				className: "relative overflow-hidden rounded-xl bg-primary text-primary-foreground p-10 md:p-16 lg:p-20 shadow-[var(--shadow-elevated)]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative max-w-2xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-semibold tracking-[0.25em] uppercase text-primary-foreground/85",
							children: "Ready when you are"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-4 text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight",
							children: "Let's design windows and doors your home will love for decades."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 text-base md:text-lg text-primary-foreground/80 leading-relaxed",
							children: "Get a free consultation and a transparent, itemised quote within 24 hours — no obligations, no pressure."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex flex-wrap gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								size: "lg",
								variant: "accent",
								children: ["Get Free Quote ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								size: "lg",
								variant: "whatsapp",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, {}), " WhatsApp Us"]
							})]
						})
					]
				})
			}) })
		})
	] });
}
//#endregion
export { Home as component };
