import { Link, Navigate, useParams } from 'react-router-dom'
import { getCaseStudy } from '../data/caseStudies'

function CaseStudy() {
  const { slug } = useParams()
  const project = slug ? getCaseStudy(slug) : undefined

  if (!project) {
    return <Navigate to="/" replace />
  }

  return (
    <article className="mx-auto max-w-2xl px-6 py-12 sm:py-16">
      <Link to="/" className="text-sm text-[var(--text)] hover:text-[var(--text-h)]">
        ← Work
      </Link>

      <header className="mt-6 mb-10">
        <div className="flex items-center justify-between text-xs text-[var(--text)]">
          <span>{project.company}</span>
          <span>{project.year}</span>
        </div>
        <h1 className="mt-2 text-3xl tracking-tight text-[var(--text-h)] sm:text-4xl">
          {project.title}
        </h1>
        <p className="mt-3 text-sm text-[var(--text)]">Role: {project.role}</p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full bg-[var(--accent-bg)] px-3 py-1 text-xs text-[var(--accent)]"
            >
              {tag}
            </li>
          ))}
        </ul>
      </header>

      <section className="mb-8">
        <h2 className="mb-2 text-lg">Overview</h2>
        <p className="text-[var(--text)]">{project.overview}</p>
      </section>

      <section className="mb-8">
        <h2 className="mb-2 text-lg">The problem</h2>
        <p className="text-[var(--text)]">{project.problem}</p>
      </section>

      <section className="mb-8">
        <h2 className="mb-2 text-lg">Approach</h2>
        <ul className="list-disc space-y-2 pl-5 text-[var(--text)]">
          {project.approach.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="mb-2 text-lg">Outcome</h2>
        <ul className="list-disc space-y-2 pl-5 text-[var(--text)]">
          {project.outcome.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
    </article>
  )
}

export default CaseStudy
