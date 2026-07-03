import { Briefcase, GraduationCap, Award } from "lucide-react";
import FadeSection from "@/components/FadeSection";

const timeline = [
  {
    type: "work",
    icon: Briefcase,
    title: "National Service — IT Department",
    org: "Hollard Insurance Ghana",
    period: "2024 – Present",
    location: "Accra, Ghana",
    bullets: [
      "Providing hands-on technical support in a professional insurance IT environment.",
      "Assisting in the maintenance and troubleshooting of internal systems and networks.",
      "Supporting day-to-day IT operations and contributing to efficiency improvements.",
      "Gaining practical exposure to enterprise-level software and infrastructure.",
    ],
  },
  {
    type: "education",
    icon: GraduationCap,
    title: "BSc Information Technology",
    org: "Ghana Communication Technology University (GCTU)",
    period: "2020 – 2024",
    location: "Accra, Ghana",
    bullets: [
      "Studied core IT disciplines including networking, databases, and software development.",
      "Completed coursework in web development, Java programming, and system design.",
      "Developed problem-solving skills through practical project work and group assignments.",
      "Graduated with a well-rounded foundation in IT principles and applications.",
    ],
  },
  {
    type: "achievement",
    icon: Award,
    title: "Cybersecurity Self-Study",
    org: "Independent Learning",
    period: "2024 – Present",
    location: "Online",
    bullets: [
      "Actively exploring ethical hacking concepts, network security, and vulnerability assessment.",
      "Practicing in free lab environments to simulate real-world security scenarios.",
      "Building knowledge toward professional cybersecurity certifications.",
      "Studying digital infrastructure protection and system hardening techniques.",
    ],
  },
];

const typeColor: Record<string, string> = {
  work: "border-mint/40 shadow-[0_0_8px_rgba(15,244,198,0.15)]",
  education: "border-blue-400/40 shadow-[0_0_8px_rgba(96,165,250,0.15)]",
  achievement: "border-purple-400/40 shadow-[0_0_8px_rgba(192,132,252,0.15)]",
};

const iconColor: Record<string, string> = {
  work: "text-mint",
  education: "text-blue-400",
  achievement: "text-purple-400",
};

const dotColor: Record<string, string> = {
  work: "bg-mint",
  education: "bg-blue-400",
  achievement: "bg-purple-400",
};

export default function Experience() {
  return (
    <div className="dark:bg-navy bg-slate-light min-h-screen pt-24 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <FadeSection>
          <div className="mb-16">
            <span className="font-mono text-mint text-sm tracking-widest">// career path</span>
            <h1 className="font-display text-4xl md:text-5xl font-700 dark:text-slate-light text-navy mt-2">
              Experience
            </h1>
            <div className="w-16 h-px bg-mint mt-4" />
          </div>
        </FadeSection>

        {/* Legend */}
        <FadeSection delay={100}>
          <div className="flex flex-wrap gap-5 mb-12">
            {[
              { label: "Work", color: "bg-mint" },
              { label: "Education", color: "bg-blue-400" },
              { label: "Self-Development", color: "bg-purple-400" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full ${item.color}`} />
                <span className="font-mono text-xs dark:text-slate-muted text-navy/50">{item.label}</span>
              </div>
            ))}
          </div>
        </FadeSection>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-5 top-0 bottom-0 w-px dark:bg-white/5 bg-navy/10" />

          <div className="space-y-10">
            {timeline.map((item, i) => (
              <FadeSection key={item.title} delay={i * 150}>
                <div className="relative pl-14">
                  {/* Timeline dot */}
                  <div className={`absolute left-3.5 top-6 w-3 h-3 rounded-full ${dotColor[item.type]} -translate-x-1/2 shadow-lg`} />

                  <div className={`glow-border rounded-lg p-7 dark:bg-navy-surface/40 bg-white/60 border ${typeColor[item.type]}`}>
                    {/* Top row */}
                    <div className="flex items-start justify-between flex-wrap gap-3 mb-5">
                      <div className="flex items-start gap-3">
                        <div className={`w-9 h-9 rounded border border-current/20 flex items-center justify-center flex-shrink-0 mt-0.5 ${iconColor[item.type]}`}>
                          <item.icon className="w-4 h-4" />
                        </div>
                        <div>
                          <h3 className="font-display font-600 dark:text-slate-light text-navy leading-snug">
                            {item.title}
                          </h3>
                          <p className={`font-mono text-sm ${iconColor[item.type]}`}>{item.org}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-mono text-xs dark:text-slate-muted text-navy/50">{item.period}</p>
                        <p className="font-mono text-xs dark:text-slate-muted/60 text-navy/40">{item.location}</p>
                      </div>
                    </div>

                    {/* Bullets */}
                    <ul className="space-y-2.5">
                      {item.bullets.map((b, j) => (
                        <li key={j} className="flex items-start gap-3 dark:text-slate-muted text-navy/60 text-sm leading-relaxed">
                          <span className={`mt-1.5 w-1 h-1 rounded-full flex-shrink-0 ${dotColor[item.type]}`} />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </FadeSection>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
