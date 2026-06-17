import { profile } from '../data/profile';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-bp-trace/15 bg-bp-deep/50">
      <div className="mx-auto flex max-w-board flex-col gap-4 px-5 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div className="flex items-center gap-2.5">
          <span className="h-2 w-2 rounded-full bg-accent" />
          <span className="font-mono text-xs uppercase tracking-[0.14em] text-muted">
            {profile.shortName} · {year}
          </span>
        </div>
        <p className="font-mono text-xs text-muted">
          Built with React · TypeScript · Vite · Tailwind — deployed on Cloudflare Pages
        </p>
        <a
          href="#top"
          className="font-mono text-xs uppercase tracking-[0.14em] text-muted transition-colors hover:text-accent"
        >
          ↑ Back to top
        </a>
      </div>
    </footer>
  );
}
