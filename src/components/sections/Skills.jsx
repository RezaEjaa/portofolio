import * as Icons from "lucide-react";
import { motion } from "framer-motion";
import { SKILLS } from "../../data/skills";
import { type } from "../../utils/typography";
import { cn } from "../../utils/cn";
import { fadeUp, staggerContainer, viewportOnce } from "../../utils/motion";
import SectionTitle from "../ui/SectionTitle";

export default function Skills() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionTitle
          eyebrow="Skills"
          title="What I'm capable of, by category."
        />

        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {SKILLS.map((group, g) => {
            const Icon = Icons[group.icon];
            const pastels = ["bg-mint", "bg-lemon", "bg-pink", "bg-lavender", "bg-orange", "bg-white"];
            const tone = pastels[g % pastels.length];
            return (
              <motion.div
                key={group.category}
                variants={fadeUp}
                className={cn("rounded-3xl border-2 border-ink p-6 shadow-hard-sm", tone)}
              >
                <div className="flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-xl border-2 border-ink bg-indigo text-white shadow-hard-sm">
                    <Icon className="size-4.5" strokeWidth={2} />
                  </div>
                  <h3 className={cn(type.h3, "text-cloud")}>{group.category}</h3>
                </div>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border-2 border-ink bg-white px-3 py-1.5 text-[12px] font-semibold text-ink"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}