
import { Link } from 'react-router-dom'

const experiences = [
  {
    id: 'datadecor',
    role: 'AI Engineer',
    company: 'Datadecor | Client: HCL Tech',
    location: 'Jersey City, New Jersey, USA',
    duration: 'Dec 2023 – Present',
    current: true,

    summary:
      'Designing, developing, and deploying enterprise-scale Generative AI, retrieval-augmented generation, and multi-agent systems with a strong focus on security, evaluation, reliability, and measurable business impact.',

    metrics: [
      {
        value: '120K+',
        label: 'Documents indexed',
      },
      {
        value: '1,200+',
        label: 'Users supported',
      },
      {
        value: '2,500+',
        label: 'Daily AI queries',
      },
    ],

    contributions: [
      {
        title: 'Enterprise AI Knowledge Assistant',
        description:
          'Architected an enterprise knowledge assistant using Azure AI Foundry, Azure OpenAI, Azure AI Search, LangGraph, and FastAPI, supporting research, document review, and service operations.',
      },
      {
        title: 'Retrieval-Augmented Generation',
        description:
          'Built a secure RAG pipeline across more than 120,000 enterprise documents using hybrid retrieval, semantic ranking, metadata filtering, reranking, and citations. Reduced research time from 18 minutes to under 6 minutes and achieved approximately 89% correctness on a human-reviewed evaluation set.',
      },
      {
        title: 'Agentic AI & Workflow Automation',
        description:
          'Developed eight production AI agents using LangGraph and LangChain DeepAgents, coordinating document retrieval, comparison, summarization, validation, calculations, API execution, and human-review checkpoints. Reduced triage time from 25 to 8 minutes across 14 business tools.',
      },
      {
        title: 'Model Context Protocol (MCP)',
        description:
          'Built an MCP server exposing standardized retrieval, validation, and response tools, allowing external agents and enterprise applications to integrate with AI capabilities.',
      },
      {
        title: 'AI Security & Evaluation',
        description:
          'Designed enterprise security and evaluation controls using Microsoft Entra ID, managed identities, RBAC, Key Vault, private endpoints, and document-level permissions. Established more than 1,200 regression cases covering groundedness, relevance, citations, safety, prompt injection, and data leakage.',
      },
      {
        title: 'Production Deployment & Optimization',
        description:
          'Managed containerized FastAPI agent services using Azure Container Apps, API Management, Azure DevOps, Application Insights, and OpenTelemetry. Reduced p95 latency from 11.6 seconds to 6.8 seconds and lowered monthly model costs by more than $4,000.',
      },
    ],

    technologies: [
      'Python',
      'Azure AI Foundry',
      'Azure OpenAI',
      'Azure AI Search',
      'LangGraph',
      'LangChain',
      'DeepAgents',
      'MCP',
      'FastAPI',
      'Docker',
      'Azure Container Apps',
      'Azure DevOps',
      'OpenTelemetry',
      'Application Insights',
    ],
  },

  {
    id: 'mindtree',
    role: 'AI/ML Engineer',
    company: 'MindTree',
    location: 'India',
    duration: 'Jan 2020 – Jul 2022',
    current: false,

    summary:
      'Developed machine learning and natural language processing solutions, established reproducible experimentation workflows, and deployed scalable inference services for business applications.',

    metrics: [
      {
        value: '8M+',
        label: 'Business records',
      },
      {
        value: '350K+',
        label: 'Documents processed',
      },
      {
        value: '1M+',
        label: 'Monthly predictions',
      },
    ],

    contributions: [
      {
        title: 'Applied Machine Learning',
        description:
          'Developed classification, forecasting, anomaly detection, and recommendation solutions using Python, Scikit-learn, XGBoost, LightGBM, TensorFlow, and PyTorch across datasets containing more than eight million business records.',
      },
      {
        title: 'Natural Language Processing',
        description:
          'Built document classification and information extraction pipelines using BERT, Hugging Face Transformers, spaCy, and rule-based validation. Processed more than 350,000 documents across 12 business categories and reduced manual review effort by over 1,000 hours annually.',
      },
      {
        title: 'ML Experimentation & Reproducibility',
        description:
          'Established reproducible experimentation and model-release workflows using MLflow, DVC, Git, and Docker. Tracked more than 40 model experiments and reduced release preparation from five working days to two days.',
      },
      {
        title: 'Model Deployment & Monitoring',
        description:
          'Deployed batch and real-time inference services using AWS SageMaker, GCP Vertex AI, REST APIs, and Docker, supporting more than one million monthly predictions with monitoring for drift, latency, failed requests, and data-quality exceptions.',
      },
    ],

    technologies: [
      'Python',
      'Scikit-learn',
      'XGBoost',
      'LightGBM',
      'PyTorch',
      'TensorFlow',
      'BERT',
      'Hugging Face',
      'spaCy',
      'MLflow',
      'DVC',
      'Docker',
      'AWS SageMaker',
      'GCP Vertex AI',
    ],
  },
]

export default function Experience() {
  return (
    <div>

      {/* Page Introduction */}
      <section className="bg-gradient-to-br from-white via-[#F2F8FF] to-[#EFFAF5]">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20">

          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
            My Professional Journey
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight text-[#182848] sm:text-5xl">
            Professional Experience
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            From machine learning foundations to
            enterprise-scale intelligent systems.
            Building AI solutions that deliver
            measurable business value.
          </p>

        </div>
      </section>

      {/* Experience Timeline */}
      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20">

        <div className="relative space-y-12 border-l-2 border-blue-100 pl-6 sm:pl-10">

          {experiences.map((experience) => (

            <article
              key={experience.id}
              className="relative rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-10"
            >

              {/* Timeline Marker */}
              <div className="absolute -left-[37px] top-10 h-5 w-5 rounded-full border-4 border-white bg-[#1764CF] ring-2 ring-blue-100 sm:-left-[53px]" />

              {/* Company Header */}
              <div className="flex flex-wrap items-start justify-between gap-4">

                <div>

                  <p className="text-xs font-semibold uppercase tracking-wider text-blue-700">
                    {experience.duration}
                  </p>

                  <h2 className="mt-3 text-2xl font-bold text-[#182848] sm:text-3xl">
                    {experience.role}
                  </h2>

                  <p className="mt-2 text-lg font-semibold text-[#1764CF]">
                    {experience.company}
                  </p>

                  <p className="mt-2 text-sm text-slate-500">
                    {experience.location}
                  </p>

                </div>

                {experience.current && (

                  <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-xs font-medium text-emerald-700">

                    <span className="h-2 w-2 rounded-full bg-emerald-500" />

                    Current Role

                  </span>

                )}

              </div>

              {/* Role Summary */}
              <p className="mt-6 max-w-4xl leading-8 text-slate-600">
                {experience.summary}
              </p>

              {/* Engineering Metrics */}
              <div className="mt-8 grid gap-4 sm:grid-cols-3">

                {experience.metrics.map((metric) => (

                  <div
                    key={metric.label}
                    className="rounded-2xl bg-[#F2F8FF] p-5"
                  >

                    <p className="text-3xl font-bold tracking-tight text-[#182848]">
                      {metric.value}
                    </p>

                    <p className="mt-2 text-sm text-slate-600">
                      {metric.label}
                    </p>

                  </div>

                ))}

              </div>

              {/* Key Contributions */}
              <div className="mt-10">

                <h3 className="text-xl font-bold text-[#182848]">
                  Key Contributions
                </h3>

                <div className="mt-6 space-y-6">

                  {experience.contributions.map((item) => (

                    <div
                      key={item.title}
                      className="flex items-start gap-4"
                    >

                      <div className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-blue-500" />

                      <div>

                        <h4 className="font-semibold text-[#182848]">
                          {item.title}
                        </h4>

                        <p className="mt-2 text-sm leading-7 text-slate-600">
                          {item.description}
                        </p>

                      </div>

                    </div>

                  ))}

                </div>

              </div>

              {/* Technical Expertise */}
              <div className="mt-10 border-t border-slate-100 pt-8">

                <h3 className="text-lg font-bold text-[#182848]">
                  Technologies & Tools
                </h3>

                <div className="mt-5 flex flex-wrap gap-2">

                  {experience.technologies.map((technology) => (

                    <span
                      key={technology}
                      className="rounded-full border border-blue-100 bg-blue-50 px-3.5 py-2 text-xs font-medium text-blue-700"
                    >

                      {technology}

                    </span>

                  ))}

                </div>

              </div>

            </article>

          ))}

        </div>

      </section>

      {/* Project CTA */}
      <section className="mx-auto max-w-6xl px-6 pb-20">

        <div className="rounded-3xl border border-emerald-100 bg-gradient-to-br from-[#F2F8FF] to-[#EFFAF5] px-8 py-12 text-center">

          <h2 className="text-3xl font-bold text-[#182848]">
            Explore the work behind the experience.
          </h2>

          <p className="mx-auto mt-4 max-w-xl leading-7 text-slate-600">
            Discover my AI engineering projects,
            system architectures, implementation
            decisions, and evaluation approaches.
          </p>

          <Link
            to="/projects"
            className="mt-7 inline-flex rounded-full bg-[#1764CF] px-7 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
          >
            Explore My Projects →
          </Link>

        </div>

      </section>

    </div>
  )
}
