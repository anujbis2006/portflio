import { motion } from "framer-motion";
import { about } from "@/data/portfolio";
import { TID } from "@/lib/testIds";
import SectionHeader from "./SectionHeader";

export default function About() {
    return (
        <section
            id="about"
            data-testid={TID.aboutSection}
            className="py-24 sm:py-32 border-t border-border"
        >
            <div className="max-w-6xl mx-auto px-6 lg:px-8">
                <SectionHeader
                    index="01"
                    label="About"
                    title="A short version of who I am."
                />

                <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-7 space-y-6"
                    >
                        {about.paragraphs.map((p, i) => (
                            <p
                                key={i}
                                className="text-lg sm:text-xl leading-relaxed text-foreground/90"
                            >
                                {p}
                            </p>
                        ))}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="lg:col-span-5"
                    >
                        <div className="rounded-2xl border border-border bg-card/40 backdrop-blur-sm p-6 sm:p-8">
                            <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-6">
                                / Quick facts
                            </div>
                            <dl className="space-y-5">
                                {about.quickFacts.map((f) => (
                                    <div
                                        key={f.label}
                                        className="flex items-start justify-between gap-6 border-b border-border/70 pb-4 last:border-0 last:pb-0"
                                    >
                                        <dt className="text-sm text-muted-foreground">
                                            {f.label}
                                        </dt>
                                        <dd className="text-sm font-medium text-right">
                                            {f.value}
                                        </dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
