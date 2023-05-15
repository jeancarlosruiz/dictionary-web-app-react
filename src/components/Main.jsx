import React from 'react'

const Main = ({ fontFamily }) => {
  console.info('Main render')
  return <main style={{ fontFamily: `${fontFamily}` }}>hola</main>
}

export default Main
