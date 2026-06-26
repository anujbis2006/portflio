import { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { toast } from "sonner";
import {
    Mail,
    Linkedin,
    Github,
    Download,
    Send,
    ArrowUpRight,
} from "lucide-react";
import { profile } from "@/data/portfolio";
import { TID } from "@/lib/testIds";
import SectionHeader from "./SectionHeader";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const initial = { name: "", email: "", subject: "", message: "" };

export default function Contact() {
    const [form, setForm] = useState(initial);
    const [errors, setErrors] = useState({});
    const [submitting, setSubmitting] = useState(false);

    const update = (k) => (e) => {
        setForm((f) => ({ ...f, [k]: e.target.value }));
        if (errors[k]) setErrors((e2) => ({ ...e2, [k]: undefined }));
    };

    const validate = () => {
        const e = {};
        if (!form.name.trim()) e.name = "Required";
        if (!form.email.trim()) e.email = "Required";
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
            e.email = "Invalid email";
        if (!form.message.trim()) e.message = "Required";
        setErrors(e);
        return Object.keys(e).length === 0;
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        if (!validate()) return;
        setSubmitting(true);
        try {
            await axios.post(`${API}/contact`, {
                name: form.name.trim(),
                email: form.email.trim(),
                subject: form.subject.trim() || null,
                message: form.message.trim(),
            });
            toast.success("Message sent", {
                description: "Thanks — I'll get back to you soon.",
            });
            setForm(initial);
        } catch (err) {
            toast.error("Something went wrong", {
                description:
                    err?.response?.data?.detail ||
                    "Please try again in a moment.",
            });
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <section
            id="contact"
            data-testid={TID.contactSection}
            className="py-24 sm:py-32 border-t border-border"
        >
            <div className="max-w-6xl mx-auto px-6 lg:px-8">
                <SectionHeader
                    index="09"
                    label="Contact"
                    title="Let's build something."
                    subhead="Internships, collaborations, real conversations."
                    description="Reach out for internships, collaborations, or just a good conversation about AI and systems."
                />

                <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
                    {/* Channels */}
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-5 space-y-4"
                    >
                        <a
                            data-testid={TID.contactEmailLink}
                            href={`mailto:${profile.email}`}
                            className="group block rounded-2xl border border-border bg-card/40 backdrop-blur-sm p-6 hover:border-foreground/30 transition-colors"
                        >
                            <div className="flex items-center justify-between gap-4">
                                <div className="flex items-center gap-3">
                                    <Mail className="h-4 w-4" />
                                    <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                                        Email
                                    </span>
                                </div>
                                <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-foreground group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
                            </div>
                            <p className="mt-4 font-heading text-lg sm:text-xl tracking-tight break-all">
                                {profile.email}
                            </p>
                        </a>

                        <div className="grid grid-cols-2 gap-4">
                            <a
                                data-testid={TID.contactLinkedinLink}
                                href={profile.linkedin}
                                target="_blank"
                                rel="noreferrer"
                                className="group rounded-2xl border border-border bg-card/40 backdrop-blur-sm p-5 hover:border-foreground/30 transition-colors"
                            >
                                <Linkedin className="h-4 w-4" />
                                <div className="mt-6 flex items-center justify-between">
                                    <span className="font-heading font-medium">
                                        LinkedIn
                                    </span>
                                    <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                                </div>
                            </a>
                            <a
                                data-testid={TID.contactGithubLink}
                                href={profile.github}
                                target="_blank"
                                rel="noreferrer"
                                className="group rounded-2xl border border-border bg-card/40 backdrop-blur-sm p-5 hover:border-foreground/30 transition-colors"
                            >
                                <Github className="h-4 w-4" />
                                <div className="mt-6 flex items-center justify-between">
                                    <span className="font-heading font-medium">
                                        GitHub
                                    </span>
                                    <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                                </div>
                            </a>
                        </div>

                        <a
                            data-testid={TID.contactDownloadResume}
                            href={profile.resumeUrl}
                            download
                            className="group flex items-center justify-between rounded-2xl border border-foreground bg-foreground text-background px-6 py-5 hover:opacity-90 transition-all"
                        >
                            <div>
                                <div className="font-mono text-xs uppercase tracking-widest opacity-70">
                                    / Resume
                                </div>
                                <div className="mt-1 font-heading font-semibold text-lg">
                                    Download PDF
                                </div>
                            </div>
                            <Download className="h-5 w-5 group-hover:translate-y-0.5 transition-transform" />
                        </a>
                    </motion.div>

                    {/* Form */}
                    <motion.form
                        data-testid={TID.contactForm}
                        onSubmit={onSubmit}
                        noValidate
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="lg:col-span-7 rounded-2xl border border-border bg-card/40 backdrop-blur-sm p-6 sm:p-8 space-y-5"
                    >
                        <div className="grid sm:grid-cols-2 gap-4">
                            <Field
                                id="name"
                                label="Your name"
                                value={form.name}
                                onChange={update("name")}
                                error={errors.name}
                                testid={TID.contactName}
                                placeholder="Jane Recruiter"
                            />
                            <Field
                                id="email"
                                type="email"
                                label="Email"
                                value={form.email}
                                onChange={update("email")}
                                error={errors.email}
                                testid={TID.contactEmail}
                                placeholder="you@company.com"
                            />
                        </div>
                        <Field
                            id="subject"
                            label="Subject"
                            value={form.subject}
                            onChange={update("subject")}
                            testid={TID.contactSubject}
                            placeholder="Internship · Opportunity · Question"
                            optional
                        />
                        <TextArea
                            id="message"
                            label="Message"
                            value={form.message}
                            onChange={update("message")}
                            error={errors.message}
                            testid={TID.contactMessage}
                            placeholder="Tell me what you're working on…"
                        />

                        <button
                            type="submit"
                            data-testid={TID.contactSubmit}
                            disabled={submitting}
                            className="group inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3 text-sm font-medium hover:opacity-90 disabled:opacity-60 disabled:cursor-not-allowed transition-all"
                        >
                            {submitting ? "Sending…" : "Send message"}
                            <Send className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                        </button>
                    </motion.form>
                </div>
            </div>
        </section>
    );
}

function Field({
    id,
    label,
    value,
    onChange,
    error,
    testid,
    type = "text",
    placeholder,
    optional,
}) {
    return (
        <label htmlFor={id} className="block">
            <span className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                {label}
                {optional && <span className="opacity-60">· optional</span>}
            </span>
            <input
                id={id}
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                data-testid={testid}
                className="mt-2 w-full bg-transparent border-b border-border focus:border-foreground outline-none py-2.5 text-base text-foreground placeholder:text-muted-foreground/50 transition-colors"
            />
            {error && (
                <span className="mt-1 block text-xs text-destructive">
                    {error}
                </span>
            )}
        </label>
    );
}

function TextArea({ id, label, value, onChange, error, testid, placeholder }) {
    return (
        <label htmlFor={id} className="block">
            <span className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                {label}
            </span>
            <textarea
                id={id}
                value={value}
                onChange={onChange}
                rows={5}
                placeholder={placeholder}
                data-testid={testid}
                className="mt-2 w-full bg-transparent border border-border rounded-lg focus:border-foreground outline-none p-4 text-base text-foreground placeholder:text-muted-foreground/50 transition-colors resize-none"
            />
            {error && (
                <span className="mt-1 block text-xs text-destructive">
                    {error}
                </span>
            )}
        </label>
    );
}
