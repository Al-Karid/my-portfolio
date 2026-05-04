"use client";

import { GitHubCalendar } from "react-github-calendar";

const darkTheme = {
  dark: ["#0d1117", "#3b1fa8", "#5538d1", "#6c63ff", "#a8a4ff"],
};

export default function GitHubContributions() {
  return (
    <section id="contributions" className="py-20 px-6 relative overflow-hidden">
      {/* Decorative blob */}
      <div className="absolute top-1/4 right-1/4 w-72 h-72 rounded-full blur-3xl opacity-10 bg-[#43e97b] pointer-events-none" />

      <div className="w-full max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-12 text-center">
          <p className="text-[#6c63ff] text-sm font-semibold uppercase tracking-widest mb-3">Activity</p>
          <h2 className="section-title text-white">GitHub Contributions</h2>
          <div className="section-divider w-24 mt-4 mb-6" />
          <p className="text-[#8888aa] max-w-2xl text-center mx-auto">
            Open source activity and personal project contributions over the past year.
          </p>
        </div>

        {/* Calendar */}
        <div className="card p-8 overflow-x-auto flex justify-center">
          <div className="w-full flex justify-center">
            <GitHubCalendar
              username="Al-Karid"
              colorScheme="dark"
              theme={darkTheme}
              blockSize={13}
              blockMargin={4}
              fontSize={14}
              style={{ color: "#8888aa" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}