import { motion } from "framer-motion";

// Infinite seamless marquee using duplicated content.
export default function Marquee({ items, speed = 40, className = "" }) {
    const row = (
        <ul className="flex items-center gap-12 pr-12 shrink-0">
            {items.map((it, i) => (
                <li
                    key={`${it}-${i}`}
                    className="font-mono text-xs sm:text-sm uppercase tracking-[0.25em] text-muted-foreground whitespace-nowrap flex items-center gap-12"
                >
                    {it}
                    <span aria-hidden className="text-foreground/30">
                        ◆
                    </span>
                </li>
            ))}
        </ul>
    );

    return (
        <div
            className={`relative overflow-hidden border-y border-border bg-secondary/30 ${className}`}
            aria-hidden
        >
            <div
                className="absolute inset-y-0 left-0 w-24 z-10 pointer-events-none"
                style={{
                    background:
                        "linear-gradient(to right, hsl(var(--background)), transparent)",
                }}
            />
            <div
                className="absolute inset-y-0 right-0 w-24 z-10 pointer-events-none"
                style={{
                    background:
                        "linear-gradient(to left, hsl(var(--background)), transparent)",
                }}
            />
            <motion.div
                className="flex py-5"
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                    duration: speed,
                    repeat: Infinity,
                    ease: "linear",
                }}
            >
                {row}
                {row}
            </motion.div>
        </div>
    );
}
