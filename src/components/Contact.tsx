import { profile } from '../data/profile';
import { GitHubIcon, ExternalIcon } from './icons';
import SectionHeader from './SectionHeader';

function SocialIcon({ label }: { label: string }) {
  if (label === 'GitHub') return <GitHubIcon className="h-4 w-4" />;
  if (label === 'LinkedIn')
    return (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
        <path d="M4.98 3.5A2.5 2.5 0 1 0 5 8.5a2.5 2.5 0 0 0-.02-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.4c0-1.29-.02-2.95-1.8-2.95-1.8 0-2.08 1.4-2.08 2.85V21H9z" />
      </svg>
    );
  return <ExternalIcon className="h-4 w-4" />;
}

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-board scroll-mt-20 px-5 py-20 sm:px-8 lg:py-28">
      <SectionHeader
        index="05"
        label="Signal Out"
        title="Let's build something."
        description="Open to internships, freelance builds, and collaborations. The fastest way to reach me is email."
      />

      <div className="blueprint-card rounded-md p-7 sm:p-10">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div>
            <p className="mono-label mb-3">Primary channel</p>
            <a
              href={`mailto:${profile.email}`}
              className="group inline-flex items-baseline gap-3 font-display text-2xl text-text transition-colors hover:text-accent sm:text-3xl md:text-4xl"
            >
              {profile.email}
              <ExternalIcon className="h-5 w-5 -translate-y-0.5 text-accent transition-transform group-hover:translate-x-1" />
            </a>
            <div className="mt-6">
              <a
                href={profile.cv}
                download
                className="inline-flex items-center gap-2 rounded-sm bg-accent px-5 py-2.5 font-mono text-sm font-medium uppercase tracking-[0.08em] text-ink transition-transform hover:-translate-y-0.5"
              >
                Download CV
              </a>
            </div>
          </div>

          <ul className="grid gap-3 border-t border-bp-trace/15 pt-7 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
            {profile.socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noreferrer' : undefined}
                  className="group flex items-center justify-between rounded-sm border border-bp-trace/20 bg-white/[0.03] px-4 py-3 transition-colors hover:border-accent/60 hover:bg-white/[0.06]"
                >
                  <span className="flex items-center gap-3">
                    <span className="text-muted transition-colors group-hover:text-accent">
                      <SocialIcon label={social.label} />
                    </span>
                    <span className="font-mono text-sm text-text">{social.label}</span>
                  </span>
                  <span className="font-mono text-xs text-muted">{social.handle}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
