// Centralized data-testid constants for the portfolio.
export const TID = {
    // Nav
    navRoot: "nav-root",
    navBrand: "nav-brand",
    navLink: (key) => `nav-link-${key}`,
    themeToggle: "theme-toggle",
    mobileMenuButton: "mobile-menu-button",
    mobileMenuLink: (key) => `mobile-nav-link-${key}`,

    // Hero
    heroSection: "hero-section",
    heroName: "hero-name",
    heroHeadline: "hero-headline",
    heroSubheadline: "hero-subheadline",
    heroCtaProjects: "hero-cta-view-projects",
    heroCtaContact: "hero-cta-contact-me",
    heroAvailability: "hero-availability-pill",

    // About
    aboutSection: "about-section",

    // Skills
    skillsSection: "skills-section",
    skillBadge: (key) => `skill-badge-${key}`,

    // Now Learning
    nowSection: "now-learning-section",
    nowCard: (key) => `now-card-${key}`,

    // Projects
    projectsSection: "projects-section",
    projectCard: (key) => `project-card-${key}`,
    projectLink: (key, label) => `project-link-${key}-${label}`,

    // Education
    educationSection: "education-section",
    educationItem: (key) => `education-item-${key}`,

    // Achievements
    achievementsSection: "achievements-section",
    achievementItem: (key) => `achievement-item-${key}`,

    // Goals
    goalsSection: "goals-section",

    // Contact
    contactSection: "contact-section",
    contactForm: "contact-form",
    contactName: "contact-input-name",
    contactEmail: "contact-input-email",
    contactSubject: "contact-input-subject",
    contactMessage: "contact-input-message",
    contactSubmit: "contact-submit-button",
    contactDownloadResume: "contact-download-resume",
    contactEmailLink: "contact-email-link",
    contactLinkedinLink: "contact-linkedin-link",
    contactGithubLink: "contact-github-link",

    // Footer
    footer: "footer",
    footerBackToTop: "footer-back-to-top",
};
