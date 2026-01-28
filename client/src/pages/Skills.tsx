import Section from "@/components/Section";
import { skills } from "@/lib/data";

export default function Skills() {
  return (
    <div className="pt-32 pb-20 container mx-auto px-6">
      <Section>
        <h1 className="text-5xl md:text-8xl font-display font-bold mb-16">
          TECHNICAL <span className="text-accent">PROFICIENCY</span>
        </h1>
      </Section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        {skills.map((skill, index) => (
          <Section key={skill.name} delay={index * 0.1}>
            <div className="bg-card/30 border border-white/10 p-6 backdrop-blur-sm hover:border-accent/50 transition-colors group">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-white/5 rounded-lg group-hover:bg-accent/20 transition-colors">
                  <skill.icon className="w-6 h-6 text-white group-hover:text-accent transition-colors" />
                </div>
                <h3 className="text-xl font-bold font-display">{skill.name}</h3>
                <span className="ml-auto font-mono text-accent">{skill.level}%</span>
              </div>
              
              <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-accent to-primary transition-all duration-1000"
                  style={{ width: `${skill.level}%` }}
                />
              </div>

              <p className="mt-4 text-sm text-muted-foreground font-light">
                Advanced implementation capabilities with focus on performance and interactivity.
              </p>
            </div>
          </Section>
        ))}
      </div>

      <Section delay={0.6} className="mt-20">
        <div className="p-8 border border-dashed border-white/20 bg-card/10 text-center">
          <h3 className="text-2xl font-display font-bold mb-4">TOOLKIT & SOFTWARE</h3>
          <div className="flex flex-wrap justify-center gap-4 font-mono text-sm text-muted-foreground">
             <span>VS Code</span>
             <span>•</span>
             <span>Figma</span>
             <span>•</span>
             <span>Blender</span>
             <span>•</span>
             <span>Cinema 4D</span>
             <span>•</span>
             <span>Adobe Creative Suite</span>
             <span>•</span>
             <span>Git</span>
             <span>•</span>
             <span>Docker</span>
             <span>•</span>
             <span>Vercel</span>
          </div>
        </div>
      </Section>
    </div>
  );
}
