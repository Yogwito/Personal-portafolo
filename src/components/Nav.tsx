import { useEffect, useState } from 'react';
import { profile } from '../data/profile';

const LINKS = [
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
        scrolled ? 'border-b border-bp-trace/15 bg-bp-deep/80 backdrop-blur-md' : 'border-b border-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-board items-center justify-between px-5 py-3.5 sm:px-8" aria-label="Primary">
        <a href="#top" className="group flex items-center gap-2.5" aria-label="Back to top">
          <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
            <g stroke="var(--accent)" strokeWidth="1.6" fill="none">
              <line x1="5" y1="7" x2="12" y2="12" />
              <line x1="19" y1="6" x2="12" y2="12" />
              <line x1="12" y1="12" x2="7" y2="19" />
            </g>
            <circle cx="5" cy="7" r="2" fill="var(--text)" />
            <circle cx="19" cy="6" r="2" fill="var(--text)" />
            <circle cx="7" cy="19" r="2" fill="var(--text)" />
            <circle cx="12" cy="12" r="2.6" fill="var(--accent-amber)" />
          </svg>
          <span className="font-mono text-sm font-medium tracking-tight text-text">JSAR</span>
        </a>

        <ul className="hidden items-center gap-7 md:flex">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-mono text-xs uppercase tracking-[0.12em] text-muted transition-colors hover:text-text"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={profile.cv}
          download
          className="rounded-sm border border-accent/70 bg-accent/10 px-3.5 py-1.5 font-mono text-xs font-medium uppercase tracking-[0.12em] text-accent transition-colors hover:bg-accent hover:text-ink"
        >
          Download CV
        </a>
      </nav>
    </header>
  );
}
