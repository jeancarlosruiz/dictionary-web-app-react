import React from 'react'
import styles from './DefinitionContainer.module.css'
import Pronunciation from './Pronunciation'
import Meanings from './Meanings'
import Source from './Source'

const DefinitionContainer = ({ data, status }) => {
  return (
    <section className={styles.container}>
      {status === 'loading' && <h1>Hello, Cargando</h1>}
      {status === 'success' && (
        <>
          <Pronunciation data={data} />
          <Meanings data={data} />
          <Source data={data} />
        </>
      )}
      {status === 'error' && <h1>{data.title}</h1>}
    </section>
  )
}

export default DefinitionContainer
