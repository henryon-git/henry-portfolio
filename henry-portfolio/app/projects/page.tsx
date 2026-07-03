import { ExternalLink, Github, Terminal, Shield, Globe, Code } from "lucide-react";
import FadeSection from "@/components/FadeSection";

const projects = [
  {
    id: "01",
    title: "Personal Portfolio Website",
    desc: "A modern, responsive portfolio built with Next.js and Tailwind CSS, featuring dark/light mode, smooth animations, and a cybersecurity-inspired design aesthetic.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    icon: Globe,
    status: "Live",
    link: "#",
    github: "#",
  },
  {
    id: "02",
    title: "Student Information System",
    desc: "A Java-based desktop application for managing student records, grades, and course registrations. Built with core OOP principles and file-based data persistence.",
    tech: ["Java", "OOP", "File I/O"],
    icon: Code,
    status: "Completed",
    link: null,
    github: "#",
  },
  {
    id: "03",
    title: "IT Helpdesk Tracker",
    desc: "A simple web-based ticket tracking tool designed during National Service to help the IT team at Hollard Insurance log and resolve internal support requests efficiently.",
    tech: ["HTML", "CSS", "JavaScript"],
    icon: Terminal,
    status: "Internal",
    link: null,
    github: null,
  },
  {
    id: "04",
    title: "Network Security Research",
    desc: "Self-directed study project exploring common network vulnerabilities, basic penetration testing concepts, and security hardening techniques using free lab environments.",
    tech: ["Networking", "Security", "Linux"],
    icon: Shield,
    status: "In Progress",
    link: null,
    github: null,
  },
];

const statusColors: Record<string, string> = {
  Live: "text-mint border-mint/40 bg-mint/10",
  Completed: "text-blue-400 border-blue-400/40 bg-blue-400/10",
  Internal: "text-purple-400 border-purple-400/40 bg-purple-400/10",
  "In Progress": "text-amber-400 border-amber-400/40 bg-amber-400/10",
};

export default function Projects() {
  return (
    <div className="dark:bg-navy bg-slate-light min-h-screen pt-24 pb-20 px-6">
      <div className="max-w-5xl mx-auto">
        <FadeSection>
          <div className="mb-16">
            <span className="font-mono text-mint text-sm tracking-widest">// my work</span>
            <h1 className="font-display text-4xl md:text-5xl font-700 dark:text-slate-light text-navy mt-2">
              Projects
            </h1>
            <div className="w-16 h-px bg-mint mt-4" />
            <p className="dark:text-slate-muted text-navy/60 text-sm mt-4 font-mono max-w-lg">
              A selection of things I&apos;ve built, studied, and contributed to — from coursework to professional practice.
            </p>
          </div>
        </FadeSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <FadeSection key={project.id} delay={i * 100}>
              <div className="glow-border rounded-lg p-7 dark:bg-navy-surface/40 bg-white/60 flex flex-col h-full group hover:bg-mint/5 transition-colors duration-300">
                {/* Header */}
                <div className="flex items-start justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-mint/40 text-xs">{project.id}</span>
                    <div className="w-9 h-9 rounded border border-mint/25 flex items-center justify-center group-hover:border-mint/60 transition-colors duration-300">
                      <project.icon className="w-4 h-4 text-mint" />
                    </div>
                  </div>
                  <span
                    className={`font-mono text-xs border px-2.5 py-0.5 rounded-full ${statusColors[project.status]}`}
                  >
                    {project.status}
                  </span>
                </div>

                <h2 className="font-display font-600 dark:text-slate-light text-navy text-lg mb-3 leading-snug">
                  {project.title}
                </h2>
                <p className="dark:text-slate-muted text-navy/60 text-sm leading-relaxed flex-1 mb-6">
                  {project.desc}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-xs dark:text-slate-muted text-navy/50 border border-mint/15 dark:border-white/10 px-2.5 py-0.5 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 font-mono text-xs dark:text-slate-muted text-navy/50 hover:text-mint dark:hover:text-mint transition-colors duration-200"
                    >
                      <Github className="w-3.5 h-3.5" /> Code
                    </a>
                  )}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 font-mono text-xs dark:text-slate-muted text-navy/50 hover:text-mint dark:hover:text-mint transition-colors duration-200"
                    >
                      <ExternalLink className="w-3.5 h-3.5" /> Live Demo
                    </a>
                  )}
                  {!project.github && !project.link && (
                    <span className="font-mono text-xs text-navy/30 dark:text-white/20">Private / Internal</span>
                  )}
                </div>
              </div>
            </FadeSection>
          ))}
        </div>
      </div>
    </div>
  );
}
