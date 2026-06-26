import { useEffect, useState } from "react";
import { navLinks } from "@/data/portfolio";

// Vertical dot rail (desktop only) — highlights the section currently in view.
export default function SideRail() {
    const [active, setActive] = useState(navLinks[0]?.href || "");

    useEffect(() => {
        const ids = navLinks.map((l) => l.href.slice(1));
        const observers = ids
            .map((id) => {
                const el = document.getElementById(id);
                if (!el) return null;
                const io = new IntersectionObserver(
                    (entries) => {
                        entries.forEach((entry) => {
                            if (entry.isIntersecting) setActive("#" + id);
                        });
                    },
                    { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
                );
                io.observe(el);
                return io;
            })
            .filter(Boolean);
        return () => observers.forEach((o) => o.disconnect());
    }, []);

    return (
        <nav
            aria-hidden
            className="hidden xl:flex fixed right-6 top-1/2 -translate-y-1/2 z-40 flex-col items-center gap-4 px-2 py-4 rounded-full border border-border bg-card/40 backdrop-blur"
        >
            {navLinks.map((l) => {
                const isActive = active === l.href;
                return (
                    <a
                        key={l.href}
                        href={l.href}
                        title={l.label}
                        className="group flex items-center justify-center"
                    >
                        <span
                            className={`block rounded-full transition-all duration-300 ${
                                isActive
                                    ? "h-6 w-1.5 bg-foreground"
                                    : "h-1.5 w-1.5 bg-foreground/30 group-hover:bg-foreground/70"
                            }`}
                        />
                    </a>
                );
            })}
        </nav>
    );
}
