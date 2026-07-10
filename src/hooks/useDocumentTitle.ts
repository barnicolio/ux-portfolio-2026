import { useEffect } from 'react'

/** Sets the document title for the current route (WCAG 2.4.2, Page Titled). */
export function useDocumentTitle(title: string) {
  useEffect(() => {
    document.title = title
  }, [title])
}
