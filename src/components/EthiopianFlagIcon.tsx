interface EthiopianFlagIconProps {
  size?: number;
  className?: string;
}

/**
 * Small flat Ethiopian flag icon (green/yellow/red bands + a simplified
 * star-in-circle emblem) — used instead of the 🇪🇹 flag emoji.
 */
export default function EthiopianFlagIcon({ size = 20, className }: EthiopianFlagIconProps) {
  const w = size;
  const h = Math.round((size * 2) / 3);
  return (
    <svg
      width={w}
      height={h}
      viewBox="0 0 30 20"
      className={className}
      role="img"
      aria-label="Ethiopian flag"
    >
      <rect width="30" height="20" rx="2" fill="#078930" />
      <rect y="6.67" width="30" height="6.67" fill="#FCDD09" />
      <rect y="13.33" width="30" height="6.67" fill="#DA121A" />
      <circle cx="15" cy="10" r="4.6" fill="#0F47AF" />
      <path
        d="M15 6.6 L16 9.2 L18.8 9.2 L16.6 10.8 L17.4 13.4 L15 11.8 L12.6 13.4 L13.4 10.8 L11.2 9.2 L14 9.2 Z"
        fill="#FCDD09"
      />
    </svg>
  );
}
