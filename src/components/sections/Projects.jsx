import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { PROJECTS } from "../../data/projects";
import { type } from "../../utils/typography";
import { cn } from "../../utils/cn";
import { fadeUp, staggerContainer, viewportOnce } from "../../utils/motion";
import SectionTitle from "../ui/SectionTitle";
import Card from "../ui/Card";

function ProjectThumb({ title, image }) {
  return (
    <div className="relative flex h-48 items-center justify-center overflow-hidden rounded-2xl border-2 border-ink bg-gradient-to-br from-sunrise/30 via-sunset/20 to-royal/15">
      <div className="absolute inset-0 bg-noise" />
      {image ? (
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="h-full w-full object-cover"
        />
      ) : (
        <span className="font-display text-4xl font-bold text-ink/10">
          {title
            .split(" ")
            .slice(0, 2)
            .map((w) => w[0])
            .join("")}
        </span>
      )}
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionTitle
          eyebrow="Featured Projects"
          title="A few things I've built recently."
          description="Real projects built for real requirements — school competency exams, client needs, and hands-on practice."
        />

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-14 grid gap-6 lg:grid-cols-3"
        >
          {PROJECTS.map((project) => (
            <Card key={project.title} variants={fadeUp}>
              <ProjectThumb title={project.title} image={project.image} />
              <h3 className={cn(type.h3, "mt-5 text-cloud")}>{project.title}</h3>
              <p className={cn(type.bodySm, "mt-2 text-mist")}>{project.description}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border-2 border-ink bg-lemon px-2.5 py-1 text-[11px] font-semibold text-ink"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex items-center gap-4 border-t border-ink/10 pt-5">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-royal transition-colors hover:text-ink"
                >
                  Live Demo <ExternalLink className="size-3.5" />
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="ml-auto inline-flex items-center gap-1.5 text-[13px] font-semibold text-mist transition-colors hover:text-cloud"
                >
                  <Github className="size-3.5" /> Code
                </a>
              </div>
            </Card>
          ))}
        </motion.div>
      </div>
    </section>
  );
}