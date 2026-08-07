/**
 * Wavy cartoon divider — black-outline sine strip, used between sections
 * for a playful "doodle" rhythm (full-fun decorative pass).
 */
export default function WaveDivider({ className = "" }) {
  return (
    <div aria-hidden className={`overflow-hidden leading-none ${className}`}>
      <svg
        viewBox="0 0 1440 40"
        preserveAspectRatio="none"
        className="block h-8 w-full text-ink"
        role="presentation"
      >
        <path
          d="M0 20 Q 60 2 120 20 T 240 20 T 360 20 T 480 20 T 600 20 T 720 20 T 840 20 T 960 20 T 1080 20 T 1200 20 T 1320 20 T 1440 20"
          fill="none"
          stroke="currentColor"
          strokeWidth="6"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}