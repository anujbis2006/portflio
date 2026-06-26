import { motion } from "framer-motion";
import { Sparkles, BookOpen } from "lucide-react";
import { nowLearning, reading } from "@/data/portfolio";
import { TID } from "@/lib/testIds";
import SectionHeader from "./SectionHeader";
import SpotlightCard from "./SpotlightCard";

const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/-+$/, "");

export default function NowLearning() {
    return (
        <section
            id="now"
            data-testid={TID.nowSection}
            className="py-24 sm:py-32 border-t border-border"
        >
            <div className="max-w-6xl mx-auto px-6 lg:px-8">
                <SectionHeader
                    index="03"
                    label="Now / Currently Building"
                    title="Going deeper into LLMs and AI systems."
                    subhead="Theory, papers, and shipped systems."
                    description={nowLearning.intro}
                />

                <div className="grid lg:grid-cols-3 gap-4 sm:gap-6">
                    {nowLearning.items.map((item, i) => (
                        <motion.div
                            key={item.title}
                            data-testid={TID.nowCard(slug(item.title))}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{ duration: 0.5, delay: i * 0.05 }}
                            className="h-full"
                        >
                            <SpotlightCard className="rounded-2xl border border-border bg-card/40 backdrop-blur-sm p-6 sm:p-7 hover:border-brand/40 transition-all h-full">
                            <div className="flex items-start justify-between gap-4">
                                <div className="h-10 w-10 rounded-lg border border-border grid place-items-center bg-secondary/30">
                                    <Sparkles className="h-4 w-4 text-brand" />
                                </div>
                                <span className="font-mono text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-full border border-border bg-secondary/50 text-muted-foreground whitespace-nowrap">
                                    {item.tag}
                                </span>
                            </div>
                            <h3 className="mt-5 font-heading font-semibold text-lg sm:text-xl tracking-tight">
                                {item.title}
                            </h3>
                            <p className="mt-2 text-sm sm:text-base text-muted-foreground leading-relaxed">
                                {item.description}
                            </p>
                            </SpotlightCard>
                        </motion.div>
                    ))}
                </div>

                {/* Currently reading */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    data-testid="now-reading-card"
                    className="mt-6 sm:mt-8 rounded-2xl border border-border bg-card/40 backdrop-blur-sm p-6 sm:p-8"
                >
                    <div className="flex items-center justify-between gap-4 flex-wrap">
                        <div className="flex items-center gap-3">
                            <div className="h-10 w-10 rounded-lg border border-border grid place-items-center bg-secondary/30">
                                <BookOpen className="h-4 w-4" />
                            </div>
                            <div>
                                <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                                    / Currently reading
                                </div>
                                <h3 className="mt-0.5 font-heading font-semibold text-lg sm:text-xl tracking-tight">
                                    Research papers on my desk
                                </h3>
                            </div>
                        </div>
                        <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                            Updated weekly
                        </span>
                    </div>
                    <ul className="mt-6 grid sm:grid-cols-2 gap-x-8 gap-y-3 text-sm text-foreground/90">
                        {reading.map((r, i) => (
                            <li
                                key={r}
                                className="flex items-start gap-3 leading-relaxed border-b border-border/60 pb-3 last:border-0 last:pb-0 sm:border-0 sm:pb-0"
                            >
                                <span className="font-mono text-[10px] mt-1 text-muted-foreground tabular-nums">
                                    {String(i + 1).padStart(2, "0")}
                                </span>
                                <span>{r}</span>
                            </li>
                        ))}
                    </ul>
                </motion.div>
            </div>
        </section>
    );
}
