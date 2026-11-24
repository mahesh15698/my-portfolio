
import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { subjects, type WorkType } from '../data/research'

type Filter = 'All' | WorkType

const filters: Filter[] = [
  'All',
  'Case Study',
  'Analysis Paper',
  'Presentation',
  'Infographic',
]

export default function SubjectDetail() {
  const { subjectId } = useParams<{ subjectId: string }>()
  const [filter, setFilter] = useState<Filter>('All')
  const [search, setSearch] = useState('')

  const subject = subjects.find(
    (item) => item.id === subjectId
  )

  if (!subject) {
    return (
      <main className="mx-auto max-w-6xl px-6 py-20">
        <h1 className="text-3xl font-bold text-[#182848]">
          Subject not found
        </h1>
        <Link
          to="/research/subjects"
          className="mt-5 inline-block text-blue-700"
        >
          ← Back to Subjects
        </Link>
      </main>
    )
  }

  const visibleWorks = subject.works.filter((work) => {
    const matchesType =
      filter === 'All' || work.type === filter

    const matchesSearch = [
      work.title,
      work.description,
      ...work.topics,
    ]
      .join(' ')
      .toLowerCase()
      .includes(search.trim().toLowerCase())

    return matchesType && matchesSearch
  })

  const countType = (type: WorkType) =>
    subject.works.filter((work) => work.type === type).length

  return (
    <div className="bg-white">
      {/* Subject introduction */}
      <section className="bg-gradient-to-br from-white via-[#F2F8FF] to-[#EFFAF5]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <Link
            to="/research/subjects"
            className="text-sm font-medium text-blue-700"
          >
            ← Back to Subjects
          </Link>

          <p className="mt-8 text-xs font-semibold uppercase tracking-widest text-blue-700">
            {subject.code} · {subject.term}
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight text-[#182848] sm:text-5xl">
            {subject.title}
          </h1>

          <p className="mt-3 text-sm font-medium text-blue-700">
            {subject.university}
          </p>

          <p className="mt-5 max-w-3xl leading-8 text-slate-600">
            {subject.description}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {subject.topics.map((topic) => (
              <span
                key={topic}
                className="rounded-full bg-white px-3 py-1.5 text-xs text-slate-600"
              >
                {topic}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Summary */}
      <section className="mx-auto max-w-6xl px-6 pt-12">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            ['Total Works', subject.works.length],
            ['Case Studies', countType('Case Study')],
            ['Analysis Papers', countType('Analysis Paper')],
            [
              'Visual Works',
              countType('Presentation') +
                countType('Infographic'),
            ],
          ].map(([label, value]) => (
            <div
              key={label}
              className="rounded-2xl bg-[#F2F8FF] p-5 text-center"
            >
              <p className="text-3xl font-bold text-[#182848]">
                {value}
              </p>
              <p className="mt-2 text-xs text-slate-600">
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Searchable academic library */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-2xl font-bold text-[#182848]">
          Academic Work
        </h2>

        <p className="mt-3 text-sm text-slate-500">
          Browse coursework by category or search by topic.
        </p>

        <label htmlFor="work-search" className="sr-only">
          Search academic work
        </label>

        <input
          id="work-search"
          type="search"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Search papers, case studies, or topics..."
          className="mt-8 w-full rounded-xl border border-slate-200 px-5 py-3.5 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
        />

        <div className="mt-6 flex flex-wrap gap-2">
          {filters.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setFilter(item)}
              aria-pressed={filter === item}
              className={`rounded-full px-4 py-2.5 text-xs font-medium transition ${
                filter === item
                  ? 'bg-[#1764CF] text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-blue-50'
              }`}
            >
              {item} (
              {item === 'All'
                ? subject.works.length
                : countType(item)}
              )
            </button>
          ))}
        </div>

        <p className="mt-8 text-sm text-slate-500">
          Showing {visibleWorks.length} academic works
        </p>

        <div className="mt-5 space-y-4">
          {visibleWorks.map((work) => (
            <article
              key={work.id}
              className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-blue-200 hover:shadow-sm"
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-medium text-blue-700">
                    {work.type} · PhD Coursework
                  </p>

                  <h3 className="mt-3 text-lg font-bold text-[#182848]">
                    {work.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {work.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {work.topics.map((topic) => (
                      <span
                        key={topic}
                        className="rounded-full bg-slate-50 px-3 py-1 text-xs text-slate-500"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {work.documentReady && (
                    <a
                      href={`${import.meta.env.BASE_URL}${work.document}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-semibold text-blue-700 hover:bg-blue-100"
                    >
                      View PDF ↗
                    </a>
                  )}

                  <Link
                    to={`/research/subjects/${subject.id}/${work.id}`}
                    className="rounded-full bg-[#1764CF] px-4 py-2 text-xs font-semibold text-white hover:bg-blue-800"
                  >
                    View Details →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {visibleWorks.length === 0 && (
          <div className="mt-6 rounded-2xl bg-slate-50 p-10 text-center text-slate-500">
            No matching academic works found.
          </div>
        )}
      </section>
    </div>
  )
}
