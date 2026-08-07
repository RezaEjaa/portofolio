import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { FAQ as FAQ_DATA } from "../../data/faq";
import { type } from "../../utils/typography";
import { cn } from "../../utils/cn";
import { fadeUp, staggerContainer, viewportOnce } from "../../utils/motion";
import SectionTitle from "../ui/SectionTitle";

function FaqItem({ item, isOpen, onToggle }) {
  return (
    <motion.div
      variants={fadeUp}
      className="rounded-2xl border-2 border-ink bg-white shadow-hard-sm"
    >
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span className={cn(type.span, "text-cloud")}>{item.question}</span>
        <ChevronDown
          className={cn(
            "size-5 shrink-0 text-royal transition-transform duration-300",
            isOpen && "rotate-180"
          )}
        />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className={cn(type.bodySm, "px-6 pb-5 text-mist")}>{item.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <SectionTitle
          eyebrow="FAQ"
          title="Frequently asked questions."
          description="Still curious about something? Reach out — I'm happy to answer directly."
        />

        <motion.div
          variants={staggerContainer(0.06)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-12 space-y-3"
        >
          {FAQ_DATA.map((item, i) => (
            <FaqItem
              key={item.question}
              item={item}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}