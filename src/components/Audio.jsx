import React from 'react'
import { ReactComponent as PlayIcon } from '../../public/images/icon-play.svg'

const Audio = ({ data }) => {
  const foundAudio = data.phonetics.find((phonetic) => phonetic.audio)

  //   If there is no audio, return null
  if (!foundAudio) return null

  return (
    <>
      <a href={foundAudio.audio} target='_blank' rel='noreferrer'>
        <PlayIcon />
      </a>
    </>
  )
}

export default Audio
