

import React from 'react'

const TextComponent = ({text}) => {

console.log("text rerendering")
  return (
    <>
    <h1>{text}</h1>
    </>
  )
}

export default React.memo(TextComponent)
