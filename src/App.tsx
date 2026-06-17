import Nav from './components/Nav';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';

export default function App() {
  return (
    <>
      <a
        href="#main"
        className="sr-only z-50 rounded-sm bg-accent px-4 py-2 font-mono text-sm text-ink focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to content
      </a>
      <Nav />
      <main id="main" className="relative z-10">
        <Hero />
        <Projects />
        <Skills />
        <Experience />
        <Education />
      </main>
    </>
  );
}
