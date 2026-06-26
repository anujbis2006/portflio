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
        "I treat my portfolio as a working lab notebook. Entering my 3rd year, I'm going deeper than just using models — I'm learning how they actually work and how to build them.",
    items: [
        {
            title: "LLM training & fine-tuning",
            description:
                "Going beyond API calls — learning how transformers train, tokenization internals, LoRA / PEFT, and instruction tuning on small open models.",
            tag: "Going deep",
        },
        {
            title: "Reading AI research papers",
            description:
                "Working through foundational and current papers (Attention Is All You Need, RAG, LoRA, FlashAttention) and learning to extract ideas from arXiv weekly.",
            tag: "Weekly habit",
        },
        {
            title: "How AI systems actually work",
            description:
                "End-to-end ML systems: data pipelines, model serving, inference optimisation, caching, evals, and monitoring in production.",
            tag: "Systems thinking",
        },
        {
            title: "Advanced RAG architectures",
            description:
                "Hybrid retrieval, reranking, structured outputs, agentic flows, and grounding strategies for real codebases and documents.",
            tag: "In progress",
        },
        {
            title: "Backend & distributed systems",
            description:
                "Designing typed, scalable FastAPI services — queues, async workers, caching, and the foundations behind production AI infra.",
            tag: "Sharpening",
        },
        {
            title: "DSA & problem solving",
            description:
                "Continuing the LeetCode grind across graphs, DP, trees, heaps, and contest-style problem solving.",
            tag: "Ongoing",
        },
    ],
};

// Year-by-year roadmap — easy to edit each semester.
export const roadmap = [
    {
        year: "Year 1 — 2024",
        title: "Foundations",
        status: "Done",
        items: [
            "Python, C++ and core CS fundamentals",
            "Math for ML — linear algebra, probability, calculus",
            "First ML models with scikit-learn and TensorFlow",
            "Started competitive programming on LeetCode",
        ],
    },
    {
        year: "Year 2 — 2025",
        title: "Applied AI & shipping projects",
        status: "Done",
        items: [
            "Built CNN + LSTM multimodal classifier",
            "FastAPI backends powering ML models",
            "First production RAG project with vector DBs",
            "Crossed 300+ DSA problems",
        ],
    },
    {
        year: "Year 3 — 2026",
        title: "Going deep on LLMs & systems",
        status: "Now",
        items: [
            "Reading & reproducing AI research papers",
            "LLM fine-tuning with LoRA / PEFT on open models",
            "Studying transformer internals & inference optimisation",
            "Targeting serious AI / SDE internships",
        ],
    },
    {
        year: "Year 4 — 2027+",
        title: "Research-grade engineering",
        status: "Next",
        items: [
            "Contribute to open-source LLM tooling",
            "Ship one well-engineered AI product per quarter",
            "Explore agentic systems & evaluation frameworks",
            "Full-time AI / ML / SDE roles",
        ],
    },
];

export const reading = [
    "Attention Is All You Need — Vaswani et al.",
    "Retrieval-Augmented Generation for Knowledge-Intensive NLP",
    "LoRA: Low-Rank Adaptation of Large Language Models",
    "FlashAttention — fast & memory-efficient exact attention",
    "Chain-of-Thought Prompting Elicits Reasoning",
];

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
    "Land a serious AI / Backend internship where I can ship real systems, not just train models in notebooks.",
    "Reproduce one foundational LLM paper end-to-end — from architecture to training run.",
    "Contribute to an open-source LLM tooling project (RAG, evals, or serving).",
    "Build one well-engineered AI product end-to-end every quarter.",
];

export const navLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Now", href: "#now" },
    { label: "Roadmap", href: "#roadmap" },
    { label: "Projects", href: "#projects" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
];
