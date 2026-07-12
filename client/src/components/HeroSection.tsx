import React from 'react';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  backgroundImage?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ title, subtitle }) => {
  return (
    <section className="relative w-full h-[560px] flex items-center justify-start text-left px-6 md:px-12 overflow-hidden bg-[radial-gradient(at_30%_20%,#0a0f14_0%,#0b1118_40%,#05080c_100%)]">
      {/* Subtle grid + depth layer (neo-minimalist) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />

      <div className="relative z-10 max-w-3xl text-white p-8 md:p-12 rounded-2xl border border-white/15 bg-white/5 backdrop-blur-xl shadow-2xl">
        <div className="inline-block px-3 py-1 rounded-full bg-white/10 text-xs tracking-[3px] mb-4 text-white/70">2026 RESEARCH</div>
        
        <h1 className="text-5xl md:text-6xl font-semibold tracking-tighter leading-[1.05] mb-5 text-white">
          {title}
        </h1>
        <p className="text-xl md:text-2xl max-w-2xl text-white/80">
          {subtitle}
        </p>

        <div className="mt-9 flex flex-wrap gap-3">
          <a 
            href="#design-patterns" 
            className="inline-flex items-center px-7 py-3.5 rounded-xl bg-white text-black font-medium text-base hover:bg-white/90 active:scale-[0.985] transition"
          >
            Explore Patterns
          </a>
          <a 
            href="https://github.com" 
            target="_blank"
            className="inline-flex items-center px-7 py-3.5 rounded-xl border border-white/40 hover:bg-white/10 text-white font-medium text-base transition"
          >
            View on GitHub
          </a>
        </div>
      </div>

      {/* Code motif card — signature element from design spec */}
      <div className="absolute right-8 bottom-8 hidden xl:block z-10 w-80 rounded-2xl border border-white/15 bg-white/5 backdrop-blur-xl p-5 text-[12px] font-mono text-white/70 shadow-xl">
        <div className="mb-2 text-[10px] tracking-widest text-white/50">OBSERVED PATTERNS</div>
        <div className="space-y-px leading-tight">
          layout systems<br />
          visible reasoning<br />
          reversible diffs<br />
          glassmorphism<br />
          plan-first flows<br />
          trust surfaces
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
