import { motion } from "framer-motion";
import { skills } from "@/data/portfolio";
import { TID } from "@/lib/testIds";
import SectionHeader from "./SectionHeader";

const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/-+$/, "");

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
                    label="Toolkit"
                    title="Languages, frameworks and tools I work with."
                    description="Grouped honestly — not a 'every-logo-I've-seen' list. These are the things I actually use to build."
                />

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {skills.map((group, idx) => (
                        <motion.div
                            key={group.category}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{ duration: 0.5, delay: idx * 0.05 }}
                            className="group rounded-2xl border border-border bg-card/40 backdrop-blur-sm p-6 hover:border-foreground/30 transition-colors"
                        >
                            <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-5 flex items-center gap-2">
                                <span className="h-1 w-1 rounded-full bg-foreground/60" />
                                {group.category}
                            </div>
                            <ul className="flex flex-wrap gap-2">
                                {group.items.map((item) => (
                                    <li
                                        key={item}
                                        data-testid={TID.skillBadge(slug(item))}
                                        className="font-mono text-xs uppercase tracking-wider px-3 py-1.5 rounded-full border border-border bg-secondary/40 text-foreground/90"
                                    >
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
