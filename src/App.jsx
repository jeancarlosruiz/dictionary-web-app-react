import React from 'react'

import Header from './components/Header/Header'
import Main from './components/Main/Main'

const App = () => {
  const [font, setFont] = React.useState("'inter', Arial, sans-serif")

  const handleFont = value => setFont(value)

  return (
    <>
      <Header handleFont={handleFont} />
      <Main fontFamily={font} />
    </>
  )
}

export default App
