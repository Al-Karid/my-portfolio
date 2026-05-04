import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaDev } from "react-icons/fa6";

export default function Footer() {
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/Al-Karid",
      icon: FaGithub,
      color: "#aaaacc",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/al-cisse/",
      icon: FaLinkedin,
      color: "#0a66c2",
    },
    {
      name: "Dev.to",
      url: "https://dev.to/alkarid",
      icon: FaDev,
      color: "#3b2335",
    },
  ];

  return (
    <footer className="border-t border-white/5 py-8 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Social Links */}
        <div className="flex items-center justify-center gap-4 mb-6">
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                title={link.name}
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:border-white/30 hover:bg-white/10 transition-all group"
              >
                <Icon className="w-5 h-5 text-[#aaaacc] group-hover:text-white transition-colors" />
              </a>
            );
          })}
        </div>

        {/* Footer Text */}
        <div className="text-center">
          <p className="text-[#6666aa] text-sm">
            © {new Date().getFullYear()} Alassane CISSE. Crafted with Next.js, Tailwind CSS & Passion.
          </p>
          <div className="mt-3 flex items-center justify-center gap-1">
            <span className="w-2 h-2 rounded-full bg-[#43e97b] animate-pulse inline-block" />
            <span className="text-xs text-[#6666aa]">Available for opportunities</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
