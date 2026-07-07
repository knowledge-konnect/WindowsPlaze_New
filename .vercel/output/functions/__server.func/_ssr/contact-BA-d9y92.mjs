import { o as __toESM } from "../_runtime.mjs";
import { n as useForm, r as require_react, t as a } from "../_libs/@hookform/resolvers+[...].mjs";
import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { s as motion } from "../_libs/framer-motion.mjs";
import { C as LoaderCircle, F as Clock, L as CircleCheck, S as Mail, _ as Phone, k as Factory, m as Send, x as MapPin, y as MessageCircle } from "../_libs/lucide-react.mjs";
import { n as Container, r as Section, t as Button } from "./Button-pr5z-nGg.mjs";
import { t as SectionHeading } from "./SectionHeading-tv2hhjRs.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { n as stringType, t as objectType } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-BA-d9y92.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var PRODUCTS = [
	"uPVC Windows",
	"uPVC Doors",
	"PVC Bathroom Doors",
	"PVC Bedroom Doors",
	"Not sure yet"
];
var WHATSAPP_NUMBER = "918341166268";
var contactSchema = objectType({
	name: stringType().trim().min(2, "Please enter your name").max(100),
	phone: stringType().trim().min(7, "Please enter a valid phone number").max(20, "Phone number too long").regex(/^[+\d\s\-()]+$/, "Only digits, spaces and + - ( ) allowed"),
	email: stringType().trim().email("Please enter a valid email").max(255),
	city: stringType().trim().min(2, "Please enter your city").max(80),
	product: stringType().min(1, "Please choose a product"),
	message: stringType().trim().min(5, "Please add a short message").max(1e3)
});
function ContactPage() {
	const [submitted, setSubmitted] = (0, import_react.useState)(null);
	const { register, handleSubmit, formState: { errors, isSubmitting }, getValues, reset } = useForm({
		resolver: a(contactSchema),
		mode: "onBlur",
		defaultValues: {
			name: "",
			phone: "",
			email: "",
			city: "",
			product: "",
			message: ""
		}
	});
	const onSubmit = async (values) => {
		try {
			const existingRaw = window.localStorage.getItem("wp_quote_enquiries");
			const parsed = existingRaw ? JSON.parse(existingRaw) : [];
			const existing = Array.isArray(parsed) ? parsed : [];
			const entry = {
				...values,
				submittedAt: (/* @__PURE__ */ new Date()).toISOString()
			};
			window.localStorage.setItem("wp_quote_enquiries", JSON.stringify([entry, ...existing]));
			setSubmitted(values);
			reset();
			toast.success("Quote form saved", { description: "Basic frontend form is active. Entries are saved on this device until backend is connected." });
		} catch (err) {
			console.error(err);
			toast.error("Couldn't save form", { description: "Please try again or use WhatsApp." });
		}
	};
	const openWhatsApp = () => {
		const v = getValues();
		const lines = [
			"Hi! I'd like to enquire about your products.",
			v.name && `Name: ${v.name}`,
			v.phone && `Phone: ${v.phone}`,
			v.city && `City: ${v.city}`,
			v.product && `Interested in: ${v.product}`,
			v.message && `Details: ${v.message}`
		].filter(Boolean);
		const text = encodeURIComponent(lines.join("\n"));
		window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank", "noopener");
	};
	const inputCls = "h-11 w-full rounded-xl border border-border bg-background px-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "relative -mt-14 md:-mt-20 pt-24 md:pt-40 pb-12 md:pb-16 bg-section",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground max-w-3xl leading-[1.1]",
					children: "Contact Windows Plaza"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-xs font-semibold tracking-[0.2em] uppercase text-accent",
					children: "A Brand of SP Builders and Traders"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 sm:mt-6 max-w-xl text-base sm:text-lg text-muted-foreground leading-relaxed",
					children: "Tell us a little about your project — our team will get back to you with a free quote, usually within 24 hours."
				})
			] })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Container, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-8 lg:grid-cols-[1.3fr_1fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
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
				className: "bg-card rounded-xl border border-border p-6 md:p-10 shadow-[var(--shadow-soft)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					align: "left",
					eyebrow: "Inquiry form",
					title: "Get a free quote",
					description: "Fill this out and we'll be in touch shortly.",
					className: "mb-8"
				}), submitted ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-xl border border-primary/30 bg-primary/5 p-8 text-center",
					role: "status",
					"aria-live": "polite",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "inline-flex size-14 items-center justify-center rounded-full bg-primary text-primary-foreground mb-4",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-7" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
							className: "text-xl font-semibold text-foreground",
							children: [
								"Thanks, ",
								submitted.name.split(" ")[0],
								"!"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-muted-foreground",
							children: "Your details are saved locally. Backend submission will be connected next."
						})
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: handleSubmit(onSubmit),
					className: "grid gap-5 sm:grid-cols-2",
					noValidate: true,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Full name",
							error: errors.name?.message,
							htmlFor: "c-name",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								id: "c-name",
								className: inputCls,
								placeholder: "Your name",
								maxLength: 100,
								autoComplete: "name",
								"aria-invalid": !!errors.name,
								...register("name")
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Phone",
							error: errors.phone?.message,
							htmlFor: "c-phone",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								id: "c-phone",
								className: inputCls,
								placeholder: "+91 8341166268",
								inputMode: "tel",
								autoComplete: "tel",
								maxLength: 20,
								"aria-invalid": !!errors.phone,
								...register("phone")
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Email",
							error: errors.email?.message,
							htmlFor: "c-email",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								id: "c-email",
								className: inputCls,
								type: "email",
								placeholder: "you@example.com",
								autoComplete: "email",
								maxLength: 255,
								"aria-invalid": !!errors.email,
								...register("email")
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "City",
							error: errors.city?.message,
							htmlFor: "c-city",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								id: "c-city",
								className: inputCls,
								placeholder: "e.g. Bengaluru",
								autoComplete: "address-level2",
								maxLength: 80,
								"aria-invalid": !!errors.city,
								...register("city")
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Interested product",
							error: errors.product?.message,
							className: "sm:col-span-2",
							htmlFor: "c-product",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								id: "c-product",
								className: inputCls,
								"aria-invalid": !!errors.product,
								...register("product"),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "",
									children: "Select a product"
								}), PRODUCTS.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: p,
									children: p
								}, p))]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Message",
							error: errors.message?.message,
							className: "sm:col-span-2",
							htmlFor: "c-message",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								id: "c-message",
								className: "h-11 w-full rounded-xl border border-border bg-background px-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors h-32 py-3 resize-none",
								placeholder: "Tell us about your project, approximate number of openings, timeline...",
								maxLength: 1e3,
								"aria-invalid": !!errors.message,
								...register("message")
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "sm:col-span-2 flex flex-wrap items-center gap-3 pt-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								type: "submit",
								size: "lg",
								disabled: isSubmitting,
								children: isSubmitting ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "animate-spin" }), " Sending..."] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Send enquiry ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, {})] })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								type: "button",
								size: "lg",
								variant: "whatsapp",
								onClick: openWhatsApp,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, {}), " WhatsApp instead"]
							})]
						})
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-card rounded-xl border border-border p-6 md:p-8 shadow-[var(--shadow-soft)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-lg font-semibold text-foreground mb-6",
						children: "Business details"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "space-y-5",
						children: [
							{
								icon: Phone,
								label: "Phone 1",
								value: "+91 9876543210",
								href: "tel:+919876543210"
							},
							{
								icon: Phone,
								label: "Phone 2",
								value: "+91 8765432109",
								href: "tel:+918765432109"
							},
							{
								icon: Phone,
								label: "Phone 3",
								value: "+91 8341166268",
								href: "tel:+918341166268"
							},
							{
								icon: MessageCircle,
								label: "WhatsApp",
								value: "+91 8341166268",
								href: "https://wa.me/918341166268"
							},
							{
								icon: Mail,
								label: "Email",
								value: "hello@windowsplaza.in",
								href: "mailto:hello@windowsplaza.in"
							},
							{
								icon: Factory,
								label: "Factory address",
								value: "Rajula Tallavalasa, Tallavalasa, Near Thirumala College, Bheemunipatnam, Visakhapatnam, Andhra Pradesh – 531162"
							}
						].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-start gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "inline-flex size-9 items-center justify-center rounded-lg bg-primary/10 text-primary shrink-0",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.icon, { className: "size-4" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-semibold uppercase tracking-widest text-muted-foreground",
								children: item.label
							}), item.href ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: item.href,
								className: "text-sm font-medium text-foreground hover:text-primary transition-colors",
								children: item.value
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-medium text-foreground",
								children: item.value
							})] })]
						}, item.label))
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-card rounded-xl border border-border p-6 md:p-8 shadow-[var(--shadow-soft)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3 mb-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "inline-flex size-9 items-center justify-center rounded-lg bg-primary/10 text-primary",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "size-4" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-lg font-semibold text-foreground",
							children: "Business hours"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "space-y-2.5 text-sm",
						children: [
							["Monday – Friday", "9:00 AM – 7:00 PM"],
							["Saturday", "10:00 AM – 5:00 PM"],
							["Sunday", "By appointment"]
						].map(([d, t]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-center justify-between border-b border-border last:border-0 pb-2 last:pb-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-muted-foreground",
								children: d
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-medium text-foreground",
								children: t
							})]
						}, d))
					})]
				})]
			})]
		}) }) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			muted: true,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Come visit",
				title: "Our manufacturing facility",
				description: "Walk our factory floor, see how your windows are made, and meet the team behind them."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative rounded-xl overflow-hidden border border-border shadow-[var(--shadow-soft)] aspect-video bg-section",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-0 grid place-items-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "inline-flex size-14 items-center justify-center rounded-full bg-primary text-primary-foreground mb-4",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-6" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-lg font-semibold text-foreground",
								children: "SP Builders and Traders"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-1 text-sm text-muted-foreground max-w-md mx-auto",
								children: [
									"Rajula Tallavalasa, Tallavalasa,",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									"Near Thirumala College,",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									"Bheemunipatnam,",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									"Visakhapatnam,",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									"Andhra Pradesh – 531162"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "https://maps.google.com/?q=Rajula+Tallavalasa+Near+Thirumala+College+Bheemunipatnam+Visakhapatnam+Andhra+Pradesh+531162",
								target: "_blank",
								rel: "noreferrer",
								className: "mt-5 inline-flex",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									variant: "secondary",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {}), " Open in Google Maps"]
								})
							})
						]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-0 opacity-[0.08] pointer-events-none",
					style: {
						backgroundImage: "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
						backgroundSize: "40px 40px"
					}
				})]
			})] })
		})
	] });
}
function Field({ label, error, children, className = "", htmlFor }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "block " + className,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
				htmlFor,
				className: "mb-2 block text-sm font-medium text-foreground",
				children: label
			}),
			children,
			error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1.5 block text-xs text-destructive",
				role: "alert",
				children: error
			})
		]
	});
}
//#endregion
export { ContactPage as component };
