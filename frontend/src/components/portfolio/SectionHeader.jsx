// Reusable section header with optional italic editorial subhead in brand color.
export default function SectionHeader({ index, label, title, subhead, description }) {
    return (
        <div className="mb-12 sm:mb-16">
            <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                <span className="text-foreground/60">{index}</span>
                <span className="h-px w-8 bg-foreground/30" />
                <span>{label}</span>
            </div>
            <h2 className="mt-4 font-heading font-bold tracking-tight text-balance text-3xl sm:text-4xl lg:text-5xl">
                {title}
            </h2>
            {subhead && (
                <p className="mt-3 font-serif italic text-xl sm:text-2xl text-brand">
                    {subhead}
                </p>
            )}
            {description && (
                <p className="mt-4 max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed">
                    {description}
                </p>
            )}
        </div>
    );
}
