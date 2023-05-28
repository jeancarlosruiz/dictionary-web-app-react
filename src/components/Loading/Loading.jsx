import React from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const Loading = () => {
  return (
    <SkeletonTheme baseColor='#202020' highlightColor='#444'>
      <h2><Skeleton height={30} /></h2>
      <span><Skeleton count={10} height={15} /></span>
      <h2><Skeleton height={30} /></h2>
      <span><Skeleton count={10} height={15} /></span>
    </SkeletonTheme>
  )
}

export default Loading
