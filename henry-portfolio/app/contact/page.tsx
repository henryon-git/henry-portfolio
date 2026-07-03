"use client";

import { useState } from "react";
import { Mail, Linkedin, Github, Send, MapPin, MessageSquare } from "lucide-react";
import FadeSection from "@/components/FadeSection";

const socials = [
  {
    icon: Mail,
    label: "Email",
    value: "henryarunanelson@email.com",
    href: "mailto:henryarunanelson@email.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/henry-nelson",
    href: "https://linkedin.com/in/henry-nelson",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/henry-nelson",
    href: "https://github.com/henry-nelson",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Accra, Ghana",
    href: null,
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailto = `mailto:henryarunanelson@email.com?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    )}`;
    window.open(mailto, "_blank");
    setSent(true);
  };

  const inputClass =
    "w-full dark:bg-navy-surface/60 bg-white/60 border border-mint/20 rounded px-4 py-3 font-mono text-sm dark:text-slate-light text-navy placeholder:dark:text-slate-muted/40 placeholder:text-navy/30 focus:outline-none focus:border-mint focus:shadow-[0_0_12px_rgba(15,244,198,0.15)] transition-all duration-200";

  return (
    <div className="dark:bg-navy bg-slate-light min-h-screen pt-24 pb-20 px-6">
      <div className="max-w-5xl mx-auto">
        <FadeSection>
          <div className="mb-16">
            <span className="font-mono text-mint text-sm tracking-widest">// reach out</span>
            <h1 className="font-display text-4xl md:text-5xl font-700 dark:text-slate-light text-navy mt-2">
              Get in Touch
            </h1>
            <div className="w-16 h-px bg-mint mt-4" />
            <p className="dark:text-slate-muted text-navy/60 text-sm mt-4 font-mono max-w-lg">
              Open to opportunities, collaborations, or just a conversation about tech and cybersecurity.
            </p>
          </div>
        </FadeSection>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Contact Info */}
          <FadeSection className="lg:col-span-2">
            <div className="space-y-4">
              {socials.map((s) => (
                <div key={s.label} className="glow-border rounded-lg p-5 dark:bg-navy-surface/40 bg-white/60 group hover:bg-mint/5 transition-colors duration-300">
                  <div className="flex items-center gap-4">
                    <div className="w-9 h-9 rounded border border-mint/25 flex items-center justify-center group-hover:border-mint/60 transition-colors duration-300">
                      <s.icon className="w-4 h-4 text-mint" />
                    </div>
                    <div>
                      <p className="font-mono text-xs text-mint/50 tracking-widest">{s.label.toUpperCase()}</p>
                      {s.href ? (
                        <a
                          href={s.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-display text-sm dark:text-slate-light text-navy hover:text-mint dark:hover:text-mint transition-colors duration-200"
                        >
                          {s.value}
                        </a>
                      ) : (
                        <p className="font-display text-sm dark:text-slate-light text-navy">{s.value}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}

              <div className="glow-border rounded-lg p-5 dark:bg-navy-surface/40 bg-white/60">
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded border border-mint/25 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MessageSquare className="w-4 h-4 text-mint" />
                  </div>
                  <div>
                    <p className="font-mono text-xs text-mint/50 tracking-widest mb-1">AVAILABILITY</p>
                    <p className="font-display text-sm dark:text-slate-light text-navy">Open to Opportunities</p>
                    <p className="dark:text-slate-muted text-navy/60 text-xs mt-1 leading-relaxed">
                      Internships, graduate roles, or cybersecurity projects.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeSection>

          {/* Contact Form */}
          <FadeSection delay={150} className="lg:col-span-3">
            {sent ? (
              <div className="glow-border rounded-lg p-10 dark:bg-navy-surface/40 bg-white/60 text-center">
                <div className="w-14 h-14 rounded border border-mint/40 flex items-center justify-center mx-auto mb-5 shadow-[0_0_20px_rgba(15,244,198,0.2)]">
                  <Send className="w-6 h-6 text-mint" />
                </div>
                <h3 className="font-display font-600 dark:text-slate-light text-navy text-xl mb-2">Message Prepared!</h3>
                <p className="dark:text-slate-muted text-navy/60 text-sm">
                  Your email client should have opened. Looking forward to connecting!
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-6 font-mono text-sm text-mint hover:text-mint-dim transition-colors"
                >
                  Send another →
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="glow-border rounded-lg p-8 dark:bg-navy-surface/40 bg-white/60 space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="font-mono text-xs text-mint/60 tracking-widest block mb-2">NAME</label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="font-mono text-xs text-mint/60 tracking-widest block mb-2">EMAIL</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label className="font-mono text-xs text-mint/60 tracking-widest block mb-2">SUBJECT</label>
                  <input
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    required
                    placeholder="What's this about?"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className="font-mono text-xs text-mint/60 tracking-widest block mb-2">MESSAGE</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    placeholder="Your message..."
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-mint text-navy font-display font-600 py-3.5 rounded text-sm tracking-wide hover:bg-mint-dim transition-colors duration-200 shadow-[0_0_20px_rgba(15,244,198,0.25)] hover:shadow-[0_0_32px_rgba(15,244,198,0.45)]"
                >
                  <Send className="w-4 h-4" /> Send Message
                </button>
              </form>
            )}
          </FadeSection>
        </div>
      </div>
    </div>
  );
}
