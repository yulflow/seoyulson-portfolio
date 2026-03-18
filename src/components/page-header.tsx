import Link from "next/link";

interface PageHeaderProps {
  number: string;
  title: string;
  subtitle: string;
  description: string;
}

export function PageHeader({
  number,
  title,
  subtitle,
  description,
}: PageHeaderProps) {
  return (
    <section className="pt-40 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <Link
          href="/"
          className="text-zinc-500 text-sm uppercase tracking-widest hover:text-white transition-colors mb-12 inline-block"
        >
          &larr; Back
        </Link>
        <div className="flex items-baseline gap-6 mb-6">
          <span className="text-brand text-8xl md:text-9xl font-black opacity-20 select-none leading-none">
            {number}
          </span>
          <div>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter">
              {title}
            </h1>
            <p className="text-zinc-500 uppercase tracking-widest text-sm mt-2">
              {subtitle}
            </p>
          </div>
        </div>
        <p className="text-zinc-400 text-lg max-w-2xl leading-relaxed mt-8">
          {description}
        </p>
      </div>
    </section>
  );
}
