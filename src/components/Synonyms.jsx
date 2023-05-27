import React from 'react'
import styles from './Synonyms.module.css'

const Synonyms = ({ children }) => {
  return (
    <h3 className={styles['synonyms-title']}>Synonyms <span className={styles.synonyms}>{children}</span></h3>
  )
}

export default Synonyms
