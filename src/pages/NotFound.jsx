import { Helmet } from "react-helmet-async";
import { Home as HomeIcon } from "lucide-react";
import { type } from "../utils/typography";
import { cn } from "../utils/cn";
import Button from "../components/ui/Button";

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>Page Not Found — Rezz Dev</title>
      </Helmet>
      <section className="relative flex min-h-screen flex-col items-center justify-center px-5 text-center">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="rotate-12 absolute left-10 top-20 size-24 rounded-full bg-pink" />
          <div className="absolute right-12 top-28 size-16 bg-lemon" />
          <div className="absolute bottom-16 left-1/4 size-20 rounded-full bg-mint" />
        </div>
        <p className={cn(type.h1, "text-cloud")}>404</p>
        <p className={cn(type.body, "mt-3 max-w-sm text-mist")}>
          This page doesn&apos;t exist. Let&apos;s get you back to somewhere real.
        </p>
        <Button as="a" href="/" size="lg" icon={HomeIcon} className="mt-8">
          Back to Home
        </Button>
      </section>
    </>
  );
}