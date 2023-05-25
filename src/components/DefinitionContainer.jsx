import React from 'react'
import styles from './DefinitionContainer.module.css'

const DefinitionContainer = ({ data, status }) => {
  return (
    <section className={styles.container}>
      {status === 'loading' && <h1>Hello, Cargando</h1>}
      {status === 'success' && (
        <div className={styles.wrapper}>
          <div>
            <h2
              style={{
                fontSize: 'clamp(2rem, 0.7845rem + 0.9195vw, 4rem)'
              }} className={styles['word-title']}
            >{data.word}
            </h2>
            <span className={styles['word-phonetic']}>{data?.phonetic}</span>
          </div>
        </div>
      )}
      {status === 'error' && <h1>{data.title}</h1>}
    </section>
  )
}

export default DefinitionContainer
