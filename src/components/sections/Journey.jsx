import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { type } from "../../utils/typography";
import { cn } from "../../utils/cn";
import { fadeUp, staggerContainer, viewportOnce } from "../../utils/motion";
import Badge from "../ui/Badge";

// newest first (top → bottom)
const JOURNEY = [
  {
    year: "2026",
    side: "right",
    tag: "PROFESSIONAL",
    tagColor: "bg-indigo text-white",
    title: "Junior Web & Mobile Developer",
    place: "Independent Software Development",
    description:
      "Designing and deploying end-to-end applications, including an offline-first mobile app for agriculture and several institutional information systems.",
    skills: ["Next.js", "React Native", "Full-Stack", "System Analysis"],
  },
  {
    year: "2026",
    side: "left",
    tag: "INTERNSHIP",
    tagColor: "bg-ink text-white",
    title: "Internship — Web Developer",
    place: "CV Hexa Integra",
    description:
      "Contributed to real client projects inside a professional software house. Handled full-stack tasks, collaborated with a team, and shipped production-ready features.",
    skills: ["Laravel", "PHP", "MySQL", "Teamwork"],
  },
  {
    year: "2025",
    side: "right",
    tag: "LEARNING",
    tagColor: "bg-royal text-white",
    title: "Algorithms, Python & C",
    place: "Self-Study",
    description:
      "Dug into computer science fundamentals — algorithms, data structures, and low-level thinking through Python and C. Built a stronger mental model of how programs actually run.",
    skills: ["Python", "C", "Algorithms", "Data Structures"],
  },
  {
    year: "2024",
    side: "left",
    tag: "EDUCATION",
    tagColor: "bg-sunrise text-white",
    title: "Enrolled — SMK Antartika 2",
    place: "RPL (Software Engineering), Sidoarjo",
    description:
      "Started vocational school in the Software Engineering (RPL) program. Learned web fundamentals, database systems, and worked on collaborative school projects.",
    skills: ["PHP", "HTML", "CSS", "MySQL", "Bootstrap"],
  },
  {
    year: "2023",
    side: "right",
    tag: "STARTED",
    tagColor: "bg-mint text-ink",
    title: "First Steps — HTML, CSS & JS",
    place: "Self-Taught",
    description:
      "Picked up HTML, CSS, and JavaScript from scratch. Discovered that building things was the fastest way to learn. Never stopped since.",
    skills: ["HTML", "CSS", "JavaScript"],
  },
];

export default function Journey() {
  return (
    <section id="journey" className="relative overflow-hidden py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">

        {/* Header */}
        <div className="text-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="mb-4 flex justify-center"
          >
            <Badge>My Journey</Badge>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            custom={0.08}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="font-display text-[60px] font-[900] uppercase leading-none tracking-[-0.04em] text-cloud sm:text-[80px] lg:text-[110px]"
          >
            MY JOURNEY
          </motion.h2>
          <motion.p
            variants={fadeUp}
            custom={0.16}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className={cn(type.body, "mx-auto mt-5 max-w-xl text-mist")}
          >
            Milestones of growth: from first HTML tags to professional production environments.
          </motion.p>
        </div>

        {/* Timeline */}
        <div className="relative mt-20">
          {/* Center line — desktop only */}
          <div className="absolute left-1/2 top-0 hidden h-full w-[2px] -translate-x-1/2 bg-ink/10 lg:block" />

          <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="flex flex-col gap-14 lg:gap-20"
          >
            {JOURNEY.map((item, i) => (
              <motion.div
                key={item.year + item.title}
                variants={fadeUp}
                custom={i * 0.07}
                className={cn(
                  "relative flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-0",
                  item.side === "left" ? "lg:flex-row-reverse" : ""
                )}
              >
                {/* Year side */}
                <div
                  className={cn(
                    "flex w-full lg:w-1/2",
                    item.side === "right"
                      ? "lg:justify-end lg:pr-20"
                      : "lg:justify-start lg:pl-20"
                  )}
                >
                  <span
                    className={cn(
                      "select-none font-display font-[900] leading-none tracking-[-0.05em]",
                      "text-[80px] sm:text-[100px] lg:text-[130px]",
                      "text-ink/[0.07]"
                    )}
                  >
                    {item.year}
                  </span>
                </div>

                {/* Center dot */}
                <div className="absolute left-1/2 hidden -translate-x-1/2 lg:flex lg:items-center lg:justify-center">
                  <div className="size-5 rounded-full border-[3px] border-ink bg-white shadow-hard-sm" />
                </div>

                {/* Card side */}
                <div
                  className={cn(
                    "w-full lg:w-1/2",
                    item.side === "right" ? "lg:pl-20" : "lg:pr-20"
                  )}
                >
                  <div className="rounded-2xl border-[3px] border-ink bg-white p-6 shadow-card sm:p-8">
                    {/* Tag */}
                    <span
                      className={cn(
                        "inline-block rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-widest",
                        item.tagColor
                      )}
                    >
                      {item.tag}
                    </span>

                    {/* Title */}
                    <h3 className={cn(type.h3, "mt-3 text-cloud")}>
                      {item.title}
                    </h3>

                    {/* Place */}
                    <p className="mt-1.5 flex items-center gap-1.5 text-[12px] font-semibold uppercase tracking-widest text-mist">
                      <MapPin className="size-3.5 shrink-0" />
                      {item.place}
                    </p>

                    {/* Description */}
                    <p className={cn(type.bodySm, "mt-3 text-mist")}>
                      {item.description}
                    </p>

                    {/* Skill tags */}
                    <div className="mt-5 flex flex-wrap gap-2">
                      {item.skills.map((s) => (
                        <span
                          key={s}
                          className="rounded-full border-[1.5px] border-ink bg-fog px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-ink"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
