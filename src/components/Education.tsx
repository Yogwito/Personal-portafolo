import { education } from '../data/education';
import { useReveal } from '../hooks/useReveal';
import SectionHeader from './SectionHeader';

export default function Education() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="education" className="mx-auto max-w-board scroll-mt-20 px-5 py-20 sm:px-8 lg:py-28">
      <SectionHeader index="04" label="Credentials" title="Education." />

      <div ref={ref} className="grid gap-5 sm:grid-cols-2">
        {education.map((item, i) => (
          <article
            key={item.ref}
            className="blueprint-card flex h-full flex-col rounded-md p-6 sm:p-7"
            style={visible ? { animation: `rise-in 0.55s ease-out ${i * 0.09}s both` } : { opacity: 0 }}
          >
            <div className="mb-4 flex items-center justify-between">
              <span className="font-mono text-[0.7rem] tracking-[0.18em] text-accent">{item.ref}</span>
              <span className="font-mono text-[0.7rem] uppercase tracking-[0.12em] text-muted">{item.period}</span>
            </div>
            <h3 className="font-display text-xl leading-tight text-text">{item.credential}</h3>
            <p className="mt-1.5 text-[0.95rem] text-amber/90">{item.institution}</p>
            <p className="mt-4 flex-1 text-[0.95rem] leading-relaxed text-muted">{item.detail}</p>
            <p className="mt-5 border-t border-bp-trace/15 pt-4 font-mono text-xs uppercase tracking-[0.12em] text-muted">
              {item.location}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
