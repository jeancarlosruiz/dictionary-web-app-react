import React from 'react'
import { prefersScheme } from './prefersScheme'

export const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = React.useState(() => {
    const storedValue = window.localStorage.getItem('data-theme')
    return storedValue || prefersScheme
  })

  React.useEffect(() => {
    document.body.setAttribute('data-theme', isDarkMode)
    window.localStorage.setItem('data-theme', isDarkMode)
  }, [isDarkMode])

  const themeSwitcher = () => {
    const newTheme = isDarkMode === 'light' ? 'dark' : 'light'
    return setIsDarkMode(newTheme)
  }

  return { themeSwitcher }
}
