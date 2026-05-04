import { GitHubCalendar } from 'react-github-calendar';

export default function GitHubContributions() {
  return (
    <section id="github-calendar" className="py-12 px-6">
      <h2 className="text-3xl font-bold text-center mb-8">GitHub Contributions</h2>
      <div className="max-w-4xl mx-auto">
        <GitHubCalendar username="Al-Karid" />
      </div>
    </section>
  );
}