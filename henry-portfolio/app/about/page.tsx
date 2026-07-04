import { GraduationCap, MapPin, Briefcase, Target, Users, Zap, Download } from "lucide-react";
import FadeSection from "@/components/FadeSection";

const traits = [
  { icon: Zap, label: "Fast Learner", desc: "Quickly absorbs new technologies and concepts in professional settings." },
  { icon: Users, label: "Collaborative", desc: "Thrives in team environments and cross-functional projects." },
  { icon: Target, label: "Goal-Oriented", desc: "Clear path toward a specialized cybersecurity career." },
];

export default function About() {
  return (
    <div className="dark:bg-navy bg-slate-light min-h-screen pt-24 pb-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <FadeSection>
          <div className="mb-16">
            <span className="font-mono text-mint text-sm tracking-widest">// about me</span>
            <h1 className="font-display text-4xl md:text-5xl font-700 dark:text-slate-light text-navy mt-2">
              Who I Am
            </h1>
            <div className="w-16 h-px bg-mint mt-4" />
          </div>
        </FadeSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Bio */}
          <FadeSection>
            <div className="space-y-5">
              <p className="dark:text-slate-muted text-navy/70 leading-relaxed text-base">
                I&apos;m <span className="dark:text-slate-light text-navy font-500">Henry Aruna Nelson</span>, an Information
                Technology graduate from{" "}
                <span className="text-mint">Ghana Communication Technology University</span>. I recently completed my
                studies and am currently undertaking my National Service at{" "}
                <span className="text-mint">Hollard Insurance Ghana</span>, where I&apos;m gaining hands-on experience in a
                professional IT environment.
              </p>
              <p className="dark:text-slate-muted text-navy/70 leading-relaxed text-base">
                I have a solid foundation in web development, programming, and problem-solving, with skills in HTML, CSS,
                Java, and general software development principles. I enjoy building practical solutions that improve
                efficiency and make systems easier to use.
              </p>
              <p className="dark:text-slate-muted text-navy/70 leading-relaxed text-base">
                My current focus is to deepen my knowledge in{" "}
                <span className="dark:text-slate-light text-navy font-500">cybersecurity</span>, with a long-term goal of
                building a career in the field — particularly in system security, ethical hacking, and protecting digital
                infrastructure.
              </p>
            </div>
          </FadeSection>

          {/* Info card */}
          <FadeSection delay={150}>
            <div className="glow-border rounded-lg p-8 dark:bg-navy-surface/40 bg-white/60 space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-9 h-9 rounded border border-mint/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <GraduationCap className="w-4 h-4 text-mint" />
                </div>
                <div>
                  <p className="font-mono text-xs text-mint/60 tracking-widest mb-0.5">EDUCATION</p>
                  <p className="font-display font-500 dark:text-slate-light text-navy text-sm">BSc Information Technology</p>
                  <p className="dark:text-slate-muted text-navy/60 text-sm">Ghana Communication Technology University</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-9 h-9 rounded border border-mint/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Briefcase className="w-4 h-4 text-mint" />
                </div>
                <div>
                  <p className="font-mono text-xs text-mint/60 tracking-widest mb-0.5">CURRENT ROLE</p>
                  <p className="font-display font-500 dark:text-slate-light text-navy text-sm">National Service Personnel — IT</p>
                  <p className="dark:text-slate-muted text-navy/60 text-sm">Hollard Insurance Ghana</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-9 h-9 rounded border border-mint/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4 text-mint" />
                </div>
                <div>
                  <p className="font-mono text-xs text-mint/60 tracking-widest mb-0.5">LOCATION</p>
                  <p className="font-display font-500 dark:text-slate-light text-navy text-sm">Accra, Ghana</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-9 h-9 rounded border border-mint/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Target className="w-4 h-4 text-mint" />
                </div>
                <div>
                  <p className="font-mono text-xs text-mint/60 tracking-widest mb-0.5">CAREER FOCUS</p>
                  <p className="font-display font-500 dark:text-slate-light text-navy text-sm">Cybersecurity</p>
                  <p className="dark:text-slate-muted text-navy/60 text-sm">Ethical Hacking · System Security · Digital Infrastructure</p>
                </div>
              </div>
            </div>
          </FadeSection>
        </div>

        {/* Traits */}
        <FadeSection>
          <h2 className="font-display text-2xl font-600 dark:text-slate-light text-navy mb-8">
            What Drives Me
          </h2>
        </FadeSection>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {traits.map((t, i) => (
            <FadeSection key={t.label} delay={i * 100}>
              <div className="glow-border rounded-lg p-6 dark:bg-navy-surface/30 bg-white/60 group hover:bg-mint/5 transition-colors duration-300">
                <t.icon className="w-6 h-6 text-mint mb-3 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="font-display font-600 dark:text-slate-light text-navy mb-2 text-sm">{t.label}</h3>
                <p className="dark:text-slate-muted text-navy/60 text-sm leading-relaxed">{t.desc}</p>
              </div>
            </FadeSection>
          ))}
        </div>
      </div>

      {/* CV Download */}
      <FadeSection delay={300}>
        <div className="mt-14 glow-border rounded-lg p-8 dark:bg-navy-surface/40 bg-white/60 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display font-600 dark:text-slate-light text-navy text-lg mb-1">
              Want to know more?
            </h3>
            <p className="dark:text-slate-muted text-navy/60 text-sm">
              Download my CV for a full overview of my experience and skills.
            </p>
          </div>
          
           <a
             href="/Henry_Aruna_Nelson_CV.pdf"
            download
            className="inline-flex items-center gap-2 bg-mint text-navy font-display font-600 px-7 py-3.5 rounded text-sm tracking-wide hover:bg-mint-dim transition-colors duration-200 shadow-[0_0_24px_rgba(15,244,198,0.3)] hover:shadow-[0_0_36px_rgba(15,244,198,0.5)] whitespace-nowrap"
          >
            <Download className="w-4 h-4" /> Download CV
          </a>
        </div>
      </FadeSection>
    </div>
  );
}
