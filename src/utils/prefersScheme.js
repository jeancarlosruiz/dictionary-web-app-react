// If the user has a preference for dark mode, use that preference.

export const prefersScheme = window.matchMedia('(prefers-color-scheme: dark)')
  .matches
  ? 'dark'
  : 'light'
