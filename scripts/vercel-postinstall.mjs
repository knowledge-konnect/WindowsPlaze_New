import { execSync } from "node:child_process";

// Defensive fallback: if Vercel is misconfigured to deploy prebuilt output
// without running the build step, generate Build Output API artifacts here.
const isVercel = process.env.VERCEL === "1";

if (isVercel) {
    console.log("[postinstall] Vercel environment detected, ensuring .vercel/output exists...");
    execSync("npm run build", { stdio: "inherit" });
} else {
    console.log("[postinstall] Non-Vercel environment, skipping fallback build.");
}
