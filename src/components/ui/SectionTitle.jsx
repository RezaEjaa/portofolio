import { motion } from "framer-motion";
import { cn } from "../../utils/cn";
import { type } from "../../utils/typography";
import { fadeUp, viewportOnce } from "../../utils/motion";
import Badge from "./Badge";

export default function SectionTitle({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}) {
  const isCenter = align === "center";
  return (
    <div className={cn("max-w-2xl", isCenter && "mx-auto text-center", className)}>
      {eyebrow && (
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className={cn("mb-4 flex", isCenter && "justify-center")}
        >
          <Badge>{eyebrow}</Badge>
        </motion.div>
      )}
      <motion.h2
        variants={fadeUp}
        custom={0.08}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className={cn(type.h2, "text-cloud")}
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          variants={fadeUp}
          custom={0.16}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className={cn(type.body, "mt-4 text-mist")}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}