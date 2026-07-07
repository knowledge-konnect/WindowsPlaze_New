import { cn } from "@/lib/utils";

export function BrandMark({ className }: { className?: string }) {
    return (
        <span
            aria-hidden="true"
            className={cn(
                "inline-flex items-center justify-center rounded-xl bg-[#0A4F8F] shadow-md",
                className
            )}
        >
            <svg
                viewBox="0 0 64 64"
                className="size-full"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                {/* Window Frame */}
                <rect
                    x="14"
                    y="12"
                    width="36"
                    height="40"
                    rx="2"
                    stroke="white"
                    strokeWidth="3"
                />

                {/* Vertical Divider */}
                <line
                    x1="32"
                    y1="12"
                    x2="32"
                    y2="52"
                    stroke="white"
                    strokeWidth="3"
                />

                {/* Horizontal Divider */}
                <line
                    x1="14"
                    y1="32"
                    x2="50"
                    y2="32"
                    stroke="white"
                    strokeWidth="3"
                />

                {/* Open Window Panel */}
                <path
                    d="M32 16 L46 20 L46 44 L32 48 Z"
                    fill="#D8ECFF"
                    stroke="white"
                    strokeWidth="2"
                />

                {/* Handle */}
                <circle
                    cx="42"
                    cy="32"
                    r="1.6"
                    fill="#0A4F8F"
                />
            </svg>
        </span>
    );
}
