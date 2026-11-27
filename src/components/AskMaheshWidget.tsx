
import { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import AskMaheshChat from '../pages/AskMaheshChat'

export default function AskMaheshWidget() {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const launcherRef = useRef<HTMLButtonElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)

  const isChatPage = location.pathname === '/ask-mahesh'

  useEffect(() => {
    if (!open || isChatPage) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    closeRef.current?.focus()

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setOpen(false)
        return
      }

      if (event.key !== 'Tab') return

      const panel = panelRef.current
      if (!panel) return

      const focusable = Array.from(
        panel.querySelectorAll<HTMLElement>(
          'button:not(:disabled), input:not(:disabled), a[href], [tabindex]:not([tabindex="-1"])'
        )
      ).filter(element => element.getClientRects().length > 0)

      if (focusable.length === 0) {
        event.preventDefault()
        panel.focus()
        return
      }

      const first = focusable[0]
      const last = focusable[focusable.length - 1]

      if (
        event.shiftKey &&
        (document.activeElement === first ||
          !panel.contains(document.activeElement))
      ) {
        event.preventDefault()
        last?.focus()
      } else if (
        !event.shiftKey &&
        (document.activeElement === last ||
          !panel.contains(document.activeElement))
      ) {
        event.preventDefault()
        first?.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [open, isChatPage])

  useEffect(() => {
    if (!open) {
      launcherRef.current?.focus()
    }
  }, [open])

  useEffect(() => {
    if (isChatPage) {
      setOpen(false)
    }
  }, [isChatPage])

  if (isChatPage) return null

  return (
    <>
      {!open && (
        <button
          ref={launcherRef}
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Open Ask Mahesh AI"
          aria-haspopup="dialog"
          className="fixed bottom-[calc(1rem+env(safe-area-inset-bottom))] right-4 z-40 flex items-center gap-2 rounded-full bg-blue-700 px-4 py-3 font-semibold text-white shadow-xl transition hover:bg-blue-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700 sm:bottom-6 sm:right-6"
        >
          <span
            aria-hidden="true"
            className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-sm"
          >
            AI
          </span>
          <span className="text-sm">Ask Mahesh AI</span>
        </button>
      )}

      {open && (
        <>
          <div
            className="fixed inset-0 z-40 bg-slate-950/30 sm:bg-slate-950/10"
            aria-hidden="true"
            onClick={() => setOpen(false)}
          />

          <div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-label="Ask Mahesh AI"
            tabIndex={-1}
            className="fixed inset-x-3 bottom-[max(12px,env(safe-area-inset-bottom))] top-[max(12px,env(safe-area-inset-top))] z-50 flex min-h-0 flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl sm:inset-auto sm:bottom-6 sm:right-6 sm:h-[min(680px,calc(100dvh-3rem))] sm:w-[420px] sm:rounded-3xl"
          >
            <button
              ref={closeRef}
              type="button"
              className="sr-only"
              onClick={() => setOpen(false)}
            >
              Close chat
            </button>

            <AskMaheshChat
              embedded
              onClose={() => setOpen(false)}
            />
          </div>
        </>
      )}
    </>
  )
}
