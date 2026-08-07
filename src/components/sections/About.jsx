import { motion } from "framer-motion";
import { GraduationCap, MapPin, Target } from "lucide-react";
import { type } from "../../utils/typography";
import { cn } from "../../utils/cn";
import { fadeUp, viewportOnce } from "../../utils/motion";
import Badge from "../ui/Badge";

const FACTS = [
  {
    icon: GraduationCap,
    label: "Currently studying",
    value: "Software Engineering (RPL), SMK",
  },
  {
    icon: Target,
    label: "Focused on",
    value: "Web development",
  },
  {
    icon: MapPin,
    label: "Based in",
    value: "Sidoarjo, East Java, Indonesia",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:items-center lg:gap-20">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="relative mx-auto aspect-square w-full max-w-md"
        >
          <div className="absolute inset-0 rounded-[2.5rem] border-2 border-dashed border-ink/30" />
          <div className="relative flex h-full items-center justify-center overflow-hidden rounded-[2.5rem] border-2 border-ink bg-white shadow-hard">
            <div className="absolute inset-0 bg-noise" />
            <div className="flex size-40 items-center justify-center overflow-hidden rounded-full border-2 border-ink bg-sunset shadow-hard-sm">
              <img
                src="/images/profile/profile.webp"
                alt="Muhammad Reza Alif Firdaus"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            <span className="rotate-stamp absolute left-6 top-6 size-16 rounded-full bg-lemon border-2 border-ink" />
            <span className="rotate-stamp absolute right-6 bottom-24 size-12 rounded-xl bg-pink border-2 border-ink" />
            <div className="absolute bottom-5 left-5 right-5 rounded-2xl border-2 border-ink bg-white/90 px-4 py-3">
              <p className={cn(type.span, "text-cloud")}>Open to freelance projects</p>
              <p className="mt-0.5 text-[12px] text-mist">Usually replies within a day</p>
            </div>
          </div>
        </motion.div>

        <div>
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={viewportOnce}>
            <Badge>About Me</Badge>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            custom={0.08}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className={cn(type.h2, "mt-5 text-cloud")}
          >
            A student developer who <span className="text-sunset">ships</span> real, working software.
          </motion.h2>

          <motion.p
            variants={fadeUp}
            custom={0.16}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className={cn(type.body, "mt-5 text-mist")}
          >
            I started building software through hands-on school projects — from
            rental management systems to full library platforms — and it turned
            into a genuine focus on writing clean, working code under real
            deadlines. Every project I take on, freelance or academic, follows
            the same standard: understand the requirement fully, then build it
            properly.
          </motion.p>

          <motion.p
            variants={fadeUp}
            custom={0.22}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className={cn(type.body, "mt-4 text-mist")}
          >
            My goal is to keep growing as a full-stack developer while helping
            small businesses and fellow students get a website or system that
            actually works for them — not just something that looks good in a
            screenshot.
          </motion.p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {FACTS.map((fact, i) => {
              const pastel = ["bg-mint", "bg-lemon", "bg-pink"][i % 3];
              return (
                <motion.div
                  key={fact.label}
                  variants={fadeUp}
                  custom={0.28 + i * 0.06}
                  initial="hidden"
                  whileInView="show"
                  viewport={viewportOnce}
                  className={cn(
                    "rounded-2xl border-2 border-ink p-4 shadow-hard-sm",
                    pastel
                  )}
                >
                  <fact.icon className="size-5 text-ink" strokeWidth={2} />
                  <p className="mt-3 text-[11px] font-semibold uppercase tracking-wide text-mist">
                    {fact.label}
                  </p>
                  <p className={cn(type.bodySm, "mt-1 text-ink")}>{fact.value}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}