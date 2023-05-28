import React from 'react'
import styles from './Definitions.module.css'
import Examples from './Examples'
import Synonyms from './Synonyms'

const Definitions = ({ meaning }) => {
  const synonyms = meaning.synonyms.join(', ')

  return (
    <div>
      <h3 className={styles.meaning}>Meaning</h3>
      <ul className={styles['definitions-container']}>
        {meaning.definitions.map((definitions, index) => (
          <li key={index} className={styles.divider}>
            <div>
              <span className={styles.definition}>{definitions.definition}</span>
              {definitions.example && (<Examples>"{definitions.example}"</Examples>)}
            </div>
          </li>
        ))}
      </ul>
      {meaning.synonyms.length > 0 && (<Synonyms>{synonyms}</Synonyms>)}
    </div>
  )
}

export default Definitions
