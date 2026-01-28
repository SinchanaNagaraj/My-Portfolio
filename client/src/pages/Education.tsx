import Section from "@/components/Section";
import { education } from "@/lib/data";
import { BookOpen } from "lucide-react";

export default function Education() {
  return (
    <div className="pt-32 pb-20 container mx-auto px-6">
      <Section>
        <h1 className="text-5xl md:text-8xl font-display font-bold mb-16 text-center">
          KNOWLEDGE <span className="text-accent">BASE</span>
        </h1>
      </Section>

      <div className="max-w-3xl mx-auto grid gap-8">
        {education.map((edu, index) => (
          <Section key={index} delay={index * 0.1}>
            <div className="relative p-8 border border-white/10 bg-card/30 backdrop-blur-sm overflow-hidden group hover:border-accent/50 transition-colors">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <BookOpen className="w-24 h-24 text-accent" />
              </div>
              
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-1">
                      {edu.degree}
                    </h3>
                    <p className="text-accent font-mono text-sm md:text-base">{edu.school}</p>
                  </div>
                  <span className="font-mono text-2xl font-bold text-white/20">
                    {edu.year}
                  </span>
                </div>
                
                <p className="text-muted-foreground font-light leading-relaxed max-w-xl">
                  {edu.description}
                </p>
              </div>
              
              {/* Decorative corner */}
              <div className="absolute bottom-0 left-0 w-0 h-0 border-b-[20px] border-l-[20px] border-b-accent border-l-transparent group-hover:border-b-white transition-colors duration-300" />
            </div>
          </Section>
        ))}
      </div>

      {/* Certifications or extra Section */}
      <Section delay={0.3} className="mt-20 text-center">
        <p className="font-mono text-muted-foreground text-sm">
          // CONSTANTLY LEARNING NEW TECHNOLOGIES
        </p>
        <div className="flex justify-center gap-8 mt-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          {/* Placeholders for logos */}
          <div className="w-12 h-12 bg-white/10 rounded-full" />
          <div className="w-12 h-12 bg-white/10 rounded-full" />
          <div className="w-12 h-12 bg-white/10 rounded-full" />
          <div className="w-12 h-12 bg-white/10 rounded-full" />
        </div>
      </Section>
    </div>
  );
}
