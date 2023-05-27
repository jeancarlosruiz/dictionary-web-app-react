import React from 'react'
import { useDarkMode } from '../utils/useDarkMode'

import VisuallyHidden from './VisuallyHidden'
import { ReactComponent as Moon } from '../../public/images/icon-moon.svg'
import styles from './Theme.module.css'

const Theme = () => {
  const themeSwitcher = useDarkMode()

  return (
    <div className={styles['theme-toogle']}>
      <input type='checkbox' id='checkbox' className={styles.checkbox} />
      <label htmlFor='checkbox' className={styles.label} onClick={themeSwitcher}>
        <div className={styles.ball}><VisuallyHidden>Ball (Visually hidden screen readers only)</VisuallyHidden></div>
      </label>
      <Moon className={styles.moon} onClick={themeSwitcher} />
    </div>
  )
}

export default Theme
