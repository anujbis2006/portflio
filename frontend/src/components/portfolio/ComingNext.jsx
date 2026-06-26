import { motion } from "framer-motion";
import { comingNext } from "@/data/portfolio";
import SectionHeader from "./SectionHeader";

const slug = (s) =>
    s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/-+$/, "");

export default function ComingNext() {
    return (
        <section
            id="coming-next"
            data-testid="coming-next-section"
            className="py-24 sm:py-32 border-t border-border relative"
        >
            <div className="max-w-6xl mx-auto px-6 lg:px-8">
                <SectionHeader
                    index="09"
                    label="Currently Building"
                    title="What's coming next."
                    subhead="Flagship projects in progress."
                    description="The next three projects on my desk — each one designed to push me deeper into a different part of the AI stack."
                />

                <div className="grid md:grid-cols-3 gap-4 sm:gap-6">
                    {comingNext.map((p, i) => (
                        <motion.article
                            key={p.title}
                            data-testid={`coming-card-${slug(p.title)}`}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{ duration: 0.5, delay: i * 0.08 }}
                            className="group relative flex flex-col rounded-2xl border border-border bg-card/40 backdrop-blur-sm p-6 sm:p-7 hover:border-brand/40 hover:-translate-y-0.5 transition-all overflow-hidden"
                        >
                            {/* corner glow */}
                            <div
                                aria-hidden
                                className="absolute -top-24 -right-16 w-56 h-56 rounded-full opacity-0 group-hover:opacity-60 transition-opacity duration-500 blur-3xl pointer-events-none"
                                style={{
                                    background:
                                        "radial-gradient(closest-side, hsl(var(--brand) / 0.4), transparent 70%)",
                                }}
                            />

                            <div className="relative flex items-center justify-between gap-3 font-mono text-[10px] uppercase tracking-[0.25em]">
                                <span className="inline-flex items-center gap-2 text-brand">
                                    <span className="relative flex h-1.5 w-1.5">
                                        <span className="absolute inset-0 rounded-full bg-brand animate-ping opacity-70" />
                                        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brand" />
                                    </span>
                                    {p.status}
                                </span>
                                <span className="text-muted-foreground">{p.tag}</span>
                            </div>

                            <h3 className="relative mt-8 font-serif italic font-medium text-2xl sm:text-[28px] leading-tight tracking-tight">
                                {p.title}
                            </h3>

                            <p className="relative mt-6 text-sm sm:text-[15px] text-muted-foreground leading-relaxed flex-1">
                                {p.description}
                            </p>

                            <ul className="relative mt-8 flex flex-wrap gap-2">
                                {p.stack.map((s) => (
                                    <li
                                        key={s}
                                        className="font-mono text-[11px] uppercase tracking-wider px-2.5 py-1 rounded-full border border-border bg-secondary/40 text-foreground/85"
                                    >
                                        {s}
                                    </li>
                                ))}
                            </ul>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}
