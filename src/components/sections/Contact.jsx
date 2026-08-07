import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, MessageCircle, Send, Loader2, CheckCircle2 } from "lucide-react";
import emailjs from "@emailjs/browser";
import { SITE } from "../../constants/site";
import { type } from "../../utils/typography";
import { cn } from "../../utils/cn";
import { fadeUp, staggerContainer, viewportOnce } from "../../utils/motion";
import SectionTitle from "../ui/SectionTitle";
import Button from "../ui/Button";

const CHANNELS = [
  { icon: Mail, label: "Email", value: SITE.email, href: `mailto:${SITE.email}` },
  { icon: MessageCircle, label: "WhatsApp", value: SITE.whatsappLabel, href: SITE.whatsapp },
  { icon: MapPin, label: "Location", value: SITE.location, href: null },
];

// Fill these in with your own EmailJS service/template/public key to go live.
const EMAILJS_CONFIG = {
  serviceId: "YOUR_SERVICE_ID",
  templateId: "YOUR_TEMPLATE_ID",
  publicKey: "YOUR_PUBLIC_KEY",
};

export default function Contact() {
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        form,
        EMAILJS_CONFIG.publicKey
      );
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="relative overflow-hidden rounded-[2.5rem] border-2 border-ink bg-fog p-8 shadow-card sm:p-12 lg:p-16">
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute -left-10 -top-10 size-28 rounded-2xl rotate-12 bg-pink border-2 border-ink" />
            <div className="absolute right-8 top-10 size-16 rotate-[-16deg] bg-lemon border-2 border-ink" />
            <div className="absolute -bottom-8 -right-8 size-28 rounded-full bg-mint border-2 border-ink" />
          </div>

          <div className="grid gap-14 lg:grid-cols-2">
            <div>
              <SectionTitle
                align="left"
                eyebrow="Contact"
                title="Let's build something together."
                description="Tell me a bit about your project — I'll get back to you within a day with next steps."
              />

              <motion.div
                variants={staggerContainer(0.08)}
                initial="hidden"
                whileInView="show"
                viewport={viewportOnce}
                className="mt-8 space-y-4"
              >
                {CHANNELS.map((c) => (
                  <motion.a
                    key={c.label}
                    variants={fadeUp}
                    href={c.href ?? undefined}
                    target={c.href ? "_blank" : undefined}
                    rel={c.href ? "noreferrer" : undefined}
                    className={cn(
                      "flex items-center gap-4 rounded-2xl border-2 border-ink bg-white px-5 py-4 shadow-hard-sm",
                      c.href && "transition-all duration-150 hover:shadow-none"
                    )}
                  >
                    <div className="flex size-10 items-center justify-center rounded-xl border-2 border-ink bg-pink text-ink">
                      <c.icon className="size-4.5" strokeWidth={2} />
                    </div>
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-wide text-mist">
                        {c.label}
                      </p>
                      <p className={cn(type.bodySm, "text-cloud")}>{c.value}</p>
                    </div>
                  </motion.a>
                ))}
              </motion.div>
            </div>

            <motion.form
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              <div>
                <label htmlFor="name" className="mb-1.5 block text-[12px] font-semibold text-mist">
                  Your Name
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Jane Doe"
                  className={cn(
                    type.input,
                    "w-full rounded-xl border-2 border-ink bg-white px-4 py-3 text-ink placeholder:text-mist/70 focus:border-royal"
                  )}
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-[12px] font-semibold text-mist">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="jane@company.com"
                  className={cn(
                    type.input,
                    "w-full rounded-xl border-2 border-ink bg-white px-4 py-3 text-ink placeholder:text-mist/70 focus:border-royal"
                  )}
                />
              </div>
              <div>
                <label htmlFor="message" className="mb-1.5 block text-[12px] font-semibold text-mist">
                  Project Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me what you need built..."
                  className={cn(
                    type.input,
                    "w-full resize-none rounded-xl border-2 border-ink bg-white px-4 py-3 text-ink placeholder:text-mist/70 focus:border-royal"
                  )}
                />
              </div>

              <Button
                type="submit"
                disabled={status === "sending"}
                icon={status === "sending" ? Loader2 : status === "sent" ? CheckCircle2 : Send}
                className="w-full disabled:opacity-70"
              >
                {status === "sending" && "Sending..."}
                {status === "sent" && "Message Sent"}
                {(status === "idle" || status === "error") && "Send Message"}
              </Button>
              {status === "error" && (
                <p className="text-center text-[12px] text-sunset">
                  Something went wrong — please email me directly instead.
                </p>
              )}
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
}