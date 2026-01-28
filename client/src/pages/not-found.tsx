import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-background text-foreground p-4 text-center">
      <h1 className="text-9xl font-display font-bold text-primary mb-4 glitch-effect">404</h1>
      <p className="text-xl font-mono text-muted-foreground mb-8">
        SYSTEM FAILURE: PAGE_NOT_FOUND
      </p>
      <Link href="/">
        <a className="px-8 py-3 bg-white text-black font-bold hover:bg-primary transition-colors uppercase tracking-widest">
          Return to Base
        </a>
      </Link>
    </div>
  );
}
