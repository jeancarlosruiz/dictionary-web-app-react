import React from 'react'
import { ReactComponent as PlayIcon } from '../../public/images/icon-play.svg'

const Audio = ({ data }) => {
  const foundAudio = data.phonetics.find((phonetic) => phonetic.audio)
  return (
    <>
      <a href={foundAudio.audio} target='_blank' rel='noreferrer'>
        <PlayIcon />
      </a>
    </>
  )
}

export default Audio
