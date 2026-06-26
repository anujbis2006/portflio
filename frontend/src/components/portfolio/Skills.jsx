import { motion } from "framer-motion";
import {
    Code2,
    Layers,
    Database,
    Wrench,
    HeartHandshake,
    Cpu,
} from "lucide-react";
import { skills } from "@/data/portfolio";
import { TID } from "@/lib/testIds";
import SectionHeader from "./SectionHeader";

const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/-+$/, "");

const META = {
    "Programming Languages": {
        icon: Code2,
        caption: "Core programming and scripting",
    },
    "Frameworks & Libraries": {
        icon: Layers,
        caption: "Model training, APIs and apps",
    },
    Databases: { icon: Database, caption: "Storage and persistence" },
    "Tools & Platforms": { icon: Wrench, caption: "Dev workflow and deployment" },
    "Soft Skills": { icon: HeartHandshake, caption: "How I work with people" },
};

const DEFAULT_META = { icon: Cpu, caption: "" };

export default function Skills() {
    return (
        <section
            id="skills"
            data-testid={TID.skillsSection}
            className="py-24 sm:py-32 border-t border-border"
        >
            <div className="max-w-6xl mx-auto px-6 lg:px-8">
                <SectionHeader
                    index="02"
                    label="Toolbox"
                    title="What I work with."
                    subhead="Sharp tools — used, not just listed."
                    description="Grouped honestly — not a 'every-logo-I've-seen' list. These are the things I actually use to build."
                />

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {skills.map((group, idx) => {
                        const meta = META[group.category] || DEFAULT_META;
                        const Icon = meta.icon;
                        const num = String(idx + 1).padStart(2, "0");
                        return (
                            <motion.div
                                key={group.category}
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-60px" }}
                                transition={{ duration: 0.5, delay: idx * 0.05 }}
                                className="group relative rounded-2xl border border-border bg-card/40 backdrop-blur-sm p-6 sm:p-7 hover:border-brand/40 transition-colors"
                            >
                                <div className="flex items-center justify-between gap-3 font-mono text-[11px] tracking-widest text-muted-foreground">
                                    <span className="flex items-center gap-3">
                                        <span className="italic font-serif text-brand text-base not-italic-fallback">
                                            {num}
                                        </span>
                                        <span className="h-3 w-px bg-border" />
                                        <Icon className="h-3.5 w-3.5 text-brand" />
                                    </span>
                                </div>

                                <h3 className="mt-5 font-heading font-semibold text-lg sm:text-xl tracking-tight">
                                    {group.category}
                                </h3>
                                {meta.caption && (
                                    <p className="mt-1 font-serif italic text-sm text-brand/90">
                                        {meta.caption}
                                    </p>
                                )}

                                <ul className="mt-5 flex flex-wrap gap-2">
                                    {group.items.map((item) => (
                                        <li
                                            key={item}
                                            data-testid={TID.skillBadge(slug(item))}
                                            className="font-mono text-xs uppercase tracking-wider px-3 py-1.5 rounded-full border border-border bg-secondary/40 text-foreground/90 hover:border-brand/40 transition-colors"
                                        >
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
