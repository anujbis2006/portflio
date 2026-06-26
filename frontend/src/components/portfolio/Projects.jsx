import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";
import { projects } from "@/data/portfolio";
import { TID } from "@/lib/testIds";
import SectionHeader from "./SectionHeader";

const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/-+$/, "");

function ProjectIcon({ icon }) {
    if (icon === "github") return <Github className="h-3.5 w-3.5" />;
    return <ExternalLink className="h-3.5 w-3.5" />;
}

function ProjectCard({ p, i, spanClass }) {
    const cardRef = useRef(null);
    const mx = useMotionValue(0);
    const my = useMotionValue(0);
    const rx = useSpring(useTransform(my, [-0.5, 0.5], [4, -4]), { stiffness: 150, damping: 20 });
    const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-4, 4]), { stiffness: 150, damping: 20 });
    const glowX = useTransform(mx, [-0.5, 0.5], ["10%", "90%"]);
    const glowY = useTransform(my, [-0.5, 0.5], ["10%", "90%"]);

    const onMove = (e) => {
        const r = cardRef.current?.getBoundingClientRect();
        if (!r) return;
        mx.set((e.clientX - r.left) / r.width - 0.5);
        my.set((e.clientY - r.top) / r.height - 0.5);
    };
    const onLeave = () => {
        mx.set(0);
        my.set(0);
    };

    return (
        <motion.article
            ref={cardRef}
            data-testid={TID.projectCard(slug(p.title))}
            onMouseMove={onMove}
            onMouseLeave={onLeave}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.07 }}
            style={{ rotateX: rx, rotateY: ry, transformPerspective: 1000 }}
            className={`${spanClass} group relative flex flex-col rounded-2xl border border-border bg-card/40 backdrop-blur-sm p-6 sm:p-8 hover:border-foreground/30 transition-colors`}
        >
            {/* Cursor glow */}
            <motion.div
                aria-hidden
                style={{
                    background: useTransform(
                        [glowX, glowY],
                        ([x, y]) =>
                            `radial-gradient(400px circle at ${x} ${y}, hsl(var(--foreground) / 0.10), transparent 70%)`
                    ),
                }}
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
            />

            <div className="relative">
                <div className="flex items-start justify-between gap-4">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                        {p.type}
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground whitespace-nowrap">
                        {p.duration}
                    </span>
                </div>

                <h3 className="mt-5 font-heading font-bold text-2xl sm:text-3xl tracking-tight leading-tight">
                    {p.title}
                </h3>
                <p className="mt-2 text-sm sm:text-base text-foreground/80">{p.tagline}</p>

                <div className="mt-5 space-y-3 text-sm sm:text-[15px] text-muted-foreground leading-relaxed">
                    <p>
                        <span className="text-foreground/90 font-medium">Problem · &nbsp;</span>
                        {p.problem}
                    </p>
                    <p>
                        <span className="text-foreground/90 font-medium">What I built · &nbsp;</span>
                        {p.description}
                    </p>
                </div>

                <ul className="mt-6 flex flex-wrap gap-2">
                    {p.stack.map((s) => (
                        <li
                            key={s}
                            className="font-mono text-[11px] uppercase tracking-wider px-2.5 py-1 rounded-full border border-border bg-secondary/40 text-foreground/85"
                        >
                            {s}
                        </li>
                    ))}
                </ul>

                <div className="mt-6 pt-6 border-t border-border flex flex-wrap items-center gap-3">
                    {p.links.map((l) => (
                        <a
                            key={l.label}
                            href={l.url}
                            target="_blank"
                            rel="noreferrer"
                            data-testid={TID.projectLink(slug(p.title), slug(l.label))}
                            className="group/link inline-flex items-center gap-2 text-sm font-medium hover:text-foreground text-foreground/80 transition-colors"
                        >
                            <ProjectIcon icon={l.icon} />
                            {l.label}
                            <ArrowUpRight className="h-3.5 w-3.5 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 transition-transform" />
                        </a>
                    ))}
                </div>
            </div>
        </motion.article>
    );
}

export default function Projects() {
    return (
        <section
            id="projects"
            data-testid={TID.projectsSection}
            className="py-24 sm:py-32 border-t border-border"
        >
            <div className="max-w-6xl mx-auto px-6 lg:px-8">
                <SectionHeader
                    index="05"
                    label="Selected work"
                    title="Projects I've shipped (and ones I'm shipping now)."
                    description="Each project below was built end-to-end — from idea and architecture to working code."
                />

                <div className="grid lg:grid-cols-6 gap-4 sm:gap-6">
                    {projects.map((p, i) => (
                        <ProjectCard
                            key={p.title}
                            p={p}
                            i={i}
                            spanClass={p.featured ? "lg:col-span-3" : "lg:col-span-2"}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
