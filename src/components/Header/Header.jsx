import React from 'react'

import Dropdown from './Dropdown'
import Theme from './Theme'

import style from './Header.module.css'
import { ReactComponent as Logo } from '../../../images/logo.svg'

const Header = ({ handleFont }) => {
  return (
    <header className={style.header}>
      <Logo />
      <div className={style.wrapper}>
        <Dropdown
          handleFont={handleFont}
        />
        <Theme />
      </div>
    </header>
  )
}

export default Header
