import { Link, Navigate, useParams } from 'react-router-dom'
import { caseStudies, getCaseStudy } from '../data/caseStudies'
import type { Block } from '../data/caseStudies'
import Carousel from '../components/Carousel'
import { useDocumentTitle } from '../hooks/useDocumentTitle'

function BlockContent({ block, fallbackAlt }: { block: Block; fallbackAlt: string }) {
  switch (block.type) {
    case 'heading':
      return block.level === 3 ? (
        <h3 className="mt-8 mb-2 text-base font-medium text-[var(--text-h)]">{block.text}</h3>
      ) : (
        <h2 className="mt-12 mb-3 text-lg text-[var(--text-h)]">{block.text}</h2>
      )
    case 'text':
      return <p className="mb-4 text-[var(--text)]">{block.text}</p>
    case 'list':
      return block.ordered ? (
        <ol className="mb-4 list-decimal space-y-2 pl-5 text-[var(--text)]">
          {block.items.map((item) => (
            <li key={item} className="pl-1 leading-relaxed">
              {item}
            </li>
          ))}
        </ol>
      ) : (
        <ul className="mb-4 list-disc space-y-2 pl-5 text-[var(--text)]">
          {block.items.map((item) => (
            <li key={item} className="leading-relaxed">
              {item}
            </li>
          ))}
        </ul>
      )
    case 'browser':
      return (
        <figure className="my-6">
          <div className="overflow-hidden rounded-xl border border-[var(--border)] shadow-xl">
            <div className="flex items-center gap-2 border-b border-[var(--border)] bg-[var(--border)] px-3 py-2.5">
              <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
              <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
              <span className="h-3 w-3 rounded-full bg-[#28c840]" />
              {block.url && (
                <div
                  aria-hidden="true"
                  className="ml-3 flex-1 select-none truncate rounded-md bg-[var(--bg)] px-3 py-1 text-xs text-[var(--text)]"
                >
                  {block.url}
                </div>
              )}
            </div>
            <div className="aspect-[16/10] w-full overflow-hidden bg-white">
              <img
                src={block.src}
                alt={block.caption ? '' : fallbackAlt}
                className="h-full w-full object-cover object-top"
              />
            </div>
          </div>
          {block.caption && (
            <figcaption className="mt-2 text-xs text-[var(--text)]">
              {block.caption}
            </figcaption>
          )}
        </figure>
      )
    case 'carousel':
      return <Carousel slides={block.slides} />
    case 'image':
      return (
        <figure className="my-6">
          <img
            src={block.src}
            alt={block.caption ? '' : fallbackAlt}
            className="w-full rounded-lg border border-[var(--border)]"
          />
          {block.caption && (
            <figcaption className="mt-2 text-xs text-[var(--text)]">{block.caption}</figcaption>
          )}
        </figure>
      )
  }
}

function CaseStudy() {
  const { slug } = useParams()
  const project = slug ? getCaseStudy(slug) : undefined
  useDocumentTitle(
    project ? `${project.title} · Nicole Arocha` : 'Nicole Arocha · UX Portfolio',
  )

  if (!project) {
    return <Navigate to="/" replace />
  }

  const currentIndex = caseStudies.findIndex((p) => p.slug === project.slug)
  const prev = currentIndex > 0 ? caseStudies[currentIndex - 1] : null
  const next =
    currentIndex < caseStudies.length - 1
      ? caseStudies[currentIndex + 1]
      : null

  return (
    <article className="mx-auto max-w-2xl px-6 py-12 sm:py-16">
      <Link to="/" className="text-sm text-[var(--text)] hover:text-[var(--text-h)]">
        ← Work
      </Link>

      <header className="mt-6 mb-10">
        <div className="text-xs text-[var(--text)]">
          <span>{project.company}</span>
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

      {project.body.map((block, index) => (
        <BlockContent key={index} block={block} fallbackAlt={project.title} />
      ))}

      <nav
        aria-label="More case studies"
        className="mt-16 flex items-start justify-between gap-6 border-t border-[var(--border)] pt-8"
      >
        {prev ? (
          <Link
            to={`/work/${prev.slug}`}
            className="group flex max-w-[46%] flex-col gap-1"
          >
            <span className="text-xs text-[var(--text)]">
              <span aria-hidden="true">←</span> Previous
            </span>
            <span className="text-sm text-[var(--text-h)] transition-colors group-hover:text-[var(--accent)]">
              {prev.title}
            </span>
          </Link>
        ) : (
          <span />
        )}

        {next ? (
          <Link
            to={`/work/${next.slug}`}
            className="group flex max-w-[46%] flex-col items-end gap-1 text-right"
          >
            <span className="text-xs text-[var(--text)]">
              Next <span aria-hidden="true">→</span>
            </span>
            <span className="text-sm text-[var(--text-h)] transition-colors group-hover:text-[var(--accent)]">
              {next.title}
            </span>
          </Link>
        ) : (
          <span />
        )}
      </nav>
    </article>
  )
}

export default CaseStudy
