import { useReducedMotion } from 'framer-motion';
import { profile } from '../data/profile';

interface Point {
  x: number;
  y: number;
}

// Fixed schematic layout in a 520×440 viewBox. Center = "the systems node",
// the five domains orbit it. Hand-placed so the graph reads as a diagram,
// not a generic radial burst.
const CENTER: Point = { x: 260, y: 222 };
const POSITIONS: Record<string, Point> = {
  web: { x: 92, y: 70 },
  infra: { x: 430, y: 72 },
  algorithms: { x: 474, y: 250 },
  networking: { x: 268, y: 396 },
  business: { x: 58, y: 268 },
};

// Extra inter-domain traces so it reads as a network, not just a star.
const CROSS_LINKS: [string, string][] = [
  ['web', 'infra'],
  ['infra', 'algorithms'],
  ['algorithms', 'networking'],
  ['networking', 'business'],
  ['business', 'web'],
];

export default function NodeGraph() {
  const reduce = useReducedMotion();
  const nodes = profile.heroNodes;

  const edgeStyle = (i: number, dur = 1.1): React.CSSProperties =>
    reduce
      ? { strokeDashoffset: 0 }
      : {
          strokeDasharray: 1,
          strokeDashoffset: 1,
          animation: `draw-edge ${dur}s ease-out ${0.15 + i * 0.12}s forwards`,
        };

  const nodeStyle = (i: number): React.CSSProperties =>
    reduce
      ? {}
      : {
          opacity: 0,
          transformOrigin: 'center',
          animation: `node-pop 0.5s cubic-bezier(0.22,1,0.36,1) ${0.5 + i * 0.12}s forwards`,
        };

  return (
    <svg
      viewBox="0 0 520 440"
      className="h-full w-full overflow-visible"
      role="img"
      aria-label="Network diagram connecting the domains Juan works across: web, infrastructure, algorithms, networking, and business."
    >
      <defs>
        <filter id="node-glow" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="3.2" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* cross-links (faint) */}
      <g stroke="var(--bp-trace)" strokeOpacity="0.28" strokeWidth="1" fill="none">
        {CROSS_LINKS.map(([a, b], i) => (
          <line
            key={`x-${a}-${b}`}
            x1={POSITIONS[a].x}
            y1={POSITIONS[a].y}
            x2={POSITIONS[b].x}
            y2={POSITIONS[b].y}
            pathLength={1}
            style={edgeStyle(i + 5, 1.3)}
          />
        ))}
      </g>

      {/* spokes from center */}
      <g stroke="var(--accent)" strokeOpacity="0.7" strokeWidth="1.5" fill="none">
        {nodes.map((n, i) => (
          <line
            key={`s-${n.id}`}
            x1={CENTER.x}
            y1={CENTER.y}
            x2={POSITIONS[n.id].x}
            y2={POSITIONS[n.id].y}
            pathLength={1}
            style={edgeStyle(i)}
          />
        ))}
      </g>

      {/* domain nodes */}
      {nodes.map((n, i) => {
        const p = POSITIONS[n.id];
        const labelLeft = p.x < CENTER.x;
        return (
          <g key={n.id} style={nodeStyle(i)}>
            <circle cx={p.x} cy={p.y} r={7} fill="var(--bp-base)" stroke="var(--accent)" strokeWidth="2" />
            <circle cx={p.x} cy={p.y} r={2.5} fill="var(--accent)" />
            <text
              x={labelLeft ? p.x - 14 : p.x + 14}
              y={p.y + 4}
              textAnchor={labelLeft ? 'end' : 'start'}
              className="fill-text font-mono text-[12px]"
              style={{ letterSpacing: '0.04em' }}
            >
              {n.label}
            </text>
          </g>
        );
      })}

      {/* center node */}
      <g style={reduce ? {} : { opacity: 0, animation: 'node-pop 0.6s cubic-bezier(0.22,1,0.36,1) 0.25s forwards' }}>
        <circle cx={CENTER.x} cy={CENTER.y} r={26} fill="var(--bp-deep)" stroke="var(--accent-amber)" strokeWidth="1.5" filter="url(#node-glow)" />
        <circle cx={CENTER.x} cy={CENTER.y} r={26} fill="none" stroke="var(--bp-trace)" strokeOpacity="0.3" strokeWidth="1" strokeDasharray="2 4" />
        <text x={CENTER.x} y={CENTER.y + 5} textAnchor="middle" className="fill-amber font-mono text-[13px] font-semibold" style={{ letterSpacing: '0.1em' }}>
          JSAR
        </text>
      </g>
    </svg>
  );
}
