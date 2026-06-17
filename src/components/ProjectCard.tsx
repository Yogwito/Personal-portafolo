import type { Project } from '../data/projects';
import { ExternalIcon, GitHubIcon, LockIcon } from './icons';

export default function ProjectCard({ project, style }: { project: Project; style?: React.CSSProperties }) {
  return (
    <article
      className="blueprint-card group flex h-full flex-col rounded-md p-6 transition-all duration-300 hover:border-accent/60 hover:bg-white/[0.07] sm:p-7"
      style={style}
    >
      {/* port header: part number + status */}
      <div className="mb-5 flex items-center justify-between">
        <span className="font-mono text-[0.7rem] tracking-[0.18em] text-accent">{project.ref}</span>
        {project.private ? (
          <span className="inline-flex items-center gap-1.5 font-mono text-[0.65rem] uppercase tracking-[0.12em] text-muted">
            <LockIcon className="h-3 w-3" />
            Private
          </span>
        ) : (
          <span className="h-2 w-2 rounded-full bg-accent/70 shadow-[0_0_8px_var(--accent)] transition-transform group-hover:scale-125" />
        )}
      </div>

      <h3 className="font-display text-2xl leading-tight text-text">{project.title}</h3>
      <p className="mt-1 font-mono text-xs uppercase tracking-[0.1em] text-amber/90">{project.summary}</p>
      <p className="mt-4 flex-1 text-[0.95rem] leading-relaxed text-muted">{project.description}</p>

      {/* tech tag chips */}
      <ul className="mt-6 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <li
            key={tag}
            className="rounded-sm border border-bp-trace/25 bg-white/[0.04] px-2.5 py-1 font-mono text-[0.7rem] tracking-tight text-text/90"
          >
            {tag}
          </li>
        ))}
      </ul>

      {/* connector ports: links */}
      <div className="mt-6 flex flex-wrap gap-3 border-t border-bp-trace/15 pt-5">
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-sm bg-accent px-3 py-1.5 font-mono text-xs font-medium text-ink transition-transform hover:-translate-y-0.5"
          >
            <ExternalIcon className="h-3.5 w-3.5" />
            {project.demoLabel ?? 'Live demo'}
          </a>
        )}
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-sm border border-bp-trace/35 px-3 py-1.5 font-mono text-xs text-text transition-colors hover:border-accent hover:text-accent"
          >
            <GitHubIcon className="h-3.5 w-3.5" />
            Source
          </a>
        )}
        {project.private && (
          <span className="inline-flex items-center gap-1.5 rounded-sm border border-bp-trace/20 px-3 py-1.5 font-mono text-xs text-muted">
            Repository not public
          </span>
        )}
      </div>
    </article>
  );
}
