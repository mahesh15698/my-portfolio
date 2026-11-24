
import { Link } from 'react-router-dom'

export default function Publications() {
  return (
    <div className="bg-white">

      {/* Page Header */}
      <section className="bg-gradient-to-br from-white via-[#F2F8FF] to-[#EFFAF5]">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">

          <Link
            to="/research"
            className="text-sm font-medium text-blue-700 hover:underline"
          >
            ← Back to Research
          </Link>

          <p className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
            Scholarly Work
          </p>

          <h1 className="mt-4 text-4xl font-bold text-[#182848] sm:text-5xl">
            Research & Publications
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            A growing collection of research manuscripts,
            independent studies, conference papers, and
            scholarly publications.
          </p>

        </div>
      </section>

      {/* Publication Collection */}
      <section className="mx-auto max-w-6xl px-6 py-20">

        <div className="rounded-3xl border border-slate-200 bg-[#F8FBFF] px-8 py-14 text-center">

          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-2xl">
            📚
          </div>

          <h2 className="mt-6 text-2xl font-bold text-[#182848]">
            Research Collection in Development
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-600">
            I am currently pursuing my PhD in Artificial
            Intelligence at the University of the Cumberlands.
            This section will feature research manuscripts,
            conference submissions, and published papers as
            they become available.
          </p>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-500">
            Academic coursework, case studies, and analysis
            papers are organized separately under
            PhD Subjects & Coursework.
          </p>

          <Link
            to="/research/subjects"
            className="mt-8 inline-flex rounded-full bg-[#1764CF] px-7 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
          >
            Explore Academic Coursework →
          </Link>

        </div>

      </section>

      {/* Research Interests */}
      <section className="mx-auto max-w-6xl px-6 pb-20">

        <h2 className="text-2xl font-bold text-[#182848]">
          Areas of Research Interest
        </h2>

        <div className="mt-6 flex flex-wrap gap-3">

          {[
            'Generative AI',
            'Agentic AI',
            'AI Security',
            'LLM Evaluation',
            'Responsible AI',
            'Cyber-Physical Systems',
          ].map((topic) => (
            <span
              key={topic}
              className="rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700"
            >
              {topic}
            </span>
          ))}

        </div>

      </section>

    </div>
  )
}
