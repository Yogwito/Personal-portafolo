import { profile } from './data/profile';

export default function App() {
  return (
    <div className="relative z-10 mx-auto flex min-h-screen max-w-board flex-col items-center justify-center px-6 text-center">
      <p className="mono-label mb-4">{profile.role}</p>
      <h1 className="font-display text-5xl text-text">{profile.name}</h1>
      <p className="mt-4 max-w-xl text-muted">{profile.tagline}</p>
    </div>
  );
}
