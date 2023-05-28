import React from 'react'

import styles from './DefinitionContainer.module.css'

import Loading from '../../Loading/Loading'
import Error from '../../Error/Error'
import Pronunciation from './Pronunciation'
import Meanings from './Meanings'
import Source from '../Source/Source'

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
