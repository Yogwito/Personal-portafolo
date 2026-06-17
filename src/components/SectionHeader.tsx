import type { ReactNode } from 'react';

interface SectionHeaderProps {
  index: string; // e.g. "01"
  label: string; // e.g. "PROJECTS"
  title: ReactNode;
  description?: ReactNode;
}

/**
 * Schematic callout used at the top of every section: a monospace part-number
 * (§NN) with a connector trace running into a display-type heading.
 */
export default function SectionHeader({ index, label, title, description }: SectionHeaderProps) {
  return (
    <header className="mb-10 md:mb-14">
      <div className="mb-4 flex items-center gap-3">
        <span className="font-mono text-xs tracking-[0.2em] text-amber">§{index}</span>
        <span className="h-px w-8 bg-bp-trace/60" aria-hidden="true" />
        <span className="mono-label">{label}</span>
      </div>
      <h2 className="max-w-3xl text-balance font-display text-3xl leading-[1.05] text-text sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
          {description}
        </p>
      )}
    </header>
  );
}
