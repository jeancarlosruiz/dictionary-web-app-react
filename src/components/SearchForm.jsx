import React from 'react'

import VisuallyHidden from './VisuallyHidden'

import { hiddenStyles } from '../utils/visuallyHidden'
import { ReactComponent as SearchIcon } from '../../public/images/icon-search.svg'
import styles from './SearchForm.module.css'

const SearchForm = ({ setWord, status }) => {
  const [tentativeWord, setTentativeWord] = React.useState('')
  const [error, setError] = React.useState(false)

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

    // Set the word to search
    setWord(tentativeWord)

    // Reset the input
    setTentativeWord('')

    // Check if the input is empty
    if (tentativeWord === '') {
      setError(true)
    } else {
      setError(false)
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.wrapper}>
        <label htmlFor={inputId} style={hiddenStyles}>
          Word search label
        </label>
        <input
          id={inputId}
          ref={inputRef}
          // If the status is loading, disable the input
          disabled={status === 'loading'}
          className={styles['word-search']}
          // If the input is empty, outline the input with red
          style={error ? { outline: '1px solid var(--error-clg)' } : { outline: '1px solid hsl(274, 82%, 60%)' }}
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
      </div>
      {error && <small className={styles['error-msg']}>Whoops, can't be empty...</small>}
    </form>
  )
}

export default SearchForm
