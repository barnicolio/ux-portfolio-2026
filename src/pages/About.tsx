import { useDocumentTitle } from '../hooks/useDocumentTitle'

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
    role: 'Manager, Experience Design, Product & Digital Operations',
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

const testimonials = [
  {
    quote:
      'She transformed the design team’s reputation from a downstream service to a strategic partner — delivering quality work across our highest-priority initiatives and embracing innovation proactively.',
    name: 'Kelsey Rich',
    role: 'Direct Manager, Employers Insurance Group',
  },
  {
    quote:
      'I had the distinct honor of working with Nicole for nearly two years at Cake Insure. Nicole is a phenomenal UX designer and I’m continuously impressed with her ability to take on seemingly impossible problems and provide elegant and straightforward solutions. From conducting user interviews and extracting the most important information to quickly creating clean, easy to use, and beautiful designs, Nicole was such a core part of the successful products we built. One of the things I value most about Nicole is her ability to connect with anyone and work to find the best solutions that fit the needs of the business while being incredibly customer focused. She is a pleasure to work with and I cannot recommend her enough for the quality of her work and her contribution to an amazing workplace.',
    name: 'Eric Nelson',
    role: 'Director of Platform Architecture & Quality Assurance, Cake Insure / Pinnacol Assurance',
  },
  {
    quote:
      'There are three words that immediately come to mind when I think about Nicole: Learner, Listener, and Producer. … She listens to people’s feedback and input and turns around and puts their words into her design solutions, and it’s always better than what you could have imagined.',
    name: 'Collin Conaway',
    role: 'COO, Cake Insure',
  },
]

function About() {
  useDocumentTitle('About · Nicole Arocha')

  return (
    <main className="mx-auto max-w-2xl px-6 py-12 sm:py-16">
      <div className="flex flex-col items-center gap-6 text-center">
        <img
          src="/nicole-headshot.png"
          alt="Nicole Arocha"
          className="h-36 w-36 shrink-0 rounded-full object-cover object-[50%_18%] ring-1 ring-[var(--border)]"
        />
        <h1 className="text-3xl tracking-tight text-[var(--text-h)] sm:text-4xl">
          About me
        </h1>
      </div>

      <p className="mt-8 text-[var(--text)]">
        I’m a design technology leader with 12+ years building the design
        systems, design-to-code pipelines, and AI-assisted workflows that help
        teams move faster without losing craft. Today I lead an Experience
        Design team, own the design system, and pilot new AI tooling,
        from an AI-generated component library to a test agent for quoting
        insurance.
      </p>

      <p className="mt-4 text-[var(--text)]">
        Outside of work, I live in the Denver, CO area and spend my free time
        running, hiking, and reefkeeping.
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
        <h2 className="mb-4 text-lg text-[var(--text-h)]">Coworker testimonials</h2>
        <div className="grid grid-cols-1 gap-6">
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial.name}
              className="border-l-2 border-[var(--accent-border)] pl-4"
            >
              <blockquote className="text-[var(--text)] italic">
                “{testimonial.quote}”
              </blockquote>
              <figcaption className="mt-2 text-sm">
                <span className="font-medium text-[var(--text-h)]">
                  {testimonial.name}
                </span>
                <span className="text-[var(--text)]"> — {testimonial.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
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
            Wharton School: Executive Presence and Influence, Persuasive
            Leadership Certification
          </li>
          <li>Nielsen Norman Group: UX Design Certification</li>
          <li>
            Rocky Mountain College of Art & Design: BFA, Communication Arts
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
          <span className="sr-only"> (opens in new tab)</span>
        </a>
        <a
          href="https://www.linkedin.com/in/nicolearocha/"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-[var(--border)] px-4 py-2 text-sm text-[var(--text)] transition-colors hover:text-[var(--text-h)]"
        >
          LinkedIn
          <span className="sr-only"> (opens in new tab)</span>
        </a>
      </div>
    </main>
  )
}

export default About
