"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border transition-all ${
        scrolled ? "py-4" : "py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link
          href="/"
          className="text-2xl font-black tracking-tighter hover:text-brand transition-colors"
        >
          Seoyul Son
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex gap-12 text-sm font-medium tracking-widest uppercase">
          <Link href="/music" className="hover:text-brand transition-colors">
            Music
          </Link>
          <Link href="/code" className="hover:text-brand transition-colors">
            Code
          </Link>
          <Link href="/photo" className="hover:text-brand transition-colors">
            Photo
          </Link>
          <Link href="/#about" className="hover:text-brand transition-colors">
            About
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-zinc-400"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-md px-6 py-6 flex flex-col gap-4 text-sm font-medium tracking-widest uppercase">
          <Link
            href="/music"
            onClick={() => setMenuOpen(false)}
            className="hover:text-brand transition-colors"
          >
            Music
          </Link>
          <Link
            href="/code"
            onClick={() => setMenuOpen(false)}
            className="hover:text-brand transition-colors"
          >
            Code
          </Link>
          <Link
            href="/photo"
            onClick={() => setMenuOpen(false)}
            className="hover:text-brand transition-colors"
          >
            Photo
          </Link>
          <Link
            href="/#about"
            onClick={() => setMenuOpen(false)}
            className="hover:text-brand transition-colors"
          >
            About
          </Link>
        </div>
      )}
    </nav>
  );
}
