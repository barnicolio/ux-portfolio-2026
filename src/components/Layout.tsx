import { Outlet } from 'react-router-dom'
import Nav from './Nav'
import Footer from './Footer'
import PixelCrab from './PixelCrab'

function Layout() {
  return (
    <div className="flex min-h-svh flex-col">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-[var(--accent)] focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-[var(--bg)]"
      >
        Skip to content
      </a>
      <Nav />
      <div id="main-content" tabIndex={-1} className="flex-1">
        <Outlet />
      </div>
      <Footer />
      <PixelCrab />
    </div>
  )
}

export default Layout
