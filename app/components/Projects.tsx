import { SearchIcon, BuildIcon, TrendIcon, TruckIcon, CloudIcon, DatabaseIcon, RestaurantIcon, FilmIcon } from "./Icons";

const projects = [
  {
    name: "RAG Regulatory Search System",
    description:
      "Built a Retrieval-Augmented Generation system for fast regulatory text search and legal information retrieval, enabling data-driven policy making at a national transport regulator.",
    tech: ["Python", "LlamaIndex", "NLP", "RAG", "SQL"],
    category: "AI / Data",
    icon: SearchIcon,
    color: "#6c63ff",
  },
  {
    name: "Internal Business Automation Platform",
    description:
      "Developed internal applications for mission management, inventory tracking, and reporting dashboards with automated data processing workflows.",
    tech: ["Nuxt.js", "Next.js", "Python", "Docker", "Power BI", "Linux"],
    category: "Full-Stack",
    icon: BuildIcon,
    color: "#43e97b",
  },
  {
    name: "Stock Market Tracking Application",
    description:
      "Mobile application for stock market monitoring backed by AWS, with automated market data scraping and processing pipelines.",
    tech: ["React Native", "Python", "AWS SAM", "Google Cloud Console"],
    category: "Mobile / Cloud",
    icon: TrendIcon,
    color: "#ff6584",
  },
  {
    name: "Heavy Cargo Delivery Platform",
    description:
      "Mobile platform connecting customers with heavy cargo delivery providers, with scalable backend services and deployment architecture.",
    tech: ["React Native", "Supabase", "Google Cloud Console", "Twilio SMS API", "Google Play Console"],
    category: "Mobile",
    icon: TruckIcon,
    color: "#ffc83c",
  },
  {
    name: "AWS Cloud Deployment & Automation Platform",
    description:
      "Deployed applications on AWS with VPC setup, user provisioning, API deployment, and automated task scheduling in cloud environments.",
    tech: ["AWS (EC2, VPC, IAM, Lambda)", "Docker", "Python", "API Deployment", "Linux"],
    category: "Cloud / DevOps",
    icon: CloudIcon,
    color: "#6c63ff",
  },
  {
    name: "Regulated Data Extraction System",
    description:
      "System to collect and centralize data from regulated entities with automated ETL pipelines for data ingestion, transformation, and consolidation.",
    tech: ["C#", "Python", "ETL Pipelines", "APIs", "Data Processing"],
    category: "Data Engineering",
    icon: DatabaseIcon,
    color: "#43e97b",
  },
  {
    name: "Restaurant Ordering Management App",
    description:
      "Mobile restaurant ordering and management application with cloud-hosted backend services, order tracking, and business management functionalities.",
    tech: ["React Native", "Supabase", "Google Cloud Console", "Google Play Console"],
    category: "Mobile",
    icon: RestaurantIcon,
    color: "#ff6584",
  },
  {
    name: "Movie Recommendation System",
    description:
      "Movie recommendation système with ergonomic UI using content-based and collaborative filtering algorithms.",
    tech: ["Python", "JQuery", "Recommendation Algorithms"],
    category: "AI / Web",
    icon: FilmIcon,
    color: "#ffc83c",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <p className="text-[#6c63ff] text-sm font-semibold uppercase tracking-widest mb-3">Portfolio</p>
        <h2 className="section-title text-white">Projects</h2>
        <div className="section-divider w-24 mt-4 mx-auto" />
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((p, i) => (
          <div key={i} className="card p-6 flex flex-col gap-3 group">
            {/* Icon & category */}
            <div className="flex items-center justify-between">
              <p.icon className="w-8 h-8" style={{ color: p.color }} />
              <span
                className="text-xs font-medium px-2.5 py-0.5 rounded-full"
                style={{
                  background: `${p.color}15`,
                  color: p.color,
                  border: `1px solid ${p.color}30`,
                }}
              >
                {p.category}
              </span>
            </div>

            {/* Name & description */}
            <h3 className="text-white font-semibold text-base leading-snug group-hover:text-[#a8a4ff] transition-colors">
              {p.name}
            </h3>
            <p className="text-[#8888aa] text-sm leading-relaxed flex-1">{p.description}</p>

            {/* Tech stack */}
            <div className="flex flex-wrap gap-1.5 mt-auto pt-2 border-t border-white/5">
              {p.tech.map((t) => (
                <span key={t} className="text-xs px-2 py-0.5 rounded bg-white/5 text-[#8888aa]">
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
