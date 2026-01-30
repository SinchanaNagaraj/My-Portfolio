import Section from "@/components/Section";
import { education } from "@/lib/data";
import { BookOpen } from "lucide-react";

export default function Education() {
  return (
    <div className="pt-32 pb-20 container mx-auto px-6">
      <Section>
        <h1 className="text-5xl md:text-8xl font-display font-bold mb-16 text-center">
          EDUCATION &<span className="text-accent">ACHIEVEMENTS</span>
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

      {/* Additional Info */}
      <Section delay={0.3} className="mt-20">
        <div className="p-8 border border-white/10 bg-card/30 backdrop-blur-sm">
          <h3 className="text-2xl font-display font-bold mb-6">KEY COURSEWORK</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Artificial Intelligence & Machine Learning",
              "Data Structures & Algorithms",
              "Database Management Systems",
              "Web Development (PHP, MySQL)",
              "Embedded Systems & IoT",
              "Technical Communication"
            ].map((course, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="text-primary font-bold mt-1">→</span>
                <span className="text-white font-light">{course}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Certifications */}
      <Section delay={0.4} className="mt-12 text-center">
        <p className="font-mono text-muted-foreground text-sm mb-6">
          // CONTINUOUS LEARNING & PROFESSIONAL DEVELOPMENT
        </p>
        <div className="inline-block bg-card/30 border border-white/10 p-8 text-center">
          <p className="text-white mb-4 font-light">
            Certified in <strong>Introduction to AI</strong> | 
            Attended <strong>Agentic AI Workshop</strong> | 
            Participated in <strong>Prompt War (Generative AI Competition)</strong> | 
            Completed <strong>Git & GitHub Bootcamp</strong>
          </p>
        </div>
      </Section>
    </div>
  );
}
