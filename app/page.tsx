export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          HR Tools for Remote Teams
        </span>
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
          Detect Time Tracking Fraud<br />
          <span className="text-[#58a6ff]">Before It Costs You More</span>
        </h1>
        <p className="text-lg md:text-xl text-[#8b949e] max-w-2xl mx-auto mb-10">
          DevTimeGuard cross-references git commits, screen activity, and work patterns to surface inflated time logs — automatically. Built for CTOs and engineering managers at remote companies.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={checkoutUrl}
            className="bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-4 rounded-lg text-lg transition-colors"
          >
            Start for $15/mo
          </a>
          <a
            href="#faq"
            className="border border-[#30363d] hover:border-[#58a6ff] text-[#c9d1d9] font-semibold px-8 py-4 rounded-lg text-lg transition-colors"
          >
            Learn More
          </a>
        </div>
        <div className="mt-14 grid grid-cols-3 gap-6 max-w-xl mx-auto">
          {[['98%', 'Detection Accuracy'], ['2min', 'Setup Time'], ['$0', 'Hidden Fees']].map(([val, label]) => (
            <div key={label} className="bg-[#161b22] border border-[#30363d] rounded-xl p-4">
              <div className="text-2xl font-bold text-[#58a6ff]">{val}</div>
              <div className="text-xs text-[#8b949e] mt-1">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 text-center relative">
          <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#58a6ff] text-[#0d1117] text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">
            Most Popular
          </span>
          <div className="text-5xl font-bold text-white mb-1">$15<span className="text-xl font-normal text-[#8b949e]">/mo</span></div>
          <p className="text-[#8b949e] mb-8">Everything you need to protect your payroll</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Git commit & PR activity analysis',
              'Time log anomaly detection alerts',
              'Screen activity pattern matching',
              'Slack & Jira integration',
              'Weekly fraud risk reports',
              'Up to 50 developers monitored',
            ].map((feature) => (
              <li key={feature} className="flex items-center gap-3 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-4 rounded-lg text-lg transition-colors"
          >
            Get Started Now
          </a>
          <p className="text-xs text-[#8b949e] mt-4">Cancel anytime. No contracts.</p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-10">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {[
            {
              q: 'How does DevTimeGuard detect time fraud?',
              a: 'We connect to your Git provider (GitHub, GitLab, Bitbucket) and time tracking tool (Toggl, Harvest, Clockify) via webhooks. Our engine compares reported hours against actual commit timestamps, PR activity, and screen event patterns to flag statistical anomalies automatically.',
            },
            {
              q: 'Is employee monitoring legal?',
              a: 'DevTimeGuard analyzes work artifacts — code commits and time entries — that employees already submit as part of their job. We do not capture screenshots or keystrokes. Always consult your legal team and disclose monitoring practices in your employment agreements.',
            },
            {
              q: 'What integrations are supported?',
              a: 'We currently support GitHub, GitLab, Bitbucket, Jira, Toggl, Harvest, and Clockify. Slack notifications are included. More integrations are added monthly based on customer requests.',
            },
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="font-semibold text-white mb-3">{q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-8 text-xs text-[#8b949e]">
        © {new Date().getFullYear()} DevTimeGuard. All rights reserved.
      </footer>
    </main>
  )
}
