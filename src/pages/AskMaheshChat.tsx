
import {
  useEffect,
  useRef,
  useState,
  type FormEvent,
} from 'react'

type Source = {
  id: string
  title: string
  url: string
}

type ChatResponse = {
  decision: string
  answer: string
  sources: Source[]
}

type Message = {
  id: number
  role: 'user' | 'assistant'
  content: string
  sources?: Source[]
}

const API_URL = import.meta.env.DEV
  ? "http://127.0.0.1:8787/api/chat"
  : "https://ask-mahesh-ai-api.maheshjadhav7979.workers.dev/api/chat";
const MAX_MESSAGE_LENGTH = 500
const MAX_HISTORY = 4

const STARTERS = [
  'Tell me about Mahesh',
  'What is his role at Datadecor?',
  'What AI frameworks does he know?',
  'What projects has he worked on?',
]

function safeSourceUrl(value: string): string | null {
  try {
    const url = new URL(value)

    const allowedRoutes = new Set([
      '#/',
      '#/about',
      '#/experience',
      '#/projects',
      '#/contact',
    ])

    if (
      url.protocol === 'https:' &&
      url.hostname === 'mahesh15698.github.io' &&
      url.pathname === '/my-portfolio/' &&
      !url.username &&
      !url.password &&
      allowedRoutes.has(url.hash)
    ) {
      return url.href
    }
  } catch {
    return null
  }

  return null
}

export default function AskMaheshChat() {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const scrollRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const abortRef = useRef<AbortController | null>(null)
  const busyRef = useRef(false)
  const requestIdRef = useRef(0)
  const messageIdRef = useRef(0)

  // Scroll to the latest message.
  useEffect(() => {
    const element = scrollRef.current

    if (element) {
      element.scrollTop = element.scrollHeight
    }
  }, [messages, loading, error])

  // Cancel unfinished work if the page is unmounted.
  useEffect(() => {
    return () => {
      requestIdRef.current += 1
      abortRef.current?.abort()
    }
  }, [])

  function nextMessageId(): number {
    messageIdRef.current += 1
    return messageIdRef.current
  }

  function newChat() {
    requestIdRef.current += 1

    abortRef.current?.abort()
    abortRef.current = null
    busyRef.current = false

    setMessages([])
    setInput('')
    setError('')
    setLoading(false)

    inputRef.current?.focus()
  }

  async function sendMessage(value: string) {
    const question = value.trim()

    if (
      !question ||
      question.length > MAX_MESSAGE_LENGTH ||
      busyRef.current
    ) {
      return
    }

    busyRef.current = true

    const requestId = ++requestIdRef.current
    const controller = new AbortController()

    abortRef.current = controller

    // Only prior user questions are sent as context.
    const history = messages
      .filter(message => message.role === 'user')
      .map(message => message.content)
      .slice(-MAX_HISTORY)

    setMessages(previous => [
      ...previous,
      {
        id: nextMessageId(),
        role: 'user',
        content: question,
      },
    ])

    setInput('')
    setError('')
    setLoading(true)

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        signal: controller.signal,
        body: JSON.stringify({
          message: question,
          history,
        }),
      })

      if (!response.ok) {
        if (response.status === 429) {
          throw new Error(
            'The chatbot is receiving too many requests. Please try again shortly.'
          )
        }

        if (response.status === 503) {
          throw new Error(
            'The chatbot is temporarily unavailable. Please try again.'
          )
        }

        throw new Error(
          `Unable to process your question (HTTP ${response.status}).`
        )
      }

      const data: unknown = await response.json()

      if (
        typeof data !== 'object' ||
        data === null ||
        !('answer' in data) ||
        !('sources' in data) ||
        typeof data.answer !== 'string' ||
        !Array.isArray(data.sources)
      ) {
        throw new Error('The chatbot returned an unexpected response.')
      }

      // Ignore replies from cancelled or older requests.
      if (requestId !== requestIdRef.current) {
        return
      }

      const result = data as ChatResponse

      const sources = result.sources.filter(
        (source): source is Source =>
          typeof source === 'object' &&
          source !== null &&
          typeof source.id === 'string' &&
          typeof source.title === 'string' &&
          typeof source.url === 'string' &&
          safeSourceUrl(source.url) !== null
      )

      setMessages(previous => [
        ...previous,
        {
          id: nextMessageId(),
          role: 'assistant',
          content: result.answer,
          sources,
        },
      ])
    } catch (cause) {
      if (requestId !== requestIdRef.current) {
        return
      }

      if (
        cause instanceof Error &&
        cause.name === 'AbortError'
      ) {
        return
      }

      setError(
        cause instanceof TypeError
          ? 'Cannot connect to the local API. Check that Wrangler is running on port 8787.'
          : cause instanceof Error
            ? cause.message
            : 'Something went wrong. Please try again.'
      )
    } finally {
      if (requestId === requestIdRef.current) {
        abortRef.current = null
        busyRef.current = false
        setLoading(false)
      }
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    void sendMessage(input)
  }

  return (
    <main className="mx-auto w-full max-w-5xl px-3 py-6 sm:px-6 sm:py-10">
      <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-blue-700">
            PROFESSIONAL AI ASSISTANT
          </p>

          <h1 className="mt-2 text-3xl font-bold text-[#182848] sm:text-4xl">
            Ask Mahesh AI
          </h1>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
            Ask about professional experience, AI skills,
            projects, education, and career achievements.
          </p>
        </div>

        <button
          type="button"
          onClick={newChat}
          className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
        >
          + New Chat
        </button>
      </div>

      <section
        aria-label="Ask Mahesh AI conversation"
        className="flex h-[min(72dvh,680px)] min-h-[420px] flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm sm:rounded-3xl"
      >
        <div className="flex items-center justify-between border-b border-slate-100 px-4 py-3 sm:px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-700">
              MJ
            </div>

            <div>
              <p className="text-sm font-semibold text-[#182848]">
                Ask Mahesh AI
              </p>

              <p className="text-xs text-slate-500">
                Approved professional knowledge
              </p>
            </div>
          </div>

          <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
            Ask Me Anything
          </span>
        </div>

        <div
          ref={scrollRef}
          role="log"
          aria-label="Conversation messages"
          aria-live="polite"
          className="min-h-0 flex-1 space-y-5 overflow-y-auto overscroll-contain p-4 sm:p-6"
        >
          {messages.length === 0 && (
            <div className="mx-auto max-w-2xl py-6 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-xl font-bold text-blue-700">
                AI
              </div>

              <h2 className="mt-5 text-xl font-bold text-[#182848]">
                Welcome! What would you like to know?
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Choose a suggested question or type your own.
              </p>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {STARTERS.map(question => (
                  <button
                    key={question}
                    type="button"
                    disabled={loading}
                    onClick={() => void sendMessage(question)}
                    className="rounded-xl border border-blue-100 bg-blue-50 px-4 py-4 text-left text-sm text-blue-800 transition hover:border-blue-300 hover:bg-blue-100 disabled:opacity-50"
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>
          )}

          {messages.map(message => (
            <div
              key={message.id}
              className={
                message.role === 'user'
                  ? 'ml-auto max-w-[90%] rounded-2xl rounded-br-md bg-blue-700 p-4 text-white sm:max-w-[80%]'
                  : 'mr-auto max-w-[95%] rounded-2xl rounded-bl-md bg-slate-100 p-4 text-slate-800 sm:max-w-[85%]'
              }
            >
              <p className="whitespace-pre-wrap break-words text-sm leading-7">
                {message.content}
              </p>

              {message.sources && message.sources.length > 0 && (
                <div className="mt-4 border-t border-slate-200 pt-3">
                  <p className="mb-2 text-xs font-semibold text-slate-500">
                    Portfolio Sources
                  </p>

                  <div className="flex flex-wrap gap-3">
                    {message.sources.map(source => {
                      const url = safeSourceUrl(source.url)

                      return url ? (
                        <a
                          key={source.id}
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-medium text-blue-700 underline underline-offset-2 hover:text-blue-900"
                        >
                          {source.title}
                        </a>
                      ) : null
                    })}
                  </div>
                </div>
              )}
            </div>
          ))}

          {loading && (
            <div
              role="status"
              className="mr-auto max-w-[90%] rounded-2xl bg-slate-100 px-4 py-3 text-sm text-slate-600"
            >
              Looking up approved information...
            </div>
          )}
        </div>

        <div className="border-t border-slate-200 bg-white p-3 sm:p-5">
          {error && (
            <div
              role="alert"
              className="mb-3 flex flex-wrap items-center justify-between gap-2 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700"
            >
              <span>{error}</span>

              <button
                type="button"
                disabled={loading}
                onClick={() => setError('')}
                className="font-semibold underline"
              >
                Dismiss
              </button>
            </div>
          )}

          <form
            onSubmit={handleSubmit}
            className="flex items-center gap-2 sm:gap-3"
          >
            <input
              ref={inputRef}
              type="text"
              value={input}
              maxLength={MAX_MESSAGE_LENGTH}
              onChange={event => setInput(event.target.value)}
              placeholder="Ask a question..."
              aria-label="Ask a question"
              disabled={loading}
              className="min-w-0 flex-1 rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100 disabled:bg-slate-50"
            />

            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="rounded-xl bg-blue-700 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-800 disabled:cursor-not-allowed disabled:opacity-50 sm:px-6"
            >
              {loading ? 'Sending...' : 'Send'}
            </button>
          </form>

          <div className="mt-3 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500">
            <p>
              Public professional summaries only.
              Detailed discussions require an interview.
            </p>

            <span>{input.length}/{MAX_MESSAGE_LENGTH}</span>
          </div>
        </div>
      </section>
    </main>
  )
}
