import React from 'react'
// import useSWR from 'swr'

import VisuallyHidden from './VisuallyHidden'

import { hiddenStyles } from '../utils/visuallyHidden'
import { ReactComponent as SearchIcon } from '../../public/images/icon-search.svg'
import { ENDPOINT } from '../utils/endpoint'
import styles from './SearchForm.module.css'

const SearchForm = () => {
  const [tentativeWord, setTentativeWord] = React.useState('')
  const [word, setWord] = React.useState('')
  const [data, setData] = React.useState('')

  const url = ENDPOINT + word

  React.useEffect(() => {
    if (word !== '') {
      async function runEffect () {
        const response = await fetch(url)
        const json = await response.json()

        setData(json[0])
      }

      runEffect()
    }
  }, [word])

  console.log(data)

  const handleSubmit = e => {
    e.preventDefault()
    setWord(tentativeWord)
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
        value={tentativeWord}
        onChange={(e) => {
          const newWord = e.target.value
          setTentativeWord(newWord)
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
