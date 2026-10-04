// Abstract botanical forms, almost black-on-black, meant to feel integrated into
// the darkness rather than decorative — two large clusters (bloom + fanning
// leaf blades) flanking a clear, dark centre so text stays legible. Reused
// across the RYB ecosystem as the start of a shared visual language; keep
// edits here subtle, not literal florals.
function Leaf({
  x,
  y,
  rotate,
  length = 320,
  width = 70,
  fill = "url(#leafFill)",
  opacity = 0.8,
}: {
  x: number;
  y: number;
  rotate: number;
  length?: number;
  width?: number;
  fill?: string;
  opacity?: number;
}) {
  const half = width / 2;
  return (
    <path
      d={`M 0,0 Q ${half},${-length * 0.55} 0,${-length} Q ${-half},${-length * 0.55} 0,0 Z`}
      fill={fill}
      opacity={opacity}
      transform={`translate(${x},${y}) rotate(${rotate})`}
    />
  );
}

export default function BotanicalBackground() {
  return (
    <svg
      viewBox="0 0 1600 1000"
      preserveAspectRatio="xMidYMid slice"
      className="absolute inset-0 h-full w-full"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="petalA" cx="35%" cy="25%" r="75%">
          <stop offset="0%" stopColor="#2b2b2b" />
          <stop offset="100%" stopColor="#0a0a0a" />
        </radialGradient>
        <radialGradient id="petalB" cx="60%" cy="70%" r="75%">
          <stop offset="0%" stopColor="#242424" />
          <stop offset="100%" stopColor="#080808" />
        </radialGradient>
        <linearGradient id="leafFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1c1c1c" />
          <stop offset="100%" stopColor="#090909" />
        </linearGradient>
        <filter id="soften" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="6" />
        </filter>
        <filter id="softenMore" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="22" />
        </filter>
        <radialGradient id="vignette" cx="50%" cy="48%" r="60%">
          <stop offset="0%" stopColor="#050505" stopOpacity="0" />
          <stop offset="70%" stopColor="#050505" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#050505" stopOpacity="0.95" />
        </radialGradient>
      </defs>

      <rect width="1600" height="1000" fill="#050505" />

      {/* left cluster: leaf blades fanning from a low-left anchor */}
      <g filter="url(#soften)">
        <Leaf x={60} y={940} rotate={-100} length={520} width={120} opacity={0.75} />
        <Leaf x={40} y={900} rotate={-55} length={600} width={110} opacity={0.85} />
        <Leaf x={20} y={860} rotate={-20} length={560} width={95} opacity={0.75} />
        <Leaf x={80} y={920} rotate={10} length={460} width={90} opacity={0.65} />
        <Leaf x={140} y={960} rotate={35} length={380} width={80} opacity={0.6} />
      </g>

      {/* left cluster: oversized bloom */}
      <g filter="url(#softenMore)" opacity="0.9">
        <path
          d="M -120,760 C 60,600 160,400 120,180 C 340,300 460,520 400,760 C 360,940 20,980 -120,760 Z"
          fill="url(#petalA)"
        />
      </g>

      {/* right cluster: leaf blades fanning from a mid-right anchor */}
      <g filter="url(#soften)">
        <Leaf x={1540} y={160} rotate={80} length={480} width={110} opacity={0.75} />
        <Leaf x={1560} y={200} rotate={130} length={560} width={110} opacity={0.85} />
        <Leaf x={1580} y={260} rotate={165} length={520} width={95} opacity={0.75} />
        <Leaf x={1520} y={140} rotate={50} length={420} width={85} opacity={0.6} />
        <Leaf x={1460} y={820} rotate={-150} length={420} width={90} opacity={0.65} />
        <Leaf x={1520} y={860} rotate={-115} length={360} width={80} opacity={0.6} />
      </g>

      {/* right cluster: oversized bloom */}
      <g filter="url(#softenMore)" opacity="0.9">
        <path
          d="M 1720,420 C 1560,360 1440,420 1400,560 C 1560,560 1680,660 1700,820 C 1860,780 1880,500 1720,420 Z"
          fill="url(#petalB)"
        />
      </g>

      {/* thin organic linework threading between the forms */}
      <g stroke="#242424" strokeWidth="1.5" fill="none" opacity="0.4">
        <path d="M 160,980 C 280,820 300,640 200,460" />
        <path d="M 1420,900 C 1340,760 1360,600 1460,480" />
      </g>

      <rect width="1600" height="1000" fill="url(#vignette)" />
    </svg>
  );
}
