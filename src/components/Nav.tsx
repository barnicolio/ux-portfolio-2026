import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

const RESUME = '/Nicole_Arocha_Resume_2026.pdf'
const LINKEDIN = 'https://www.linkedin.com/in/nicolearocha/'

const linkClass = ({ isActive }: { isActive: boolean }) =>
  `rounded-md bg-black/5 px-3 py-1.5 text-sm transition-colors hover:text-[var(--text-h)] ${
    isActive ? 'text-[var(--text-h)]' : 'text-[var(--text)]'
  }`

const mobileLinkClass = ({ isActive }: { isActive: boolean }) =>
  `py-3 text-base transition-colors hover:text-[var(--text-h)] ${
    isActive ? 'text-[var(--text-h)]' : 'text-[var(--text)]'
  }`

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-5 w-5">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function Nav() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <header className="sticky top-0 z-40 bg-white/60 shadow-[0_4px_16px_rgba(0,0,0,0.08)] backdrop-blur-[8px] backdrop-saturate-150">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
        <NavLink
          to="/"
          className="whitespace-nowrap text-base font-medium text-[var(--text-h)]"
        >
          Nicole Arocha
        </NavLink>

        {/* Tablet / desktop nav (unchanged) */}
        <nav className="hidden items-center gap-5 md:flex">
          <NavLink to="/" end className={linkClass}>
            Work
          </NavLink>
          <NavLink to="/about" className={linkClass}>
            About
          </NavLink>
          <NavLink to="/contact" className={linkClass}>
            Contact
          </NavLink>
          <a
            href={RESUME}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md bg-black/5 px-3 py-1.5 text-sm text-[var(--text)] transition-colors hover:text-[var(--text-h)]"
          >
            Resume
            <span className="sr-only"> (opens in new tab)</span>
          </a>
          <a
            href={LINKEDIN}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn (opens in new tab)"
            className="text-[var(--text)] transition-colors hover:text-[var(--text-h)]"
          >
            <LinkedInIcon />
          </a>
        </nav>

        {/* Mobile menu toggle */}
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="-mr-1 inline-flex h-10 w-10 items-center justify-center rounded-md text-[var(--text-h)] md:hidden"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            aria-hidden="true"
            className="h-6 w-6"
          >
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {open && (
        <nav
          id="mobile-nav"
          className="border-t border-[var(--border)] md:hidden"
        >
          <div className="mx-auto flex max-w-4xl flex-col px-6 py-2">
            <NavLink to="/" end className={mobileLinkClass}>
              Work
            </NavLink>
            <NavLink to="/about" className={mobileLinkClass}>
              About
            </NavLink>
            <NavLink to="/contact" className={mobileLinkClass}>
              Contact
            </NavLink>
            <a
              href={RESUME}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="py-3 text-base text-[var(--text)] transition-colors hover:text-[var(--text-h)]"
            >
              Resume
              <span className="sr-only"> (opens in new tab)</span>
            </a>
            <a
              href={LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="py-3 text-base text-[var(--text)] transition-colors hover:text-[var(--text-h)]"
            >
              LinkedIn
              <span className="sr-only"> (opens in new tab)</span>
            </a>
          </div>
        </nav>
      )}
    </header>
  )
}

export default Nav
