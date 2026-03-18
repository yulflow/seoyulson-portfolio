import Image from "next/image";
import Link from "next/link";

export function BentoGrid() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20" id="work">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[300px] md:auto-rows-[350px]">
        {/* Music Card (Large) */}
        <Link
          href="/music"
          id="music"
          className="bento-card relative md:col-span-8 md:row-span-2 overflow-hidden border border-border rounded-2xl group cursor-pointer"
        >
          <Image
            src="/images/music-hero.jpg"
            alt="Concert atmosphere"
            fill
            className="object-cover opacity-50 grayscale group-hover:grayscale-0 transition-all duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 p-8 w-full">
            <span className="px-3 py-1 bg-white/10 backdrop-blur-sm text-[10px] tracking-widest uppercase font-bold rounded-full border border-white/20 mb-4 inline-block">
              Music
            </span>
            <h2 className="text-4xl font-bold mb-2">Musician &amp; Educator</h2>
            <p className="text-zinc-400 max-w-md">
              Exploring contemporary jazz structures and digital sound
              synthesis. Based in Seoul, performing globally.
            </p>
          </div>
        </Link>

        {/* Code Card (Top Right) */}
        <Link
          href="/code"
          id="code"
          className="bento-card relative md:col-span-4 overflow-hidden border border-border bg-surface rounded-2xl p-8 group cursor-pointer flex flex-col justify-between"
        >
          <div className="font-mono text-xs text-brand/60 leading-relaxed overflow-hidden h-32 select-none">
            <p>class Developer {"{"}</p>
            <p className="pl-4">constructor() {"{"}</p>
            <p className="pl-8 text-white/40">
              this.stack = [&quot;Next.js&quot;, &quot;TypeScript&quot;,
              &quot;Tailwind&quot;];
            </p>
            <p className="pl-8 text-white/40">
              this.focus = &quot;Human-Centric Design&quot;;
            </p>
            <p className="pl-4">{"}"}</p>
            <p>{"}"}</p>
          </div>
          <div>
            <span className="px-3 py-1 bg-white/10 backdrop-blur-sm text-[10px] tracking-widest uppercase font-bold rounded-full border border-white/20 mb-4 inline-block">
              Code
            </span>
            <h2 className="text-2xl font-bold">Developer &amp; Creator</h2>
            <p className="text-sm text-zinc-400 mt-2">
              Crafting immersive web experiences with clean code.
            </p>
          </div>
        </Link>

        {/* Photo Card (Bottom Right) */}
        <Link
          href="/photo"
          id="photo"
          className="bento-card relative md:col-span-4 overflow-hidden border border-border bg-surface rounded-2xl group cursor-pointer"
        >
          <div className="grid grid-cols-2 h-full">
            <div className="h-full border-r border-border overflow-hidden relative">
              <Image
                src="/images/photo-1.jpg"
                alt="Street photography"
                fill
                className="object-cover grayscale opacity-60 group-hover:opacity-100 transition-opacity"
              />
            </div>
            <div className="flex flex-col">
              <div className="h-1/2 border-b border-border overflow-hidden relative">
                <Image
                  src="/images/photo-2.jpg"
                  alt="Portrait"
                  fill
                  className="object-cover grayscale opacity-60 group-hover:opacity-100 transition-opacity"
                />
              </div>
              <div className="p-6 flex flex-col justify-end h-1/2">
                <span className="text-[10px] tracking-widest uppercase font-bold text-zinc-500 mb-1">
                  Photo
                </span>
                <h2 className="text-xl font-bold">Visual Storyteller</h2>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}
