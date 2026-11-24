
import { Link } from 'react-router-dom'
import { subjects } from '../data/research'

export default function Research() {
  const totalWorks = subjects.reduce(
    (total, subject) => total + subject.works.length,
    0
  )

  const researchInterests = [
    'Generative AI',
    'Agentic AI',
    'AI Security',
    'LLM Evaluation',
    'Responsible AI',
    'Cyber-Physical Systems',
  ]

  return (
    <div>

      {/* Research Hero */}
      <section className="bg-gradient-to-br from-white via-[#F2F8FF] to-[#EFFAF5]">

        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24">

          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
            PhD in Artificial Intelligence
          </p>

          <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-[#182848] sm:text-5xl">

            Research &

            <span className="block text-[#1764CF]">
              Academic Work
            </span>

          </h1>

          <p className="mt-5 font-medium text-blue-700">
            University of the Cumberlands
          </p>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            Exploring artificial intelligence through
            academic research, critical analysis,
            real-world case studies, and systematic
            experimentation.
          </p>

        </div>

      </section>

      {/* Academic Overview */}
      <section className="border-b border-slate-100">

        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-6 py-10">

          <div className="text-center">

            <p className="text-4xl font-bold text-[#182848]">
              {subjects.length}
            </p>

            <p className="mt-2 text-sm text-slate-500">
              Featured Academic Subjects
            </p>

          </div>

          <div className="border-l border-slate-100 text-center">

            <p className="text-4xl font-bold text-[#182848]">
              {totalWorks}
            </p>

            <p className="mt-2 text-sm text-slate-500">
              Academic Works
            </p>

          </div>

        </div>

      </section>

      {/* Research Navigation */}
      <section className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-6 md:grid-cols-2">

          <Link
            to="/research/subjects"
            className="group rounded-3xl border border-slate-200 bg-white p-8 transition hover:border-blue-300 hover:shadow-md"
          >

            <div className="inline-flex rounded-xl bg-blue-50 px-4 py-3 text-sm font-semibold text-blue-700">
              01
            </div>

            <h2 className="mt-6 text-2xl font-bold text-[#182848]">
              Academic Subjects
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              Explore my doctoral coursework organized by
              subject, including case studies, analysis
              papers, presentations, and infographics.
            </p>

            <p className="mt-6 text-sm font-semibold text-blue-700">
              Browse Subjects →
            </p>

          </Link>

          <Link
            to="/research/publications"
            className="group rounded-3xl border border-slate-200 bg-white p-8 transition hover:border-emerald-300 hover:shadow-md"
          >

            <div className="inline-flex rounded-xl bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-700">
              02
            </div>

            <h2 className="mt-6 text-2xl font-bold text-[#182848]">
              Research & Publications
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              A dedicated collection for research
              manuscripts, independent studies,
              and scholarly publications.
            </p>

            <p className="mt-6 text-sm font-semibold text-blue-700">
              Explore Papers →
            </p>

          </Link>

        </div>

      </section>

      {/* Featured Subjects */}
      <section className="mx-auto max-w-7xl px-6 pb-16">

        <div className="mb-8 flex flex-wrap items-center justify-between gap-3">

          <h2 className="text-3xl font-bold text-[#182848]">
            Academic Subjects
          </h2>

          <Link
            to="/research/subjects"
            className="text-sm font-semibold text-blue-700 hover:underline"
          >
            View All Subjects →
          </Link>

        </div>

        <div className="space-y-5">

          {subjects.map((subject) => (

            <Link
              key={subject.id}
              to={`/research/subjects/${subject.id}`}
              className="block rounded-2xl border border-slate-200 bg-white p-7 transition hover:border-blue-300 hover:shadow-md"
            >

              <div className="flex flex-wrap items-center justify-between gap-3">

                <span className="text-xs font-semibold text-blue-700">
                  {subject.code} · {subject.term}
                </span>

                <span className="rounded-full bg-emerald-50 px-4 py-2 text-xs font-medium text-emerald-700">
                  {subject.works.length} Academic Works
                </span>

              </div>

              <h3 className="mt-4 text-xl font-bold text-[#182848]">
                {subject.title}
              </h3>

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

      {/* Research Interests */}
      <section className="mx-auto max-w-7xl px-6 pb-20">

        <div className="rounded-3xl bg-[#EFFAF5] p-8 sm:p-10">

          <h2 className="text-2xl font-bold text-[#182848]">
            Research Interests
          </h2>

          <p className="mt-4 max-w-2xl leading-7 text-slate-600">
            Areas I am interested in exploring through
            my professional engineering practice and
            doctoral studies.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">

            {researchInterests.map((interest) => (

              <span
                key={interest}
                className="rounded-full border border-emerald-100 bg-white px-4 py-2 text-sm font-medium text-emerald-800"
              >
                {interest}
              </span>

            ))}

          </div>

        </div>

      </section>

    </div>
  )
}
