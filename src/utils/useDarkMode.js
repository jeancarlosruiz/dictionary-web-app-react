import React from 'react'
import { prefersScheme } from './prefersScheme'

export const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = React.useState(() => {
    const storedValue = window.localStorage.getItem('data-theme')

    // If the user has explicitly chosen light or dark mode
    return storedValue || prefersScheme
  })

  React.useEffect(() => {
    // Update the theme on mount
    document.body.setAttribute('data-theme', isDarkMode)
    window.localStorage.setItem('data-theme', isDarkMode)
  }, [isDarkMode])

  const themeSwitcher = () => {
    // Toggle the theme
    const newTheme = isDarkMode === 'light' ? 'dark' : 'light'
    return setIsDarkMode(newTheme)
  }

  return themeSwitcher
}
