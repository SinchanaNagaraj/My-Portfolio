import Navbar from "@/components/Navbar";
import HeroScene from "@/components/HeroScene";
import GlitchText from "@/components/GlitchText";
import { Button } from "@/components/ui/button";
import Section from "@/components/Section";
import { Link } from "wouter";
import { ArrowRight, Download } from "lucide-react";
import { projects } from "@/lib/data";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <HeroScene />
      
      {/* Hero Section */}
      <section className="relative z-10 flex flex-col justify-center min-h-screen px-6 pt-20 container mx-auto">
        <div className="max-w-4xl">
          <Section>
            <h2 className="text-primary font-mono mb-4 tracking-widest text-sm md:text-base">
              // WELCOME TO THE NEXUS
            </h2>
          </Section>
          
          <Section delay={0.2}>
            <h1 className="text-6xl md:text-9xl font-display font-bold leading-none tracking-tighter mb-8">
              CREATIVE <br />
              <GlitchText text="DEVELOPER" className="text-stroke text-white" />
            </h1>
          </Section>
          
          <Section delay={0.4}>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-12 font-light">
              Crafting immersive digital experiences with code and chaos. 
              Specializing in <span className="text-secondary">3D interactions</span>, 
              <span className="text-accent"> motion graphics</span>, and high-performance web applications.
            </p>
          </Section>
          
          <Section delay={0.6}>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-primary text-black hover:bg-white rounded-none border-2 border-primary font-bold tracking-wider text-base h-14 px-8 uppercase transition-all duration-300">
                  Start Project <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/projects">
                <Button size="lg" variant="outline" className="bg-transparent border-2 border-white/20 text-white hover:bg-white/10 hover:border-white rounded-none font-bold tracking-wider text-base h-14 px-8 uppercase transition-all duration-300">
                  View Work
                </Button>
              </Link>
            </div>
          </Section>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
          <div className="w-[1px] h-24 bg-gradient-to-b from-primary to-transparent"></div>
        </div>
      </section>

      {/* Featured Work Preview */}
      <section className="relative z-10 py-32 bg-background border-t border-white/5">
        <div className="container mx-auto px-6">
          <Section>
            <div className="flex justify-between items-end mb-16">
              <h2 className="text-4xl md:text-6xl font-display font-bold">
                FEATURED <span className="text-primary">WORK</span>
              </h2>
              <Link href="/experience">
                <a className="hidden md:flex items-center gap-2 text-muted-foreground hover:text-white transition-colors font-mono">
                  ALL PROJECTS <ArrowRight className="w-4 h-4" />
                </a>
              </Link>
            </div>
          </Section>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.slice(0, 2).map((project, index) => (
              <Section key={project.id} delay={index * 0.2}>
                <div className="group relative overflow-hidden border border-white/10 bg-card/50 aspect-video cursor-pointer">
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 mix-blend-overlay" />
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/90 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-20">
                    <h3 className="text-2xl font-bold font-display text-white mb-2">{project.title}</h3>
                    <div className="flex gap-2">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-xs font-mono bg-white/10 px-2 py-1 text-primary">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </Section>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
