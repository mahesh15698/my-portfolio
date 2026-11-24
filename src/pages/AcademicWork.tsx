
import { Link, useParams } from 'react-router-dom'
import { subjects } from '../data/research'

export default function AcademicWork() {
  const { subjectId, workId } = useParams<{
    subjectId: string
    workId: string
  }>()

  const subject = subjects.find((item) => item.id === subjectId)
  const work = subject?.works.find((item) => item.id === workId)

  if (!subject || !work) {
    return (
      <main className="mx-auto max-w-6xl px-6 py-20">
        <h1 className="text-3xl font-bold text-[#182848]">
          Academic work not found
        </h1>
        <Link
          to="/research/subjects"
          className="mt-6 inline-block text-blue-700"
        >
          ← Back to Subjects
        </Link>
      </main>
    )
  }

  const pdfUrl = `${import.meta.env.BASE_URL}${work.document}`

  const formattedDate = work.date
    ? new Date(`${work.date}T12:00:00`).toLocaleDateString(
        'en-US',
        { year: 'numeric', month: 'long', day: 'numeric' }
      )
    : ''

  return (
    <div className="bg-white">

      {/* Academic Work Header */}
      <section className="bg-gradient-to-br from-white via-[#F2F8FF] to-[#EFFAF5]">
        <div className="mx-auto max-w-6xl px-6 py-16">

          <Link
            to={`/research/subjects/${subject.id}`}
            className="text-sm font-medium text-blue-700 hover:underline"
          >
            ← Back to {subject.code}
          </Link>

          <div className="mt-8 flex flex-wrap gap-3">
            <span className="rounded-full bg-blue-100 px-4 py-2 text-xs font-semibold text-blue-700">
              {work.type}
            </span>

            <span className="rounded-full bg-white px-4 py-2 text-xs font-medium text-slate-600">
              PhD Coursework
            </span>
          </div>

          <h1 className="mt-6 max-w-4xl text-3xl font-bold leading-tight tracking-tight text-[#182848] sm:text-5xl">
            {work.title}
          </h1>

          <p className="mt-5 text-sm text-slate-600">
            {subject.code} · {subject.title}
          </p>

          <p className="mt-2 text-sm text-slate-500">
            University of the Cumberlands
            {formattedDate && ` · ${formattedDate}`}
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            {work.documentReady && (
              <a
                href={pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[#1764CF] px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
              >
                View Original PDF ↗
              </a>
            )}

            <Link
              to={`/research/subjects/${subject.id}`}
              className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-[#182848] hover:border-blue-500"
            >
              All Coursework
            </Link>
          </div>

        </div>
      </section>

      {/* Main Content */}
      <section className="mx-auto grid max-w-6xl gap-10 px-6 py-16 lg:grid-cols-[1fr_280px]">

        <div className="space-y-12">

          {/* Overview */}
          <section>
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-700">
              Academic Overview
            </p>

            <h2 className="mt-3 text-2xl font-bold text-[#182848]">
              About This Work
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              {work.description}
            </p>
          </section>

          {/* Key Insights */}
          <section>
            <h2 className="text-2xl font-bold text-[#182848]">
              Key Areas Explored
            </h2>

            <div className="mt-6 space-y-4">
              {work.insights.map((insight, index) => (
                <div
                  key={index}
                  className="flex gap-4 rounded-xl border border-slate-200 bg-white p-5"
                >
                  <span className="font-bold text-blue-600">
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <p className="text-sm leading-7 text-slate-600">
                    {insight}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Document Preview */}
          {work.documentReady && (
            <section>
              <h2 className="text-2xl font-bold text-[#182848]">
                Original Academic Document
              </h2>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Read the complete work, including its methodology,
                analysis, conclusions, and references.
              </p>

              <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
                <iframe
                  src={pdfUrl}
                  title={`PDF preview: ${work.title}`}
                  className="h-[550px] w-full sm:h-[700px]"
                />
              </div>

              <a
                href={pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex text-sm font-semibold text-blue-700 hover:underline"
              >
                Open Full PDF in New Tab ↗
              </a>
            </section>
          )}

        </div>

        {/* Sidebar */}
        <aside>
          <div className="rounded-2xl border border-slate-200 bg-[#F8FBFF] p-6 lg:sticky lg:top-28">

            <h3 className="text-lg font-bold text-[#182848]">
              Work Information
            </h3>

            <div className="mt-6 space-y-5 text-sm">

              <div>
                <p className="text-slate-500">Category</p>
                <p className="mt-1 font-medium text-[#182848]">
                  {work.type}
                </p>
              </div>

              <div>
                <p className="text-slate-500">Subject</p>
                <p className="mt-1 font-medium text-[#182848]">
                  {subject.code}
                </p>
              </div>

              <div>
                <p className="text-slate-500">Academic Term</p>
                <p className="mt-1 font-medium text-[#182848]">
                  {subject.term}
                </p>
              </div>

              {formattedDate && (
                <div>
                  <p className="text-slate-500">Date</p>
                  <p className="mt-1 font-medium text-[#182848]">
                    {formattedDate}
                  </p>
                </div>
              )}

            </div>

            <div className="mt-6 border-t border-slate-200 pt-6">
              <h4 className="text-sm font-semibold text-[#182848]">
                Research Topics
              </h4>

              <div className="mt-4 flex flex-wrap gap-2">
                {work.topics.map((topic) => (
                  <span
                    key={topic}
                    className="rounded-full bg-white px-3 py-1.5 text-xs text-blue-700"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </aside>

      </section>

      {/* Back Navigation */}
      <section className="mx-auto max-w-6xl px-6 pb-16">
        <Link
          to={`/research/subjects/${subject.id}`}
          className="text-sm font-semibold text-blue-700 hover:underline"
        >
          ← Explore More Work from {subject.code}
        </Link>
      </section>

    </div>
  )
}
