import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  HeadContent,
  Link,
  Outlet,
  Scripts,
  createRootRouteWithContext,
  useRouter,
} from "@tanstack/react-router";
import { Suspense, lazy, type ReactNode } from "react";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { SITE_CONFIG } from "@/lib/siteConfig";
import appCss from "../styles.css?url";

const DEFAULT_TITLE = `${SITE_CONFIG.name} — ${SITE_CONFIG.headline}`;
const DEFAULT_DESCRIPTION = `${SITE_CONFIG.name} manufactures and installs premium uPVC windows, uPVC doors and PVC doors for modern homes and commercial spaces. ${SITE_CONFIG.tagline}.`;
const DEFAULT_OG_IMAGE = "/og-image.jpg";
const CANONICAL_URL = SITE_CONFIG.seo.canonicalOrigin || "/";

const FloatingActions = lazy(async () => ({
  default: (await import("@/components/common/FloatingActions")).FloatingActions,
}));
const Toaster = lazy(async () => ({
  default: (await import("@/components/ui/sonner")).Toaster,
}));

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: DEFAULT_TITLE },
      { name: "description", content: DEFAULT_DESCRIPTION },
      { name: "theme-color", content: "#0A5EA8" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "WINDOWS PLAZA" },
      { property: "og:title", content: DEFAULT_TITLE },
      { property: "og:description", content: DEFAULT_DESCRIPTION },
      { property: "og:url", content: CANONICAL_URL },
      { property: "og:image", content: DEFAULT_OG_IMAGE },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: DEFAULT_TITLE },
      { name: "twitter:description", content: DEFAULT_DESCRIPTION },
      { name: "twitter:image", content: DEFAULT_OG_IMAGE },
    ],
    links: [
      { rel: "canonical", href: CANONICAL_URL },
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
      { rel: "shortcut icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@300;400;500;600;700&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: SITE_CONFIG.name,
          description: `${SITE_CONFIG.tagline}. Manufacturer and installer of premium uPVC windows, uPVC doors and PVC doors for modern homes and commercial spaces.`,
          image: "/favicon.ico",
          telephone: SITE_CONFIG.phones.map((p) => p.display).join(", "),
          email: SITE_CONFIG.email,
          priceRange: "₹₹",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Rajula Tallavalasa, Near Thirumala College, Bheemunipatnam",
            addressLocality: "Visakhapatnam",
            addressRegion: "Andhra Pradesh",
            postalCode: "531162",
            addressCountry: "IN",
          },
          ...(SITE_CONFIG.seo.businessHours
            ? { openingHoursSpecification: SITE_CONFIG.seo.businessHours }
            : {
              // TODO: Add verified opening hours from owner.
              openingHours: "TODO",
            }),
          ...(SITE_CONFIG.seo.geo.latitude !== null && SITE_CONFIG.seo.geo.longitude !== null
            ? {
              geo: {
                "@type": "GeoCoordinates",
                latitude: SITE_CONFIG.seo.geo.latitude,
                longitude: SITE_CONFIG.seo.geo.longitude,
              },
            }
            : {
              // TODO: Add verified business geocoordinates.
              geo: "TODO",
            }),
          ...(SITE_CONFIG.seo.serviceRadiusKm !== null
            ? { areaServed: `${SITE_CONFIG.seo.serviceRadiusKm} km radius` }
            : {
              // TODO: Add verified service radius.
              areaServed: "TODO",
            }),
          sameAs: [],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: SITE_CONFIG.name,
          legalName: SITE_CONFIG.parentCompany,
          url: CANONICAL_URL,
          logo: "/favicon.svg",
          email: SITE_CONFIG.email,
          telephone: SITE_CONFIG.primaryPhone.display,
          address: {
            "@type": "PostalAddress",
            streetAddress: "Rajula Tallavalasa, Near Thirumala College, Bheemunipatnam",
            addressLocality: "Visakhapatnam",
            addressRegion: "Andhra Pradesh",
            postalCode: "531162",
            addressCountry: "IN",
          },
          sameAs: SITE_CONFIG.seo.googleReviewsUrl ? [SITE_CONFIG.seo.googleReviewsUrl] : [],
          // TODO: Add social profile URLs and Google Reviews URL when available.
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Windows Plaza Product Categories",
          itemListElement: [
            {
              "@type": "Product",
              name: "uPVC Windows",
              category: "Windows",
              brand: SITE_CONFIG.name,
            },
            {
              "@type": "Product",
              name: "uPVC Doors",
              category: "Doors",
              brand: SITE_CONFIG.name,
            },
            {
              "@type": "Product",
              name: "PVC Doors",
              category: "Interiors",
              brand: SITE_CONFIG.name,
            },
          ],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
      >
        Skip to main content
      </a>
      <Navbar />
      <main id="main" className="pt-14 md:pt-20 min-h-screen">
        <Outlet />
      </main>
      <Footer />
      <Suspense fallback={null}>
        <FloatingActions />
      </Suspense>
      <Suspense fallback={null}>
        <Toaster richColors closeButton position="top-center" />
      </Suspense>
    </QueryClientProvider>
  );
}
