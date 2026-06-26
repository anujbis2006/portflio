// Single source of truth for all portfolio content.
// Edit this file to update the site instantly.

export const profile = {
    name: "Anuj Biswas",
    firstName: "Anuj",
    lastName: "Biswas",
    headline: "AI & Machine Learning Enthusiast",
    subheadline: "Building practical AI applications — LLM pipelines, RAG systems, and Python-powered backends.",
    location: "New Delhi, India",
    email: "anujbiswas303@gmail.com",
    phone: "+91 9717523630",
    // Update these with your real URLs when ready.
    linkedin: "https://www.linkedin.com/",
    github: "https://github.com/",
    resumeUrl: "/assets/Anuj_Biswas_Resume.pdf",
    available: true,
    availabilityNote: "Open to internships & SDE / AI roles",
};

export const about = {
    paragraphs: [
        "I'm an AI and Machine Learning enthusiast focused on building practical AI applications — not just training models in notebooks. I care about how systems ship: clean APIs, reliable pipelines, and integrations that actually solve a problem.",
        "Right now I'm an undergraduate in Computer Science & Artificial Intelligence at NSIT Dwarka, exploring LLM applications, Retrieval-Augmented Generation, and AI-powered backend development with Python-based frameworks.",
    ],
    quickFacts: [
        { label: "Currently", value: "BTech CS + AI · NSIT Dwarka" },
        { label: "Focus", value: "LLMs, RAG, AI Backends" },
        { label: "Based in", value: "New Delhi, India" },
        { label: "Status", value: "Open to opportunities" },
    ],
};

export const skills = [
    {
        category: "Programming Languages",
        items: ["Python", "JavaScript", "C++"],
    },
    {
        category: "Frameworks & Libraries",
        items: [
            "TensorFlow",
            "Keras",
            "FastAPI",
            "Streamlit",
            "scikit-learn",
            "pandas",
            "NumPy",
        ],
    },
    {
        category: "Databases",
        items: ["MySQL", "Supabase", "Firebase"],
    },
    {
        category: "Tools & Platforms",
        items: ["Git", "GitHub", "VS Code", "Docker"],
    },
    {
        category: "Soft Skills",
        items: ["Communication", "Problem Solving", "Critical Thinking"],
    },
];

export const nowLearning = {
    intro:
        "I treat my portfolio as a working lab notebook. Here's what's currently on my desk:",
    items: [
        {
            title: "Advanced RAG architectures",
            description:
                "Hybrid retrieval, reranking, and structured outputs over real codebases.",
            tag: "In progress",
        },
        {
            title: "Hugging Face model integration",
            description:
                "Embedding pipelines (BAAI) and self-hosted inference without paid APIs.",
            tag: "Building",
        },
        {
            title: "Backend systems with FastAPI",
            description:
                "Designing clean, typed ML-powered APIs ready for production deployment.",
            tag: "Sharpening",
        },
        {
            title: "DSA mastery",
            description:
                "Graphs, DP, trees, heaps, and sliding window — continuing the LeetCode grind.",
            tag: "Ongoing",
        },
    ],
};

export const projects = [
    {
        title: "Multimodal Fake News Detection",
        tagline: "Text + Image classification with late-fusion deep learning.",
        problem:
            "Single-modality fake news classifiers miss context. I built a system that reasons over both the article text and the accompanying image.",
        description:
            "Designed a late-fusion architecture combining LSTM-based text embeddings with CNN-based image features. Trained separate text and image models, then integrated them through fusion layers for final binary (Real / Fake) classification, improving prediction robustness.",
        stack: ["Python", "TensorFlow", "Keras", "CNN", "LSTM", "NLP", "Streamlit"],
        duration: "Dec 2025 — Present",
        links: [{ label: "GitHub", url: "https://github.com/", icon: "github" }],
        type: "Individual project",
        featured: true,
    },
    {
        title: "GitHub Analyzer",
        tagline: "RAG-powered Q&A over any GitHub repository.",
        problem:
            "Reading an unfamiliar codebase is slow. I wanted a tool that lets you talk to a repo and get grounded answers.",
        description:
            "Ingests repository URLs, parses codebases, and generates structured summaries for faster understanding of projects. Implemented a Retrieval-Augmented Generation chat system using ChromaDB for vector storage and open-source Hugging Face embeddings (BAAI) — scalable, cost-efficient, and free of paid APIs.",
        stack: ["LLM", "RAG", "Hugging Face", "ChromaDB", "FastAPI"],
        duration: "Mar 2026 — Apr 2026",
        links: [{ label: "Live", url: "#", icon: "external" }],
        type: "Backend developer · LLM integration",
        featured: true,
    },
    {
        title: "AI Resume Analyzer",
        tagline: "NLP-driven resume parsing and semantic matching.",
        problem:
            "Recruiters skim resumes against job descriptions in seconds. I built a backend that does the heavy lifting first.",
        description:
            "Implemented NLP-based resume parsing and skill extraction to analyze keywords, experience, and domain relevance. Integrated Hugging Face models for semantic understanding of resumes and job descriptions. Exposed everything through a clean FastAPI backend for real-time analysis.",
        stack: ["Python", "NLP", "Machine Learning", "FastAPI", "Hugging Face"],
        duration: "Mar 2026 — Present",
        links: [{ label: "GitHub", url: "https://github.com/", icon: "github" }],
        type: "Backend · AI model integration",
        featured: false,
    },
];

export const education = [
    {
        institution: "Netaji Subhas Institute of Technology",
        location: "Dwarka, New Delhi",
        degree: "B.Tech in Computer Science & Artificial Intelligence",
        period: "Aug 2024 — Sep 2028",
        note: "Coursework spans AI, ML, systems, and applied software engineering.",
        highlights: [
            "JEE Main · 97 percentile",
        ],
    },
];

export const achievements = [
    {
        title: "300+ DSA problems solved on LeetCode",
        detail:
            "Covered graphs, dynamic programming, trees, heaps, and sliding window techniques.",
    },
    {
        title: "Built and deployed production-style AI apps",
        detail:
            "RAG, vector databases, and modern API integrations — shipped, not just prototyped.",
    },
    {
        title: "Strong debugging & problem-solving fundamentals",
        detail:
            "Sharpened through consistent competitive programming practice.",
    },
    {
        title: "Hands-on cloud deployment",
        detail:
            "Full-stack deployment workflows on platforms like Render for AI projects.",
    },
    {
        title: "Semantic search & contextual Q&A systems",
        detail:
            "Built a GitHub documentation analyzer with grounded RAG-based answers.",
    },
];

export const futureGoals = [
    "Land a serious AI / Backend internship where I can ship real systems.",
    "Contribute to an open-source LLM tooling project.",
    "Build one well-engineered AI product end-to-end every quarter.",
];

export const navLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Now", href: "#now" },
    { label: "Projects", href: "#projects" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
];
