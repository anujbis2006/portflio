import { motion } from "framer-motion";
import { Target } from "lucide-react";
import { futureGoals } from "@/data/portfolio";
import { TID } from "@/lib/testIds";
import SectionHeader from "./SectionHeader";

export default function Goals() {
    return (
        <section
            id="goals"
            data-testid={TID.goalsSection}
            className="py-24 sm:py-32 border-t border-border"
        >
            <div className="max-w-6xl mx-auto px-6 lg:px-8">
                <SectionHeader
                    index="07"
                    label="Current focus"
                    title="What I'm aiming at next."
                />

                <div className="grid md:grid-cols-3 gap-4 sm:gap-6">
                    {futureGoals.map((g, i) => (
                        <motion.div
                            key={g}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{ duration: 0.5, delay: i * 0.07 }}
                            className="relative rounded-2xl border border-border bg-card/40 backdrop-blur-sm p-6 sm:p-7"
                        >
                            <Target className="h-5 w-5 text-foreground/80" />
                            <p className="mt-4 text-base sm:text-lg text-foreground/90 leading-snug">
                                {g}
                            </p>
                            <div className="absolute top-5 right-5 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                                0{i + 1}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
