import { ArrowDown, Download, Mail, MapPin } from "lucide-react";
import { profile } from "../data/profile";
import { GithubIcon, LinkedinIcon } from "./Icons";

// Deterministic pseudo-random points so the plot looks the same on every load.
function makePoints() {
  let seed = 11;
  const rnd = () => {
    seed = (seed * 16807) % 2147483647;
    return seed / 2147483647;
  };
  return Array.from({ length: 40 }, (_, i) => {
    const x = 36 + (i / 39) * 292;
    const trend = 196 - (x - 36) * 0.52;
    const y = Math.max(24, Math.min(206, trend + (rnd() - 0.5) * 72));
    return { x, y, r: 2.2 + rnd() * 2 };
  });
}
const points = makePoints();

function FitPlot() {
  return (
    <div className="panel p-4 sm:p-5">
      <svg viewBox="0 0 360 240" className="w-full" role="img" aria-label="Scatter plot with a fitted regression line">
        <g stroke="rgba(154,165,196,0.35)" strokeWidth="1">
          <line x1="30" y1="214" x2="344" y2="214" />
          <line x1="30" y1="14" x2="30" y2="214" />
        </g>
        <g stroke="rgba(154,165,196,0.1)" strokeWidth="1">
          {[64, 114, 164].map((y) => (
            <line key={y} x1="30" y1={y} x2="344" y2={y} />
          ))}
        </g>
        {points.map((p, i) => (
          <circle
            key={i}
            className="plot-dot"
            cx={p.x}
            cy={p.y}
            r={p.r}
            fill="#6EE7D0"
            style={{ animationDelay: `${0.25 + i * 0.022}s` }}
          />
        ))}
        <line className="plot-line" x1="36" y1="196" x2="328" y2="44" stroke="#F6C177" strokeWidth="3" strokeLinecap="round" />
      </svg>
      <div className="mt-3 flex flex-wrap items-center gap-2 font-mono text-xs text-muted">
        <span className="text-amber">model.fit(X, y)</span>
        <span className="rounded bg-white/5 px-2 py-0.5">SMOTE</span>
        <span className="rounded bg-white/5 px-2 py-0.5">GridSearchCV</span>
        <span className="rounded bg-white/5 px-2 py-0.5">Logistic Regression</span>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="top" className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-10 pt-16 sm:pt-24 lg:grid-cols-[1.15fr_0.85fr]">
      <div>
        <p className="mb-5 flex items-center gap-2 text-sm text-muted">
          <MapPin size={16} className="text-signal" /> {profile.location} · {profile.role}
        </p>
        <h1 className="font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
          {profile.shortName}
        </h1>
        <p className="mt-6 max-w-lg text-lg leading-relaxed text-paper/80">{profile.headline}</p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#projects" className="btn btn-primary">
            <ArrowDown size={16} /> See my projects
          </a>
          <a href={profile.cvFile} download className="btn btn-ghost">
            <Download size={16} /> Download CV
          </a>
        </div>

        <div className="mt-8 flex items-center gap-4 text-muted">
          <a href={profile.githubUrl} target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-signal">
            <GithubIcon className="h-6 w-6" />
          </a>
          <a href={profile.linkedinUrl} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-signal">
            <LinkedinIcon className="h-6 w-6" />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email" className="hover:text-signal">
            <Mail size={24} />
          </a>
        </div>
      </div>
      <FitPlot />
    </section>
  );
}
