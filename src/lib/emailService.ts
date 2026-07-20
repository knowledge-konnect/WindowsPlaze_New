import emailjs from "@emailjs/browser";

export interface ContactEmailPayload {
    name: string;
    phone: string;
    email: string;
    city?: string;
    product?: string;
    message: string;
}

interface EmailJsConfig {
    serviceId: string;
    templateId: string;
    publicKey: string;
}

function getEmailJsConfig(): EmailJsConfig {
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || (typeof process !== "undefined" ? process.env?.VITE_EMAILJS_SERVICE_ID : undefined);
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || (typeof process !== "undefined" ? process.env?.VITE_EMAILJS_TEMPLATE_ID : undefined);
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || (typeof process !== "undefined" ? process.env?.VITE_EMAILJS_PUBLIC_KEY : undefined);

    if (!serviceId || !templateId || !publicKey) {
        const missing = [
            !serviceId && "VITE_EMAILJS_SERVICE_ID",
            !templateId && "VITE_EMAILJS_TEMPLATE_ID",
            !publicKey && "VITE_EMAILJS_PUBLIC_KEY",
        ].filter(Boolean).join(", ");
        throw new Error(`Email service is not configured. Missing environment variables: ${missing}. Note: If you recently added these to .env.local, please restart your Vite development server.`);
    }

    return { serviceId, templateId, publicKey };
}

export async function sendContactEmail(payload: ContactEmailPayload): Promise<void> {
    const { serviceId, templateId, publicKey } = getEmailJsConfig();

    await emailjs.send(
        serviceId,
        templateId,
        {
            name: payload.name,
            phone: payload.phone,
            email: payload.email,
            city: payload.city || "",
            product: payload.product || "",
            message: payload.message,
        },
        publicKey,
    );
}
