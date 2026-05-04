export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-8 px-6 text-center">
      <p className="text-[#6666aa] text-sm">
        © {new Date().getFullYear()} Alassane CISSE. Built with Next.js & Tailwind CSS.
      </p>
      <div className="mt-2 flex items-center justify-center gap-1">
        <span className="w-2 h-2 rounded-full bg-[#43e97b] animate-pulse inline-block" />
        <span className="text-xs text-[#6666aa]">Available for opportunities</span>
      </div>
    </footer>
  );
}
