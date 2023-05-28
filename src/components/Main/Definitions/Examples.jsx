import React from 'react'
import styles from './Examples.module.css'

const Examples = ({ children }) => {
  return (
    <small className={styles.example}>"{children}"</small>
  )
}

export default Examples
