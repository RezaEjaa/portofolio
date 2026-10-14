import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { PROJECTS } from "../../data/projects";
import { type } from "../../utils/typography";
import { cn } from "../../utils/cn";
import { fadeUp, staggerContainer, viewportOnce } from "../../utils/motion";
import SectionTitle from "../ui/SectionTitle";
import Card from "../ui/Card";
function ProjectThumb({ title, image }) { return <div className="relative flex h-48 items-center justify-center overflow-hidden rounded-2xl border-2 border-ink bg-gradient-to-br from-sunrise/30 via-sunset/20 to-royal/15"><div className="absolute inset-0 bg-noise" />{image ? <img src={image} alt={`${title} preview`} loading="lazy" className="h-full w-full object-cover" /> : <span className="font-display text-4xl font-bold text-ink/20">{title.slice(0, 2)}</span>}</div>; }
export default function Projects() {
  const featured = PROJECTS.slice(0, 3);
  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionTitle
          eyebrow="Selected Projects"
          title="Some things I've worked on."
          description="A selection of projects where I learned by planning, building, and iterating."
        />
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {featured.map((project) => (
            <Card key={project.slug} variants={fadeUp}>
              <ProjectThumb title={project.title} image={project.image} />
              <p className="mt-5 text-[11px] font-semibold uppercase tracking-wide text-royal">
                {project.subtitle}
              </p>
              <h3 className={cn(type.h3, "mt-1 text-cloud")}>{project.title}</h3>
              <p className={cn(type.bodySm, "mt-2 text-mist")}>{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="rounded-full border-2 border-ink bg-lemon px-2.5 py-1 text-[11px] font-semibold text-ink">
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex items-center gap-4 border-t border-ink/10 pt-5">
                <Link
                  to={`/projects/${project.slug}`}
                  className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-royal transition-colors hover:text-ink"
                >
                  View details <ArrowRight className="size-3.5" />
                </Link>
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-mist transition-colors hover:text-cloud">
                    Demo <ExternalLink className="size-3.5" />
                  </a>
                )}
                {project.github && (
                  <a href={project.github} target="_blank" rel="noreferrer" className="ml-auto inline-flex items-center gap-1.5 text-[13px] font-semibold text-mist transition-colors hover:text-cloud">
                    <Github className="size-3.5" /> Code
                  </a>
                )}
              </div>
            </Card>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
