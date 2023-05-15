import React from 'react'

import styles from './Dropdown.module.css'
import { fontFamilyObj } from '../utils/fontFamilyObj'
import { ReactComponent as Arrow } from '../../public/images/icon-arrow-down.svg'

const Dropdown = ({ isActive, setIsActive, handleFont }) => {
  const [selected, setSelected] = React.useState('San Serif')
  console.info('Dropdown render')

  const arrowClass = isActive
    ? `${styles.arrow} ${styles.active}`
    : styles.arrow

  return (
    <div className={styles.dropdown}>
      <div className={styles.wrapper} onClick={() => setIsActive(!isActive)}>
        <span>{selected}</span>
        <Arrow className={arrowClass} />
      </div>
      {isActive && (
        <ul className={styles.menu}>
          {fontFamilyObj.map((option, index) => (
            <li
              key={index}
              style={{ fontFamily: option.fontFamily }}
              onClick={() => {
                setIsActive(!isActive)
                setSelected(option.value)
                handleFont(option.fontFamily)
              }}
            >
              {option.value}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Dropdown
