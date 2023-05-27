import React from 'react'
import styles from './Meanings.module.css'

const Meanings = ({ data }) => {
  console.log(data.meanings)
  return (
    data.meanings.map((meaning, index) => (
      <div key={index} className={styles.wrapper}>
        <h2 className={styles['part-of-speech']}>{meaning.partOfSpeech}</h2>
        <div>
          <h3 className={styles.meaning}>Meaning</h3>
          <ul className={styles['definitions-container']}>
            {meaning.definitions.map((definitions, index) => (
              <li key={index} className={styles.divider}>
                <div>
                  <span className={styles.definition}>{definitions.definition}</span>
                  {definitions.example && (<small className={styles.example}>"{definitions.example}"</small>)}
                </div>
              </li>
            ))}
          </ul>
          {meaning.synonyms.length > 0 && (<h3 className={styles['synonyms-title']}>Synonyms <span className={styles.synonyms}>{meaning.synonyms.join(', ')}</span></h3>)}
        </div>
      </div>
    ))
  )
}

export default Meanings
