import React from 'react'

const VisuallyHidden = ({ children }) => {
  const hiddenStyles = {
    display: 'inline-block',
    position: 'absolute',
    overflow: 'hidden',
    clip: 'rect(0 0 0 0)',
    height: 1,
    width: 1,
    margin: -1,
    padding: 0,
    border: 0
  }

  return <span style={hiddenStyles}>{children}</span>
}

export default VisuallyHidden
