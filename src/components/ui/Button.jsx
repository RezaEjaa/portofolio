import { forwardRef } from "react";
import { motion } from "framer-motion";
import { cn } from "../../utils/cn";
import { type } from "../../utils/typography";

const VARIANTS = {
  primary:
    "bg-indigo text-white border-[3px] border-ink shadow-glow hover:bg-royal hover:shadow-none",
  secondary:
    "bg-white text-ink border-[3px] border-ink shadow-hard-sm hover:bg-fog hover:shadow-none",
  ghost: "bg-transparent text-ink border-2 border-ink hover:bg-fog",
  coral: "bg-sunset text-ink border-[3px] border-ink shadow-glow hover:brightness-110 hover:shadow-none",
  yellow: "bg-warning text-ink border-[3px] border-ink shadow-glow hover:brightness-105 hover:shadow-none",
};

const SIZES = {
  md: "px-6 py-3",
  lg: "px-8 py-4",
};

/**
 * Shared CTA button used across the whole site (Navbar, Hero, Services, Contact...).
 * Keeping it as one component avoids duplicated button markup/animations.
 */
const Button = forwardRef(function Button(
  { as = "button", href, variant = "primary", size = "md", icon: Icon, className, children, ...props },
  ref
) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-[8px] font-semibold transition-all duration-150",
    type.button,
    VARIANTS[variant],
    SIZES[size],
    className
  );

  const content = (
    <>
      {children}
      {Icon && <Icon className="size-[1.1em]" strokeWidth={2.25} />}
    </>
  );

  const Component = motion[as === "a" ? "a" : "button"];

  return (
    <Component
      ref={ref}
      href={as === "a" ? href : undefined}
      className={classes}
      whileHover={{ x: 6, y: 6 }}
      whileTap={{ scale: 0.97 }}
      {...props}
    >
      {content}
    </Component>
  );
});

export default Button;