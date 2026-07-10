function Footer() {
  return (
    <footer className="border-t border-[var(--border)]">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-3 px-6 py-8 text-sm text-[var(--text)] sm:flex-row sm:justify-between">
        <p>© {new Date().getFullYear()} Nicole Arocha</p>
        <div className="flex items-center gap-4">
          <a
            href="https://www.linkedin.com/in/nicolearocha/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--text-h)]"
          >
            LinkedIn
            <span className="sr-only"> (opens in new tab)</span>
          </a>
          <a
            href="/Nicole_Arocha_Resume_2026.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--text-h)]"
          >
            Resume
            <span className="sr-only"> (opens in new tab)</span>
          </a>
          <a href="mailto:nicole.arocha@gmail.com" className="hover:text-[var(--text-h)]">
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
