
import { Link } from 'react-router-dom'
import { subjects } from '../data/research'

export default function ResearchSubjects() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-white via-[#F2F8FF] to-[#EFFAF5]">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <Link
            to="/research"
            className="text-sm font-medium text-blue-700"
          >
            ← Back to Research
          </Link>

          <h1 className="mt-8 text-4xl font-bold text-[#182848]">
            PhD Subjects & Coursework
          </h1>

          <p className="mt-4 max-w-2xl leading-7 text-slate-600">
            Explore my doctoral subjects, academic case
            studies, analysis papers, presentations,
            and research activities.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="space-y-5">
          {subjects.map((subject) => (
            <Link
              key={subject.id}
              to={`/research/subjects/${subject.id}`}
              className="block rounded-2xl border border-slate-200 bg-white p-8 transition hover:border-blue-300 hover:shadow-md"
            >
              <div className="flex flex-wrap items-center justify-between gap-4">
                <span className="text-sm font-semibold text-blue-700">
                  {subject.code} · {subject.term}
                </span>

                <span className="rounded-full bg-emerald-50 px-4 py-2 text-xs font-medium text-emerald-700">
                  {subject.works.length} Academic Works
                </span>
              </div>

              <h2 className="mt-5 text-2xl font-bold text-[#182848]">
                {subject.title}
              </h2>

              <p className="mt-3 max-w-3xl leading-7 text-slate-600">
                {subject.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {subject.topics.map((topic) => (
                  <span
                    key={topic}
                    className="rounded-full bg-slate-50 px-3 py-1.5 text-xs text-slate-600"
                  >
                    {topic}
                  </span>
                ))}
              </div>

              <p className="mt-6 text-sm font-semibold text-blue-700">
                Explore Subject →
              </p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
