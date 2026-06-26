import { motion } from "framer-motion";
import { CheckCircle2, Circle, Sparkles, Link2, Layers } from "lucide-react";
import { roadmap } from "@/data/portfolio";
import SectionHeader from "./SectionHeader";

const statusStyle = {
    Done: {
        ring: "border-foreground/30 bg-secondary/40 text-muted-foreground",
        icon: CheckCircle2,
        chip: "border-border bg-secondary/50 text-muted-foreground",
        dot: "bg-foreground/60",
    },
    Now: {
        ring: "border-foreground bg-foreground text-background",
        icon: Sparkles,
        chip: "border-foreground bg-foreground text-background",
        dot: "bg-foreground",
    },
    Next: {
        ring: "border-dashed border-foreground/40 text-muted-foreground",
        icon: Circle,
        chip: "border-border bg-secondary/50 text-muted-foreground",
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
                    title="The sequential path I'm walking."
                    description="My target role is AI Engineer / Backend SDE. This is the order I'm learning these skills in — and why each phase has to come before the next. Some skills run in parallel; others strictly depend on what came earlier."
                />

                {/* Legend */}
                <div className="mb-10 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                    <span className="inline-flex items-center gap-2">
                        <Link2 className="h-3.5 w-3.5" />
                        Strict order
                    </span>
                    <span className="inline-flex items-center gap-2">
                        <Layers className="h-3.5 w-3.5" />
                        Can run in parallel
                    </span>
                </div>

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
                                    key={phase.phase}
                                    data-testid={`roadmap-item-${i}`}
                                    initial={{ opacity: 0, y: 16 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-60px" }}
                                    transition={{ duration: 0.5, delay: i * 0.06 }}
                                    className="relative pl-14 sm:pl-20"
                                >
                                    {/* node */}
                                    <span
                                        className={`absolute left-0 sm:left-2 top-1.5 h-9 w-9 grid place-items-center rounded-full border ${s.ring}`}
                                    >
                                        <Icon className="h-4 w-4" />
                                    </span>

                                    <div className="rounded-2xl border border-border bg-card/40 backdrop-blur-sm p-6 sm:p-8 hover:border-foreground/30 transition-colors">
                                        <div className="flex flex-wrap items-start justify-between gap-3">
                                            <div>
                                                <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                                                    {phase.phase}
                                                </div>
                                                <h3 className="mt-1 font-heading font-semibold text-xl sm:text-2xl tracking-tight">
                                                    {phase.title}
                                                </h3>
                                            </div>
                                            <span
                                                className={`font-mono text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-full border ${s.chip}`}
                                            >
                                                {phase.status}
                                            </span>
                                        </div>

                                        <p className="mt-4 text-sm sm:text-[15px] text-foreground/85 leading-relaxed">
                                            <span className="text-muted-foreground font-mono text-[10px] uppercase tracking-widest mr-2">
                                                Why
                                            </span>
                                            {phase.why}
                                        </p>

                                        <ul className="mt-6 space-y-2.5">
                                            {phase.skills.map((sk) => (
                                                <li
                                                    key={sk.name}
                                                    className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-border bg-background/40 px-4 py-3"
                                                >
                                                    <div className="flex items-center gap-3 min-w-0">
                                                        <span
                                                            className={`h-1.5 w-1.5 rounded-full shrink-0 ${s.dot}`}
                                                        />
                                                        <span className="text-sm sm:text-base font-medium text-foreground/90">
                                                            {sk.name}
                                                        </span>
                                                    </div>
                                                    <div className="flex items-center gap-2 ml-auto">
                                                        <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground hidden sm:inline">
                                                            {sk.level}
                                                        </span>
                                                        {sk.strict && (
                                                            <span
                                                                title="Strict dependency"
                                                                className="inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-widest px-2 py-0.5 rounded-full border border-foreground/30 text-foreground"
                                                            >
                                                                <Link2 className="h-3 w-3" />
                                                                Seq
                                                            </span>
                                                        )}
                                                        {sk.parallel && (
                                                            <span
                                                                title="Can run in parallel"
                                                                className="inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-widest px-2 py-0.5 rounded-full border border-border bg-secondary/50 text-muted-foreground"
                                                            >
                                                                <Layers className="h-3 w-3" />
                                                                Par
                                                            </span>
                                                        )}
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>

                                        {phase.parallel && (
                                            <p className="mt-5 text-xs sm:text-sm text-muted-foreground leading-relaxed border-l-2 border-border pl-3">
                                                <span className="font-mono text-[10px] uppercase tracking-widest text-foreground/70 mr-2">
                                                    Order note
                                                </span>
                                                {phase.parallel}
                                            </p>
                                        )}
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
