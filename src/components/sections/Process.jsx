import * as Icons from "lucide-react";
import { motion } from "framer-motion";
import { PROCESS } from "../../data/process";
import { type } from "../../utils/typography";
import { cn } from "../../utils/cn";
import { fadeUp, staggerContainer, viewportOnce } from "../../utils/motion";
import SectionTitle from "../ui/SectionTitle";

export default function Process() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionTitle
          eyebrow="How It Works"
          title="A clear, six-step process."
          description="Every project moves through the same sequence, so you always know what's happening next."
        />

        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="relative mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {/* connecting line for large screens */}
          <div className="pointer-events-none absolute left-0 right-0 top-[52px] hidden h-0.5 bg-ink/15 lg:block" />

          {PROCESS.map((item) => {
            const Icon = Icons[item.icon];
            return (
              <motion.div key={item.step} variants={fadeUp} className="relative">
                <div className="neo-card-sm relative z-10 flex size-14 items-center justify-center rounded-2xl bg-white">
                  <Icon className="size-6 text-royal" strokeWidth={2} />
                  <span className="absolute -top-3 -right-3 flex size-7 items-center justify-center rounded-full border-2 border-ink bg-warning text-[11px] font-bold text-ink">
                    {item.step}
                  </span>
                </div>
                <h3 className={cn(type.h3, "mt-4 text-cloud")}>{item.title}</h3>
                <p className={cn(type.bodySm, "mt-2 max-w-xs text-mist")}>{item.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}