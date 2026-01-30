import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Experience", href: "/experience" },
  { name: "Skills", href: "/skills" },
  { name: "Education", href: "/education" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 mix-blend-difference text-white">
      <div className="container mx-auto px-6 py-6 flex justify-between items-center">
        <Link href="/">
          <a className="text-2xl font-display font-bold tracking-tighter hover:text-primary transition-colors duration-300 uppercase">
            S<span className="text-primary">.</span>DEV
          </a>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 items-center">
          {navItems.map((item) => (
            <Link key={item.name} href={item.href}>
              <a
                className={cn(
                  "font-mono text-sm tracking-widest hover:text-primary transition-all duration-300 relative group",
                  location === item.href ? "text-primary" : "text-white/80"
                )}
              >
                <span className="mr-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-primary">
                  {">"}
                </span>
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary group-hover:w-full transition-all duration-300" />
              </a>
            </Link>
          ))}
        </div>

        {/* Mobile Nav Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center gap-8 md:hidden">
          {navItems.map((item) => (
            <Link key={item.name} href={item.href}>
              <a
                onClick={() => setIsOpen(false)}
                className={cn(
                  "font-display text-4xl font-bold uppercase hover:text-transparent hover:text-stroke hover:scale-110 transition-transform duration-300",
                  location === item.href ? "text-primary" : "text-white"
                )}
              >
                {item.name}
              </a>
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
