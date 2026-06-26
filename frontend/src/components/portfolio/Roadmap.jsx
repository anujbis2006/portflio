import { motion } from "framer-motion";
import {
    CheckCircle2,
    Circle,
    Sparkles,
    Link2,
    Layers,
    RotateCcw,
    Check,
} from "lucide-react";
import { roadmap } from "@/data/portfolio";
import useRoadmapProgress from "@/lib/useRoadmapProgress";
import SectionHeader from "./SectionHeader";

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
    const { isDone, toggle, reset, phaseProgress } = useRoadmapProgress(roadmap);

    return (
        <section
            id="roadmap"
            data-testid="roadmap-section"
            className="py-24 sm:py-32 border-t border-border relative"
        >
            <div className="max-w-6xl mx-auto px-6 lg:px-8">
                <SectionHeader
                    index="04"
                    label="Learning roadmap · interactive"
                    title="The sequential path I'm walking."
                    subhead="Phase by phase, skill by skill."
                    description="My target role is AI Engineer / Backend SDE. This is the order I'm learning these skills — and why each phase has to come before the next. Tap any skill to mark it done; your progress saves in your browser."
                />

                {/* Legend + reset */}
                <div className="mb-10 flex flex-wrap items-center gap-x-6 gap-y-3 font-mono text-[10px] uppercase tracking-[0.25em]">
                    <span className="inline-flex items-center gap-2 text-muted-foreground">
                        <Link2 className="h-3.5 w-3.5" />
                        Strict order
                    </span>
                    <span className="inline-flex items-center gap-2 text-muted-foreground">
                        <Layers className="h-3.5 w-3.5" />
                        Can run in parallel
                    </span>
                    <span className="inline-flex items-center gap-2 text-brand">
                        <Check className="h-3.5 w-3.5" />
                        Tap to mark done
                    </span>
                    <button
                        type="button"
                        onClick={reset}
                        data-testid="roadmap-reset-btn"
                        className="ml-auto inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                    >
                        <RotateCcw className="h-3.5 w-3.5" />
                        Reset progress
                    </button>
                </div>

                <ol className="relative">
                    <span
                        aria-hidden
                        className="absolute left-4 sm:left-6 top-2 bottom-2 w-px bg-border"
                    />

                    <div className="space-y-6 sm:space-y-8">
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
                                        className={`absolute left-0 sm:left-2 top-1.5 h-9 w-9 grid place-items-center rounded-full border ${s.ring} ${
                                            isActive ? "animate-brand-pulse" : ""
                                        }`}
                                    >
                                        <Icon className="h-4 w-4" />
                                    </span>

                                    <div
                                        className={`relative rounded-2xl border ${
                                            isActive
                                                ? "border-brand/40 brand-conic-border"
                                                : "border-border"
                                        } bg-card/40 backdrop-blur-sm p-6 sm:p-8 transition-colors`}
                                    >
                                        <div className="flex flex-wrap items-start justify-between gap-3">
                                            <div>
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

                                        {/* progress bar */}
                                        <div
                                            className="mt-5 flex items-center gap-3"
                                            data-testid={`roadmap-progress-${i}`}
                                        >
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

                                        <p className="mt-5 text-sm sm:text-[15px] text-foreground/85 leading-relaxed">
                                            <span className="text-muted-foreground font-mono text-[10px] uppercase tracking-widest mr-2">
                                                Why
                                            </span>
                                            {phase.why}
                                        </p>

                                        <ul className="mt-6 space-y-2.5">
                                            {phase.skills.map((sk) => {
                                                const done = isDone(phase.phase, sk.name);
                                                return (
                                                    <li key={sk.name}>
                                                        <button
                                                            type="button"
                                                            onClick={() =>
                                                                toggle(phase.phase, sk.name)
                                                            }
                                                            data-testid={`skill-toggle-${i}-${sk.name
                                                                .toLowerCase()
                                                                .replace(/[^a-z0-9]+/g, "-")
                                                                .replace(/-+$/, "")}`}
                                                            aria-pressed={done}
                                                            className={`group/skill w-full flex flex-wrap items-center justify-between gap-3 rounded-xl border px-4 py-3 text-left transition-all ${
                                                                done
                                                                    ? "border-brand/50 bg-brand/10"
                                                                    : "border-border bg-background/40 hover:border-foreground/30"
                                                            }`}
                                                        >
                                                            <div className="flex items-center gap-3 min-w-0">
                                                                <span
                                                                    className={`shrink-0 grid place-items-center h-5 w-5 rounded-md border transition-all ${
                                                                        done
                                                                            ? "border-brand bg-brand text-[color:hsl(var(--brand-foreground))]"
                                                                            : "border-border bg-background group-hover/skill:border-foreground/40"
                                                                    }`}
                                                                >
                                                                    {done && (
                                                                        <Check
                                                                            className="h-3.5 w-3.5"
                                                                            strokeWidth={3}
                                                                        />
                                                                    )}
                                                                </span>
                                                                <span
                                                                    className={`text-sm sm:text-base font-medium transition-colors ${
                                                                        done
                                                                            ? "text-foreground line-through decoration-brand/70 decoration-2"
                                                                            : "text-foreground/90"
                                                                    }`}
                                                                >
                                                                    {sk.name}
                                                                </span>
                                                            </div>
                                                            <div className="flex items-center gap-2 ml-auto">
                                                                <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground hidden sm:inline">
                                                                    {sk.level}
                                                                </span>
                                                                {sk.strict && (
                                                                    <span className="inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-widest px-2 py-0.5 rounded-full border border-foreground/30 text-foreground">
                                                                        <Link2 className="h-3 w-3" />
                                                                        Seq
                                                                    </span>
                                                                )}
                                                                {sk.parallel && (
                                                                    <span className="inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-widest px-2 py-0.5 rounded-full border border-border bg-secondary/50 text-muted-foreground">
                                                                        <Layers className="h-3 w-3" />
                                                                        Par
                                                                    </span>
                                                                )}
                                                            </div>
                                                        </button>
                                                    </li>
                                                );
                                            })}
                                        </ul>

                                        {phase.parallel && (
                                            <p className="mt-5 text-xs sm:text-sm text-muted-foreground leading-relaxed border-l-2 border-brand/40 pl-3">
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
