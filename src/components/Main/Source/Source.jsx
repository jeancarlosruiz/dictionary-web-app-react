import React from 'react'
import styles from './Source.module.css'

const Source = ({ data }) => {
  return (
    <div className={styles.wrapper}>
      <h3 className={styles['source-title']}>Source</h3>
      <a href={data.sourceUrls} target='_blank' rel='noreferrer'>{data.sourceUrls}</a>
    </div>
  )
}

export default Source
