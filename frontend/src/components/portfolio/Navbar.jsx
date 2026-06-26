import { useEffect, useState } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "@/lib/ThemeProvider";
import { navLinks, profile } from "@/data/portfolio";
import { TID } from "@/lib/testIds";
import { cn } from "@/lib/utils";

export default function Navbar() {
    const { theme, toggle } = useTheme();
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 8);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header
            data-testid={TID.navRoot}
            className={cn(
                "fixed top-0 inset-x-0 z-50 transition-all duration-300",
                scrolled
                    ? "bg-background/70 backdrop-blur-xl border-b border-border"
                    : "bg-transparent border-b border-transparent"
            )}
        >
            <div className="max-w-6xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
                <a
                    href="#top"
                    data-testid={TID.navBrand}
                    className="font-heading font-extrabold tracking-tight text-lg flex items-center gap-2"
                >
                    <span className="inline-block h-2 w-2 rounded-full bg-foreground" />
                    {profile.firstName}
                    <span className="text-muted-foreground">.</span>
                </a>

                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((l) => (
                        <a
                            key={l.href}
                            href={l.href}
                            data-testid={TID.navLink(l.label.toLowerCase())}
                            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                        >
                            {l.label}
                        </a>
                    ))}
                </nav>

                <div className="flex items-center gap-2">
                    <button
                        data-testid={TID.themeToggle}
                        onClick={toggle}
                        aria-label="Toggle theme"
                        className="h-9 w-9 grid place-items-center rounded-md border border-border hover:bg-secondary transition-colors"
                    >
                        {theme === "dark" ? (
                            <Sun className="h-4 w-4" />
                        ) : (
                            <Moon className="h-4 w-4" />
                        )}
                    </button>

                    <button
                        data-testid={TID.mobileMenuButton}
                        onClick={() => setOpen((v) => !v)}
                        aria-label="Toggle menu"
                        className="md:hidden h-9 w-9 grid place-items-center rounded-md border border-border hover:bg-secondary transition-colors"
                    >
                        {open ? (
                            <X className="h-4 w-4" />
                        ) : (
                            <Menu className="h-4 w-4" />
                        )}
                    </button>
                </div>
            </div>

            {open && (
                <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl">
                    <nav className="flex flex-col px-6 py-4 gap-1">
                        {navLinks.map((l) => (
                            <a
                                key={l.href}
                                href={l.href}
                                data-testid={TID.mobileMenuLink(
                                    l.label.toLowerCase()
                                )}
                                onClick={() => setOpen(false)}
                                className="py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                            >
                                {l.label}
                            </a>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    );
}
