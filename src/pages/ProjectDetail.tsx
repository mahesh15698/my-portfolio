
import { Link, useParams } from 'react-router-dom'
import { projects } from '../data/projects'

export default function ProjectDetail() {
  const { slug } = useParams()

  const project = projects.find(
    (item) => item.id === slug
  )

  if (!project) {
    return (
      <div className="mx-auto max-w-6xl px-6 py-20">
        <h1 className="text-3xl font-bold">
          Project not found
        </h1>

        <Link
          to="/projects"
          className="mt-6 inline-block text-blue-700"
        >
          ← Back to Projects
        </Link>
      </div>
    )
  }

  return (
    <div>

      {/* Project Header */}
      <section className="bg-gradient-to-br from-white via-[#F2F8FF] to-[#EFFAF5]">

        <div className="mx-auto max-w-6xl px-6 py-16">

          <Link
            to="/projects"
            className="text-sm font-medium text-blue-700 hover:underline"
          >
            ← Back to Projects
          </Link>

          <p className="mt-8 text-xs font-semibold uppercase tracking-widest text-blue-700">
            {project.type} · Case Study
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight text-[#182848] sm:text-5xl">
            {project.title}
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            {project.description}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-blue-100 bg-white px-4 py-2 text-xs text-blue-700"
              >
                {technology}
              </span>
            ))}
          </div>

        </div>

      </section>

      <div className="mx-auto max-w-6xl space-y-14 px-6 py-16">

        {/* Problem */}
        <section>
          <h2 className="text-2xl font-bold text-[#182848]">
            01. Problem Statement
          </h2>

          <p className="mt-5 leading-8 text-slate-600">
            {project.problem}
          </p>
        </section>

        {/* Solution */}
        <section>
          <h2 className="text-2xl font-bold text-[#182848]">
            02. Proposed Solution
          </h2>

          <p className="mt-5 leading-8 text-slate-600">
            {project.solution}
          </p>
        </section>

        {/* Architecture */}
        <section>
          <h2 className="text-2xl font-bold text-[#182848]">
            03. System Architecture
          </h2>

          <p className="mt-3 text-sm text-slate-500">
            Simplified high-level system workflow.
          </p>

          <div className="mt-6 rounded-3xl border border-blue-100 bg-[#F8FBFF] p-8">

            <div className="mx-auto max-w-lg space-y-4">

              {project.architecture.map((step, index) => (

                <div key={step}>

                  <div className="rounded-xl border border-blue-100 bg-white px-6 py-4 text-center text-sm font-semibold text-[#182848] shadow-sm">

                    <span className="mr-3 text-blue-600">
                      {String(index + 1).padStart(2, '0')}
                    </span>

                    {step}

                  </div>

                  {index < project.architecture.length - 1 && (
                    <div className="py-2 text-center text-xl text-blue-400">
                      ↓
                    </div>
                  )}

                </div>

              ))}

            </div>

          </div>
        </section>

        {/* Implementation */}
        <section>
          <h2 className="text-2xl font-bold text-[#182848]">
            04. Implementation
          </h2>

          <ul className="mt-6 space-y-4">
            {project.implementation.map((item) => (
              <li
                key={item}
                className="flex gap-3 leading-7 text-slate-600"
              >
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-blue-500" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* Evaluation */}
        <section>
          <h2 className="text-2xl font-bold text-[#182848]">
            05. Evaluation & Quality
          </h2>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">

            {project.evaluation.map((item) => (

              <div
                key={item}
                className="rounded-xl border border-slate-200 p-5 text-sm leading-7 text-slate-600"
              >
                {item}
              </div>

            ))}

          </div>
        </section>

        {/* Results */}
        <section>
          <h2 className="text-2xl font-bold text-[#182848]">
            06. Results & Impact
          </h2>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

            {project.results.map((result) => (

              <div
                key={result.label}
                className="rounded-2xl border border-emerald-100 bg-[#EFFAF5] p-6"
              >

                <p className="text-3xl font-bold text-[#182848]">
                  {result.value}
                </p>

                <p className="mt-2 text-sm text-slate-600">
                  {result.label}
                </p>

              </div>

            ))}

          </div>
        </section>

        {project.type === 'Enterprise' && (
          <p className="rounded-xl bg-slate-50 p-5 text-sm leading-7 text-slate-500">
            This case study presents a simplified,
            high-level overview of professional engineering
            work. Confidential client information and
            proprietary implementation details are excluded.
          </p>
        )}

        <Link
          to="/projects"
          className="inline-flex rounded-full bg-[#1764CF] px-6 py-3 text-sm font-semibold text-white hover:bg-blue-800"
        >
          ← Explore Other Projects
        </Link>

      </div>

    </div>
  )
}
