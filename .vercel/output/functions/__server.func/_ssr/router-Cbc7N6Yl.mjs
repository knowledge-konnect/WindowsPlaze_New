import { o as __toESM } from "../_runtime.mjs";
import { r as require_react } from "../_libs/@hookform/resolvers+[...].mjs";
import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { c as AnimatePresence, s as motion } from "../_libs/framer-motion.mjs";
import { S as Mail, _ as Phone, b as Menu, n as X, x as MapPin } from "../_libs/lucide-react.mjs";
import { i as cn, n as Container, t as Button } from "./Button-pr5z-nGg.mjs";
import { c as HeadContent, d as Outlet, f as lazyRouteComponent, g as useRouter, h as Link, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as stringType, t as objectType } from "../_libs/zod.mjs";
import { t as FAQS } from "./faq-D2P9Ap9H.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { t as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-Cbc7N6Yl.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function BrandMark({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		"aria-hidden": "true",
		className: cn("inline-flex items-center justify-center rounded-xl bg-[#0A4F8F] shadow-md", className),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: "0 0 64 64",
			className: "size-full",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "14",
					y: "12",
					width: "36",
					height: "40",
					rx: "2",
					stroke: "white",
					strokeWidth: "3"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
					x1: "32",
					y1: "12",
					x2: "32",
					y2: "52",
					stroke: "white",
					strokeWidth: "3"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
					x1: "14",
					y1: "32",
					x2: "50",
					y2: "32",
					stroke: "white",
					strokeWidth: "3"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M32 16 L46 20 L46 44 L32 48 Z",
					fill: "#D8ECFF",
					stroke: "white",
					strokeWidth: "2"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "42",
					cy: "32",
					r: "1.6",
					fill: "#0A4F8F"
				})
			]
		})
	});
}
var COL_LINKS = [
	{
		title: "Products",
		links: [
			{
				label: "uPVC Windows",
				href: "/products#upvc-windows"
			},
			{
				label: "uPVC Doors",
				href: "/products#upvc-doors"
			},
			{
				label: "PVC Doors",
				href: "/products#pvc-doors"
			},
			{
				label: "Custom Solutions",
				href: "/contact"
			}
		]
	},
	{
		title: "Company",
		links: [
			{
				label: "About",
				href: "/about"
			},
			{
				label: "Gallery",
				href: "/projects"
			},
			{
				label: "Testimonials",
				href: "/projects"
			},
			{
				label: "Contact",
				href: "/contact"
			}
		]
	},
	{
		title: "Resources",
		links: [
			{
				label: "Brochure",
				href: "/contact"
			},
			{
				label: "FAQs",
				href: "/faq"
			},
			{
				label: "Warranty",
				href: "/faq"
			},
			{
				label: "Installation",
				href: "/faq"
			}
		]
	}
];
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "bg-[#111827] border-t border-white/10 text-white",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
			className: "py-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-10 lg:grid-cols-[1.4fr_repeat(3,1fr)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/",
						className: "block",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandMark, { className: "size-9 md:size-11" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block text-sm font-semibold tracking-[0.18em] uppercase text-white",
									children: "WINDOWS PLAZA"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-1 block text-sm text-white/80",
								children: "Premium uPVC Windows & Doors"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-1 block text-xs text-white/70 uppercase tracking-[0.08em]",
								children: "SP Builders and Traders"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-sm text-white/80 leading-relaxed max-w-sm",
						children: "Precision-engineered uPVC and PVC windows and doors — built for silence, safety and lasting beauty."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-6 space-y-3 text-sm text-white/82",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-center gap-2.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-4 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "tel:+919876543210",
									className: "hover:text-white transition-colors",
									children: "+91 9876543210"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-center gap-2.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-4 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "tel:+918765432109",
									className: "hover:text-white transition-colors",
									children: "+91 8765432109"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-center gap-2.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-4 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "tel:+918341166268",
									className: "hover:text-white transition-colors",
									children: "+91 8341166268"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-center gap-2.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "size-4 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "mailto:hello@windowsplaza.in",
									className: "hover:text-white transition-colors",
									children: "hello@windowsplaza.in"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-start gap-2.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-4 text-primary mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "https://maps.google.com/?q=Rajula+Tallavalasa+Tallavalasa+Near+Thirumala+College+Bheemunipatnam+Visakhapatnam+Andhra+Pradesh+531162",
									target: "_blank",
									rel: "noreferrer",
									className: "hover:text-white transition-colors",
									children: "Rajula Tallavalasa, Tallavalasa, Near Thirumala College, Bheemunipatnam, Visakhapatnam, Andhra Pradesh - 531162"
								})]
							})
						]
					})
				] }), COL_LINKS.map((col) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					className: "text-sm font-semibold text-white mb-4 tracking-wide",
					children: col.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "space-y-2.5",
					children: col.links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: l.href,
						className: "text-sm text-white/80 hover:text-white transition-colors",
						children: l.label
					}) }, l.label))
				})] }, col.title))]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-xs text-white/75",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "© 2026 Windows Plaza." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "A Brand of SP Builders and Traders." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "All Rights Reserved." })
					]
				})
			})]
		})
	});
}
var NAV_LINKS = [
	{
		to: "/",
		label: "Home"
	},
	{
		to: "/about",
		label: "About"
	},
	{
		to: "/products",
		label: "Products"
	},
	{
		to: "/projects",
		label: "Projects"
	},
	{
		to: "/faq",
		label: "FAQ"
	},
	{
		to: "/contact",
		label: "Contact"
	}
];
function Navbar() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 16);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: cn("fixed top-0 inset-x-0 z-50 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]", "bg-[#084A85]/95 backdrop-blur-sm border-b border-white/12 shadow-[var(--shadow-soft)]"),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
				className: cn("flex h-14 items-center justify-between gap-3 transition-[height] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] md:gap-4", scrolled ? "md:h-[68px]" : "md:h-20"),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/",
						className: "shrink-0 inline-flex items-center gap-2 md:gap-2.5",
						"aria-label": "Windows Plaza home",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandMark, { className: "size-9 md:size-11" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block text-[0.72rem] md:text-sm font-semibold tracking-[0.14em] md:tracking-[0.18em] uppercase text-white",
							children: "WINDOWS PLAZA"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "hidden sm:block text-[0.65rem] font-medium text-white/80 leading-tight",
							children: "Premium uPVC Windows & Doors"
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "hidden md:flex items-center gap-1",
						children: NAV_LINKS.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: link.to,
							activeOptions: { exact: true },
							className: "px-4 py-2 text-sm font-medium text-white/75 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#084A85]",
							activeProps: { className: "px-4 py-2 text-sm font-semibold !text-primary bg-white rounded-lg border border-white shadow-[var(--shadow-soft)]" },
							children: link.label
						}, link.to))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "hidden md:flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "tel:+918341166268",
							className: "inline-flex items-center gap-1.5 rounded-lg border border-white/30 bg-white/10 px-3.5 py-2 text-sm font-medium text-white shadow-[var(--shadow-soft)] hover:border-white/55 hover:bg-white/16 transition-colors",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-4" }), " Call Now"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "sm",
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/contact",
								children: "Get a Quote"
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						"aria-label": "Toggle menu",
						onClick: () => setOpen((s) => !s),
						className: "md:hidden inline-flex size-9 items-center justify-center rounded-lg border border-white/25 bg-white/10 text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#084A85]",
						children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" })
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": "true",
				className: "pointer-events-none absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-white/0 via-white/45 to-white/0"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				initial: {
					opacity: 0,
					height: 0
				},
				animate: {
					opacity: 1,
					height: "auto"
				},
				exit: {
					opacity: 0,
					height: 0
				},
				transition: { duration: .25 },
				className: "md:hidden overflow-hidden bg-[#084A85]/96 border-t border-white/12",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
					className: "py-4 flex flex-col gap-1",
					children: [
						NAV_LINKS.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: link.to,
							activeOptions: { exact: true },
							onClick: () => setOpen(false),
							className: "px-3 py-3 rounded-lg text-white/90 font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#084A85]",
							activeProps: { className: "px-3 py-3 rounded-lg font-semibold !text-primary bg-white border border-white" },
							children: link.label
						}, link.to)),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							className: "mt-3 w-full",
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/contact",
								onClick: () => setOpen(false),
								children: "Get a Quote"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "tel:+918341166268",
							className: "inline-flex w-full items-center justify-center gap-1.5 rounded-lg border border-white/50 bg-transparent px-3.5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/10",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-4" }), " Call Now"]
						})
					]
				})
			}) })
		]
	});
}
var styles_default = "/assets/styles-BeRbT4a4.css";
var DEFAULT_TITLE = "WINDOWS PLAZA - Premium uPVC Windows, uPVC Doors & PVC Doors";
var DEFAULT_DESCRIPTION = "WINDOWS PLAZA manufactures and installs premium uPVC windows, uPVC doors and PVC doors for modern homes and commercial spaces.";
var DEFAULT_OG_IMAGE = "/og-image.jpg";
var FloatingActions = (0, import_react.lazy)(async () => ({ default: (await import("./FloatingActions-BotpVHoc.mjs")).FloatingActions }));
var Toaster = (0, import_react.lazy)(async () => ({ default: (await import("./sonner-CuWp3DKI.mjs")).Toaster }));
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$7 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: DEFAULT_TITLE },
			{
				name: "description",
				content: DEFAULT_DESCRIPTION
			},
			{
				name: "theme-color",
				content: "#0A5EA8"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:site_name",
				content: "WINDOWS PLAZA"
			},
			{
				property: "og:title",
				content: DEFAULT_TITLE
			},
			{
				property: "og:description",
				content: DEFAULT_DESCRIPTION
			},
			{
				property: "og:url",
				content: "/"
			},
			{
				property: "og:image",
				content: DEFAULT_OG_IMAGE
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:title",
				content: DEFAULT_TITLE
			},
			{
				name: "twitter:description",
				content: DEFAULT_DESCRIPTION
			},
			{
				name: "twitter:image",
				content: DEFAULT_OG_IMAGE
			}
		],
		links: [
			{
				rel: "canonical",
				href: "/"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				href: "/favicon.svg",
				type: "image/svg+xml"
			},
			{
				rel: "shortcut icon",
				href: "/favicon.ico",
				type: "image/x-icon"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@300;400;500;600;700&display=swap"
			}
		],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "LocalBusiness",
				name: "WINDOWS PLAZA",
				description: "Manufacturer and installer of premium uPVC windows, uPVC doors and PVC doors for modern homes and commercial spaces.",
				image: "/favicon.ico",
				telephone: "+91-8341166268",
				email: "hello@windowsplaza.in",
				priceRange: "₹₹",
				address: {
					"@type": "PostalAddress",
					streetAddress: "Rajula Tallavalasa, Tallavalasa, Near Thirumala College, Bheemunipatnam",
					addressLocality: "Visakhapatnam",
					postalCode: "531162",
					addressCountry: "IN"
				},
				openingHoursSpecification: [{
					"@type": "OpeningHoursSpecification",
					dayOfWeek: [
						"Monday",
						"Tuesday",
						"Wednesday",
						"Thursday",
						"Friday"
					],
					opens: "09:00",
					closes: "19:00"
				}, {
					"@type": "OpeningHoursSpecification",
					dayOfWeek: "Saturday",
					opens: "10:00",
					closes: "17:00"
				}],
				sameAs: []
			})
		}]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$7.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(QueryClientProvider, {
		client: queryClient,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#main",
				className: "sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
				children: "Skip to main content"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				id: "main",
				className: "pt-14 md:pt-20 min-h-screen",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Suspense, {
				fallback: null,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingActions, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Suspense, {
				fallback: null,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
					richColors: true,
					closeButton: true,
					position: "top-center"
				})
			})
		]
	});
}
function normalizeBaseUrl(raw) {
	return (raw.startsWith("http://") || raw.startsWith("https://") ? raw : `https://${raw}`).replace(/\/$/, "");
}
var ENTRIES = [
	{
		path: "/",
		changefreq: "weekly",
		priority: "1.0"
	},
	{
		path: "/about",
		changefreq: "monthly",
		priority: "0.8"
	},
	{
		path: "/products",
		changefreq: "monthly",
		priority: "0.9"
	},
	{
		path: "/projects",
		changefreq: "monthly",
		priority: "0.7"
	},
	{
		path: "/faq",
		changefreq: "monthly",
		priority: "0.6"
	},
	{
		path: "/contact",
		changefreq: "yearly",
		priority: "0.8"
	}
];
var Route$6 = createFileRoute("/sitemap.xml")({ server: { handlers: { GET: async ({ request }) => {
	const configured = process.env.SITE_URL;
	const baseUrl = configured ? normalizeBaseUrl(configured) : new URL(request.url).origin.replace(/\/$/, "");
	const xml = [
		`<?xml version="1.0" encoding="UTF-8"?>`,
		`<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
		...ENTRIES.map((e) => [
			`  <url>`,
			`    <loc>${baseUrl}${e.path}</loc>`,
			e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
			e.priority ? `    <priority>${e.priority}</priority>` : null,
			`  </url>`
		].filter(Boolean).join("\n")),
		`</urlset>`
	].join("\n");
	return new Response(xml, { headers: {
		"Content-Type": "application/xml",
		"Cache-Control": "public, max-age=3600"
	} });
} } } });
var $$splitComponentImporter$5 = () => import("./projects-CpHxdjxt.mjs");
var Route$5 = createFileRoute("/projects")({
	head: () => ({
		meta: [
			{ title: "Projects & Gallery — Recent Installations | WINDOWS PLAZA" },
			{
				name: "description",
				content: "Explore a curated gallery of WINDOWS PLAZA recent uPVC and PVC window and door installations — villas, apartments, and commercial spaces."
			},
			{
				property: "og:title",
				content: "Projects — WINDOWS PLAZA"
			},
			{
				property: "og:description",
				content: "A showcase of homes and buildings transformed by our windows and doors."
			},
			{
				property: "og:url",
				content: "/projects"
			}
		],
		links: [{
			rel: "canonical",
			href: "/projects"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./products-CUI9g22C.mjs");
var Route$4 = createFileRoute("/products")({
	head: () => ({
		meta: [
			{ title: "Products — uPVC Windows, uPVC Doors & PVC Doors | WINDOWS PLAZA" },
			{
				name: "description",
				content: "Explore WINDOWS PLAZA's complete range of uPVC windows (sliding, casement, fixed, tilt & turn), uPVC doors and PVC bathroom and designer doors."
			},
			{
				property: "og:title",
				content: "Our Products — WINDOWS PLAZA"
			},
			{
				property: "og:description",
				content: "Sliding, casement, French, tilt-and-turn and more — engineered for silence, security and lifelong performance."
			},
			{
				property: "og:url",
				content: "/products"
			}
		],
		links: [{
			rel: "canonical",
			href: "/products"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./faq-BQRrb41A.mjs");
var Route$3 = createFileRoute("/faq")({
	head: () => ({
		meta: [
			{ title: "Frequently Asked Questions | WINDOWS PLAZA" },
			{
				name: "description",
				content: "Everything you wanted to know about WINDOWS PLAZA uPVC windows, uPVC doors and PVC doors — lifespan, noise reduction, warranty, installation and more."
			},
			{
				property: "og:title",
				content: "FAQ — WINDOWS PLAZA"
			},
			{
				property: "og:description",
				content: "15 quick answers about Windows Plaza uPVC and PVC systems."
			},
			{
				property: "og:url",
				content: "/faq"
			}
		],
		links: [{
			rel: "canonical",
			href: "/faq"
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "FAQPage",
				mainEntity: FAQS.map((f) => ({
					"@type": "Question",
					name: f.question,
					acceptedAnswer: {
						"@type": "Answer",
						text: f.answer
					}
				}))
			})
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./contact-BA-d9y92.mjs");
var Route$2 = createFileRoute("/contact")({
	head: () => ({
		meta: [
			{ title: "Contact Windows Plaza — Get a Free Quote" },
			{
				name: "description",
				content: "Contact WINDOWS PLAZA for premium uPVC windows, uPVC doors and PVC doors. Book a free site visit, call, WhatsApp, or visit our manufacturing facility."
			},
			{
				property: "og:title",
				content: "Contact Windows Plaza"
			},
			{
				property: "og:description",
				content: "A Brand of SP Builders and Traders. Free quote in 24 hours by call, WhatsApp, or site visit."
			},
			{
				property: "og:url",
				content: "/contact"
			}
		],
		links: [{
			rel: "canonical",
			href: "/contact"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
objectType({
	name: stringType().trim().min(2, "Please enter your name").max(100),
	phone: stringType().trim().min(7, "Please enter a valid phone number").max(20, "Phone number too long").regex(/^[+\d\s\-()]+$/, "Only digits, spaces and + - ( ) allowed"),
	email: stringType().trim().email("Please enter a valid email").max(255),
	city: stringType().trim().min(2, "Please enter your city").max(80),
	product: stringType().min(1, "Please choose a product"),
	message: stringType().trim().min(5, "Please add a short message").max(1e3)
});
var $$splitComponentImporter$1 = () => import("./about-BSg8wQVS.mjs");
var Route$1 = createFileRoute("/about")({
	head: () => ({
		meta: [
			{ title: "About WINDOWS PLAZA — A Brand of SP Builders and Traders" },
			{
				name: "description",
				content: "Learn how WINDOWS PLAZA, the dedicated uPVC windows and doors brand of SP Builders and Traders, manufactures and installs premium uPVC windows, uPVC doors and PVC doors."
			},
			{
				property: "og:title",
				content: "About WINDOWS PLAZA — Premium uPVC Windows and Doors"
			},
			{
				property: "og:description",
				content: "WINDOWS PLAZA is the customer-facing brand backed by SP Builders and Traders, focused on premium uPVC and PVC door and window solutions."
			},
			{
				property: "og:url",
				content: "/about"
			}
		],
		links: [{
			rel: "canonical",
			href: "/about"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./routes-CytdHfrf.mjs");
var Route = createFileRoute("/")({
	head: () => ({
		meta: [
			{ title: "WINDOWS PLAZA — Premium uPVC Windows, uPVC Doors & PVC Doors" },
			{
				name: "description",
				content: "WINDOWS PLAZA offers premium uPVC windows, uPVC doors and PVC doors for modern homes. Manufactured with precision, installed by experts, and built to last."
			},
			{
				property: "og:title",
				content: "WINDOWS PLAZA — Premium uPVC Windows & PVC Doors"
			},
			{
				property: "og:description",
				content: "Premium uPVC windows, uPVC doors and PVC doors for modern homes."
			},
			{
				property: "og:url",
				content: "/"
			}
		],
		links: [{
			rel: "canonical",
			href: "/"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var SitemapDotxmlRoute = Route$6.update({
	id: "/sitemap.xml",
	path: "/sitemap.xml",
	getParentRoute: () => Route$7
});
var ProjectsRoute = Route$5.update({
	id: "/projects",
	path: "/projects",
	getParentRoute: () => Route$7
});
var ProductsRoute = Route$4.update({
	id: "/products",
	path: "/products",
	getParentRoute: () => Route$7
});
var FaqRoute = Route$3.update({
	id: "/faq",
	path: "/faq",
	getParentRoute: () => Route$7
});
var ContactRoute = Route$2.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$7
});
var AboutRoute = Route$1.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$7
});
var rootRouteChildren = {
	IndexRoute: Route.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$7
	}),
	AboutRoute,
	ContactRoute,
	FaqRoute,
	ProductsRoute,
	ProjectsRoute,
	SitemapDotxmlRoute
};
var routeTree = Route$7._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
