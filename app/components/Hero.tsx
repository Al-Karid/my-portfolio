import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="hero-bg min-h-screen flex flex-col items-center justify-center px-6 pt-20 pb-16 relative overflow-hidden"
    >
      {/* Decorative blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-10 bg-[#6c63ff] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full blur-3xl opacity-10 bg-[#ff6584] pointer-events-none" />

      {/* Two-column layout */}
      <div className="w-full max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

        {/* LEFT: Text */}
        <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
          {/* Status badge */}
          <div className="animate-fade-in mb-6 flex justify-center lg:justify-start">
            <span className="inline-flex items-center gap-2 text-xs font-medium px-4 py-1.5 rounded-full bg-[#6c63ff]/10 border border-[#6c63ff]/25 text-[#a8a4ff]">
              <span className="w-2 h-2 rounded-full bg-[#43e97b] animate-pulse inline-block" />
              Open to opportunities
            </span>
          </div>

          {/* Name */}
          <h1 className="animate-fade-in-up text-5xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight mb-4 leading-none">
            <span className="text-white">Alassane </span>
            <span className="gradient-text">CISSE</span>
          </h1>

          {/* Role */}
          <p className="animate-fade-in-up delay-200 text-lg sm:text-xl font-medium text-[#8888aa] mb-6 max-w-xl mx-auto lg:mx-0">
            Data Scientist &amp; Engineer &nbsp;·&nbsp; Software Developer &nbsp;·&nbsp; DevOps &amp; SysAdmin
          </p>

          {/* Summary */}
          <p className="animate-fade-in-up delay-300 text-base text-[#8888aa] max-w-xl mx-auto lg:mx-0 leading-relaxed mb-10">
            Results-driven engineer with <strong className="text-white">5+ years</strong> building end-to-end
            data pipelines, ML solutions, and scalable applications. Currently Head of R&amp;D at
            <strong className="text-white"> Autorité de Régulation du Transport Intérieur</strong>, Côte d&apos;Ivoire.
          </p>

          {/* CTA buttons */}
          <div className="animate-fade-in-up delay-400 flex flex-wrap gap-4 justify-center lg:justify-start mb-12">
            <a
              href="#projects"
              className="px-7 py-3 rounded-full bg-[#6c63ff] text-white font-semibold hover:bg-[#5a52e0] transition-all shadow-lg glow-purple-sm"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-7 py-3 rounded-full border border-white/20 text-white font-semibold hover:border-[#6c63ff]/60 hover:bg-[#6c63ff]/10 transition-all"
            >
              Get In Touch
            </a>
          </div>

          {/* Quick stats */}
          <div className="animate-fade-in-up delay-500 grid grid-cols-3 gap-6 sm:gap-10">
            {[
              { value: "5+", label: "Years Experience" },
              { value: "3", label: "Specializations" },
              { value: "8+", label: "Projects Shipped" },
            ].map(({ value, label }) => (
              <div key={label} className="text-center lg:text-left">
                <div className="text-3xl font-extrabold gradient-text">{value}</div>
                <div className="text-xs text-[#8888aa] mt-1 font-medium">{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT: Photo */}
        <div className="order-1 lg:order-2 animate-fade-in delay-300 relative shrink-0 flex items-center justify-center">
          {/* Ambient glow orb behind photo */}
          <div className="absolute w-72 h-72 rounded-full bg-[#6c63ff]/20 blur-3xl animate-pulse-glow pointer-events-none" />

          {/* Photo */}
          <div className="relative w-60 h-72 sm:w-72 sm:h-80 lg:w-[320px] lg:h-95">
            <Image
              src="/me.jpeg"
              alt="Alassane CISSE"
              fill
              priority
              className="object-cover object-top rounded-2xl border border-white/20"
              style={{
                maskImage:
                  "radial-gradient(ellipse 78% 88% at 50% 28%, black 42%, transparent 85%)",
                WebkitMaskImage:
                  "radial-gradient(ellipse 78% 88% at 50% 28%, black 42%, transparent 85%)",
              }}
            />
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float opacity-40">
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center pt-2">
          <div className="w-1.5 h-3 rounded-full bg-white/60 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
