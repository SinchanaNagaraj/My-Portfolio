import { Cloud, Code, Database, Globe, Layers, Layout, Server, Terminal, Zap } from "lucide-react";

export const projects = [
  {
    id: 1,
    title: "PropertyService Agent",
    description: "Agentic AI system for property service automation with intelligent task orchestration and decision-making capabilities.",
    tags: ["Python", "Agentic AI", "Prompt Engineering", "Automation", "AI"],
    link: "#",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Virtual Mobile App - Flutter",
    description: "Visually engaging mobile application built with Flutter, focusing on UI/UX design and backend integration with Git version control.",
    tags: ["Flutter", "UI/UX", "Dart", "Mobile Development", "Git"],
    link: "#",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop"
  }
];

export const skills = [
  { name: "Python", level: 80, icon: Code },
  { name: "Generative AI", level: 85, icon: Zap },
  { name: "Agentic AI", level: 80, icon: Zap },
  { name: "Flutter", level: 80, icon: Layout },
  { name: "Data Structures & OOP", level: 85, icon: Layers },
  { name: "Git & GitHub", level: 85, icon: Code },
  { name: "MongoDB & DBMS", level: 75, icon: Database },
  { name: "UI/UX Design", level: 85, icon: Globe },
  { name: "C Programming", level: 70, icon: Terminal },
];

export const experience = [
  {
    id: 5,
    role: "PropertyService Agent - Agentic AI Project",
    company: "Academic / Self-driven",
    period: "Nov 2025",
    description: "Designed and implemented an agentic AI system for property service automation. Focused on intelligent task orchestration, decision-making, and service optimization. Strengthened understanding of agent-based architectures and intelligent automation.",
    tools: ["Python", "OpenAI API", "Hugging Face Transformers", "FAISS", "FastAPI"]
  },
  {
    id: 4,
    role: "Team Project: Infrared Obstacle Avoidance System",
    company: "Academic Project",
    period: "May 2025",
    description: "Designed and implemented IR sensor-based obstacle avoidance system with real-time processing. Received completion certificate."
    ,
    tools: ["C", "Arduino", "IR Sensors", "Embedded C", "Proteus"]
  },
  {
    id: 3,
    role: "Mobile App Development Intern",
    company: "Runshaw Technologies",
    period: "Jul 2025",
    description: "Built a visually engaging virtual mobile app using Flutter. Strengthened UI/UX and backend integration skills with Git and VS Code."
    ,
    tools: ["Flutter", "Dart", "Android Studio", "Git", "VS Code"]
  },
  {
    id: 2,
    role: "Generative AI Intern",
    company: "Prodigy InfoTech",
    period: "Aug 2025",
    description: "Completed 5 structured tasks in generative AI. Gained practical experience in prompt engineering and model deployment. Received Letter of Recommendation."
    ,
    tools: ["Python", "PyTorch", "Hugging Face", "Prompt Engineering", "Docker"]
  },
  {
    id: 1,
    role: "UI/UX Design Intern",
    company: "Future Interns",
    period: "Sept 2025",
    description: "Developed 3 hands-on UI/UX projects and learned design tools. Received Letter of Recommendation."
    ,
    tools: ["Figma", "Adobe XD", "Sketch", "InVision", "Zeplin"]
  }
];

export const education = [
  {
    degree: "B.E. Computer Science & Engineering (AI & ML)",
    school: "Maharaja Institute of Technology, Mysore",
    year: "2023 - 2027",
    description: "Specializing in Artificial Intelligence and Machine Learning. Relevant Coursework: Python Programming, Data Structures, C & Java, AI, Machine Learning. Achievements: Internship certifications, Letters of Recommendation, and Open-source contributions."
  }
];
