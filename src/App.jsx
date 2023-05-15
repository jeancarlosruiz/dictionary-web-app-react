import React from 'react'
import { useDarkMode } from './utils/useDarkMode'

import Header from './components/Header'
import Main from './components/Main'

const App = () => {
  const { themeSwitcher } = useDarkMode()
  const [font, setFont] = React.useState("'inter', Arial, sans-serif")
  const [isActive, setIsActive] = React.useState(false)

  const handleFont = value => {
    console.log(value)
    return setFont(value)
  }

  return (
    <>
      <Header
        isActive={isActive}
        setIsActive={setIsActive}
        handleFont={handleFont}
        themeSwitcher={themeSwitcher}
      />
      <Main fontFamily={font} />
    </>
  )
}

export default App
