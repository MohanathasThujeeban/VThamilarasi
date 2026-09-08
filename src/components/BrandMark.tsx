import { cn } from "@/lib/utils";

interface BrandMarkProps {
  className?: string;
  withWordmark?: boolean;
}

/**
 * V. Thamilarasi brand mark.
 * Concept: I-beam column (top flange, web, bottom flange) with
 * "V" and "T" letterforms cantilevered off the central web —
 * structural engineering motif rendered as a monogram.
 */
export function BrandMark({ className, withWordmark = false }: BrandMarkProps) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <svg
        viewBox="0 0 64 64"
        xmlns="http://www.w3.org/2000/svg"
        className="h-7 w-7 shrink-0"
        aria-label="V. Thamilarasi"
        role="img"
      >
        {/* Structural frame outline */}
        <rect
          x="1"
          y="1"
          width="62"
          height="62"
          fill="none"
          stroke="hsl(var(--primary) / 0.35)"
          strokeWidth="1"
        />
        {/* Corner rivets */}
        <g fill="hsl(var(--primary))">
          <rect x="3" y="3" width="2" height="2" />
          <rect x="59" y="3" width="2" height="2" />
          <rect x="3" y="59" width="2" height="2" />
          <rect x="59" y="59" width="2" height="2" />
        </g>
        {/* I-beam: top flange */}
        <rect x="10" y="9" width="44" height="5" fill="hsl(var(--primary))" />
        {/* I-beam: web (central column) */}
        <rect x="29.5" y="14" width="5" height="36" fill="hsl(var(--primary))" />
        {/* I-beam: bottom flange */}
        <rect x="10" y="50" width="44" height="5" fill="hsl(var(--primary))" />

        {/* "V" letterform — left of the web */}
        <path
          d="M 12 22 L 18 42 H 21 L 27 22 H 23.5 L 19.5 35 L 15.5 22 Z"
          fill="hsl(var(--primary))"
        />

        {/* "T" letterform — right of the web */}
        <rect x="36" y="22" width="16" height="4" fill="hsl(var(--primary))" />
        <rect x="42" y="26" width="4" height="16" fill="hsl(var(--primary))" />
      </svg>

      {withWordmark && (
        <span className="font-display text-base font-bold tracking-wide text-foreground uppercase leading-none">
          V. <span className="text-primary">Thamilarasi</span>
        </span>
      )}
    </span>
  );
}