import { motion } from "framer-motion";
import { Check, Minus, Sparkles } from "lucide-react";
import { PRICING } from "../../data/pricing";
import { type } from "../../utils/typography";
import { cn } from "../../utils/cn";
import { fadeUp, staggerContainer, viewportOnce } from "../../utils/motion";
import SectionTitle from "../ui/SectionTitle";
import Button from "../ui/Button";

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionTitle
          eyebrow="Pricing"
          title="Simple packages, no surprises."
          description="Every package can be adjusted — this is a starting point for our conversation, not a fixed menu."
        />

        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-14 grid gap-6 lg:grid-cols-3"
        >
          {PRICING.map((pkg) => (
            <motion.div
              key={pkg.name}
              variants={fadeUp}
              className={cn(
                "relative flex flex-col rounded-3xl border p-7 sm:p-8",
                pkg.featured
                  ? "border-[3px] border-ink bg-warning/20 shadow-card lg:-translate-y-3"
                  : "border-2 border-ink bg-white shadow-hard-sm"
              )}
            >
              {pkg.featured && (
                <span className="absolute -top-3.5 left-1/2 flex -translate-x-1/2 -rotate-2 items-center gap-1 rounded-full border-2 border-ink bg-warning px-3 py-1 text-[11px] font-bold text-ink shadow-hard-sm">
                  <Sparkles className="size-3" /> Most Popular
                </span>
              )}
              <h3 className={cn(type.h3, "text-cloud")}>{pkg.name}</h3>
              {pkg.subtitle && (
                <p className={cn(type.bodySm, "mt-1 font-semibold text-royal")}>{pkg.subtitle}</p>
              )}
              <p className={cn(type.bodySm, "mt-1 text-mist")}>{pkg.description}</p>

              <div className="mt-5">
                {pkg.priceLabel && (
                  <p className="text-[12px] font-semibold uppercase tracking-wide text-mist">
                    {pkg.priceLabel}
                  </p>
                )}
                <p className="mt-1 text-[30px] font-bold leading-none text-cloud sm:text-[34px] lg:text-[38px]">
                  {pkg.price}
                </p>
              </div>

              <Button
                as="a"
                href="#contact"
                variant={pkg.featured ? "yellow" : "secondary"}
                className="mt-6 w-full"
              >
                Choose {pkg.name}
              </Button>

              <ul className="mt-7 space-y-3 border-t border-ink/10 pt-6">
                {pkg.features.map((f) => (
                  <li key={f.label} className="flex items-center gap-2.5 text-[13px]">
                    {f.included ? (
                      <Check className="size-4 shrink-0 text-royal" strokeWidth={2.5} />
                    ) : (
                      <Minus className="size-4 shrink-0 text-graphite" strokeWidth={2.5} />
                    )}
                    <span className={f.included ? "text-cloud" : "text-mist/50 line-through"}>
                      {f.label}
                    </span>
                  </li>
                ))}
              </ul>

              {pkg.extraNote && (
                <p className="mt-4 text-[12px] text-mist">{pkg.extraNote}</p>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}