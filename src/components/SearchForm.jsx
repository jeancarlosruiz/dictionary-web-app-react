import React from 'react'

import VisuallyHidden from './VisuallyHidden'

import { hiddenStyles } from '../utils/visuallyHidden'
import { ReactComponent as SearchIcon } from '../../public/images/icon-search.svg'
import styles from './SearchForm.module.css'

const SearchForm = ({ setWord, status }) => {
  const [tentativeWord, setTentativeWord] = React.useState('')

  // Unique id for the search input
  const id = React.useId()
  const inputId = `${id}word-search`

  const inputRef = React.useRef()

  React.useEffect(() => {
    // Focus on the search input once the component render
    inputRef.current.focus()
  }, [])

  const handleSubmit = e => {
    e.preventDefault()
    setWord(tentativeWord)
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label htmlFor={inputId} style={hiddenStyles}>
        Word search label
      </label>
      <input
        id={inputId}
        ref={inputRef}
        required
        disabled={status === 'loading'}
        className={styles['word-search']}
        type='text'
        placeholder='Search for any word…'
        value={tentativeWord}
        onChange={(e) => {
          const newWord = e.target.value
          setTentativeWord(newWord)
        }}
      />

      <button disabled={status === 'loading'} className={styles.button} type='submit'>
        <VisuallyHidden>Button search</VisuallyHidden>
        <SearchIcon />
      </button>

      <p className='error-msg | fs-700' />
    </form>
  )
}

export default SearchForm
