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

// Sequential, phase-based skill roadmap. Edit phases / skills any time.
// Target role: AI Engineer / Backend SDE.
export const roadmap = [
    {
        phase: "Phase 01",
        title: "Foundations",
        status: "Done",
        why: "Everything else is built on this. You can't write systems if you can't write code, version it, and reason about what a computer is actually doing.",
        parallel:
            "Python + Git can be learned together from day one. CS Fundamentals run alongside in college. DSA starts only after you're fluent in basic Python.",
        skills: [
            { name: "Python Programming", level: "Core", strict: true },
            { name: "Git & Version Control", level: "Core", parallel: true },
            { name: "CS Fundamentals — OS · CN · DBMS · OOP", level: "College", parallel: true },
            { name: "Data Structures & Algorithms", level: "After Python", strict: true },
        ],
    },
    {
        phase: "Phase 02",
        title: "Core backend & data",
        status: "Done",
        why: "Real software lives on top of databases and APIs. Before going deep into AI, you need to be able to ship a working server that talks to a DB. This is what makes you employable, not just academically prepared.",
        parallel:
            "SQL and Backend Dev are tightly coupled — learn them together. Docker comes in once your backend works locally.",
        skills: [
            { name: "SQL & Databases", level: "Foundational", strict: true },
            { name: "Backend Dev — FastAPI / Django / Node", level: "Core", strict: true },
            { name: "Docker & Containers", level: "After first backend", parallel: true },
        ],
    },
    {
        phase: "Phase 03",
        title: "AI specialization",
        status: "Now",
        why: "This is the actual target. Without Phase 1 and 2, AI feels like magic and breaks in production. With them, ML is just another module of a larger system you can debug.",
        parallel:
            "ML → Deep Learning is strictly sequential. GenAI / LLM Engineering needs both DL fundamentals and a working backend, so it's gated by Phase 2.",
        skills: [
            { name: "Machine Learning", level: "Core ML", strict: true },
            { name: "Deep Learning", level: "After ML", strict: true },
            { name: "GenAI & LLM Engineering", level: "After DL + Backend", strict: true },
        ],
    },
    {
        phase: "Phase 04",
        title: "Production & scale",
        status: "Next",
        why: "Now you stop being someone who builds toys and start being someone who ships. Cloud, system design and MLOps are what separate a student project from real infrastructure.",
        parallel:
            "Cloud and Docker pair naturally. System Design is a long, ongoing study — start early, keep going. MLOps comes last because it needs all of the above.",
        skills: [
            { name: "Cloud — AWS / GCP / Azure", level: "Pick one, go deep", parallel: true },
            { name: "System Design", level: "Ongoing study", parallel: true },
            { name: "MLOps", level: "After AI + Cloud", strict: true },
        ],
    },
    {
        phase: "Phase 05",
        title: "Job-ready",
        status: "Next",
        why: "Skills are necessary but not sufficient. A polished portfolio proves you can ship; interview prep makes sure you can communicate what you've built and solve problems on the spot.",
        parallel:
            "Portfolio and Interview Prep run in parallel for at least 2–3 months before applications. Each project should be one you can actually defend.",
        skills: [
            { name: "Project Portfolio Strength", level: "Ongoing", parallel: true },
            { name: "Interview Preparation", level: "Final 3 months", parallel: true },
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

// "Currently building" / what's coming next — flagship projects in progress.
export const comingNext = [
    {
        title: "LLM Fine-Tuning Lab",
        tag: "ML-Heavy",
        status: "In progress",
        description:
            "Fine-tuning small open-source LLMs with LoRA + PEFT for a domain-specific reasoning task, plus a lightweight eval harness to measure quality before and after.",
        stack: ["LoRA", "PEFT", "PyTorch", "Hugging Face"],
    },
    {
        title: "Production-Grade RAG System",
        tag: "Balanced ML/AI",
        status: "In progress",
        description:
            "Advanced RAG pipeline with hybrid retrieval, cross-encoder reranking, and a RAGAS-style evaluation harness — designed to be deployable and observable, not just a notebook demo.",
        stack: ["Hybrid Retrieval", "Reranking", "FastAPI", "ChromaDB"],
    },
    {
        title: "Multi-Agent LangGraph App",
        tag: "AI-Heavy",
        status: "In progress",
        description:
            "Agentic system orchestrating specialised LLM agents with tool integration via Model Context Protocol (MCP), with live cloud deployment as the deliverable.",
        stack: ["LangGraph", "MCP", "Agentic Workflow", "Docker"],
    },
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
