import { Link } from 'react-router-dom'
import type { CaseStudy } from '../data/caseStudies'

function CaseStudyCard({ project }: { project: CaseStudy }) {
  return (
    <Link
      to={`/work/${project.slug}`}
      className="group flex flex-col overflow-hidden rounded-[12px] border border-[var(--border)] transition-colors hover:border-[var(--accent-border)]"
    >
      <div className="aspect-[16/10] w-full overflow-hidden border-b border-[var(--border)]">
        {project.thumbnail ? (
          <img
            src={project.thumbnail}
            alt=""
            loading="lazy"
            style={{ objectPosition: project.thumbnailPosition ?? 'center top' }}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[var(--accent-bg)] via-transparent to-[var(--accent-bg)] px-6 text-center">
            <span className="text-sm font-medium uppercase tracking-widest text-[var(--accent)] opacity-80">
              {project.company}
            </span>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="text-xs text-[var(--text)]">
          <span>{project.company}</span>
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
      </div>
    </Link>
  )
}

export default CaseStudyCard
