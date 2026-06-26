import { useCallback, useEffect, useState } from "react";

const KEY = "anuj-portfolio:roadmap-progress:v1";

// Loads & persists user-marked skill completion in localStorage.
export default function useRoadmapProgress(roadmap) {
    const [done, setDone] = useState({});

    // Initialise from defaults + stored overrides
    useEffect(() => {
        const defaults = {};
        roadmap.forEach((phase) => {
            phase.skills.forEach((sk) => {
                const id = `${phase.phase}::${sk.name}`;
                defaults[id] = phase.status === "Done";
            });
        });
        try {
            const raw = localStorage.getItem(KEY);
            if (raw) {
                const stored = JSON.parse(raw);
                setDone({ ...defaults, ...stored });
                return;
            }
        } catch {
            // ignore parsing errors
        }
        setDone(defaults);
    }, [roadmap]);

    const persist = (next) => {
        setDone(next);
        try {
            localStorage.setItem(KEY, JSON.stringify(next));
        } catch {
            // ignore quota errors
        }
    };

    const toggle = useCallback(
        (phaseKey, skillName) => {
            const id = `${phaseKey}::${skillName}`;
            const next = { ...done, [id]: !done[id] };
            persist(next);
        },
        [done]
    );

    const reset = useCallback(() => {
        try {
            localStorage.removeItem(KEY);
        } catch {
            // ignore
        }
        const defaults = {};
        roadmap.forEach((phase) => {
            phase.skills.forEach((sk) => {
                defaults[`${phase.phase}::${sk.name}`] = phase.status === "Done";
            });
        });
        setDone(defaults);
    }, [roadmap]);

    const isDone = (phaseKey, skillName) =>
        !!done[`${phaseKey}::${skillName}`];

    const phaseProgress = (phase) => {
        const total = phase.skills.length;
        const completed = phase.skills.filter((sk) => isDone(phase.phase, sk.name)).length;
        return { completed, total, ratio: total ? completed / total : 0 };
    };

    return { isDone, toggle, reset, phaseProgress };
}
