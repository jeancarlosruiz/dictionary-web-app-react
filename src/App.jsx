import React from 'react'

import Header from './components/Header'
import Main from './components/Main'

const App = () => {
  const [font, setFont] = React.useState("'inter', Arial, sans-serif")

  const handleFont = value => {
    console.log(value)
    return setFont(value)
  }

  return (
    <>
      <Header
        handleFont={handleFont}
      />
      <Main fontFamily={font} />
    </>
  )
}

export default App
