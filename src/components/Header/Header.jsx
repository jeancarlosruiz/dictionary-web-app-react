import React from 'react'

import Dropdown from './Dropdown'
import Theme from './Theme'

import style from './Header.module.css'
import { ReactComponent as Logo } from '../../../images/logo.svg'

const Header = ({ handleFont, themeSwitcher }) => {
  return (
    <header className={style.header}>
      <Logo />
      <div className={style.wrapper}>
        <Dropdown
          handleFont={handleFont}
        />
        <Theme themeSwitcher={themeSwitcher} />
      </div>
    </header>
  )
}

export default Header
