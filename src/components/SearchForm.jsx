import React from 'react'

import VisuallyHidden from './VisuallyHidden'

import { hiddenStyles } from '../utils/visuallyHidden'
import { ReactComponent as SearchIcon } from '../../public/images/icon-search.svg'
import styles from './SearchForm.module.css'

const SearchForm = () => {
  const [word, setWord] = React.useState('')

  const handleSubmit = e => {
    e.preventDefault()
    console.log(word)
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label htmlFor='word-search' style={hiddenStyles}>
        Word search label
      </label>
      <input
        id='word-search'
        className={styles['word-search']}
        type='text'
        placeholder='Search for any word…'
        value={word}
        onChange={(e) => {
          const newWord = e.target.value
          setWord(newWord)
        }}
      />

      <button className={styles.button} type='submit'>
        <VisuallyHidden>Button search</VisuallyHidden>
        <SearchIcon />
      </button>

      <p className='error-msg | fs-700' />
    </form>
  )
}

export default SearchForm
