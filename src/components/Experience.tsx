import { experience } from '../data/experience';
import { useReveal } from '../hooks/useReveal';
import SectionHeader from './SectionHeader';

export default function Experience() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="experience" className="mx-auto max-w-board scroll-mt-20 px-5 py-20 sm:px-8 lg:py-28">
      <SectionHeader index="03" label="Timeline" title="Experience." />

      <div ref={ref} className="relative border-l border-bp-trace/25 pl-7 sm:pl-9">
        {experience.map((item, i) => (
          <article
            key={item.ref}
            className="relative"
            style={visible ? { animation: `rise-in 0.55s ease-out ${i * 0.1}s both` } : { opacity: 0 }}
          >
            {/* node on the trace */}
            <span className="absolute -left-[35px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-accent bg-bp-base sm:-left-[43px]" />
            <span className="absolute -left-[31px] top-[10px] h-1.5 w-1.5 rounded-full bg-accent sm:-left-[39px]" />

            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <h3 className="font-display text-2xl text-text">{item.role}</h3>
              <span className="font-mono text-sm text-accent">@ {item.org}</span>
            </div>
            <p className="mt-1 font-mono text-xs uppercase tracking-[0.14em] text-muted">{item.period}</p>
            <p className="mt-3 text-[0.95rem] text-text/90">{item.summary}</p>

            <ul className="mt-4 space-y-2">
              {item.points.map((point) => (
                <li key={point} className="flex gap-2.5 text-[0.95rem] leading-relaxed text-muted">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-amber" />
                  {point}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
