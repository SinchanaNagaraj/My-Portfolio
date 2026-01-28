import { Cloud, Code, Database, Globe, Layers, Layout, Server, Terminal, Zap } from "lucide-react";

export const projects = [
  {
    id: 1,
    title: "Neon Nexus",
    description: "A 3D immersive metaverse platform built for virtual rave events.",
    tags: ["React", "Three.js", "WebGL", "Socket.io"],
    link: "#",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Glitch Stream",
    description: "Real-time video processing app adding vaporwave effects to streams.",
    tags: ["Next.js", "WebRTC", "FFmpeg", "Tailwind"],
    link: "#",
    image: "https://images.unsplash.com/photo-1535905557558-afc4877a26fc?q=80&w=2574&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Cyber Wallet",
    description: "DeFi dashboard with brutalist aesthetic and smooth interactions.",
    tags: ["TypeScript", "D3.js", "Blockchain", "Framer Motion"],
    link: "#",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2664&auto=format&fit=crop"
  }
];

export const skills = [
  { name: "React / Next.js", level: 95, icon: Code },
  { name: "Three.js / WebGL", level: 85, icon: Layers },
  { name: "TypeScript", level: 90, icon: Terminal },
  { name: "Node.js", level: 80, icon: Server },
  { name: "UI/UX Design", level: 85, icon: Layout },
  { name: "Cloud / DevOps", level: 75, icon: Cloud },
];

export const experience = [
  {
    id: 1,
    role: "Senior Creative Dev",
    company: "MetaVerse Inc.",
    period: "2024 - Present",
    description: "Leading the 3D web team, building immersive brand experiences."
  },
  {
    id: 2,
    role: "Frontend Engineer",
    company: "TechFlow Studios",
    period: "2022 - 2024",
    description: "Developed high-performance React applications with complex animations."
  },
  {
    id: 3,
    role: "UI Designer & Dev",
    company: "Freelance",
    period: "2020 - 2022",
    description: "Created award-winning portfolios and e-commerce sites for diverse clients."
  }
];

export const education = [
  {
    degree: "B.S. Computer Science",
    school: "University of Tech",
    year: "2020",
    description: "Specialized in Computer Graphics and Human-Computer Interaction."
  },
  {
    degree: "Full Stack Certification",
    school: "DevAcademy",
    year: "2019",
    description: "Intensive bootcamp focusing on MERN stack and modern web architecture."
  }
];
