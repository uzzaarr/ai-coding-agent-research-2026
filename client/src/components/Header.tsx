import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <div className="h-7 w-7 rounded-md bg-primary/90 flex items-center justify-center text-primary-foreground text-xs font-mono tracking-[2px]">AI</div>
            <span className="font-semibold tracking-tight">AI Coding Agent Research</span>
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-x-5 text-sm font-medium overflow-x-auto">
          <Link href="#layout-systems" className="transition-colors hover:text-foreground/80 text-foreground/60 whitespace-nowrap">Layout</Link>
          <Link href="#design-patterns" className="transition-colors hover:text-foreground/80 text-foreground/60 whitespace-nowrap">Patterns</Link>
          <Link href="#components" className="transition-colors hover:text-foreground/80 text-foreground/60 whitespace-nowrap">Components</Link>
          <Link href="#typography" className="transition-colors hover:text-foreground/80 text-foreground/60 whitespace-nowrap">Typography</Link>
          <Link href="#color-palettes" className="transition-colors hover:text-foreground/80 text-foreground/60 whitespace-nowrap">Colors</Link>
          <Link href="#glassmorphism" className="transition-colors hover:text-foreground/80 text-foreground/60 whitespace-nowrap">Glass</Link>
          <Link href="#dashboard-patterns" className="transition-colors hover:text-foreground/80 text-foreground/60 whitespace-nowrap">Dashboards</Link>
        </nav>
        <div className="flex flex-1 items-center justify-end">
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noreferrer"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Source
          </a>
        </div>
      </div>
    </header>
  );
}
