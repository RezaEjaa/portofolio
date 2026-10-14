import { motion } from "framer-motion";
import { ArrowRight, Sparkle, UserRound } from "lucide-react";
import { SITE } from "../../constants/site";
import { type } from "../../utils/typography";
import { cn } from "../../utils/cn";
import { fadeUp, staggerContainer } from "../../utils/motion";
import Button from "../ui/Button";
import Badge from "../ui/Badge";

export default function Hero() {
  return <section id="home" className="relative overflow-hidden pb-20 pt-36 sm:pb-28 sm:pt-44">
    <div className="pointer-events-none absolute inset-0 -z-10"><div className="absolute inset-0 bg-noise" /><div className="absolute left-8 top-32 size-24 rotate-12 rounded-full bg-pink" /><div className="absolute right-10 top-40 size-16 rotate-[-20deg] bg-lemon" /><div className="absolute bottom-10 right-1/4 size-20 rounded-full bg-mint" /></div>
    <motion.div variants={staggerContainer(0.12)} initial="hidden" animate="show" className="mx-auto flex max-w-4xl flex-col items-center px-5 text-center sm:px-8">
      <motion.div variants={fadeUp}><Badge icon={Sparkle}>Building & learning every day</Badge></motion.div>
      <motion.h1 variants={fadeUp} custom={0.08} className={cn(type.h1, "mt-6 text-cloud")}>Hi, I&apos;m <span className="text-sunset">Reza.</span><br className="hidden sm:block" /> I build things for the web.</motion.h1>
      <motion.p variants={fadeUp} custom={0.16} className={cn(type.body, "mt-6 max-w-xl text-mist")}>I&apos;m a {SITE.role.toLowerCase()} building websites, web applications, and digital experiences while exploring modern technologies.</motion.p>
      <motion.div variants={fadeUp} custom={0.24} className="mt-9 flex flex-col gap-3 sm:flex-row"><Button as="a" href="#projects" size="lg" icon={ArrowRight}>View My Work</Button><Button as="a" href="#about" variant="secondary" size="lg" icon={UserRound}>About Me</Button></motion.div>
      <motion.div variants={fadeUp} custom={0.32} className="mt-14 grid w-full max-w-lg grid-cols-3 gap-4 border-t border-ink/10 pt-8">
        {[{ value: "RPL", valueColor: "text-sunset", label: "Student Developer" }, { value: "4", valueColor: "text-royal", label: "Featured Projects" }, { value: "∞", valueColor: "text-indigo", label: "Things to Learn" }].map((stat) => <div key={stat.label}><p className={cn(type.h3, stat.valueColor)}>{stat.value}</p><p className="mt-1 text-[12px] font-medium text-mist">{stat.label}</p></div>)}
      </motion.div>
    </motion.div>
    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }} className="relative mx-auto mt-16 max-w-3xl px-5 sm:px-8">
      <div className="animate-float rounded-3xl border-2 border-ink bg-white p-1.5 shadow-hard"><div className="flex items-center gap-1.5 border-b-2 border-ink/10 px-4 py-3"><span className="size-2.5 rounded-full bg-coral" /><span className="size-2.5 rounded-full bg-warning" /><span className="size-2.5 rounded-full bg-lilac" /></div><pre className="overflow-x-auto p-6 text-left text-[12px] leading-relaxed text-mist sm:text-sm"><code>{`const developer = {
  name: "${SITE.name}",
  stack: ["React", "Laravel", "MySQL"],
  focus: "web development & exploration",
  status: "learning by building",
};`}</code></pre></div>
      <span className="rotate-stamp absolute -left-4 top-1/3 hidden rounded-2xl border-2 border-ink bg-warning px-4 py-2 text-sm font-bold text-ink shadow-hard-sm sm:block">RPL student</span><span className="rotate-stamp absolute -right-6 top-6 hidden rounded-2xl border-2 border-ink bg-mint px-4 py-2 text-sm font-bold text-ink shadow-hard-sm sm:block">Curious mind</span>
    </motion.div>
  </section>;
}
