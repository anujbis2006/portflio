# Anuj Biswas — Personal Portfolio · PRD

## Original Problem Statement
Premium, modern, highly polished personal portfolio for Anuj Biswas (AI/ML student, BTech CS+AI @ NSIT Dwarka). Resume is the single source of truth — no fabricated content. Dark + light mode, fully responsive, recruiter-friendly. Sections: Hero, About, Skills, Now Learning, Projects, Education, Achievements, Future Goals, Contact (with form + resume download).

## Architecture
- **Backend**: FastAPI (`/app/backend/server.py`) — `/api/contact` (POST stores in MongoDB `contact_messages`, GET lists), `/api/status` (legacy), `/api/`.
- **Frontend**: React 19 + CRA/CRACO, Tailwind, Framer Motion, lucide-react, sonner. Single-page hash-nav.
- **Design system**: Cabinet Grotesk (heading) + Satoshi (body) + JetBrains Mono (mono). Swiss minimal + glass cards. Theme provider toggles `.dark` class.
- **Content source**: `/app/frontend/src/data/portfolio.js` — single file controls every section.
- **Resume asset**: `/app/frontend/public/assets/Anuj_Biswas_Resume.pdf` (served at `/assets/...`).

## Implemented (2026-06-26)
- Hero with name, headline, availability pill, CTAs, location.
- About + quick-facts card.
- Skills grouped (Languages / Frameworks / Databases / Tools / Soft Skills).
- Now Learning / Currently Building (4 cards, editable).
- Projects bento grid (Multimodal Fake News Detection, GitHub Analyzer, AI Resume Analyzer).
- Education timeline (NSIT Dwarka).
- Achievements (5 items from resume).
- Future Goals (3 cards).
- Contact: working form (validated, POST `/api/contact`), email/LinkedIn/GitHub links, Download Resume.
- Sticky glass navbar + mobile menu + theme toggle (persisted in localStorage).
- SEO meta + OG tags.

## User Personas
- Tech recruiters / hiring managers screening for SDE / AI / ML internships.
- Engineering peers / mentors evaluating projects.

## Core Requirements (static)
1. Resume = source of truth — no invented data.
2. Easy editing via `portfolio.js`.
3. Light + dark themes.
4. Responsive (mobile / tablet / desktop).
5. Accessible + SEO-friendly.

## Backlog
- **P1**: Real LinkedIn + GitHub URLs (currently placeholders `#` / `https://github.com/`).
- **P1**: Per-project GitHub repo links once provided.
- **P2**: Admin route to view contact submissions (currently DB only).
- **P2**: Email notification on contact submit (needs Resend / SendGrid key).
- **P2**: OG image + favicon branding.
- **P2**: Blog / "Writing" section.
- **P3**: Analytics dashboard, view counters, project case-study pages.

## Next Tasks
- Collect LinkedIn / GitHub URLs from Anuj and update `portfolio.js`.
- Optional: wire email notifications on contact submit.
