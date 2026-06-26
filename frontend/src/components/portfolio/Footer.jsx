import { ArrowUp } from "lucide-react";
import { profile } from "@/data/portfolio";
import { TID } from "@/lib/testIds";

export default function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer
            data-testid={TID.footer}
            className="border-t border-border py-10"
        >
            <div className="max-w-6xl mx-auto px-6 lg:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                    © {year} · {profile.name} · Built with care.
                </div>
                <a
                    href="#top"
                    data-testid={TID.footerBackToTop}
                    className="group inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                    Back to top
                    <span className="h-7 w-7 grid place-items-center rounded-full border border-border group-hover:border-foreground/40 transition-colors">
                        <ArrowUp className="h-3.5 w-3.5" />
                    </span>
                </a>
            </div>
        </footer>
    );
}
