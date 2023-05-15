import React from 'react'

import SearchForm from './SearchForm'

import { hiddenStyles } from '../utils/visuallyHidden'
import styles from './Main.module.css'

const Main = ({ fontFamily }) => {
  console.info('Main render')
  return (
    <main style={{ fontFamily }} className={styles['definition-container']}>
      <h1 style={hiddenStyles}>Dictionary Web App (screen readers only)</h1>
      <SearchForm />
    </main>
  )
}

export default Main
