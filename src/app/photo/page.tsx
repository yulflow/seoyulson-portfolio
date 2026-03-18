import { Nav } from "@/components/nav";
import { PageHeader } from "@/components/page-header";
import { Footer } from "@/components/footer";
import Image from "next/image";

export const metadata = {
  title: "Photo | Seoyul Son",
  description: "Visual Storyteller — street photography, portraits, urban landscapes.",
};

const photos = [
  { src: "/images/photo-1.jpg", alt: "Street photography", span: "md:col-span-2 md:row-span-2" },
  { src: "/images/photo-2.jpg", alt: "Portrait", span: "" },
  { src: "/images/music-hero.jpg", alt: "Performance", span: "" },
  { src: "/images/photo-1.jpg", alt: "Urban landscape", span: "md:col-span-2" },
  { src: "/images/photo-2.jpg", alt: "Candid moment", span: "" },
  { src: "/images/music-hero.jpg", alt: "Stage lights", span: "" },
  { src: "/images/photo-2.jpg", alt: "Architecture", span: "" },
  { src: "/images/photo-1.jpg", alt: "Night scene", span: "md:col-span-2" },
];

export default function PhotoPage() {
  return (
    <>
      <Nav />
      <main>
        <PageHeader
          number="03"
          title="Photo"
          subtitle="Visual Storyteller"
          description="Capturing moments through a lens — street scenes, portraits, and the quiet beauty of urban life. Every photograph is a story frozen in time."
        />

        {/* Gallery Grid */}
        <section className="max-w-7xl mx-auto px-6 pb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[250px] md:auto-rows-[300px]">
            {photos.map((photo, i) => (
              <div
                key={i}
                className={`relative overflow-hidden rounded-2xl border border-border group cursor-pointer ${photo.span}`}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-background/40 group-hover:bg-transparent transition-colors duration-500" />
                <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <p className="text-sm font-medium">{photo.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Categories */}
        <section className="max-w-7xl mx-auto px-6 py-20 border-t border-border">
          <h2 className="text-3xl font-bold mb-12">Series</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "Street", count: "24 photos", description: "Life unfolding on the streets of Seoul" },
              { name: "Portraits", count: "18 photos", description: "Faces and the stories they carry" },
              { name: "Urban", count: "31 photos", description: "Architecture, light, and geometry" },
            ].map((series) => (
              <div
                key={series.name}
                className="bento-card border border-border rounded-2xl bg-surface p-8 cursor-pointer"
              >
                <p className="text-zinc-600 text-[10px] uppercase tracking-widest font-bold mb-4">
                  {series.count}
                </p>
                <h3 className="text-2xl font-bold mb-2">{series.name}</h3>
                <p className="text-zinc-400 text-sm">{series.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Equipment */}
        <section className="max-w-7xl mx-auto px-6 py-20 border-t border-border text-center">
          <p className="text-zinc-600 text-sm uppercase tracking-widest mb-6">
            Shot with
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-zinc-400">
            <span>Sony A7IV</span>
            <span className="text-zinc-700">/</span>
            <span>35mm f/1.4</span>
            <span className="text-zinc-700">/</span>
            <span>85mm f/1.8</span>
            <span className="text-zinc-700">/</span>
            <span>Lightroom</span>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
