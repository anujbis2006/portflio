import { motion } from "framer-motion";
import { CheckCircle2, Circle, Sparkles } from "lucide-react";
import { roadmap } from "@/data/portfolio";
import useRoadmapProgress from "@/lib/useRoadmapProgress";
import SectionHeader from "./SectionHeader";
import SpotlightCard from "./SpotlightCard";

const statusStyle = {
    Done: {
        ring: "border-foreground/30 bg-secondary/40 text-muted-foreground",
        icon: CheckCircle2,
        chip: "border-border bg-secondary/50 text-muted-foreground",
    },
    Now: {
        ring: "border-brand bg-brand text-[color:hsl(var(--brand-foreground))]",
        icon: Sparkles,
        chip: "border-brand bg-brand text-[color:hsl(var(--brand-foreground))]",
    },
    Next: {
        ring: "border-dashed border-foreground/40 text-muted-foreground",
        icon: Circle,
        chip: "border-border bg-secondary/50 text-muted-foreground",
    },
};

export default function Roadmap() {
    const { phaseProgress } = useRoadmapProgress(roadmap);

    return (
        <section
            id="roadmap"
            data-testid="roadmap-section"
            className="py-24 sm:py-32 border-t border-border relative"
        >
            <div className="max-w-6xl mx-auto px-6 lg:px-8">
                <SectionHeader
                    index="04"
                    label="Learning roadmap"
                    title="The sequential path I'm walking."
                    subhead="Phase by phase, skill by skill."
                    description="My target role is AI Engineer / Backend SDE — a high-level view of where I am in the journey."
                />

                <ol className="relative">
                    <span
                        aria-hidden
                        className="absolute left-4 sm:left-6 top-2 bottom-2 w-px bg-border"
                    />

                    <div className="space-y-4 sm:space-y-5">
                        {roadmap.map((phase, i) => {
                            const s = statusStyle[phase.status] || statusStyle.Next;
                            const Icon = s.icon;
                            const prog = phaseProgress(phase);
                            const isActive = phase.status === "Now";

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
                                    <span
                                        className={`absolute left-0 sm:left-2 top-5 h-9 w-9 grid place-items-center rounded-full border ${s.ring} ${
                                            isActive ? "animate-brand-pulse" : ""
                                        }`}
                                    >
                                        <Icon className="h-4 w-4" />
                                    </span>

                                    <SpotlightCard
                                        className={`relative rounded-2xl border ${
                                            isActive
                                                ? "border-brand/40 brand-conic-border"
                                                : "border-border"
                                        } bg-card/40 backdrop-blur-sm p-6 sm:p-7`}
                                    >
                                        <div className="flex flex-wrap items-start justify-between gap-3">
                                            <div className="min-w-0">
                                                <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                                                    {phase.phase}
                                                </div>
                                                <h3
                                                    className={`mt-1 font-heading font-semibold text-xl sm:text-2xl tracking-tight ${
                                                        isActive ? "text-brand" : ""
                                                    }`}
                                                >
                                                    {phase.title}
                                                </h3>
                                            </div>
                                            <span
                                                className={`font-mono text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-full border ${s.chip}`}
                                            >
                                                {phase.status}
                                            </span>
                                        </div>

                                        <div className="mt-5 flex items-center gap-3">
                                            <div className="relative flex-1 h-1.5 rounded-full bg-secondary/60 overflow-hidden">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    animate={{
                                                        width: `${prog.ratio * 100}%`,
                                                    }}
                                                    transition={{
                                                        duration: 0.6,
                                                        ease: "easeOut",
                                                    }}
                                                    className="absolute inset-y-0 left-0 rounded-full bg-brand"
                                                />
                                            </div>
                                            <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground tabular-nums">
                                                {prog.completed}/{prog.total}
                                            </span>
                                        </div>
                                    </SpotlightCard>
                                </motion.li>
                            );
                        })}
                    </div>
                </ol>
            </div>
        </section>
    );
}
