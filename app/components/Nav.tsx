"use client";

export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="font-bold text-white text-lg tracking-tight">
          AC<span className="text-[#6c63ff]">.</span>
        </span>
        <div className="hidden sm:flex items-center gap-8">
          {[
            ["About", "#about"],
            ["Skills", "#skills"],
            ["Experience", "#experience"],
            ["Projects", "#projects"],
            ["Education", "#education"],
            ["Contact", "#contact"],
          ].map(([label, href]) => (
            <a key={href} href={href} className="nav-link">
              {label}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="text-sm font-semibold px-4 py-2 rounded-full border border-[#6c63ff]/50 text-[#a8a4ff] hover:bg-[#6c63ff]/10 transition-all"
        >
          Hire Me
        </a>
      </div>
    </nav>
  );
}
