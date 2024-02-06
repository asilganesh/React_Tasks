

import React from 'react'

const ButtonCompnent = ({handleChange=()=>{},text=""}) => {

    console.log("Button Component Rerendering")


  return (
    <>
    <button onClick={handleChange}>{text}</button>
    </>
  )
}

export default React.memo(ButtonCompnent)
