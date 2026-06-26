// Subtle ambient starfield + soft gradient backdrop layered across the page.
// Pure decorative; pointer-events disabled. Dark-mode only.
export default function AmbientBackdrop() {
    return (
        <div
            aria-hidden
            className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
        >
            {/* Star field (dark only) */}
            <div
                className="absolute inset-0 hidden dark:block opacity-[0.55]"
                style={{
                    backgroundImage: `radial-gradient(1px 1px at 25% 15%, hsl(var(--foreground) / 0.8), transparent 50%),
                                       radial-gradient(1px 1px at 70% 32%, hsl(var(--foreground) / 0.6), transparent 50%),
                                       radial-gradient(1px 1px at 12% 65%, hsl(var(--foreground) / 0.55), transparent 50%),
                                       radial-gradient(1.5px 1.5px at 85% 70%, hsl(var(--brand) / 0.7), transparent 50%),
                                       radial-gradient(1px 1px at 45% 85%, hsl(var(--foreground) / 0.55), transparent 50%),
                                       radial-gradient(1px 1px at 60% 8%, hsl(var(--foreground) / 0.45), transparent 50%),
                                       radial-gradient(1.5px 1.5px at 32% 42%, hsl(var(--brand) / 0.5), transparent 50%),
                                       radial-gradient(1px 1px at 92% 18%, hsl(var(--foreground) / 0.5), transparent 50%),
                                       radial-gradient(1px 1px at 8% 92%, hsl(var(--foreground) / 0.4), transparent 50%)`,
                    backgroundSize: "100% 100%",
                }}
            />

            {/* Slow drifting blue blob top-left */}
            <div
                className="absolute -top-32 -left-32 w-[40rem] h-[40rem] rounded-full blur-3xl opacity-30 dark:opacity-40 animate-aurora"
                style={{
                    background:
                        "radial-gradient(closest-side, hsl(var(--brand) / 0.25), transparent 70%)",
                }}
            />
            {/* Bottom-right counter blob */}
            <div
                className="absolute -bottom-32 -right-32 w-[42rem] h-[42rem] rounded-full blur-3xl opacity-25 dark:opacity-30 animate-aurora"
                style={{
                    background:
                        "radial-gradient(closest-side, hsl(var(--foreground) / 0.15), transparent 70%)",
                    animationDelay: "-9s",
                }}
            />
        </div>
    );
}
