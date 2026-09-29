import { useState } from "react";
import { skillGroups, skills } from "../data/profile";
import { useInView } from "../hooks/useInView";
import Section from "./Section";

function SkillTile({ skill, show }) {
  return (
    <li className="rounded-lg border border-white/8 bg-ink-800/50 px-3 py-2">
      <div className="flex items-baseline justify-between gap-2 text-sm">
        <span className="truncate">{skill.name}</span>
        <span className="font-mono text-xs text-amber">{skill.level}%</span>
      </div>
      <div
        className="mt-1.5 h-1 overflow-hidden rounded-full bg-white/10"
        role="progressbar"
        aria-label={skill.name}
        aria-valuenow={skill.level}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div
          className="h-full rounded-full bg-signal transition-[width] duration-1000 ease-out"
          style={{ width: show ? `${skill.level}%` : "0%" }}
        />
      </div>
    </li>
  );
}

export default function Skills() {
  const [group, setGroup] = useState("All");
  const [ref, inView] = useInView();
  const visible = group === "All" ? skills : skills.filter((s) => s.group === group);

  return (
    <Section id="skills" title="Skills" intro="Self-assessed proficiency. Filter by area to focus the list.">
      <div ref={ref}>
        <div className="mb-5 flex flex-wrap gap-2" role="tablist" aria-label="Skill groups">
          {["All", ...skillGroups].map((g) => (
            <button
              key={g}
              role="tab"
              aria-selected={group === g}
              onClick={() => setGroup(g)}
              className={`rounded-full border px-3.5 py-1 text-sm transition-colors ${
                group === g
                  ? "border-signal bg-signal/15 text-signal"
                  : "border-white/10 text-muted hover:border-white/30 hover:text-paper"
              }`}
            >
              {g}
            </button>
          ))}
        </div>
        <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {visible.map((s) => (
            <SkillTile key={s.name} skill={s} show={inView} />
          ))}
        </ul>
      </div>
    </Section>
  );
}
