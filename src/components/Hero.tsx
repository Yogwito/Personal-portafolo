import { profile } from '../data/profile';
import NodeGraph from './NodeGraph';

export default function Hero() {
  return (
    <section id="top" className="relative mx-auto max-w-board px-5 pb-20 pt-28 sm:px-8 sm:pt-36 lg:pb-28 lg:pt-40">
      <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
        {/* Left: identity */}
        <div>
          <div className="mb-6 flex flex-wrap items-center gap-3 motion-safe:animate-rise-in">
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-3 py-1 font-mono text-[0.7rem] uppercase tracking-[0.16em] text-accent">
              <span className="h-1.5 w-1.5 rounded-full bg-accent motion-safe:animate-pulse-soft" />
              Open to opportunities
            </span>
            <span className="mono-label">{profile.location}</span>
          </div>

          <h1
            className="font-display text-[2.7rem] leading-[0.98] tracking-tightest text-text motion-safe:animate-rise-in sm:text-6xl lg:text-[4.2rem]"
            style={{ animationDelay: '0.05s' }}
          >
            Juan Sebastian
            <br />
            <span className="text-accent">Arias Rueda</span>
          </h1>

          <p
            className="mt-6 max-w-xl text-lg leading-relaxed text-muted motion-safe:animate-rise-in sm:text-xl"
            style={{ animationDelay: '0.12s' }}
          >
            {profile.intro}
          </p>

          <div
            className="mt-8 flex flex-wrap items-center gap-3 motion-safe:animate-rise-in"
            style={{ animationDelay: '0.2s' }}
          >
            <a
              href="#projects"
              className="rounded-sm bg-accent px-5 py-2.5 font-mono text-sm font-medium uppercase tracking-[0.08em] text-ink transition-transform hover:-translate-y-0.5"
            >
              View work
            </a>
            <a
              href="#contact"
              className="rounded-sm border border-bp-trace/40 px-5 py-2.5 font-mono text-sm font-medium uppercase tracking-[0.08em] text-text transition-colors hover:border-accent hover:text-accent"
            >
              Get in touch
            </a>
          </div>

          <p
            className="mt-8 font-mono text-xs uppercase tracking-[0.16em] text-muted motion-safe:animate-rise-in"
            style={{ animationDelay: '0.28s' }}
          >
            {profile.status}
          </p>
        </div>

        {/* Right: signature node-network */}
        <div className="relative">
          <div className="pointer-events-none absolute left-3 top-0 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-muted/70">
            fig.01 — systems map
          </div>
          <div className="mx-auto aspect-[13/11] w-full max-w-[520px]">
            <NodeGraph />
          </div>
        </div>
      </div>
    </section>
  );
}
