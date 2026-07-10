import { caseStudies } from '../data/caseStudies'
import CaseStudyCard from '../components/CaseStudyCard'

function Home() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-12 sm:py-16">
      <section className="mb-12">
        <h1 className="text-3xl tracking-tight text-[var(--text-h)] sm:text-4xl">
          Design technology leader, 12+ years building the systems behind great
          experiences.
        </h1>
        <p className="mt-4 text-[var(--text)]">
          I build the design systems, design-to-code pipelines, and
          AI-assisted workflows that let design teams move faster without
          losing craft.
        </p>
      </section>

      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {caseStudies.map((project) => (
          <CaseStudyCard key={project.slug} project={project} />
        ))}
      </section>
    </main>
  )
}

export default Home
