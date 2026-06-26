import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Cycles through a list of words/phrases with a smooth swap.
export default function RotatingText({ words, interval = 2200, className = "" }) {
    const [i, setI] = useState(0);
    useEffect(() => {
        const t = setInterval(() => setI((v) => (v + 1) % words.length), interval);
        return () => clearInterval(t);
    }, [words, interval]);
    return (
        <span className={`relative inline-flex align-baseline ${className}`}>
            <span aria-hidden className="invisible whitespace-nowrap">
                {words.reduce((a, b) => (a.length > b.length ? a : b))}
            </span>
            <AnimatePresence mode="wait" initial={false}>
                <motion.span
                    key={words[i]}
                    initial={{ y: "0.7em", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: "-0.7em", opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute left-0 top-0 whitespace-nowrap text-brand"
                >
                    {words[i]}
                </motion.span>
            </AnimatePresence>
        </span>
    );
}
