import React, { useMemo, useState } from 'react'

const ChildUseMemo = ({greeting}) => {

  const[age,setAge]=useState(20)
  const updatedMemorizedValue=useMemo(()=>{

    let toUpperCase=greeting.toUpperCase()
    console.log(toUpperCase)
    return toUpperCase
  },[greeting])

  // const lowerToUpper=()=>{

  //   let toUpperCase=greeting.toUpperCase()
  //   console.log(toUpperCase)
  //   return toUpperCase
  // }

  const handleAge=()=>{

    setAge(age+5)
  }
  return (
    <>
    <h1>{updatedMemorizedValue}</h1>
    <h2>{age}</h2>
    <button onClick={handleAge}>Increase Age</button>
    </>
  )
}

export default ChildUseMemo
