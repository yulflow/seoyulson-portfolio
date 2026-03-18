import { Nav } from "@/components/nav";
import { PageHeader } from "@/components/page-header";
import { Footer } from "@/components/footer";

export const metadata = {
  title: "Code | Seoyul Son",
  description: "Developer & Creator — Next.js, TypeScript, AI-powered applications.",
};

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  url?: string;
}

function ProjectCard({ title, description, tech, url }: ProjectCardProps) {
  const Wrapper = url ? "a" : "div";
  const linkProps = url
    ? { href: url, target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <Wrapper
      {...linkProps}
      className="bento-card border border-border rounded-2xl bg-surface p-8 cursor-pointer flex flex-col justify-between"
    >
      <div>
        <h3 className="text-2xl font-bold mb-3">{title}</h3>
        <p className="text-zinc-400 text-sm leading-relaxed mb-6">
          {description}
        </p>
      </div>
      <div className="flex flex-wrap gap-2">
        {tech.map((t) => (
          <span
            key={t}
            className="px-3 py-1 bg-white/5 text-[10px] tracking-widest uppercase font-bold rounded-full border border-border"
          >
            {t}
          </span>
        ))}
      </div>
    </Wrapper>
  );
}

function StatBlock({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <p className="text-4xl md:text-5xl font-black text-brand">{value}</p>
      <p className="text-zinc-500 text-sm uppercase tracking-widest mt-2">
        {label}
      </p>
    </div>
  );
}

export default function CodePage() {
  return (
    <>
      <Nav />
      <main>
        <PageHeader
          number="02"
          title="Code"
          subtitle="Developer & Creator"
          description="Building human-centric web experiences with Next.js, TypeScript, and AI. Every line of code is a design decision."
        />

        {/* Tech Stack */}
        <section className="max-w-7xl mx-auto px-6 mb-20">
          <div className="border border-border rounded-2xl bg-surface p-8 md:p-12">
            <h2 className="text-sm uppercase tracking-widest text-zinc-500 mb-8">
              Tech Stack
            </h2>
            <div className="font-mono text-sm text-brand/80 leading-loose">
              <p>
                <span className="text-zinc-600">const</span> stack ={" "}
                {"{"}
              </p>
              <p className="pl-6">
                <span className="text-white/60">framework:</span>{" "}
                <span className="text-brand">&quot;Next.js&quot;</span>,
              </p>
              <p className="pl-6">
                <span className="text-white/60">language:</span>{" "}
                <span className="text-brand">&quot;TypeScript&quot;</span>,
              </p>
              <p className="pl-6">
                <span className="text-white/60">styling:</span>{" "}
                <span className="text-brand">&quot;Tailwind CSS&quot;</span>,
              </p>
              <p className="pl-6">
                <span className="text-white/60">platform:</span>{" "}
                <span className="text-brand">&quot;Vercel&quot;</span>,
              </p>
              <p className="pl-6">
                <span className="text-white/60">database:</span>{" "}
                <span className="text-brand">&quot;Supabase&quot;</span>,
              </p>
              <p className="pl-6">
                <span className="text-white/60">ai:</span>{" "}
                <span className="text-brand">&quot;Claude + AI SDK&quot;</span>,
              </p>
              <p>{"}"}</p>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className="max-w-7xl mx-auto px-6 pb-20">
          <h2 className="text-3xl font-bold mb-12">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ProjectCard
              title="Workflow Hub"
              description="AI-powered task orchestration system with multi-model delegation. Plans, executes, and tracks complex development workflows."
              tech={["Next.js", "Supabase", "AI SDK", "MCP"]}
              url="https://github.com/yulflow"
            />
            <ProjectCard
              title="Lexicon"
              description="Personal knowledge management tool. Captures, connects, and resurfaces ideas across projects and disciplines."
              tech={["Next.js", "TypeScript", "Supabase"]}
              url="https://github.com/yulflow"
            />
            <ProjectCard
              title="Esther Teach"
              description="Digital platform for music education. Lesson scheduling, progress tracking, and resource management for students."
              tech={["Next.js", "Tailwind", "Vercel"]}
            />
            <ProjectCard
              title="This Portfolio"
              description="Interactive particle-driven portfolio with Canvas animations, bento grid layout, and dark monochrome design."
              tech={["Next.js 16", "Tailwind v4", "Canvas API"]}
              url="https://github.com/yulflow/seoyulson-portfolio"
            />
          </div>
        </section>

        {/* Stats */}
        <section className="max-w-7xl mx-auto px-6 py-20 border-t border-border">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatBlock value="10+" label="Projects" />
            <StatBlock value="AI" label="Driven" />
            <StatBlock value="1" label="Person Team" />
            <StatBlock value="24/7" label="Building" />
          </div>
        </section>

        {/* GitHub CTA */}
        <section className="max-w-7xl mx-auto px-6 py-20 border-t border-border text-center">
          <p className="text-zinc-500 text-sm uppercase tracking-widest mb-4">
            See the code
          </p>
          <a
            href="https://github.com/yulflow"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-surface border border-border rounded-full text-lg font-bold hover:border-zinc-600 transition-colors"
          >
            <svg
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            github.com/yulflow
          </a>
        </section>
      </main>
      <Footer />
    </>
  );
}
