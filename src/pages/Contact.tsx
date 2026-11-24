
import { Link } from 'react-router-dom'

const contactMethods = [
  {
    title: 'Email',
    value: 'maheshjadhavai79@gmail.com',
    href: 'mailto:maheshjadhavai79@gmail.com',
    description: 'For professional inquiries and collaboration.',
    icon: '✉',
  },
  {
    title: 'LinkedIn',
    value: 'linkedin.com/in/maheshjadhav-ai',
    href: 'https://linkedin.com/in/maheshjadhav-ai',
    description: 'Connect with me professionally.',
    icon: 'in',
  },
  {
    title: 'GitHub',
    value: 'github.com/mahesh15698',
    href: 'https://github.com/mahesh15698',
    description: 'Explore my repositories and projects.',
    icon: '</>',
  },
]

export default function Contact() {
  return (
    <div className="bg-white">

      {/* Page Introduction */}
      <section className="bg-gradient-to-br from-white via-[#F2F8FF] to-[#EFFAF5]">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">

          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
            Get in Touch
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight text-[#182848] sm:text-5xl">
            Let's Connect.
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            I'm always interested in conversations about
            AI engineering, applied research, and
            opportunities to build impactful intelligent systems.
          </p>

        </div>
      </section>

      {/* Contact Information */}
      <section className="mx-auto max-w-6xl px-6 py-20">

        <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr]">

          <div>

            <h2 className="text-2xl font-bold text-[#182848]">
              Ways to Reach Me
            </h2>

            <p className="mt-3 leading-7 text-slate-600">
              Whether you have a project idea, a professional
              opportunity, or an academic research question,
              feel free to reach out.
            </p>

            <div className="mt-10 space-y-4">

              {contactMethods.map((method) => (

                <a
                  key={method.title}
                  href={method.href}
                  target={method.title === 'Email' ? undefined : '_blank'}
                  rel={method.title === 'Email' ? undefined : 'noopener noreferrer'}
                  className="group flex items-center gap-5 rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-blue-200 hover:shadow-md"
                >

                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#EAF3FF] text-xl font-bold text-[#1764CF]">
                    {method.icon}
                  </div>

                  <div className="min-w-0 flex-1">

                    <h3 className="font-bold text-[#182848]">
                      {method.title}
                    </h3>

                    <p className="mt-1 break-all text-sm font-medium text-blue-700">
                      {method.value}
                    </p>

                    <p className="mt-2 text-xs text-slate-500">
                      {method.description}
                    </p>

                  </div>

                  <span className="text-lg text-blue-600 transition group-hover:translate-x-1">
                    ↗
                  </span>

                </a>

              ))}

            </div>

          </div>

          {/* Collaboration Panel */}
          <div className="rounded-3xl border border-emerald-100 bg-gradient-to-br from-[#F2F8FF] to-[#EFFAF5] p-8 sm:p-10">

            <p className="text-xs font-semibold uppercase tracking-widest text-emerald-700">
              Let's Collaborate
            </p>

            <h2 className="mt-5 text-3xl font-bold leading-tight text-[#182848]">
              Building reliable AI starts with meaningful conversations.
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              My interests include enterprise Generative AI,
              agentic systems, LLM evaluation, production AI
              engineering, and applied research.
            </p>

            <a
              href="mailto:maheshjadhavai79@gmail.com?subject=AI%20Engineering%20Inquiry"
              className="mt-8 inline-flex rounded-full bg-[#1764CF] px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
            >
              Send Me an Email →
            </a>

            <div className="mt-10 border-t border-emerald-100 pt-6">

              <p className="text-sm font-medium text-[#182848]">
                Location
              </p>

              <p className="mt-2 text-sm text-slate-600">
                Jersey City, New Jersey, USA
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* Explore Portfolio */}
      <section className="mx-auto max-w-6xl px-6 pb-20">

        <div className="rounded-3xl bg-[#F8FBFF] px-8 py-12 text-center">

          <h2 className="text-2xl font-bold text-[#182848]">
            Explore My Work
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-600">
            Learn more about my engineering experience,
            AI projects, and doctoral research.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-3">

            <Link
              to="/projects"
              className="rounded-full bg-[#1764CF] px-6 py-3 text-sm font-semibold text-white"
            >
              AI Projects →
            </Link>

            <Link
              to="/research"
              className="rounded-full border border-blue-200 bg-white px-6 py-3 text-sm font-semibold text-blue-700"
            >
              PhD Research →
            </Link>

          </div>

        </div>

      </section>

    </div>
  )
}
