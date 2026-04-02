/**
 * Animated dot-matrix icon that displays "FB" by default
 * and morphs into a chevron arrow (>) on parent group hover.
 *
 * Each dot transitions from its "FB" position to its "arrow" position
 * using CSS custom properties toggled by .group:hover (see globals.css).
 */

interface DotDef {
  fbX: number;
  fbY: number;
  arrowX: number;
  arrowY: number;
  delay: number;
}

/*
 * FB layout on a 100×100 coordinate grid:
 *
 * F letter (8 dots):
 *   ● ● ●         top bar
 *   ●             stem
 *   ● ●           mid bar
 *   ●             stem
 *   ●             bottom
 *
 * B letter (10 dots, shifted right for gap):
 *       ● ●       top
 *       ●     ●   bumps
 *       ● ●       mid
 *       ●     ●   bumps
 *       ● ●       bottom
 *
 * Arrow chevron ">" (18 dots, 9 rows × 2):
 *   Each row is a pair shifting +10 rightward.
 *
 *   ● ●                 row 0
 *     ● ●               row 1
 *       ● ●             row 2
 *         ● ●           row 3
 *           ● ●         row 4 (tip)
 *         ● ●           row 5
 *       ● ●             row 6
 *     ● ●               row 7
 *   ● ●                 row 8
 */

const dots: DotDef[] = [
  // ── F letter dots (8) → Arrow positions ──
  { fbX: 6,  fbY: 8,  arrowX: 16, arrowY: 6,  delay: 0 },
  { fbX: 18, fbY: 8,  arrowX: 30, arrowY: 6,  delay: 20 },
  { fbX: 30, fbY: 8,  arrowX: 40, arrowY: 17, delay: 40 },
  { fbX: 6,  fbY: 28, arrowX: 26, arrowY: 17, delay: 60 },
  { fbX: 6,  fbY: 48, arrowX: 54, arrowY: 50, delay: 80 },
  { fbX: 18, fbY: 48, arrowX: 66, arrowY: 50, delay: 100 },
  { fbX: 6,  fbY: 68, arrowX: 26, arrowY: 83, delay: 120 },
  { fbX: 6,  fbY: 88, arrowX: 16, arrowY: 94, delay: 140 },

  // ── B letter dots (10) → Arrow positions ──
  { fbX: 62, fbY: 8,  arrowX: 50, arrowY: 28, delay: 30 },
  { fbX: 76, fbY: 8,  arrowX: 60, arrowY: 39, delay: 50 },
  { fbX: 62, fbY: 28, arrowX: 36, arrowY: 28, delay: 70 },
  { fbX: 94, fbY: 28, arrowX: 46, arrowY: 39, delay: 90 },
  { fbX: 62, fbY: 48, arrowX: 46, arrowY: 61, delay: 110 },
  { fbX: 76, fbY: 48, arrowX: 60, arrowY: 61, delay: 130 },
  { fbX: 62, fbY: 68, arrowX: 36, arrowY: 72, delay: 150 },
  { fbX: 94, fbY: 68, arrowX: 50, arrowY: 72, delay: 170 },
  { fbX: 62, fbY: 88, arrowX: 30, arrowY: 94, delay: 190 },
  { fbX: 76, fbY: 88, arrowX: 40, arrowY: 83, delay: 210 },
];

const dotColorMap: Record<string, string> = {
  eco: "bg-eco",
  carbon: "bg-white",
  gray: "bg-gray-500",
};

interface FBArrowIconProps {
  accent: "eco" | "carbon" | "gray";
}

export default function FBArrowIcon({ accent }: FBArrowIconProps) {
  const dotColor = dotColorMap[accent];

  return (
    <div className="relative w-16 h-16 mt-auto" aria-hidden="true">
      {dots.map((dot, i) => (
        <div
          key={i}
          className={`fb-dot absolute w-1.5 h-1.5 rounded-full ${dotColor}`}
          style={
            {
              "--fb-x": `${dot.fbX}%`,
              "--fb-y": `${dot.fbY}%`,
              "--arrow-x": `${dot.arrowX}%`,
              "--arrow-y": `${dot.arrowY}%`,
              transitionDelay: `${dot.delay}ms`,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}
