import React from 'react'
import styles from './Meanings.module.css'
import Definitions from './Definitions'

const Meanings = ({ data }) => {
  return (
    data.meanings.map((meaning, index) => (
      <div key={index} className={styles.wrapper}>
        <h2 className={styles['part-of-speech']}>{meaning.partOfSpeech}</h2>
        <Definitions meaning={meaning} />
      </div>
    ))
  )
}

export default Meanings
