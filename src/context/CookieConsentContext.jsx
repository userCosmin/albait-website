import { createContext, useContext, useState, useEffect, useCallback } from 'react'

const STORAGE_KEY = 'albait_cookie_consent'

// Possible values:
//   null        — user hasn't decided yet (show banner)
//   'all'       — user accepted all cookies
//   'necessary' — user accepted only strictly necessary cookies

const CookieConsentContext = createContext(null)

export function CookieConsentProvider({ children }) {
  const [consent, setConsent] = useState(null) // null = not loaded yet
  const [loaded, setLoaded] = useState(false)

  // Load saved choice on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (saved === 'all' || saved === 'necessary') {
        setConsent(saved)
      } else {
        setConsent(undefined) // undefined = banner should show
      }
    } catch {
      setConsent(undefined)
    }
    setLoaded(true)
  }, [])

  const acceptAll = useCallback(() => {
    try { localStorage.setItem(STORAGE_KEY, 'all') } catch {}
    setConsent('all')
  }, [])

  const acceptNecessary = useCallback(() => {
    try { localStorage.setItem(STORAGE_KEY, 'necessary') } catch {}
    setConsent('necessary')
  }, [])

  // Call this to re-show the banner (e.g. from footer link)
  const resetConsent = useCallback(() => {
    try { localStorage.removeItem(STORAGE_KEY) } catch {}
    setConsent(undefined)
  }, [])

  const value = {
    consent,          // 'all' | 'necessary' | undefined | null
    loaded,           // false until localStorage is read
    acceptAll,
    acceptNecessary,
    resetConsent,
    hasConsented: consent === 'all' || consent === 'necessary',
    acceptedAll: consent === 'all',
  }

  return (
    <CookieConsentContext.Provider value={value}>
      {children}
    </CookieConsentContext.Provider>
  )
}

export function useCookieConsent() {
  const ctx = useContext(CookieConsentContext)
  if (!ctx) throw new Error('useCookieConsent must be used inside CookieConsentProvider')
  return ctx
}
