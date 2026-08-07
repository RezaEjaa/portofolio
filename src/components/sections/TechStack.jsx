import * as Icons from "lucide-react";
import { TECH_STACK } from "../../data/techStack";
import { type } from "../../utils/typography";
import { cn } from "../../utils/cn";

const PASTELS = ["bg-mint", "bg-pink", "bg-lemon", "bg-lavender", "bg-orange"];

function TechItem({ name, icon, index }) {
  const Icon = Icons[icon] ?? Icons.Code;
  const tone = PASTELS[index % PASTELS.length];
  return (
    <div
      className={cn(
        "flex items-center gap-3 rounded-2xl border-2 border-ink px-6 py-4 shadow-hard-sm",
        tone
      )}
    >
      <Icon className="size-5 text-ink" strokeWidth={2} />
      <span className={cn(type.span, "whitespace-nowrap text-ink")}>{name}</span>
    </div>
  );
}

export default function TechStack() {
  const items = [...TECH_STACK, ...TECH_STACK];

  return (
    <section className="relative border-y-2 border-ink bg-fog py-10">
      <div className="mb-6 text-center">
        <p className={cn(type.eyebrow, "text-mist")}>Tools I build with</p>
      </div>
      <div className="no-scrollbar overflow-hidden">
        <div className="flex w-max animate-marquee">
          {items.map((tech, i) => (
            <TechItem key={`${tech.name}-${i}`} {...tech} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}