import { useState } from 'react'
import type { FormEvent } from 'react'
import { useDocumentTitle } from '../hooks/useDocumentTitle'

const WEB3FORMS_KEY = 'e5ee5723-48cc-410b-8489-6b7231b9fd49'

type Status = 'idle' | 'submitting' | 'success' | 'error'

const fieldClass =
  'w-full rounded-lg border border-[var(--border)] bg-transparent px-3 py-2 text-[var(--text-h)] placeholder:text-[var(--text)] focus:border-[var(--accent-border)] disabled:opacity-60'

function Contact() {
  useDocumentTitle('Contact · Nicole Arocha')

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<Status>('idle')

  const submitting = status === 'submitting'

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus('submitting')
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `Portfolio inquiry from ${name}`,
          from_name: name,
          name,
          email,
          message,
        }),
      })
      const data = await response.json()
      if (data.success) {
        setStatus('success')
        setName('')
        setEmail('')
        setMessage('')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <main className="mx-auto max-w-2xl px-6 py-12 sm:py-16">
      <h1 className="text-3xl tracking-tight text-[var(--text-h)] sm:text-4xl">
        Contact
      </h1>
      <p className="mt-4 text-[var(--text)]">
        Have a project, role, or question in mind? Send me a note and I’ll get
        back to you.
      </p>

      <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-sm text-[var(--text)]">
            Name
          </label>
          <input
            id="name"
            type="text"
            required
            disabled={submitting}
            value={name}
            onChange={(event) => setName(event.target.value)}
            className={fieldClass}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm text-[var(--text)]">
            Email
          </label>
          <input
            id="email"
            type="email"
            required
            disabled={submitting}
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className={fieldClass}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="message" className="text-sm text-[var(--text)]">
            Message
          </label>
          <textarea
            id="message"
            required
            rows={6}
            disabled={submitting}
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            className={`${fieldClass} resize-y`}
          />
        </div>

        {/* Honeypot field for spam bots, hidden from real users */}
        <input
          type="checkbox"
          name="botcheck"
          tabIndex={-1}
          autoComplete="off"
          className="hidden"
          aria-hidden="true"
        />

        <div className="flex flex-wrap items-center gap-4">
          <button
            type="submit"
            disabled={submitting}
            className="rounded-full border border-[var(--accent-border)] bg-[var(--accent-bg)] px-5 py-2 text-sm text-[var(--accent)] transition-colors hover:bg-[var(--accent-border)] hover:text-[var(--bg)] disabled:opacity-60"
          >
            {submitting ? 'Sending…' : 'Send message'}
          </button>
        </div>

        <p role="status" aria-live="polite" className="text-sm text-[var(--text)]">
          {status === 'success' && (
            <span className="text-[var(--accent)]">
              Thanks! Your message is on its way.
            </span>
          )}
          {status === 'error' && (
            <>Something went wrong sending your message. Please try again.</>
          )}
        </p>
      </form>
    </main>
  )
}

export default Contact
