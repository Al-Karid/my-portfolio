const experiences = [
  {
    period: "Sept 2021 — Present",
    company: "Autorité de Régulation du Transport Intérieur",
    location: "Côte d'Ivoire",
    role: "Head of R&D (Chef de Service)",
    roles: ["Lead Data Scientist", "Software & DevOps Engineer", "System Administrator"],
    highlights: [
      "Lead data scientist on national transport regulatory projects focused on data-driven policy making.",
      "Designed and implemented data pipelines for national transport database KPIs.",
      "Built a RAG system for fast regulatory text search and legal information retrieval.",
      "Developed a data extraction agent in C# to collect and centralize data from regulated institutions.",
      "Developed internal business applications for mission management and inventory tracking.",
      "Supported deployment environments and containerized internal applications using Docker.",
      "Managed Linux/Windows Server infrastructure, network operations, and cloud deployments.",
      "Coordinated cross-functional technical teams including software, data, and DevOps engineers.",
    ],
    tech: ["Python", "Next.js", "Nuxt.js", "C#", "Docker", "Power BI", "NLP/RAG", "LlamaIndex", "Linux", "Windows Server", "AWS"],
    color: "#6c63ff",
  },
  {
    period: "Feb 2021 — Aug 2021",
    company: "MTN Côte d'Ivoire",
    location: "Côte d'Ivoire",
    role: "Business Intelligence Analyst",
    roles: [],
    highlights: [
      "Designed and maintained ETL workflows using SAS for nationwide network performance monitoring.",
      "Developed automated reporting systems and dashboards for network KPIs.",
      "Built automated data processing pipelines using Python to streamline reporting workflows.",
      "Reduced monthly reporting time by 60% through ETL workflow automation.",
    ],
    tech: ["Python", "SAS", "ETL", "KPI Reporting", "Data Visualization"],
    color: "#ff6584",
  },
  {
    period: "Mar 2020 — Jan 2021",
    company: "Orange Côte d'Ivoire",
    location: "Côte d'Ivoire",
    role: "Cybersecurity Data Scientist",
    roles: [],
    highlights: [
      "Developed ML models to predict security breaches and prioritize infrastructure interventions.",
      "Built real-time dashboards for server monitoring, system health, and status tracking.",
      "Deployed and maintained analytical server infrastructure on CentOS environments.",
      "Reduced downtime of critical services through proactive monitoring systems.",
    ],
    tech: ["Python", "Machine Learning", "CentOS", "Cybersecurity", "Predictive Analytics", "Linux"],
    color: "#43e97b",
  },
  {
    period: "Mar 2018 — Jun 2018",
    company: "NOVUS Emergent Technology",
    location: "Côte d'Ivoire",
    role: "Application Developer",
    roles: [],
    highlights: [
      "Designed and developed medical software applications for desktop and Android platforms.",
      "Built and integrated RESTful APIs using Spring Boot for backend services and data access.",
      "Collaborated with healthcare professionals to gather requirements and translate them into functional features.",
    ],
    tech: ["Java", "Spring Boot", "Android Studio", "RESTful APIs"],
    color: "#ffc83c",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <p className="text-[#6c63ff] text-sm font-semibold uppercase tracking-widest mb-3">Career</p>
        <h2 className="section-title text-white">Professional Experience</h2>
        <div className="section-divider w-24 mt-4 mx-auto" />
      </div>

      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-6 top-0 bottom-0 w-px bg-linear-to-b from-[#6c63ff]/50 via-[#ff6584]/30 to-transparent hidden sm:block" />

        <div className="space-y-10">
          {experiences.map((exp, i) => (
            <div key={i} className="relative sm:pl-20">
              {/* Timeline dot */}
              <div
                className="hidden sm:block absolute left-0 top-6 timeline-dot"
                style={{ boxShadow: `0 0 10px ${exp.color}80`, background: exp.color }}
              />

              <div className="card p-6 sm:p-8">
                {/* Header */}
                <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                  <div>
                    <h3 className="text-white font-bold text-xl">{exp.company}</h3>
                    <p className="text-sm text-[#8888aa] mt-0.5">{exp.location}</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <span
                        className="text-sm font-semibold px-3 py-0.5 rounded-full"
                        style={{
                          background: `${exp.color}18`,
                          color: exp.color,
                          border: `1px solid ${exp.color}40`,
                        }}
                      >
                        {exp.role}
                      </span>
                      {exp.roles.map((r) => (
                        <span
                          key={r}
                          className="text-xs font-medium px-3 py-0.5 rounded-full bg-white/5 text-[#8888aa] border border-white/10"
                        >
                          {r}
                        </span>
                      ))}
                    </div>
                  </div>
                  <span className="text-sm text-[#8888aa] font-mono whitespace-nowrap">{exp.period}</span>
                </div>

                {/* Highlights */}
                <ul className="space-y-2 mb-5">
                  {exp.highlights.map((h, j) => (
                    <li key={j} className="flex gap-3 text-[#aaaacc] text-sm leading-relaxed">
                      <span className="text-[#6c63ff] mt-0.5 shrink-0 text-lg">•</span>
                      {h}
                    </li>
                  ))}
                </ul>

                {/* Tech */}
                <div className="flex flex-wrap gap-1.5">
                  {exp.tech.map((t) => (
                    <span key={t} className="text-xs px-2.5 py-0.5 rounded-md bg-white/5 text-[#8888aa] border border-white/8">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
