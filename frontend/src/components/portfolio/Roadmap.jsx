import { motion } from "framer-motion";
import { CheckCircle2, Circle, Sparkles } from "lucide-react";
import { roadmap } from "@/data/portfolio";
import SectionHeader from "./SectionHeader";

const statusStyle = {
    Done: {
        ring: "border-foreground/30 bg-secondary/40 text-muted-foreground",
        icon: CheckCircle2,
        line: "bg-foreground/40",
        dot: "bg-foreground/60",
    },
    Now: {
        ring: "border-foreground bg-foreground text-background",
        icon: Sparkles,
        line: "bg-foreground",
        dot: "bg-foreground",
    },
    Next: {
        ring: "border-dashed border-foreground/40 text-muted-foreground",
        icon: Circle,
        line: "bg-foreground/15",
        dot: "bg-foreground/30",
    },
};

export default function Roadmap() {
    return (
        <section
            id="roadmap"
            data-testid="roadmap-section"
            className="py-24 sm:py-32 border-t border-border"
        >
            <div className="max-w-6xl mx-auto px-6 lg:px-8">
                <SectionHeader
                    index="04"
                    label="Learning roadmap"
                    title="How I'm growing year by year."
                    description="A living plan — what I've already covered, what I'm deep in right now, and where I'm heading. I update this each semester."
                />

                <ol className="relative">
                    {/* vertical spine */}
                    <span
                        aria-hidden
                        className="absolute left-4 sm:left-6 top-2 bottom-2 w-px bg-border"
                    />

                    <div className="space-y-6 sm:space-y-8">
                        {roadmap.map((phase, i) => {
                            const s = statusStyle[phase.status] || statusStyle.Next;
                            const Icon = s.icon;
                            return (
                                <motion.li
                                    key={phase.year}
                                    data-testid={`roadmap-item-${i}`}
                                    initial={{ opacity: 0, y: 16 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-60px" }}
                                    transition={{ duration: 0.5, delay: i * 0.08 }}
                                    className="relative pl-14 sm:pl-20"
                                >
                                    {/* node */}
                                    <span
                                        className={`absolute left-0 sm:left-2 top-1.5 h-9 w-9 grid place-items-center rounded-full border ${s.ring}`}
                                    >
                                        <Icon className="h-4 w-4" />
                                    </span>

                                    <div className="rounded-2xl border border-border bg-card/40 backdrop-blur-sm p-6 sm:p-8 hover:border-foreground/30 transition-colors">
                                        <div className="flex flex-wrap items-baseline justify-between gap-3">
                                            <div>
                                                <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                                                    {phase.year}
                                                </div>
                                                <h3 className="mt-1 font-heading font-semibold text-xl sm:text-2xl tracking-tight">
                                                    {phase.title}
                                                </h3>
                                            </div>
                                            <span
                                                className={`font-mono text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-full border ${
                                                    phase.status === "Now"
                                                        ? "border-foreground bg-foreground text-background"
                                                        : "border-border bg-secondary/50 text-muted-foreground"
                                                }`}
                                            >
                                                {phase.status}
                                            </span>
                                        </div>

                                        <ul className="mt-5 grid sm:grid-cols-2 gap-3 text-sm text-foreground/85">
                                            {phase.items.map((item) => (
                                                <li
                                                    key={item}
                                                    className="flex items-start gap-2.5 leading-relaxed"
                                                >
                                                    <span
                                                        className={`mt-1.5 h-1.5 w-1.5 rounded-full shrink-0 ${s.dot}`}
                                                    />
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </motion.li>
                            );
                        })}
                    </div>
                </ol>
            </div>
        </section>
    );
}
