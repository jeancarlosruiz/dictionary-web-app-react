import React from 'react'
import Audio from './Audio'
import styles from './Pronunciation.module.css'

const Pronunciation = ({ data }) => {
  return (
    <div className={styles.wrapper}>
      <div>
        <h2 className={styles.title}>{data.word}</h2>
        <span className={styles['word-phonetic']}>{data.phonetic}</span>
      </div>
      <Audio className={styles['play-icon']} data={data} />
    </div>
  )
}

export default Pronunciation
