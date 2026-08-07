import { cn } from "../../utils/cn";

const TONES = {
  indigo: "bg-indigo text-white",
  coral: "bg-pink text-ink",
  neutral: "bg-white text-ink",
  warning: "bg-warning text-ink",
  lemon: "bg-lemon text-ink",
  mint: "bg-mint text-ink",
};

export default function Badge({ children, tone = "indigo", className, icon: Icon }) {
  return (
    <span
      className={cn(
        "inline-flex -rotate-1 items-center gap-1.5 rounded-full border-2 border-ink px-3 py-1 text-[12px] font-semibold uppercase tracking-[0.14em] shadow-[3px_3px_0_#000]",
        TONES[tone],
        className
      )}
    >
      {Icon && <Icon className="size-3.5" strokeWidth={2.5} />}
      {children}
    </span>
  );
}