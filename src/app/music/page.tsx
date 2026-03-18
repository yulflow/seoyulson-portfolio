import { Nav } from "@/components/nav";
import { PageHeader } from "@/components/page-header";
import { Footer } from "@/components/footer";
import Image from "next/image";

export const metadata = {
  title: "Music | Seoyul Son",
  description: "Musician & Educator — contemporary jazz, digital sound synthesis, performance.",
};

function HighlightCard({
  title,
  description,
  tag,
}: {
  title: string;
  description: string;
  tag: string;
}) {
  return (
    <div className="bento-card border border-border rounded-2xl bg-surface p-8 cursor-pointer">
      <span className="px-3 py-1 bg-white/10 backdrop-blur-sm text-[10px] tracking-widest uppercase font-bold rounded-full border border-white/20 mb-6 inline-block">
        {tag}
      </span>
      <h3 className="text-2xl font-bold mb-3">{title}</h3>
      <p className="text-zinc-400 text-sm leading-relaxed">{description}</p>
    </div>
  );
}

export default function MusicPage() {
  return (
    <>
      <Nav />
      <main>
        <PageHeader
          number="01"
          title="Music"
          subtitle="Musician & Educator"
          description="Exploring contemporary jazz structures and digital sound synthesis. Teaching at Esther Music Academy, performing across Seoul and beyond."
        />

        {/* Hero Image */}
        <section className="max-w-7xl mx-auto px-6 mb-20">
          <div className="relative w-full h-[50vh] rounded-2xl overflow-hidden border border-border">
            <Image
              src="/images/music-hero.jpg"
              alt="Live performance"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8">
              <p className="text-zinc-400 text-sm uppercase tracking-widest">
                Live Performance
              </p>
            </div>
          </div>
        </section>

        {/* Highlights Grid */}
        <section className="max-w-7xl mx-auto px-6 pb-20">
          <h2 className="text-3xl font-bold mb-12">Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <HighlightCard
              tag="Teaching"
              title="Esther Music Academy"
              description="Instructor for contemporary music theory, performance technique, and digital production. Helping the next generation find their voice."
            />
            <HighlightCard
              tag="Performance"
              title="Live Shows"
              description="Regular performances across Seoul venues. Blending jazz improvisation with electronic elements for immersive sonic experiences."
            />
            <HighlightCard
              tag="Production"
              title="Digital Sound"
              description="Exploring the intersection of acoustic instruments and digital synthesis. Creating textured soundscapes that bridge analog and digital worlds."
            />
          </div>
        </section>

        {/* Philosophy */}
        <section className="max-w-7xl mx-auto px-6 py-20 border-t border-border">
          <div className="max-w-3xl mx-auto text-center">
            <blockquote className="text-3xl md:text-4xl font-bold leading-tight mb-6">
              &ldquo;Music is the invisible architecture of{" "}
              <span className="text-brand">emotion</span>.&rdquo;
            </blockquote>
            <p className="text-zinc-500 uppercase tracking-widest text-sm">
              — The discipline behind every note
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
