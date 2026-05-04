const skillGroups = [
  {
    category: "Data Science & ML",
    icon: "🧠",
    color: "purple",
    skills: [
      "Python", "Pandas", "NumPy", "Scikit-learn",
      "Machine Learning", "Statistical Modeling", "Predictive Analytics",
      "NLP", "RAG", "LlamaIndex", "Data Mining",
      "Feature Engineering", "Model Evaluation & Optimization",
    ],
  },
  {
    category: "Data Engineering & BI",
    icon: "📊",
    color: "green",
    skills: [
      "ETL Pipelines", "Data Warehousing", "SQL", "Big Data",
      "SAS Analytics", "Power BI", "Dashboard Development",
      "Data Visualization", "Business Intelligence",
      "Workflow Automation", "API Integration",
    ],
  },
  {
    category: "Software Development",
    icon: "💻",
    color: "pink",
    skills: [
      "Next.js", "React", "Nuxt.js", "React Native",
      "TypeScript", "C#", "Java", "Spring Boot",
      "RESTful APIs", "Microsoft GraphQL",
      "Full-Stack Web", "Android & iOS",
    ],
  },
  {
    category: "DevOps & Cloud",
    icon: "☁️",
    color: "yellow",
    skills: [
      "Docker", "AWS (EC2, VPC, IAM, Lambda, SAM)",
      "CI/CD Pipelines", "Google Cloud Console",
      "Supabase", "Infrastructure as Code",
      "Linux (CentOS, Ubuntu)", "Windows Server 2022",
      "Network Engineering & Security",
      "Server Monitoring", "Bash / Python Scripting",
    ],
  },
];

const colorMap: Record<string, string> = {
  purple: "skill-badge",
  green: "skill-badge skill-badge-green",
  pink: "skill-badge skill-badge-pink",
  yellow: "skill-badge skill-badge-yellow",
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 max-w-6xl mx-auto">
      {/* Section header */}
      <div className="text-center mb-16">
        <p className="text-[#6c63ff] text-sm font-semibold uppercase tracking-widest mb-3">Expertise</p>
        <h2 className="section-title text-white">Technical Skills</h2>
        <div className="section-divider w-24 mt-4 mx-auto" />
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        {skillGroups.map(({ category, icon, color, skills }) => (
          <div key={category} className="card p-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">{icon}</span>
              <h3 className="text-white font-semibold text-lg">{category}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.map((s) => (
                <span key={s} className={colorMap[color]}>
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
