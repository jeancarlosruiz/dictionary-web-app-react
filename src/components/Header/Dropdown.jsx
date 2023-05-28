import React from 'react'

import styles from './Dropdown.module.css'
import { fontFamilyObj } from '../../utils/fontFamilyObj'
import { ReactComponent as Arrow } from '../../../images/icon-arrow-down.svg'

const Dropdown = ({ handleFont }) => {
  const [selected, setSelected] = React.useState('San Serif')
  const [isActive, setIsActive] = React.useState(false)

  const handleFontChanges = React.useCallback((value) => {
    const fontSelected = value

    return handleFont(fontSelected)
  }, [handleFont])

  const arrowTransition = isActive
    ? 'rotate(180deg)'
    : 'rotate(0)'

  return (
    <div className={styles.dropdown}>
      <div className={styles.wrapper} onClick={() => setIsActive(!isActive)}>
        <span>{selected}</span>
        <Arrow className={styles.arrow} style={{ transform: arrowTransition }} />
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
                handleFontChanges(option.fontFamily)
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
