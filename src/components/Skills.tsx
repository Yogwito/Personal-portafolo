import { skillGroups } from '../data/skills';
import { useReveal } from '../hooks/useReveal';
import SectionHeader from './SectionHeader';

export default function Skills() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="skills" className="mx-auto max-w-board scroll-mt-20 px-5 py-20 sm:px-8 lg:py-28">
      <SectionHeader
        index="02"
        label="Legend"
        title="The toolkit."
        description="Grouped by layer — from language fundamentals up through infrastructure and networking."
      />

      <div ref={ref} className="grid gap-px overflow-hidden rounded-md border border-bp-trace/15 bg-bp-trace/10 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => (
          <div
            key={group.ref}
            className="bg-bp-deep/40 p-6"
            style={visible ? { animation: `rise-in 0.5s ease-out ${i * 0.07}s both` } : { opacity: 0 }}
          >
            <div className="mb-4 flex items-baseline gap-2.5">
              <span className="font-mono text-xs text-amber">{group.ref}.</span>
              <h3 className="font-display text-lg text-text">{group.title}</h3>
            </div>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-sm border border-bp-trace/20 bg-white/[0.04] px-2.5 py-1 font-mono text-[0.72rem] tracking-tight text-text/90"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
