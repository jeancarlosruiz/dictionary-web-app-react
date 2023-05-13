import React from 'react'
import styles from 'Button.module.css'

const Button = ({ variant, disabled, children }) => {
  return (
    <button
      className={`${styles.wrapper} ${styles[variant]}`}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default Button
