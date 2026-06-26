import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

// Animates a number from 0 to `value` when in view.
export default function AnimatedNumber({ value, suffix = "", duration = 1400 }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-60px" });
    const [display, setDisplay] = useState(0);

    useEffect(() => {
        if (!inView) return;
        let raf;
        const start = performance.now();
        const tick = (now) => {
            const t = Math.min(1, (now - start) / duration);
            // easeOutCubic
            const eased = 1 - Math.pow(1 - t, 3);
            setDisplay(Math.round(eased * value));
            if (t < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(raf);
    }, [inView, value, duration]);

    return (
        <span ref={ref}>
            {display}
            {suffix}
        </span>
    );
}
