
import { Link } from 'react-router-dom'

const baseUrl = import.meta.env.BASE_URL

const expertise = [
  {
    number: '01',
    title: 'Generative AI & RAG',
    description:
      'Building intelligent knowledge systems using large language models, hybrid retrieval, semantic search, and grounded response generation.',
    skills: [
      'Azure OpenAI',
      'Azure AI Foundry',
      'Azure AI Search',
      'RAG',
      'LLM Evaluation',
    ],
  },
  {
    number: '02',
    title: 'Agentic AI Systems',
    description:
      'Designing multi-agent workflows that coordinate reasoning, retrieval, tool execution, validation, and human review.',
    skills: [
      'LangGraph',
      'LangChain',
      'DeepAgents',
      'MCP',
      'Tool Calling',
    ],
  },
  {
    number: '03',
    title: 'Machine Learning & NLP',
    description:
      'Developing machine learning solutions for classification, forecasting, anomaly detection, and natural language processing.',
    skills: [
      'Python',
      'PyTorch',
      'TensorFlow',
      'Scikit-learn',
      'Transformers',
    ],
  },
  {
    number: '04',
    title: 'Cloud & Production AI',
    description:
      'Deploying secure and scalable AI applications with reliable infrastructure, monitoring, evaluation, and continuous improvement.',
    skills: [
      'FastAPI',
      'Azure',
      'AWS',
      'Docker',
      'Kubernetes',
      'OpenTelemetry',
    ],
  },
]

const education = [
  {
    degree: 'PhD in Artificial Intelligence',
    university: 'University of the Cumberlands',
    duration: '2026 – Present',
    description:
      'Doctoral studies in artificial intelligence, applied research, emerging cybersecurity threats, and intelligent systems.',
    status: 'In Progress',
  },
  {
    degree: 'Master of Science in Data Science',
    university: 'Pace University, New York',
    duration: 'Aug 2022 – Dec 2023',
    description:
      'Artificial Intelligence track with a focus on machine learning, deep learning, data science, and analytical methods.',
    status: 'Completed',
  },
  {
    degree: 'Bachelor of Engineering',
    university: 'Savitribai Phule Pune University',
    duration: 'Jul 2016 – May 2020',
    description:
      'Electronics and Telecommunication Engineering.',
    status: 'Completed',
  },
]

export default function About() {
  return (
    <div>

      {/* Page Introduction */}
      <section className="bg-gradient-to-br from-white via-[#F2F8FF] to-[#EFFAF5]">

        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20">

          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
            Get to know me
          </p>

          <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-tight tracking-tight text-[#182848] sm:text-5xl">
            Engineering intelligence.
            <span className="block text-[#1764CF]">
              Exploring possibilities.
            </span>
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            My journey through artificial intelligence,
            software engineering, and applied research.
          </p>

        </div>

      </section>

      {/* Professional Biography */}
      <section className="mx-auto grid max-w-7xl items-start gap-12 px-6 py-20 lg:grid-cols-[0.75fr_1.25fr]">

        <div className="mx-auto w-full max-w-[320px]">

          <div className="overflow-hidden rounded-3xl bg-[#F2F8FF]">

            <img
              src={`${baseUrl}images/headshot.png`}
              alt="Mahesh Jadhav"
              className="w-full object-cover"
            />

          </div>

          <div className="mt-6 text-center">

            <h2 className="text-xl font-bold text-[#182848]">
              Mahesh Jadhav
            </h2>

            <p className="mt-1 text-sm text-blue-700">
              AI Engineer & PhD Researcher
            </p>

            <p className="mt-3 text-sm text-slate-500">
              Jersey City, New Jersey, USA
            </p>

          </div>

        </div>

        <div>

          <h2 className="text-3xl font-bold tracking-tight text-[#182848]">
            A little about me
          </h2>

          <div className="mt-6 space-y-5 text-base leading-8 text-slate-600">

            <p>
              I am an AI Engineer focused on designing and
              delivering intelligent systems that solve
              complex business problems.
            </p>

            <p>
              My work spans enterprise Generative AI,
              retrieval-augmented generation, multi-agent
              orchestration, machine learning, and production
              AI infrastructure. I enjoy taking AI solutions
              from initial requirements and experimentation
              through evaluation, deployment, monitoring,
              and continuous improvement.
            </p>

            <p>
              In my current role at Datadecor, supporting
              HCL Tech, I work on enterprise AI solutions
              involving knowledge retrieval, intelligent
              agents, secure integrations, and reliable
              production operations.
            </p>

            <p>
              Previously, at MindTree, my work focused
              on machine learning, natural language
              processing, model experimentation, and
              scalable inference systems.
            </p>

            <p>
              Alongside my professional engineering work,
              I am pursuing a PhD in Artificial Intelligence
              at the University of the Cumberlands,
              developing my interests in AI security,
              reliable intelligent systems, and applied research.
            </p>

          </div>

          <Link
            to="/experience"
            className="mt-8 inline-flex rounded-full bg-[#1764CF] px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
          >
            Explore My Experience →
          </Link>

        </div>

      </section>

      {/* Engineering Philosophy */}
      <section className="mx-auto max-w-7xl px-6 pb-20">

        <div className="rounded-3xl border border-emerald-100 bg-[#EFFAF5] px-8 py-12 sm:px-12">

          <p className="text-xs font-semibold uppercase tracking-widest text-emerald-700">
            My Engineering Philosophy
          </p>

          <blockquote className="mt-5 max-w-4xl text-xl font-medium leading-relaxed text-[#182848] sm:text-2xl">

            "Successful AI engineering is not just about
            choosing a capable model. It requires sound
            system design, trustworthy evaluation, security,
            operational reliability, and clear business value."

          </blockquote>

        </div>

      </section>

      {/* Technical Expertise */}
      <section className="border-y border-slate-100 bg-[#F8FBFF]">

        <div className="mx-auto max-w-7xl px-6 py-20">

          <p className="text-xs font-semibold uppercase tracking-widest text-blue-700">
            Core Expertise
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#182848]">
            What I specialize in
          </h2>

          <p className="mt-4 max-w-2xl text-slate-600">
            Combining AI research, practical engineering,
            and production system design.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">

            {expertise.map((item) => (

              <article
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-8 transition duration-300 hover:border-blue-200 hover:shadow-md"
              >

                <span className="text-sm font-semibold text-blue-600">
                  {item.number}
                </span>

                <h3 className="mt-4 text-xl font-bold text-[#182848]">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {item.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">

                  {item.skills.map((skill) => (

                    <span
                      key={skill}
                      className="rounded-full bg-blue-50 px-3 py-1.5 text-xs font-medium text-blue-700"
                    >
                      {skill}
                    </span>

                  ))}

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>

      {/* Education */}
      <section className="mx-auto max-w-7xl px-6 py-20">

        <p className="text-xs font-semibold uppercase tracking-widest text-blue-700">
          Academic Journey
        </p>

        <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#182848]">
          Education
        </h2>

        <div className="mt-10 space-y-6">

          {education.map((item) => (

            <article
              key={item.degree}
              className="rounded-2xl border border-slate-200 bg-white p-7 sm:p-8"
            >

              <div className="flex flex-wrap items-start justify-between gap-4">

                <div>

                  <h3 className="text-xl font-bold text-[#182848]">
                    {item.degree}
                  </h3>

                  <p className="mt-2 font-medium text-blue-700">
                    {item.university}
                  </p>

                  <p className="mt-2 text-sm text-slate-500">
                    {item.duration}
                  </p>

                </div>

                <span
                  className={`rounded-full px-4 py-1.5 text-xs font-medium ${
                    item.status === 'In Progress'
                      ? 'bg-blue-50 text-blue-700'
                      : 'bg-emerald-50 text-emerald-700'
                  }`}
                >
                  {item.status}
                </span>

              </div>

              <p className="mt-5 max-w-3xl text-sm leading-7 text-slate-600">
                {item.description}
              </p>

              {item.status === 'In Progress' && (

                <Link
                  to="/research"
                  className="mt-5 inline-flex text-sm font-semibold text-blue-700 hover:underline"
                >
                  Explore My PhD Work →
                </Link>

              )}

            </article>

          ))}

        </div>

      </section>

      {/* Contact CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-20">

        <div className="rounded-3xl bg-[#F2F8FF] px-8 py-12 text-center">

          <h2 className="text-3xl font-bold text-[#182848]">
            Let's build something meaningful.
          </h2>

          <p className="mx-auto mt-4 max-w-xl leading-7 text-slate-600">
            I'm interested in AI engineering, applied
            research, and opportunities to develop
            reliable intelligent systems.
          </p>

          <Link
            to="/contact"
            className="mt-6 inline-flex rounded-full bg-[#1764CF] px-7 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
          >
            Get in Touch →
          </Link>

        </div>

      </section>

    </div>
  )
}
