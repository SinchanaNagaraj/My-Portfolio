import Navbar from "@/components/Navbar";
import HeroScene from "@/components/HeroScene";
import GlitchText from "@/components/GlitchText";
import { Button } from "@/components/ui/button";
import Section from "@/components/Section";
import AnimatedProjectCard from "@/components/AnimatedProjectCard";
import { Link } from "wouter";
import { ArrowRight, Download } from "lucide-react";
import { projects } from "@/lib/data";
import { motion } from "framer-motion";

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
            <div className="relative mb-8">
              <div className="flex items-start gap-8">
                <div>
                  <h1 className="text-6xl md:text-9xl font-display font-bold leading-none tracking-tighter">
                    <GlitchText text="SINCHANA" className="text-stroke text-white" /> <br />
                    <GlitchText text="NAGARAJ" className="text-stroke text-white" />
                  </h1>
                </div>
                {/* Profile Picture removed from header — placed near contact below */}
              </div>
            </div>
          </Section>
          
          <Section delay={0.4}>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-12 font-light">
              Aspiring AI & ML Engineer | <span className="text-secondary">Generative AI & Agentic AI</span> Enthusiast | Open-Source Contributor.
              Building intelligent systems and exploring <span className="text-secondary">agentic AI applications</span>,
              <span className="text-accent"> generative AI & prompt engineering</span>, <span className="text-accent">mobile development</span>, and <span className="text-primary">UI/UX design</span>.
            </p>
          </Section>
          
          <Section delay={0.6}>
            <div className="relative flex flex-wrap gap-4 items-center">
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
              {/* Profile picture removed per request */}
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
              <AnimatedProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
