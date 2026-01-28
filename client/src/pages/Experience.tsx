import Section from "@/components/Section";
import { projects, experience } from "@/lib/data";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Experience() {
  return (
    <div className="pt-32 pb-20 container mx-auto px-6">
      
      {/* Experience Timeline */}
      <Section>
        <h1 className="text-5xl md:text-8xl font-display font-bold mb-16">
          CAREER <span className="text-primary">LOGS</span>
        </h1>
      </Section>

      <div className="max-w-4xl mx-auto relative border-l border-white/10 pl-8 md:pl-16 space-y-16 mb-32">
        {experience.map((job, index) => (
          <Section key={job.id} delay={index * 0.1}>
            <div className="relative">
              <span className="absolute -left-[41px] md:-left-[73px] top-2 w-5 h-5 bg-background border-2 border-primary rounded-full" />
              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 mb-2">
                <h3 className="text-2xl md:text-3xl font-display font-bold">{job.role}</h3>
                <span className="text-primary font-mono text-sm border border-primary/30 px-2 py-1 rounded-sm bg-primary/10 w-fit">
                  {job.company}
                </span>
              </div>
              <p className="font-mono text-muted-foreground text-sm mb-4">{job.period}</p>
              <p className="text-lg text-white/80 font-light max-w-2xl">
                {job.description}
              </p>
            </div>
          </Section>
        ))}
      </div>

      {/* Projects Grid */}
      <Section>
        <h2 className="text-4xl md:text-6xl font-display font-bold mb-12 text-right">
          SELECTED <span className="text-secondary">PROJECTS</span>
        </h2>
      </Section>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <Section key={project.id} delay={index * 0.1}>
            <div className="group border border-white/10 bg-card hover:border-primary/50 transition-all duration-300 h-full flex flex-col">
              <div className="aspect-video overflow-hidden relative">
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-display font-bold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-6 flex-grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs font-mono border border-white/10 px-2 py-1 text-white/60">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 mt-auto">
                  <Button variant="outline" size="sm" className="w-full border-white/20 hover:bg-white/10 hover:border-white">
                    <ExternalLink className="w-4 h-4 mr-2" /> Demo
                  </Button>
                  <Button variant="outline" size="sm" className="w-full border-white/20 hover:bg-white/10 hover:border-white">
                    <Github className="w-4 h-4 mr-2" /> Code
                  </Button>
                </div>
              </div>
            </div>
          </Section>
        ))}
      </div>
    </div>
  );
}
