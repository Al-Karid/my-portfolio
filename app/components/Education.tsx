import Image from "next/image";
import { GraduationIcon, CodeIcon, LightbulbIcon, GlobeIcon, PaletteIcon } from "./Icons";

const education = [
  {
    degree: "Master's Degree in Data Science, Big Data & Artificial Intelligence",
    school: "International Data Science Institute, INP-HB",
    location: "Côte d'Ivoire",
    period: "2018 — 2020",
    logo: "/education/inphb.png",
    icon: GraduationIcon,
    color: "#6c63ff",
  },
  {
    degree: "Bachelor's Degree in Computer Science",
    school: "Ecole Supérieure Africaine des TIC (ESATIC)",
    location: "Côte d'Ivoire",
    period: "2015 — 2018",
    logo: "/education/esatic.jpg",
    icon: CodeIcon,
    color: "#43e97b",
  },
  {
    degree: "High School Diploma (Baccalauréat)",
    school: "Lycée Classique d'Abidjan",
    location: "Côte d'Ivoire",
    period: "2012 — 2015",
    logo: "/education/lyce_classique_d_abidjan.jpeg",
    icon: GraduationIcon,
    color: "#ff6584",
  },
];

const softSkills = [
  { label: "3D Design", icon: PaletteIcon },
  { label: "Fluent English", icon: GlobeIcon },
  { label: "Problem-solving", icon: LightbulbIcon },
  { label: "Creativity & Art", icon: PaletteIcon },
  { label: "Teamwork", icon: CodeIcon },
  { label: "Project Planning", icon: LightbulbIcon },
];

export default function Education() {
  return (
    <section id="education" className="py-24 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <p className="text-[#6c63ff] text-sm font-semibold uppercase tracking-widest mb-3">Background</p>
        <h2 className="section-title text-white">Education & Soft Skills</h2>
        <div className="section-divider w-24 mt-4 mx-auto" />
      </div>

      <div className="grid lg:grid-cols-2 gap-10">
        {/* Education */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-6 flex items-center gap-2">
            <GraduationIcon className="w-5 h-5" /> Academic Background
          </h3>
          <div className="space-y-4">
            {education.map((edu, i) => (
              <div key={i} className="card p-5 flex gap-4">
                {edu.logo ? (
                  <div className="w-14 h-14 shrink-0 bg-white/5 rounded-lg p-2 border border-white/10">
                    <Image
                      src={edu.logo}
                      alt={edu.school}
                      width={56}
                      height={56}
                      className="w-full h-full object-contain"
                    />
                  </div>
                ) : (
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: `${edu.color}15`, border: `1px solid ${edu.color}30` }}
                  >
                    <edu.icon className="w-5 h-5" style={{ color: edu.color }} />
                  </div>
                )}
                <div>
                  <h4 className="text-white font-semibold text-sm leading-snug">{edu.degree}</h4>
                  <p className="text-[#8888aa] text-sm mt-1">{edu.school}</p>
                  <div className="flex gap-3 mt-2">
                    <span className="text-xs text-[#6666aa]">📍 {edu.location}</span>
                    <span className="text-xs text-[#6666aa] font-mono">{edu.period}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-6 flex items-center gap-2">
            <LightbulbIcon className="w-5 h-5" /> Soft Skills
          </h3>
          <div className="grid grid-cols-2 gap-3">
            {softSkills.map(({ label, icon: IconComponent }) => (
              <div key={label} className="card p-4 flex items-center gap-3 hover:border-[#6c63ff]/40 transition-all">
                <IconComponent className="w-5 h-5 text-[#6c63ff]" />
                <span className="text-[#aaaacc] text-sm font-medium">{label}</span>
              </div>
            ))}
          </div>

          {/* Languages */}
          <div className="mt-6">
            <h3 className="text-white font-semibold text-lg mb-4 flex items-center gap-2">
              <GlobeIcon className="w-5 h-5" /> Languages
            </h3>
            <div className="space-y-3">
              {[
                { lang: "French", level: "Native", pct: 100 },
                { lang: "English", level: "Fluent", pct: 85 },
              ].map(({ lang, level, pct }) => (
                <div key={lang}>
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="text-[#aaaacc] font-medium">{lang}</span>
                    <span className="text-[#6666aa]">{level}</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                    <div
                      className="h-full progress-bar rounded-full"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
