export function AboutSection() {
  return (
    <section
      className="max-w-7xl mx-auto px-6 py-32 flex flex-col items-center text-center"
      id="about"
    >
      <div className="max-w-3xl">
        <h3 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
          Bridging the gap between{" "}
          <span className="text-brand">rhythm</span>,{" "}
          <span className="text-brand">logic</span>, and{" "}
          <span className="text-brand">light</span>.
        </h3>
        <p className="text-zinc-400 text-lg leading-relaxed">
          I believe that the discipline of a musician, the logic of a developer,
          and the eye of a photographer are all parts of the same creative
          pursuit. Whether it&apos;s a concert hall or a browser window, I build
          atmospheres.
        </p>
      </div>
    </section>
  );
}
