import * as Icons from "lucide-react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { SERVICES } from "../../data/services";
import { type } from "../../utils/typography";
import { cn } from "../../utils/cn";
import { fadeUp, staggerContainer, viewportOnce } from "../../utils/motion";
import SectionTitle from "../ui/SectionTitle";
import Card from "../ui/Card";

export default function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionTitle
          eyebrow="Services"
          title="What I can build for you."
          description="From a single landing page to a full-stack web application — pick the scope that fits your goal."
        />

        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {SERVICES.map((service, i) => {
            const Icon = Icons[service.icon];
            const tone = ["mint", "lemon", "pink", "orange", "lavender", "white"][i % 6];
            return (
              <Card key={service.title} variants={fadeUp} tone={tone} className="flex flex-col">
                <div className="flex size-11 items-center justify-center rounded-xl border-2 border-ink bg-pink text-ink shadow-hard-sm">
                  <Icon className="size-5" strokeWidth={2} />
                </div>
                <h3 className={cn(type.h3, "mt-5 text-cloud")}>{service.title}</h3>
                <p className={cn(type.bodySm, "mt-2 text-mist")}>{service.description}</p>

                <ul className="mt-5 space-y-2.5">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-[13px] text-mist">
                      <Check className="size-3.5 shrink-0 text-royal" strokeWidth={2.5} />
                      {f}
                    </li>
                  ))}
                </ul>
              </Card>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}