import { motion } from "framer-motion";
import { Flag, Palette, Users } from "lucide-react";
import { type } from "../../utils/typography";
import { cn } from "../../utils/cn";
import { fadeUp, viewportOnce } from "../../utils/motion";
import SectionTitle from "../ui/SectionTitle";
const ITEMS = [{ icon: Flag, title: "Scout Tech", text: "Exploring the connection between Scouting, basic coding, and multimedia." }, { icon: Palette, title: "Design exploration", text: "Learning how UI and UX shape the way people experience a product." }, { icon: Users, title: "Working together", text: "Enjoying the process of sharing ideas and building with others." }];
export default function BeyondCode() { return <section className="relative py-24 sm:py-32"><div className="mx-auto max-w-7xl px-5 sm:px-8"><SectionTitle eyebrow="Beyond Code" title="More than a list of technologies." description="I also enjoy the communities, creative work, and collaboration around technology." /><motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={viewportOnce} className="mt-14 grid gap-5 md:grid-cols-3">{ITEMS.map((item, i) => <article key={item.title} className={cn("rounded-3xl border-2 border-ink p-6 shadow-hard-sm", ["bg-pink", "bg-lemon", "bg-mint"][i])}><item.icon className="size-6 text-ink" /><h3 className={cn(type.h3, "mt-5 text-cloud")}>{item.title}</h3><p className={cn(type.bodySm, "mt-2 text-mist")}>{item.text}</p></article>)}</motion.div></div></section>; }
