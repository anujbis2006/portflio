import { useRef } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

/**
 * Wraps a card with a mouse-tracking radial spotlight glow.
 * Renders a <Tag> with cursor-glow overlays inside.
 * The wrapper handles overflow + relative positioning;
 * pass in your own border, background, padding via className.
 */
export default function SpotlightCard({
    as: Tag = "div",
    glowColor = "brand",
    radius = 420,
    className = "",
    children,
    ...rest
}) {
    const ref = useRef(null);
    const mx = useMotionValue(-9999);
    const my = useMotionValue(-9999);

    const onMove = (e) => {
        const r = ref.current?.getBoundingClientRect();
        if (!r) return;
        mx.set(e.clientX - r.left);
        my.set(e.clientY - r.top);
    };
    const onLeave = () => {
        mx.set(-9999);
        my.set(-9999);
    };

    const innerColor =
        glowColor === "brand"
            ? "hsl(var(--brand) / 0.18)"
            : "hsl(var(--foreground) / 0.12)";

    const innerGlow = useMotionTemplate`radial-gradient(${radius}px circle at ${mx}px ${my}px, ${innerColor}, transparent 60%)`;

    return (
        <Tag
            ref={ref}
            onMouseMove={onMove}
            onMouseLeave={onLeave}
            className={`group/spot relative overflow-hidden ${className}`}
            {...rest}
        >
            <motion.div
                aria-hidden
                style={{ background: innerGlow }}
                className="pointer-events-none absolute inset-0 opacity-0 group-hover/spot:opacity-100 transition-opacity duration-300 rounded-[inherit]"
            />
            <div className="relative">{children}</div>
        </Tag>
    );
}
