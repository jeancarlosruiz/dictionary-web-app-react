import React from 'react'

import SearchForm from './SearchForm'
import DefinitionContainer from './DefinitionContainer'

import { ENDPOINT } from '../utils/endpoint'
import { hiddenStyles } from '../utils/visuallyHidden'
import styles from './Main.module.css'

const Main = ({ fontFamily }) => {
  const [word, setWord] = React.useState('')
  // idle: without purpose or effect || loading || success || error
  const [status, setStatus] = React.useState('idle')
  const [data, setData] = React.useState('')

  const url = ENDPOINT + word

  React.useEffect(() => {
    // Only run if word is not empty
    if (word !== '') {
      async function runEffect () {
        // Set status to loading
        setStatus('loading')
        const response = await fetch(url)
        const json = await response.json()

        // If the response.ok is true:
        if (response.ok) {
          setStatus('success')
          setData(json[0])
        } else {
          // If the response.ok is false:
          setStatus('error')
          setData(json)
        }
      }

      runEffect()
    }
  }, [word])

  console.log(data)
  console.log(status)
  console.info('Main render')
  return (
    <main style={{ fontFamily }} className={styles['definition-container']}>
      <h1 style={hiddenStyles}>Dictionary Web App (screen readers only)</h1>
      <SearchForm setWord={setWord} status={status} />
      <DefinitionContainer data={data} status={status} />
    </main>
  )
}

export default Main
