import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { nowLearning } from "@/data/portfolio";
import { TID } from "@/lib/testIds";
import SectionHeader from "./SectionHeader";

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
                    title="What's on my desk right now."
                    description={nowLearning.intro}
                />

                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                    {nowLearning.items.map((item, i) => (
                        <motion.div
                            key={item.title}
                            data-testid={TID.nowCard(slug(item.title))}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{ duration: 0.5, delay: i * 0.06 }}
                            className="group relative rounded-2xl border border-border bg-card/40 backdrop-blur-sm p-6 sm:p-7 hover:-translate-y-0.5 hover:border-foreground/30 transition-all"
                        >
                            <div className="flex items-start justify-between gap-4">
                                <div className="h-10 w-10 rounded-lg border border-border grid place-items-center bg-secondary/30">
                                    <Sparkles className="h-4 w-4" />
                                </div>
                                <span className="font-mono text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-full border border-border bg-secondary/50 text-muted-foreground">
                                    {item.tag}
                                </span>
                            </div>
                            <h3 className="mt-5 font-heading font-semibold text-lg sm:text-xl tracking-tight">
                                {item.title}
                            </h3>
                            <p className="mt-2 text-sm sm:text-base text-muted-foreground leading-relaxed">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
