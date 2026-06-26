import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { achievements } from "@/data/portfolio";
import { TID } from "@/lib/testIds";
import SectionHeader from "./SectionHeader";

const slug = (s) =>
    s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/-+$/, "").slice(0, 60);

export default function Achievements() {
    return (
        <section
            id="achievements"
            data-testid={TID.achievementsSection}
            className="py-24 sm:py-32 border-t border-border"
        >
            <div className="max-w-6xl mx-auto px-6 lg:px-8">
                <SectionHeader
                    index="06"
                    label="Highlights"
                    title="Things I'm proud of so far."
                />

                <ul className="grid md:grid-cols-2 gap-4 sm:gap-6">
                    {achievements.map((a, i) => (
                        <motion.li
                            key={a.title}
                            data-testid={TID.achievementItem(slug(a.title))}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{ duration: 0.5, delay: i * 0.05 }}
                            className="flex items-start gap-4 rounded-2xl border border-border bg-card/40 backdrop-blur-sm p-6"
                        >
                            <CheckCircle2 className="h-5 w-5 shrink-0 mt-0.5 text-foreground/80" />
                            <div>
                                <h3 className="font-heading font-medium text-base sm:text-lg tracking-tight">
                                    {a.title}
                                </h3>
                                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                                    {a.detail}
                                </p>
                            </div>
                        </motion.li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
