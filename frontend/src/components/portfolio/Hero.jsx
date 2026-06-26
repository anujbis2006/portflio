import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import { profile } from "@/data/portfolio";
import { TID } from "@/lib/testIds";

export default function Hero() {
    return (
        <section
            id="top"
            data-testid={TID.heroSection}
            className="relative isolate pt-32 pb-24 sm:pt-40 sm:pb-32 lg:pt-48 lg:pb-40"
        >
            {/* Background pattern */}
            <div
                aria-hidden
                className="absolute inset-0 grid-pattern opacity-[0.35] dark:opacity-[0.18] pointer-events-none"
            />
            <div
                aria-hidden
                className="absolute inset-x-0 -top-32 h-[40rem] bg-[radial-gradient(ellipse_at_top,hsl(var(--foreground)/0.10),transparent_60%)] pointer-events-none"
            />

            <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center gap-3 font-mono text-xs tracking-[0.2em] uppercase text-muted-foreground"
                >
                    <span className="h-px w-8 bg-foreground/40" />
                    <span data-testid={TID.heroAvailability}>
                        {profile.available
                            ? "Available · " + profile.availabilityNote
                            : "Currently building"}
                    </span>
                </motion.div>

                <motion.h1
                    data-testid={TID.heroName}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.05 }}
                    className="mt-6 font-heading font-extrabold tracking-[-0.04em] leading-[0.95] text-balance text-5xl sm:text-7xl lg:text-[7.5rem]"
                >
                    {profile.firstName}
                    <br />
                    <span className="text-muted-foreground">{profile.lastName}.</span>
                </motion.h1>

                <motion.p
                    data-testid={TID.heroHeadline}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.15 }}
                    className="mt-8 max-w-2xl text-xl sm:text-2xl font-heading font-medium text-balance leading-snug"
                >
                    {profile.headline}{" "}
                    <span className="text-muted-foreground">
                        — BTech CS + AI @ NSIT Dwarka.
                    </span>
                </motion.p>

                <motion.p
                    data-testid={TID.heroSubheadline}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.25 }}
                    className="mt-5 max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed"
                >
                    {profile.subheadline}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.35 }}
                    className="mt-10 flex flex-wrap items-center gap-3"
                >
                    <a
                        data-testid={TID.heroCtaProjects}
                        href="#projects"
                        className="group inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3 text-sm font-medium hover:opacity-90 transition-all"
                    >
                        View Projects
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                    </a>
                    <a
                        data-testid={TID.heroCtaContact}
                        href="#contact"
                        className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium hover:bg-secondary transition-colors"
                    >
                        Contact Me
                    </a>
                    <div className="ml-auto hidden sm:flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-muted-foreground">
                        <MapPin className="h-3.5 w-3.5" />
                        {profile.location}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
