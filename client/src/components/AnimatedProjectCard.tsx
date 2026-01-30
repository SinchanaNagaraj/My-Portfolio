import React, { useRef } from "react";
import { motion } from "framer-motion";

interface ProjectCardProps {
  project: {
    id: number;
    title: string;
    description: string;
    tags: string[];
    image: string;
    link: string;
  };
  index: number;
}

export default function AnimatedProjectCard({ project, index }: ProjectCardProps) {
  const [isHovered, setIsHovered] = React.useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = React.useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current || !isHovered) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setRotation({
      x: (y - 0.5) * 8,
      y: (x - 0.5) * -8,
    });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotation({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      className="relative w-full"
      style={{
        perspective: "1200px",
      }}
    >
      <motion.div
        animate={{
          rotateX: isHovered ? rotation.x : 0,
          rotateY: isHovered ? rotation.y : 0,
          scale: isHovered ? 1.05 : 1,
        }}
        transition={{
          rotateX: { duration: 0.2, ease: "easeOut" },
          rotateY: { duration: 0.2, ease: "easeOut" },
          scale: { duration: 0.4, ease: "easeOut" },
        }}
        className="w-full"
      >
        <div className="group relative overflow-hidden border border-white/10 bg-card/50 aspect-video cursor-pointer shadow-2xl">
          {/* Animated background glow */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-primary/30 via-transparent to-accent/20 opacity-0 group-hover:opacity-100 z-[5]"
            animate={isHovered ? { opacity: 0.8 } : { opacity: 0 }}
            transition={{ duration: 0.3 }}
          />

          {/* Animated border glow */}
          <motion.div
            className="absolute inset-0 border border-primary/50 opacity-0 group-hover:opacity-100"
            animate={isHovered ? { opacity: 1, boxShadow: "0 0 20px rgba(168, 85, 247, 0.5)" } : { opacity: 0 }}
            transition={{ duration: 0.3 }}
          />

          {/* Image with parallax effect */}
          <motion.img
            src={project.image}
            alt={project.title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 grayscale group-hover:grayscale-0"
            animate={isHovered ? { scale: 1.15 } : { scale: 1 }}
            transition={{ duration: 0.7 }}
          />

          {/* Single Overlay - Title when not hovering, Details when hovering */}
          <motion.div
            className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/95 via-black/40 to-transparent/0"
            animate={isHovered ? { opacity: 1 } : { opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {/* Title - visible when not hovering */}
            <motion.div
              animate={isHovered ? { opacity: 0, height: 0, marginBottom: 0 } : { opacity: 1, height: "auto", marginBottom: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <h3 className="text-2xl font-bold font-display text-white">
                {project.title}
              </h3>
            </motion.div>

            {/* Description and Tags - visible when hovering */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isHovered ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <h3 className="text-2xl font-bold font-display text-white mb-2">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-mono bg-white/10 hover:bg-primary/50 px-2 py-1 text-primary transition-colors duration-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Floating particles on hover */}
      {isHovered && (
        <>
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-primary rounded-full pointer-events-none"
              initial={{
                x: Math.random() * 300 - 150,
                y: Math.random() * 300 - 150,
                opacity: 1,
              }}
              animate={{
                x: Math.random() * 400 - 200,
                y: Math.random() * 400 - 200,
                opacity: 0,
              }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
          ))}
        </>
      )}
    </motion.div>
  );
}
