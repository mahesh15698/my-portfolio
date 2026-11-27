
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

type AskMaheshChatProps = {
  embedded?: boolean
  onClose?: () => void
}

const API_URL = import.meta.env.DEV
  ? 'http://127.0.0.1:8787/api/chat'
  : 'https://ask-mahesh-ai-api.maheshjadhav7979.workers.dev/api/chat'

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

export default function AskMaheshChat({
  embedded = false,
  onClose,
}: AskMaheshChatProps) {
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

  useEffect(() => {
    const element = scrollRef.current

    if (element) {
      element.scrollTop = element.scrollHeight
    }
  }, [messages, loading, error])

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
            'Too many requests. Please try again shortly.'
          )
        }

        if (response.status === 503) {
          throw new Error(
            'The assistant is temporarily unavailable.'
          )
        }

        throw new Error(
          `Request failed (HTTP ${response.status}).`
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
        throw new Error(
          'The assistant returned an unexpected response.'
        )
      }

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
          ? 'Cannot connect to Ask Mahesh AI. Please try again.'
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
    <main
      className={
        embedded
          ? 'flex h-full min-h-0 w-full flex-col overflow-hidden bg-white'
          : 'mx-auto w-full max-w-5xl px-3 py-6 sm:px-6 sm:py-10'
      }
    >
      {!embedded && (
        <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-700">
              PROFESSIONAL AI ASSISTANT
            </p>

            <h1 className="mt-2 text-3xl font-bold text-[#182848] sm:text-4xl">
              Ask Mahesh AI
            </h1>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">
              Ask about professional experience, AI skills,
              projects, education, and achievements.
            </p>
          </div>

          <button
            type="button"
            onClick={newChat}
            className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100"
          >
            + New Chat
          </button>
        </div>
      )}

      <section
        aria-label="Ask Mahesh AI conversation"
        className={
          embedded
            ? 'flex min-h-0 flex-1 flex-col overflow-hidden bg-white'
            : 'flex h-[min(72dvh,680px)] min-h-[420px] flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm sm:rounded-3xl'
        }
      >
        <div className="flex shrink-0 items-center justify-between gap-2 border-b border-slate-200 px-4 py-3">
          <div className="flex min-w-0 items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-700">
              MJ
            </div>

            <div className="min-w-0">
              <p className="text-sm font-bold text-[#182848]">
                Ask Mahesh AI
              </p>

              <p className="text-xs text-slate-500">
                Professional portfolio assistant
              </p>
            </div>
          </div>

          {embedded ? (
            <div className="flex shrink-0 items-center gap-1">
              <button
                type="button"
                onClick={newChat}
                aria-label="Start a new chat"
                title="New Chat"
                className="rounded-lg px-2 py-2 text-xs font-semibold text-blue-700 hover:bg-blue-50"
              >
                New
              </button>

              <button
                type="button"
                onClick={onClose}
                aria-label="Close Ask Mahesh AI"
                className="rounded-lg p-2 text-slate-600 hover:bg-slate-100"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  aria-hidden="true"
                >
                  <path d="M18 6 6 18M6 6l12 12" />
                </svg>
              </button>
            </div>
          ) : (
            <span className="shrink-0 rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
              AI Assistant
            </span>
          )}
        </div>

        <div
          ref={scrollRef}
          role="log"
          aria-label="Conversation messages"
          aria-live="polite"
          className="min-h-0 flex-1 space-y-4 overflow-y-auto overscroll-contain p-3 sm:p-4"
        >
          {messages.length === 0 && (
            <div className="mx-auto max-w-lg py-4 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-lg font-bold text-blue-700">
                AI
              </div>

              <h2 className="mt-4 text-base font-bold text-[#182848]">
                What would you like to know?
              </h2>

              <p className="mt-2 text-xs leading-5 text-slate-600">
                Choose a question or ask your own.
              </p>

              <div className="mt-5 grid grid-cols-1 gap-2 min-[370px]:grid-cols-2">
                {STARTERS.map(question => (
                  <button
                    key={question}
                    type="button"
                    disabled={loading}
                    onClick={() => void sendMessage(question)}
                    className="rounded-xl border border-blue-100 bg-blue-50 px-3 py-3 text-left text-xs leading-5 text-blue-800 transition hover:border-blue-300 hover:bg-blue-100 disabled:opacity-50"
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
                  ? 'ml-auto w-fit max-w-[90%] rounded-2xl rounded-br-md bg-blue-700 p-3 text-white'
                  : 'mr-auto w-fit max-w-[95%] rounded-2xl rounded-bl-md bg-slate-100 p-3 text-slate-800'
              }
            >
              <p className="whitespace-pre-wrap break-words text-sm leading-6">
                {message.content}
              </p>

              {message.sources && message.sources.length > 0 && (
                <div className="mt-3 border-t border-slate-200 pt-3">
                  <p className="mb-2 text-xs font-semibold text-slate-500">
                    Portfolio Sources
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {message.sources.map(source => {
                      const url = safeSourceUrl(source.url)

                      return url ? (
                        <a
                          key={source.id}
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="break-words text-xs font-medium text-blue-700 underline underline-offset-2 hover:text-blue-900"
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
              className="mr-auto w-fit rounded-2xl bg-slate-100 px-4 py-3 text-sm text-slate-600"
            >
              Finding approved information...
            </div>
          )}
        </div>

        <div className="shrink-0 border-t border-slate-200 bg-white p-3">
          {error && (
            <div
              role="alert"
              className="mb-3 rounded-xl bg-red-50 p-3 text-xs text-red-700"
            >
              <p>{error}</p>

              <button
                type="button"
                onClick={() => setError('')}
                className="mt-2 font-semibold underline"
              >
                Dismiss
              </button>
            </div>
          )}

          <form
            onSubmit={handleSubmit}
            className="flex min-w-0 items-center gap-2"
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
              className="min-w-0 flex-1 rounded-xl border border-slate-300 px-3 py-3 text-base outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 disabled:bg-slate-50"
            />

            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="shrink-0 rounded-xl bg-blue-700 px-4 py-3 text-sm font-semibold text-white hover:bg-blue-800 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {loading ? '...' : 'Send'}
            </button>
          </form>

          <div className="mt-2 flex items-center justify-between gap-2 text-[11px] text-slate-500">
            <p className="leading-4">
              Approved professional information only.
            </p>

            <span className="shrink-0 tabular-nums">
              {input.length}/{MAX_MESSAGE_LENGTH}
            </span>
          </div>
        </div>
      </section>
    </main>
  )
}
