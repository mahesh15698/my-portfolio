
import { Link } from 'react-router-dom'

const baseUrl = import.meta.env.BASE_URL

const metrics = [
  {
    value: '120K+',
    label: 'Enterprise documents indexed',
  },
  {
    value: '1,200+',
    label: 'Users supported',
  },
  {
    value: '8',
    label: 'Production AI agents',
  },
]

const projects = [
  {
    category: 'Generative AI · Compliance',
    title: 'ADShield AI',
    description:
      'AI-powered advertising compliance auditing using RAG, agentic workflows, and human-in-the-loop validation.',
    technologies: ['LangGraph', 'Azure OpenAI', 'RAG'],
    id: 'adshield-ai',
  },
  {
    category: 'Enterprise AI · RAG',
    title: 'Enterprise AI Knowledge Assistant',
    description:
      'Secure enterprise knowledge retrieval supporting document review, research, and business operations.',
    technologies: ['Azure AI Foundry', 'FastAPI', 'Azure AI Search'],
    id: 'enterprise-ai',
  },
  {
    category: 'Research · LLM Evaluation',
    title: 'Legal-eval',
    description:
      'A reproducible evaluation framework for comparing language models on legal clause extraction and reliability.',
    technologies: ['Python', 'NLP', 'LLM Evaluation'],
    id: 'legal-eval',
  },
]

export default function Home() {
  return (
    <div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-white via-[#F2F8FF] to-[#EFFAF5]">

        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 md:py-24 lg:grid-cols-[1.15fr_0.85fr] lg:py-28">

          {/* Introduction */}
          <div>

            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/80 px-4 py-2 text-xs font-medium text-blue-700">

              <span className="h-2 w-2 rounded-full bg-emerald-500" />

              AI Engineer & PhD Researcher

            </div>

            <h1 className="text-4xl font-bold leading-tight tracking-tight text-[#182848] sm:text-5xl lg:text-6xl">

              Hi, I'm

              <span className="mt-2 block text-[#1764CF]">
                Mahesh Jadhav.
              </span>

            </h1>

            <h2 className="mt-6 max-w-xl text-xl font-semibold leading-relaxed text-[#182848] sm:text-2xl">

              Building intelligent AI systems that deliver measurable impact.

            </h2>

            <p className="mt-5 max-w-xl text-base leading-8 text-slate-600">

              I specialize in production-grade Generative AI,
              retrieval-augmented generation, and multi-agent
              systems. My work focuses on building reliable,
              secure, and scalable AI applications that solve
              real-world business problems.

            </p>

            {/* Primary Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">

              <Link
                to="/projects"
                className="rounded-full bg-[#1764CF] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-800"
              >
                Explore My Work →
              </Link>

              <a
                href={`${baseUrl}resume.pdf`}
                download
                className="rounded-full border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-[#182848] transition hover:border-blue-500 hover:text-blue-700"
              >
                Download Resume
              </a>

            </div>

            {/* Social Links */}
            <div className="mt-8 flex flex-wrap items-center gap-6">

              <a
                href="https://linkedin.com/in/maheshjadhav-ai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-slate-500 transition hover:text-blue-700"
              >
                LinkedIn ↗
              </a>

              <a
                href="https://github.com/mahesh15698"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-slate-500 transition hover:text-blue-700"
              >
                GitHub ↗
              </a>

              <Link
                to="/contact"
                className="text-sm font-medium text-slate-500 transition hover:text-blue-700"
              >
                Contact →
              </Link>

            </div>

          </div>

          
        {/* Professional Headshot */}
        <div className="relative mx-auto w-full max-w-[360px]">

        {/* Soft circular background glow */}
        <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-blue-100 to-emerald-100 opacity-70 blur-2xl" />

        {/* Circular photo */}
        <div className="relative aspect-square overflow-hidden rounded-full border-[6px] border-white bg-white shadow-lg">

            <img
            src={`${baseUrl}images/headshot.png`}
            alt="Mahesh Jadhav, AI Engineer"
            className="h-full w-full rounded-full object-cover object-center"
            />

        </div>

        </div>


        </div>

      </section>

      {/* Engineering Impact */}
      <section className="border-y border-slate-100 bg-white">

        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-10 sm:grid-cols-3">

          {metrics.map((metric) => (

            <div
              key={metric.label}
              className="text-center"
            >

              <p className="text-3xl font-bold tracking-tight text-[#182848] sm:text-4xl">
                {metric.value}
              </p>

              <p className="mt-2 text-sm text-slate-500">
                {metric.label}
              </p>

            </div>

          ))}

        </div>

      </section>

      {/* Featured Projects */}
      <section className="mx-auto max-w-7xl px-6 py-20">

        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">

          <div>

            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-blue-700">
              Selected Projects
            </p>

            <h2 className="text-3xl font-bold tracking-tight text-[#182848] sm:text-4xl">
              Featured Work
            </h2>

            <p className="mt-3 text-slate-500">
              Exploring AI through practical engineering and applied research.
            </p>

          </div>

          <Link
            to="/projects"
            className="text-sm font-semibold text-blue-700 hover:underline"
          >
            View all projects →
          </Link>

        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {projects.map((project) => (

            <article
              key={project.title}
              className="flex flex-col rounded-2xl border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
            >

              <p className="mb-4 text-xs font-medium text-blue-700">
                {project.category}
              </p>

              <h3 className="text-xl font-bold leading-snug text-[#182848]">
                {project.title}
              </h3>

              <p className="mt-4 flex-1 text-sm leading-7 text-slate-600">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">

                {project.technologies.map((technology) => (

                  <span
                    key={technology}
                    className="rounded-full bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-600"
                  >
                    {technology}
                  </span>

                ))}

              </div>

              <Link
                to={`/projects/${project.id}`}
                className="mt-6 text-sm font-semibold text-blue-700 hover:underline"
              >
                Explore project →
              </Link>

            </article>

          ))}

        </div>

      </section>

      {/* PhD Research Preview */}
      <section className="mx-auto max-w-7xl px-6 pb-20">

        <div className="rounded-3xl border border-emerald-100 bg-gradient-to-br from-[#F2F8FF] to-[#EFFAF5] px-8 py-12 sm:px-12">

          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-emerald-700">

            Academic Journey

          </p>

          <h2 className="text-3xl font-bold tracking-tight text-[#182848] sm:text-4xl">

            Research & Academic Work

          </h2>

          <p className="mt-3 text-sm font-medium text-blue-700">

            PhD in Artificial Intelligence · University of the Cumberlands

          </p>

          <p className="mt-5 max-w-2xl leading-8 text-slate-600">

            Alongside my professional AI engineering work, I am
            pursuing doctoral studies in Artificial Intelligence.
            Explore my academic case studies, analysis papers,
            presentations, and research across evolving AI
            and cybersecurity challenges.

          </p>

          <Link
            to="/research"
            className="mt-7 inline-flex rounded-full border border-blue-200 bg-white px-6 py-3 text-sm font-semibold text-blue-700 transition hover:bg-blue-50"
          >

            Explore My PhD Work →

          </Link>

        </div>

      </section>

    </div>
  )
}
