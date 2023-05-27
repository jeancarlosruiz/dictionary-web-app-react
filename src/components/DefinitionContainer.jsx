import React from 'react'
import styles from './DefinitionContainer.module.css'
import Loading from './Loading'
import Error from './Error'
import Pronunciation from './Pronunciation'
import Meanings from './Meanings'
import Source from './Source'

const DefinitionContainer = ({ data, status }) => {
  return (
    <section className={styles.container}>
      {status === 'loading' && <Loading />}
      {status === 'success' && (
        <>
          <Pronunciation data={data} />
          <Meanings data={data} />
          <Source data={data} />
        </>
      )}
      {status === 'error' && <Error data={data} />}
    </section>
  )
}

export default DefinitionContainer
