import { useRef } from "react";
import { motion, useMotionValue, useMotionTemplate } from "framer-motion";
import { ArrowRight, MapPin, ArrowDown } from "lucide-react";
import { profile } from "@/data/portfolio";
import { TID } from "@/lib/testIds";
import RotatingText from "./RotatingText";

const ROTATING_ROLES = [
    "Backend Engineer",
    "AI / ML Builder",
    "RAG Systems",
    "FastAPI · LLMs",
];

export default function Hero() {
    const ref = useRef(null);
    const mouseX = useMotionValue(50);
    const mouseY = useMotionValue(30);

    const onMouseMove = (e) => {
        const rect = ref.current?.getBoundingClientRect();
        if (!rect) return;
        mouseX.set(((e.clientX - rect.left) / rect.width) * 100);
        mouseY.set(((e.clientY - rect.top) / rect.height) * 100);
    };

    const spotlight = useMotionTemplate`radial-gradient(600px circle at ${mouseX}% ${mouseY}%, hsl(var(--foreground) / 0.10), transparent 60%)`;

    return (
        <section
            id="top"
            ref={ref}
            onMouseMove={onMouseMove}
            data-testid={TID.heroSection}
            className="relative isolate overflow-hidden pt-32 pb-24 sm:pt-40 sm:pb-32 lg:pt-48 lg:pb-40"
        >
            {/* Background layers */}
            <div
                aria-hidden
                className="absolute inset-0 grid-pattern opacity-[0.35] dark:opacity-[0.18] pointer-events-none"
            />
            <motion.div
                aria-hidden
                style={{ background: spotlight }}
                className="absolute inset-0 pointer-events-none transition-opacity"
            />
            {/* Animated aurora blob — brand-tinted */}
            <div
                aria-hidden
                className="absolute -top-40 right-[-10%] w-[60rem] h-[60rem] rounded-full pointer-events-none opacity-40 dark:opacity-50 animate-aurora blur-3xl"
                style={{
                    background:
                        "radial-gradient(closest-side, hsl(var(--brand) / 0.35), transparent 70%)",
                }}
            />
            <div
                aria-hidden
                className="absolute -bottom-32 left-[-15%] w-[50rem] h-[50rem] rounded-full pointer-events-none opacity-30 dark:opacity-30 animate-aurora blur-3xl"
                style={{
                    background:
                        "radial-gradient(closest-side, hsl(var(--foreground) / 0.25), transparent 70%)",
                    animationDelay: "-9s",
                }}
            />

            <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-3 rounded-full border border-brand/40 bg-brand/10 backdrop-blur px-3.5 py-1.5 font-mono text-[10px] sm:text-xs tracking-[0.2em] uppercase text-brand"
                >
                    <span className="relative flex h-2 w-2 animate-brand-pulse rounded-full">
                        <span className="absolute inset-0 rounded-full bg-brand animate-ping opacity-60" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
                    </span>
                    <span data-testid={TID.heroAvailability}>
                        {profile.available
                            ? profile.availabilityNote
                            : "Currently building"}
                    </span>
                </motion.div>

                <motion.h1
                    data-testid={TID.heroName}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.05 }}
                    className="mt-6 font-heading font-extrabold tracking-[-0.045em] leading-[0.92] text-balance text-5xl sm:text-7xl lg:text-[8rem]"
                >
                    {profile.firstName}
                    <br />
                    <span
                        className="bg-clip-text text-transparent"
                        style={{
                            backgroundImage:
                                "linear-gradient(180deg, hsl(var(--muted-foreground)), hsl(var(--foreground) / 0.2))",
                        }}
                    >
                        {profile.lastName}.
                    </span>
                </motion.h1>

                <div className="mt-8 grid lg:grid-cols-12 gap-8 items-end">
                    <div className="lg:col-span-7">
                        <motion.p
                            data-testid={TID.heroHeadline}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.15 }}
                            className="text-xl sm:text-2xl font-heading font-medium text-balance leading-snug"
                        >
                            Building as a{" "}
                            <RotatingText words={ROTATING_ROLES} />
                            <span className="text-muted-foreground">
                                {" "}— BTech CS + AI @ NSIT Dwarka.
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
                                className="group relative inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3 text-sm font-medium overflow-hidden hover:scale-[1.02] transition-transform"
                            >
                                <span className="relative z-10">View Projects</span>
                                <ArrowRight className="relative z-10 h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                                <span
                                    aria-hidden
                                    className="absolute inset-0 -translate-x-full group-hover:translate-x-0 transition-transform duration-500"
                                    style={{
                                        background:
                                            "linear-gradient(90deg, transparent, hsl(var(--background) / 0.18), transparent)",
                                    }}
                                />
                            </a>
                            <a
                                data-testid={TID.heroCtaContact}
                                href="#contact"
                                className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 backdrop-blur px-6 py-3 text-sm font-medium hover:bg-secondary hover:border-foreground/30 transition-all"
                            >
                                Contact Me
                            </a>
                        </motion.div>
                    </div>

                    {/* Right-side meta panel */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="lg:col-span-5 lg:justify-self-end w-full lg:w-auto"
                    >
                        <div className="rounded-2xl border border-border bg-card/40 backdrop-blur p-5 lg:min-w-[280px]">
                            <div className="flex items-center justify-between gap-4 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                                <span>/ Status</span>
                                <span>v26.06</span>
                            </div>
                            <div className="mt-4 space-y-3 text-sm">
                                <Row label="Role" value="AI/ML · Backend" />
                                <Row label="Stack" value="Python · FastAPI · LLM" />
                                <Row
                                    label="Location"
                                    value={
                                        <span className="inline-flex items-center gap-1.5">
                                            <MapPin className="h-3 w-3" />
                                            {profile.location}
                                        </span>
                                    }
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Scroll cue */}
                <motion.a
                    href="#about"
                    aria-label="Scroll to about"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 0.6 }}
                    className="hidden md:flex absolute bottom-6 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                    <span className="font-mono text-[10px] uppercase tracking-[0.25em]">
                        Scroll
                    </span>
                    <motion.div
                        animate={{ y: [0, 6, 0] }}
                        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <ArrowDown className="h-4 w-4" />
                    </motion.div>
                </motion.a>
            </div>
        </section>
    );
}

function Row({ label, value }) {
    return (
        <div className="flex items-center justify-between gap-4 border-b border-border/70 pb-2 last:border-0 last:pb-0">
            <span className="text-muted-foreground">{label}</span>
            <span className="font-medium text-right">{value}</span>
        </div>
    );
}
