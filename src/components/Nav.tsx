import { NavLink } from 'react-router-dom'

const linkClass = ({ isActive }: { isActive: boolean }) =>
  `text-sm transition-colors hover:text-[var(--text-h)] ${
    isActive ? 'text-[var(--text-h)]' : 'text-[var(--text)]'
  }`

function Nav() {
  return (
    <header className="border-b border-[var(--border)]">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
        <NavLink to="/" className="text-base font-medium text-[var(--text-h)]">
          Nicole Arocha
        </NavLink>
        <nav className="flex items-center gap-5">
          <NavLink to="/" end className={linkClass}>
            Work
          </NavLink>
          <NavLink to="/about" className={linkClass}>
            About
          </NavLink>
          <a
            href="/Nicole_Arocha_Resume_2026.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[var(--text)] transition-colors hover:text-[var(--text-h)]"
          >
            Resume
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Nav
