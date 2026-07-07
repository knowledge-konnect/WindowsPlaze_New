import { o as __toESM } from "../_runtime.mjs";
import { r as require_react } from "../_libs/@hookform/resolvers+[...].mjs";
import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { t as Slot } from "../_libs/radix-ui__react-slot.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Button-pr5z-nGg.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function Container({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("container-page", className),
		...props
	});
}
function Section({ className, muted, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: cn("section-y bg-background", muted && "bg-section", className),
		...props
	});
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl font-medium transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			primary: "bg-primary text-primary-foreground shadow-[var(--shadow-elevated)] hover:bg-primary-hover hover:shadow-[var(--shadow-hover)] hover:-translate-y-0.5 active:translate-y-0",
			secondary: "bg-background text-foreground border border-border shadow-[var(--shadow-soft)] hover:bg-section hover:border-primary/30 hover:-translate-y-0.5 active:translate-y-0",
			accent: "bg-primary text-primary-foreground shadow-[var(--shadow-elevated)] hover:bg-primary-hover hover:shadow-[var(--shadow-hover)] hover:-translate-y-0.5",
			whatsapp: "bg-[#25D366] text-white shadow-[var(--shadow-elevated)] hover:bg-[#25D366] hover:shadow-[var(--shadow-hover)] hover:-translate-y-0.5",
			outline: "border border-primary text-primary bg-transparent hover:bg-primary hover:text-primary-foreground hover:-translate-y-0.5",
			ghost: "text-foreground hover:bg-section hover:-translate-y-0.5",
			link: "text-primary underline-offset-4 hover:underline p-0 h-auto"
		},
		size: {
			sm: "h-9 px-4 text-sm",
			md: "h-11 px-6 text-sm",
			lg: "h-13 px-8 text-base",
			icon: "h-11 w-11"
		}
	},
	defaultVariants: {
		variant: "primary",
		size: "md"
	}
});
var Button = (0, import_react.forwardRef)(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size
		}), className),
		ref,
		...props
	});
});
Button.displayName = "Button";
//#endregion
export { cn as i, Container as n, Section as r, Button as t };
