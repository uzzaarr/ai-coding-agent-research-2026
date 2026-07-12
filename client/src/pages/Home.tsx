import { marked } from 'marked';
import { useEffect, useState } from 'react';
import HeroSection from "../components/HeroSection";

export default function Home() {
  const [reportContent, setReportContent] = useState('');

  useEffect(() => {
    // Self-contained: load the research report we ship with the site
    fetch('/ai-coding-agent-research-report.md')
      .then(response => {
        if (!response.ok) throw new Error('Report not found');
        return response.text();
      })
      .then(text => setReportContent(text))
      .catch(() => {
        // Fallback rich content so the site is never empty
        setReportContent(`# AI Coding Agent UI/UX Design Patterns: A 2026 Deep Dive

**Exploring recurring elements, hidden conventions, and design decisions that define AI-generated interfaces.**

The most successful AI coding tools treat the agent as a visible, steerable collaborator rather than magic.

## Key Patterns Observed

### Layout Systems
Asymmetric panes with persistent context on the left and chat + reasoning on the right or as floating inspector. Best tools make the agent's "world model" (open files, selected symbols, recent changes) explicitly visible.

### Reasoning & Steps
Visible plans, per-step tool calls, and collapsible thoughts have become table stakes. Users strongly prefer being able to approve or steer the plan *before* code is written.

### Change Presentation
Inline diffs with excellent context, semantic grouping, and one-click reversible actions win. Raw patches without visuals are widely disliked.

### Glassmorphism & Depth
Premium tools use restrained frosted glass cards, soft shadows, and layered surfaces. Over-application hurts dense reading areas.

### Trust & Control
Explicit permissions, sandbox modes, full session history, and easy "revert this entire session" are the features that separate tools users trust from those they abandon.

## Recommendations
1. Make the agent's context and reasoning visible by default.
2. Default to plan-first workflows.
3. Every change should feel reviewable and reversible.
4. Calm, high-signal interfaces outperform flashy ones.
5. Provide strong export paths (PR, patch, design tokens).

The patterns are still evolving quickly through 2026.`);
      });
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <HeroSection 
        title="AI Coding Agent UI/UX Design Patterns: A 2026 Deep Dive"
        subtitle="Exploring recurring elements, hidden conventions, and design decisions that define AI-generated interfaces in modern coding tools."
        backgroundImage="" // Will use elegant CSS gradient fallback
      />
      
      <main className="flex-grow">
        {/* Research Report Container - frosted glass as per design spec */}
        <div className="container mx-auto px-4 py-12 max-w-5xl">
          <div className="bg-card/95 backdrop-blur-md text-card-foreground p-8 md:p-14 rounded-2xl shadow-xl border border-border/60">
            <article 
              className="prose prose-slate dark:prose-invert max-w-none prose-headings:text-foreground prose-p:text-foreground/90 prose-a:text-primary hover:prose-a:text-primary/80 prose-strong:text-foreground prose-code:text-primary prose-code:bg-primary/10 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-pre:bg-secondary prose-pre:text-secondary-foreground prose-pre:border prose-pre:border-border prose-blockquote:border-l-primary"
              dangerouslySetInnerHTML={{ __html: marked.parse(reportContent) }}
            />
          </div>
        </div>

        {/* Pattern Highlights Section - matching nav + ideas.md */}
        <div id="layout-systems" className="border-t bg-muted/30 py-12">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl font-semibold tracking-tight mb-8">Core Patterns (2026)</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { id: "design-patterns", title: "Design Patterns", desc: "Plan-first, visible reasoning, reversible edits, context transparency." },
                { id: "components", title: "Components & UI", desc: "Frosted cards, steppers for agent actions, rich inline diffs, calm status indicators." },
                { id: "typography", title: "Typography", desc: "Strong geometric headings + highly legible body. Monospace for code and agent traces." },
                { id: "color-palettes", title: "Color Palettes", desc: "Cool neutrals + single vibrant accent (electric teal/cyan) used sparingly for AI actions." },
                { id: "glassmorphism", title: "Glassmorphism", desc: "Subtle backdrop-blur + layered surfaces on secondary panels. Never on primary reading content." },
                { id: "dashboard-patterns", title: "Agent Dashboards", desc: "Timeline of steps, file impact summary, one-click PR or patch export." },
              ].map((p) => (
                <div key={p.id} id={p.id} className="rounded-xl border bg-card p-6 hover:shadow-md transition">
                  <h3 className="font-semibold text-lg mb-2">{p.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
