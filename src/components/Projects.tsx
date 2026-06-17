import { projects } from '../data/projects';
import { useReveal } from '../hooks/useReveal';
import ProjectCard from './ProjectCard';
import SectionHeader from './SectionHeader';

export default function Projects() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="projects" className="mx-auto max-w-board scroll-mt-20 px-5 py-20 sm:px-8 lg:py-28">
      <SectionHeader
        index="01"
        label="Selected Work"
        title="Projects, end to end."
        description="Production apps, a SaaS MVP, microservices, and a constraint solver — across web, infra, and algorithms."
      />

      <div
        ref={ref}
        className="grid gap-5 sm:grid-cols-2"
      >
        {projects.map((project, i) => (
          <ProjectCard
            key={project.ref}
            project={project}
            style={
              visible
                ? { animation: `rise-in 0.6s ease-out ${i * 0.09}s both` }
                : { opacity: 0 }
            }
          />
        ))}
      </div>
    </section>
  );
}
