import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { TESTIMONIALS } from "../../data/testimonials";
import { type } from "../../utils/typography";
import { cn } from "../../utils/cn";
import { fadeUp, staggerContainer, viewportOnce } from "../../utils/motion";
import SectionTitle from "../ui/SectionTitle";
import Card from "../ui/Card";

export default function Testimonials() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionTitle
          eyebrow="Testimonials"
          title="What clients say after launch."
        />

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-14 grid gap-6 lg:grid-cols-3"
        >
          {TESTIMONIALS.map((t, i) => {
            const av = ["bg-mint", "bg-pink", "bg-lemon"][i % 3];
            return (
              <Card key={t.name} variants={fadeUp} hover={false}>
                <Quote className="size-7 text-royal/60" strokeWidth={1.5} />
                <p className={cn(type.bodySm, "mt-4 text-cloud")}>&ldquo;{t.quote}&rdquo;</p>

                <div className="mt-6 flex items-center gap-3 border-t border-ink/10 pt-5">
                  <div className={cn("flex size-11 items-center justify-center rounded-full border-2 border-ink text-sm font-bold text-ink shadow-hard-sm", av)}>
                    {t.avatarInitials}
                  </div>
                  <div>
                    <p className={cn(type.span, "text-cloud")}>{t.name}</p>
                    <p className="text-[12px] text-mist">{t.role}</p>
                  </div>
                  <div className="ml-auto flex gap-0.5">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="size-3.5 fill-warning text-warning" />
                    ))}
                  </div>
                </div>
              </Card>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}