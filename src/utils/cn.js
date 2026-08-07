/**
 * Tiny className combiner — filters falsy values and joins the rest.
 * Avoids pulling in a dependency for something this small.
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}