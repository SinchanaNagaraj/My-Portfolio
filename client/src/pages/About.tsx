import Section from "@/components/Section";
import GlitchText from "@/components/GlitchText";
import { skills } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="pt-32 pb-20 container mx-auto px-6 min-h-screen">
      <Section>
        <h1 className="text-5xl md:text-8xl font-display font-bold mb-12">
          WHO <span className="text-secondary">AM I?</span>
        </h1>
      </Section>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <Section delay={0.2}>
          <div className="space-y-6 text-lg md:text-xl text-muted-foreground font-light leading-relaxed">
            <p>
              <strong className="text-white">I'm an aspiring AI & ML engineer</strong> with hands-on experience in generative AI, agentic AI, mobile app development, and open-source contributions. I'm passionate about building impactful solutions aligned with global standards and national missions.
            </p>
            <p>
              With internship experience in UI/UX design, generative AI, and mobile app development, I combine technical expertise with strong communication and presentation skills to deliver impactful solutions. My focus areas include agentic AI applications for intelligent task automation and service optimization.
            </p>
            <p>
              <strong className="text-white">My Specializations:</strong> Generative AI & Prompt Engineering, Agentic AI Applications, Mobile App Development (Flutter), UI/UX Design, Open-Source Contributions, and Strategic Planning & Presentation Design.
            </p>
          </div>

          {/* Profile picture removed — now shown only on Home page */}
        </Section>

        <Section delay={0.4}>
          <div className="border border-white/10 p-8 bg-card/30 backdrop-blur-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/20 blur-[100px] rounded-full pointer-events-none" />
            
            <h3 className="text-2xl font-display font-bold mb-8 flex items-center gap-3">
              <span className="w-2 h-8 bg-primary block" />
              TECH ARSENAL
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <div key={skill.name} className="group">
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center gap-3">
                      <skill.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                      <span className="font-mono text-sm">{skill.name}</span>
                    </div>
                    <span className="font-mono text-xs text-primary/50 group-hover:text-primary transition-colors">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-1 w-full bg-white/5 overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-1000 ease-out -translate-x-full group-hover:translate-x-0"
                      style={{ width: `${skill.level}%` }}
                    />
                    <div 
                      className="h-full bg-white/20 w-full" 
                      style={{ width: `${skill.level}%` }} 
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Section>
      </div>

        <Section delay={0.6} className="mt-24">
        <h3 className="text-2xl font-display font-bold mb-8 border-b border-white/10 pb-4">
          MY EXPERTISE
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Generative AI & Agentic AI", desc: "Specialized in prompt engineering, agentic AI architecture, intelligent task orchestration, and model deployment for automated systems." },
            { title: "Mobile Development", desc: "Flutter-based mobile app development with focus on UI/UX, backend integration, and service optimization." },
            { title: "UI/UX Design", desc: "User-centered design approach with hands-on experience in modern design tools and strategic design planning." }
          ].map((item, i) => (
            <div key={i} className="p-6 border border-white/5 hover:border-primary/50 transition-colors bg-card/20 group">
              <h4 className="text-xl font-bold font-display mb-3 text-white group-hover:text-primary transition-colors">
                0{i+1}. {item.title}
              </h4>
              <p className="text-muted-foreground text-sm font-mono">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
