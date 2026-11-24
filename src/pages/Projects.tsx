
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { projects } from '../data/projects'

const categories = [
  'All',
  'GenAI',
  'RAG',
  'Agentic AI',
  'LLM Evaluation',
]

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredProjects = projects.filter(
    (project) =>
      activeCategory === 'All' ||
      project.categories.includes(activeCategory)
  )

  return (
    <div>
      {/* Page Introduction */}
      <section className="bg-gradient-to-br from-white via-[#F2F8FF] to-[#EFFAF5]">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20">

          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
            Selected Work
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight text-[#182848] sm:text-5xl">
            AI Engineering Projects
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            Explore the architecture, engineering decisions,
            evaluation methods, and business outcomes behind
            my AI solutions.
          </p>

        </div>
      </section>

      {/* Project Collection */}
      <section className="mx-auto max-w-7xl px-6 py-16">

        {/* Category Filters */}
        <div className="mb-10 flex flex-wrap items-center gap-3">

          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              aria-pressed={activeCategory === category}
              className={`rounded-full px-5 py-2.5 text-sm font-medium transition ${
                activeCategory === category
                  ? 'bg-[#1764CF] text-white'
                  : 'border border-slate-200 bg-white text-slate-600 hover:bg-blue-50'
              }`}
            >
              {category}
            </button>
          ))}

        </div>

        <p className="mb-6 text-sm text-slate-500">
          Showing {filteredProjects.length} projects
        </p>

        {/* Project Cards */}
        <div className="grid gap-6 md:grid-cols-2">

          {filteredProjects.map((project) => (

            <article
              key={project.id}
              className="flex flex-col rounded-3xl border border-slate-200 bg-white p-8 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
            >

              <div className="flex flex-wrap items-center gap-2">

                <span className="rounded-full bg-blue-50 px-3 py-1.5 text-xs font-medium text-blue-700">
                  {project.type}
                </span>

                <span className="text-xs text-slate-500">
                  {project.categories.join(' · ')}
                </span>

              </div>

              <h2 className="mt-6 text-2xl font-bold text-[#182848]">
                {project.title}
              </h2>

              <p className="mt-4 flex-1 leading-7 text-slate-600">
                {project.description}
              </p>

              <div className="mt-6 rounded-xl bg-[#F2F8FF] px-5 py-4">

                <p className="text-sm font-semibold text-blue-700">
                  {project.highlight}
                </p>

              </div>

              <div className="mt-6 flex flex-wrap gap-2">

                {project.technologies.map((technology) => (

                  <span
                    key={technology}
                    className="rounded-full bg-slate-50 px-3 py-1.5 text-xs text-slate-600"
                  >
                    {technology}
                  </span>

                ))}

              </div>

              <div className="mt-8 border-t border-slate-100 pt-5">

                <Link
                  to={`/projects/${project.id}`}
                  className="inline-flex text-sm font-semibold text-blue-700 hover:underline"
                >
                  View Case Study →
                </Link>

              </div>

            </article>

          ))}

        </div>

      </section>

    </div>
  )
}
