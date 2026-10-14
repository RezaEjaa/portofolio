import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, SITE } from "../../constants/site";
import { cn } from "../../utils/cn";
import { type } from "../../utils/typography";
import Button from "../ui/Button";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "py-3" : "py-5"
      )}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div
          className={cn(
            "flex items-center justify-between rounded-2xl border transition-all duration-300",
            scrolled
              ? "border-2 border-ink bg-white px-4 py-2.5 shadow-hard-sm"
              : "border-2 border-transparent bg-transparent px-4 py-2.5"
          )}
        >
          <a href="#home" className="flex items-center gap-2">
            <span className="flex size-9 items-center justify-center rounded-[7px] bg-indigo font-display text-lg font-bold text-white shadow-hard-sm">
              R
            </span>
            <span className="text-lg font-semibold text-cloud">{SITE.name}</span>
          </a>

          <nav className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  type.span,
                  "rounded-full px-4 py-2 text-mist transition-colors hover:bg-fog hover:text-ink"
                )}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button as="a" href="#contact" size="md">
              Let&apos;s Connect
            </Button>
          </div>

          <button
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex size-10 items-center justify-center rounded-xl border-2 border-ink text-ink lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="mx-5 mt-2 rounded-2xl border-2 border-ink bg-white p-4 shadow-hard sm:mx-8 lg:hidden"
          >
            <nav className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    type.body,
                    "rounded-xl px-4 py-3 text-mist transition-colors hover:bg-fog hover:text-ink"
                  )}
                >
                  {link.label}
                </a>
              ))}
              <Button as="a" href="#contact" onClick={() => setOpen(false)} className="mt-2 w-full">
                Let&apos;s Connect
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
