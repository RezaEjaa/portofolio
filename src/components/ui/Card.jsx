import { motion } from "framer-motion";
import { cn } from "../../utils/cn";

const TONES = {
  white: "bg-white",
  mint: "bg-mint",
  pink: "bg-pink",
  lemon: "bg-lemon",
  orange: "bg-orange",
  lavender: "bg-lavender",
};

/**
 * Base surface used by Service, Project, Pricing and Testimonial cards.
 * Light cartoon neo-brutalist: 3px ink border + hard offset shadow.
 * `tone` swaps the surface for a pastel mesh fill.
 */
export default function Card({ children, className, hover = true, tone = "white", ...props }) {
  return (
    <motion.div
      className={cn(
        "relative overflow-hidden rounded-2xl border-[3px] border-ink p-6 shadow-card sm:p-8",
        TONES[tone],
        hover && "transition-all duration-150 hover:-translate-y-1.5 hover:shadow-none",
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
}