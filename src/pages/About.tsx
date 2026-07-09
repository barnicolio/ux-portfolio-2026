const strengths = [
  {
    title: 'Design Systems & Tooling',
    detail:
      'Figma design systems (variables, components, Dev Mode), component library architecture, Storybook, design-to-dev handoff standardization, Angular/front-end collaboration.',
  },
  {
    title: 'AI-Assisted Design',
    detail:
      'Figma Make, Claude Design, Claude Code, AI-generated component library prototyping, LLM-assisted workflows, test-agent building, evaluating emerging AI design tools.',
  },
  {
    title: 'Leadership',
    detail:
      'Team building & mentorship, capacity planning, job description design, executive-level storytelling, cross-functional influence with Product & Engineering, research process definition.',
  },
  {
    title: 'Customer Insight & Measurement',
    detail:
      'Behavioral analytics, CES/NPS/CSAT program ownership, journey mapping, persona development, user interviewing.',
  },
]

const experience = [
  {
    company: 'Employers Insurance Group',
    role: 'Manager, Experience Design — Product & Digital Operations',
    dates: 'Nov 2023 – Present',
  },
  {
    company: 'BiggerPockets',
    role: 'Lead UX Designer',
    dates: 'Sep 2022 – Nov 2023',
  },
  {
    company: 'Hopewell Health',
    role: 'Lead UX Designer',
    dates: 'Mar 2022 – Sep 2022',
  },
  {
    company: 'BiggerPockets',
    role: 'Senior/Lead UX Designer',
    dates: 'Jun 2021 – Mar 2022',
  },
  {
    company: 'Pinnacol Assurance',
    role: 'Senior UX Designer',
    dates: 'Sep 2019 – Mar 2021',
  },
  {
    company: 'OptioSurgical',
    role: 'Lead Senior User Experience Designer',
    dates: 'Feb 2019 – Aug 2019',
  },
  {
    company: 'Cake Insure',
    role: 'Lead Senior UX Designer',
    dates: 'Jun 2017 – Feb 2019',
  },
  {
    company: 'DaVita Kidney Care',
    role: 'User Experience Product Designer',
    dates: 'Nov 2014 – Jun 2017',
  },
]

function About() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-12 sm:py-16">
      <h1 className="text-3xl tracking-tight text-[var(--text-h)] sm:text-4xl">
        About
      </h1>
      <p className="mt-4 text-[var(--text)]">
        Design technology leader who’s spent 12+ years building the systems,
        design-to-code pipelines, and AI-powered workflows that let design
        teams move faster without losing craft. Currently leads an Experience
        Design team, owns the Figma design system, and has spent the last
        three quarters piloting AI tooling — including an AI-generated
        component library prototype, Figma Make, and a test agent for quoting
        insurance. Also built the customer-measurement infrastructure (Pendo,
        CES/NPS/CSAT) that ties design decisions to business outcomes.
      </p>

      <section className="mt-12">
        <h2 className="mb-4 text-lg text-[var(--text-h)]">Core strengths</h2>
        <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {strengths.map((strength) => (
            <div key={strength.title}>
              <dt className="text-sm font-medium text-[var(--text-h)]">
                {strength.title}
              </dt>
              <dd className="mt-1 text-sm text-[var(--text)]">
                {strength.detail}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="mt-12">
        <h2 className="mb-4 text-lg text-[var(--text-h)]">Experience</h2>
        <ul className="space-y-4">
          {experience.map((job) => (
            <li
              key={`${job.company}-${job.dates}`}
              className="flex flex-col justify-between gap-1 border-b border-[var(--border)] pb-4 sm:flex-row sm:items-baseline"
            >
              <div>
                <p className="text-sm font-medium text-[var(--text-h)]">
                  {job.company}
                </p>
                <p className="text-sm text-[var(--text)]">{job.role}</p>
              </div>
              <p className="text-xs text-[var(--text)]">{job.dates}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="mb-4 text-lg text-[var(--text-h)]">Education</h2>
        <ul className="space-y-2 text-sm text-[var(--text)]">
          <li>
            Wharton School — Executive Presence and Influence: Persuasive
            Leadership Certification
          </li>
          <li>Nielsen Norman Group — UX Design Certification</li>
          <li>
            Rocky Mountain College of Art & Design — BFA, Communication Arts
            & 3D Animation, Magna Cum Laude
          </li>
        </ul>
      </section>

      <div className="mt-12 flex flex-wrap gap-4">
        <a
          href="/Nicole_Arocha_Resume_2026.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-[var(--accent-border)] px-4 py-2 text-sm text-[var(--accent)] transition-colors hover:bg-[var(--accent-bg)]"
        >
          View Resume
        </a>
        <a
          href="https://www.linkedin.com/in/nicolearocha/"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-[var(--border)] px-4 py-2 text-sm text-[var(--text)] transition-colors hover:text-[var(--text-h)]"
        >
          LinkedIn
        </a>
      </div>
    </main>
  )
}

export default About
