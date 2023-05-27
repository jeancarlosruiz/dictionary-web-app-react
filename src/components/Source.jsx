import React from 'react'
import styles from './Source.module.css'

const Source = ({ data }) => {
  return (
    <div className={styles.wrapper}>
      <h3 className={styles['source-title']}>Source</h3>
      <span>{data.sourceUrls}</span>
    </div>
  )
}

export default Source
