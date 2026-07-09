import { Link } from 'react-router-dom'
import type { CaseStudy } from '../data/caseStudies'

function CaseStudyCard({ project }: { project: CaseStudy }) {
  return (
    <Link
      to={`/work/${project.slug}`}
      className="group flex flex-col gap-3 rounded-lg border border-[var(--border)] p-5 transition-colors hover:border-[var(--accent-border)]"
    >
      <div className="flex items-center justify-between text-xs text-[var(--text)]">
        <span>{project.company}</span>
        <span>{project.year}</span>
      </div>
      <h2 className="text-xl text-[var(--text-h)] group-hover:text-[var(--accent)]">
        {project.title}
      </h2>
      <p className="text-sm text-[var(--text)]">{project.summary}</p>
      <ul className="mt-2 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <li
            key={tag}
            className="rounded-full bg-[var(--accent-bg)] px-3 py-1 text-xs text-[var(--accent)]"
          >
            {tag}
          </li>
        ))}
      </ul>
    </Link>
  )
}

export default CaseStudyCard
