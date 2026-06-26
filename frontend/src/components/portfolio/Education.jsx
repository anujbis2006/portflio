import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { education } from "@/data/portfolio";
import { TID } from "@/lib/testIds";
import SectionHeader from "./SectionHeader";

const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/-+$/, "");

export default function Education() {
    return (
        <section
            id="education"
            data-testid={TID.educationSection}
            className="py-24 sm:py-32 border-t border-border"
        >
            <div className="max-w-6xl mx-auto px-6 lg:px-8">
                <SectionHeader
                    index="06"
                    label="Education"
                    title="Where I'm learning the fundamentals."
                />

                <div className="space-y-4">
                    {education.map((edu, i) => (
                        <motion.div
                            key={edu.institution}
                            data-testid={TID.educationItem(slug(edu.institution))}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{ duration: 0.5, delay: i * 0.06 }}
                            className="rounded-2xl border border-border bg-card/40 backdrop-blur-sm p-6 sm:p-8"
                        >
                            <div className="flex flex-col sm:flex-row sm:items-start gap-5 sm:gap-8">
                                <div className="h-12 w-12 rounded-xl border border-border grid place-items-center bg-secondary/30 shrink-0">
                                    <GraduationCap className="h-5 w-5" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
                                        <h3 className="font-heading font-semibold text-xl sm:text-2xl tracking-tight">
                                            {edu.institution}
                                        </h3>
                                        <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground whitespace-nowrap">
                                            {edu.period}
                                        </span>
                                    </div>
                                    <p className="mt-1 text-sm text-muted-foreground">
                                        {edu.degree} · {edu.location}
                                    </p>
                                    {edu.note && (
                                        <p className="mt-4 text-base text-foreground/85 leading-relaxed">
                                            {edu.note}
                                        </p>
                                    )}
                                    {edu.highlights && edu.highlights.length > 0 && (
                                        <ul className="mt-5 flex flex-wrap gap-2">
                                            {edu.highlights.map((h) => (
                                                <li
                                                    key={h}
                                                    className="font-mono text-[11px] uppercase tracking-widest px-3 py-1.5 rounded-full border border-foreground/30 bg-foreground/5 text-foreground"
                                                >
                                                    {h}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
