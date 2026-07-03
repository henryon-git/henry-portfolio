import Link from "next/link";
import { ArrowRight, Shield, Code2, Globe, Lock, ChevronDown } from "lucide-react";
import TypingText from "@/components/TypingText";
import FadeSection from "@/components/FadeSection";

const skills = [
  { name: "HTML & CSS", level: 80, category: "Web" },
  { name: "JavaScript", level: 60, category: "Web" },
  { name: "Java", level: 65, category: "Programming" },
  { name: "Web Development", level: 70, category: "Web" },
  { name: "Network Fundamentals", level: 55, category: "Security" },
  { name: "System Security Concepts", level: 50, category: "Security" },
  { name: "Problem Solving", level: 82, category: "Soft Skills" },
  { name: "Collaboration", level: 88, category: "Soft Skills" },
];

const highlights = [
  {
    icon: Globe,
    title: "Web Development",
    desc: "Building clean, functional interfaces using HTML, CSS, and modern web standards.",
  },
  {
    icon: Code2,
    title: "Software Development",
    desc: "Writing structured, maintainable code with a foundation in Java and general programming principles.",
  },
  {
    icon: Lock,
    title: "Cybersecurity Focus",
    desc: "Actively deepening knowledge in system security, ethical hacking, and digital infrastructure protection.",
  },
  {
    icon: Shield,
    title: "IT Operations",
    desc: "Gaining hands-on professional experience at Hollard Insurance Ghana through National Service.",
  },
];

export default function Home() {
  return (
    <div className="dark:bg-navy bg-slate-light">
      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden dot-bg">
        {/* Ambient glow blobs */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-mint/5 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-20 right-20 w-64 h-64 rounded-full bg-mint/8 blur-[80px] pointer-events-none" />

        {/* Terminal decorations */}
        <div className="absolute top-28 left-6 md:left-12 font-mono text-xs text-mint/20 select-none hidden md:block">
          {["const henry = {", '  role: "IT Professional",', '  focus: "Cybersecurity",', "  status: 'available'", "};"].map(
            (line, i) => (
              <div key={i} className="leading-6">
                <span className="text-navy-surface/50 dark:text-white/10 mr-3">{String(i + 1).padStart(2, "0")}</span>
                {line}
              </div>
            )
          )}
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="fade-up delay-100">
            <span className="inline-block font-mono text-mint text-sm tracking-widest mb-6 border border-mint/25 px-4 py-1.5 rounded-full bg-mint/5">
              {"<"} Hello, World {"/>"}
            </span>
          </div>

          <h1 className="fade-up delay-200 font-display text-5xl md:text-7xl font-700 leading-none mb-4 dark:text-slate-light text-navy">
            Henry Aruna{" "}
            <span className="relative">
              <span className="text-mint">Nelson</span>
              <span className="absolute -bottom-1 left-0 w-full h-px bg-gradient-to-r from-mint to-transparent" />
            </span>
          </h1>

          <div className="fade-up delay-300 font-mono text-xl md:text-2xl mb-8 h-10 dark:text-slate-light/80 text-navy/70">
            <TypingText />
          </div>

          <p className="fade-up delay-400 dark:text-slate-muted text-navy/60 text-base md:text-lg max-w-xl mx-auto leading-relaxed mb-10">
            IT graduate from Ghana Communication Technology University, currently on National Service at Hollard Insurance Ghana.
            Building toward a career in cybersecurity.
          </p>

          <div className="fade-up delay-500 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/projects"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-mint text-navy font-display font-600 px-7 py-3.5 rounded text-sm tracking-wide hover:bg-mint-dim transition-colors duration-200 shadow-[0_0_24px_rgba(15,244,198,0.3)] hover:shadow-[0_0_36px_rgba(15,244,198,0.5)]"
            >
              View Projects <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 glow-border dark:text-slate-light text-navy font-display font-500 px-7 py-3.5 rounded text-sm tracking-wide hover:text-mint dark:hover:text-mint transition-colors duration-200"
            >
              Get in Touch
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-mint/40 animate-bounce">
          <span className="font-mono text-xs tracking-widest">SCROLL</span>
          <ChevronDown className="w-4 h-4" />
        </div>
      </section>

      {/* ─── HIGHLIGHTS ─── */}
      <section className="py-24 px-6 border-t border-mint/10">
        <div className="max-w-6xl mx-auto">
          <FadeSection>
            <div className="text-center mb-16">
              <span className="font-mono text-mint text-sm tracking-widest">// what I do</span>
              <h2 className="font-display text-3xl md:text-4xl font-700 dark:text-slate-light text-navy mt-2">
                Core Competencies
              </h2>
            </div>
          </FadeSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {highlights.map((item, i) => (
              <FadeSection key={item.title} delay={i * 100}>
                <div className="glow-border rounded-lg p-6 dark:bg-navy-surface/50 bg-white/60 h-full group hover:bg-mint/5 transition-colors duration-300">
                  <div className="w-10 h-10 rounded border border-mint/30 flex items-center justify-center mb-4 group-hover:border-mint group-hover:shadow-[0_0_12px_rgba(15,244,198,0.3)] transition-all duration-300">
                    <item.icon className="w-5 h-5 text-mint" />
                  </div>
                  <h3 className="font-display font-600 dark:text-slate-light text-navy mb-2 text-sm tracking-wide">
                    {item.title}
                  </h3>
                  <p className="dark:text-slate-muted text-navy/60 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SKILLS ─── */}
      <section id="skills" className="py-24 px-6 border-t border-mint/10">
        <div className="max-w-4xl mx-auto">
          <FadeSection>
            <div className="text-center mb-16">
              <span className="font-mono text-mint text-sm tracking-widest">// technical stack</span>
              <h2 className="font-display text-3xl md:text-4xl font-700 dark:text-slate-light text-navy mt-2">
                Skills & Proficiency
              </h2>
            </div>
          </FadeSection>

          <div className="space-y-5">
            {skills.map((skill, i) => (
              <FadeSection key={skill.name} delay={i * 60}>
                <div className="group">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <span className="font-display font-500 dark:text-slate-light text-navy text-sm">
                        {skill.name}
                      </span>
                      <span className="font-mono text-xs text-mint/50 border border-mint/20 px-2 py-0.5 rounded-full">
                        {skill.category}
                      </span>
                    </div>
                    <span className="font-mono text-xs text-mint">{skill.level}%</span>
                  </div>
                  <div className="h-1.5 dark:bg-white/5 bg-navy/10 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-mint to-mint-dim rounded-full transition-all duration-1000 ease-out group-hover:shadow-[0_0_8px_rgba(15,244,198,0.5)]"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              </FadeSection>
            ))}
          </div>

          <FadeSection delay={600}>
            <div className="mt-14 text-center">
              <Link
                href="/about"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-mono text-sm text-mint hover:text-mint-dim transition-colors duration-200 group"
              >
                Learn more about me{" "}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </FadeSection>
        </div>
      </section>
    </div>
  );
}
