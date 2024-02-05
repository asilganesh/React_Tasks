

import React, { useState } from 'react'
import ChildUseMemo from './childUseMemo'

const ParentUseMemo = () => {

    const[greeting,setGreeting]=useState("Good Morning")
  return (
    <>
    <h1><ChildUseMemo greeting={greeting}/></h1>
    </>
  )
} 

export default ParentUseMemo
