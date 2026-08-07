import { Github, Instagram, Linkedin, ArrowUpRight } from "lucide-react";
import { NAV_LINKS, SITE, SOCIAL_LINKS } from "../../constants/site";
import { type } from "../../utils/typography";
import { cn } from "../../utils/cn";

const ICONS = { Github, Linkedin, Instagram };

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t-[3px] border-ink bg-white">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <a href="#home" className="flex items-center gap-2">
              <span className="flex size-9 items-center justify-center rounded-[7px] bg-indigo font-display text-lg font-bold text-white shadow-hard-sm">
                R
              </span>
              <span className="text-lg font-semibold text-cloud">{SITE.name}</span>
            </a>
            <p className={cn(type.bodySm, "mt-4 max-w-xs text-mist")}>{SITE.tagline}</p>
          </div>

          <div>
            <p className={cn(type.span, "text-cloud")}>Navigation</p>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={cn(type.bodySm, "text-mist transition-colors hover:text-lilac")}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className={cn(type.span, "text-cloud")}>Let&apos;s Connect</p>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className={cn(type.bodySm, "text-mist transition-colors hover:text-lilac")}
                >
                  {SITE.email}
                </a>
              </li>
              <li className={cn(type.bodySm, "text-mist")}>{SITE.location}</li>
            </ul>
            <div className="mt-5 flex gap-3">
              {SOCIAL_LINKS.map((s) => {
                const Icon = ICONS[s.icon];
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.label}
                    className="flex size-10 items-center justify-center rounded-full border-2 border-ink text-ink shadow-hard-sm transition-colors hover:bg-warning"
                  >
                    <Icon className="size-4.5" strokeWidth={1.8} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-ink/10 pt-6 sm:flex-row">
          <p className={cn(type.bodySm, "text-mist")}>
            © {year} {SITE.name}. All rights reserved.
          </p>
          <a
            href="#home"
            className={cn(type.bodySm, "inline-flex items-center gap-1 text-mist transition-colors hover:text-lilac")}
          >
            Back to top <ArrowUpRight className="size-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}