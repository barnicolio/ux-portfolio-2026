function Footer() {
  return (
    <footer className="border-t border-[var(--border)]">
      <div className="mx-auto max-w-4xl px-6 py-8 text-center text-sm text-[var(--text)]">
        <p>© {new Date().getFullYear()} Nicole Arocha</p>
      </div>
    </footer>
  )
}

export default Footer
