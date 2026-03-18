import { Nav } from "@/components/nav";
import { ParticleBackground } from "@/components/particle-background";
import { InteractiveName } from "@/components/interactive-name";
import { BentoGrid } from "@/components/bento-grid";
import { AboutSection } from "@/components/about-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        {/* Hero Section */}
        <section className="relative pt-40 pb-20 px-6 min-h-[70vh] flex flex-col justify-center items-center overflow-hidden">
          <ParticleBackground />
          <div className="max-w-7xl w-full text-center relative z-10">
            <span className="text-brand font-semibold tracking-[0.3em] uppercase text-xs mb-8 block animate-pulse">
              Multidisciplinary Creative
            </span>
            <InteractiveName />
            <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-6 text-zinc-400 uppercase tracking-widest text-sm">
              <span>Musician</span>
              <span className="hidden md:inline text-zinc-700">&bull;</span>
              <span>Developer</span>
              <span className="hidden md:inline text-zinc-700">&bull;</span>
              <span>Photographer</span>
            </div>
          </div>
        </section>

        <BentoGrid />
        <AboutSection />
      </main>
      <Footer />
    </>
  );
}
