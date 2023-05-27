import React from 'react'
import styles from './Error.module.css'

const Error = ({ data }) => {
  return (
    <div className={styles.wrapper}>
      <span style={{ fontSize: '4rem', marginBlockEnd: '2rem' }}>
        😕
      </span>
      <h2 className={styles.title}>{data.title}</h2>
      <p className={styles.message}>{data.message}</p>
      <small className={styles.resolution}>Resolution: {data.resolution}</small>
    </div>
  )
}

export default Error
