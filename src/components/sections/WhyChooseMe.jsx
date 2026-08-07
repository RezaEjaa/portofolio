import * as Icons from "lucide-react";
import { motion } from "framer-motion";
import { WHY_CHOOSE_ME } from "../../data/whyChooseMe";
import { type } from "../../utils/typography";
import { cn } from "../../utils/cn";
import { fadeUp, staggerContainer, viewportOnce } from "../../utils/motion";
import SectionTitle from "../ui/SectionTitle";

export default function WhyChooseMe() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionTitle
          eyebrow="Why Choose Me"
          title="Reasons clients keep coming back."
          description="A straightforward process, dependable communication, and code built to last past launch day."
        />

        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {WHY_CHOOSE_ME.map((item) => {
            const Icon = Icons[item.icon];
            return (
              <motion.div
                key={item.title}
                variants={fadeUp}
                className="group rounded-3xl border-2 border-ink bg-white p-6 shadow-hard-sm transition-all duration-200 hover:border-royal hover:shadow-none"
              >
                <div className="flex size-11 items-center justify-center rounded-xl border-2 border-ink bg-warning text-ink transition-colors group-hover:bg-indigo group-hover:text-white">
                  <Icon className="size-5" strokeWidth={2} />
                </div>
                <h3 className={cn(type.h3, "mt-5 text-cloud")}>{item.title}</h3>
                <p className={cn(type.bodySm, "mt-2 text-mist")}>{item.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}