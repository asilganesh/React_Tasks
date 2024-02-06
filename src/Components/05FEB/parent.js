import React, { useMemo, useState } from 'react'
import TextComponent from './text'
import ButtonCompnent from './button'

const ParentComponent = () => {

const[age,setAge]=useState(10)
const[sal,setSalary]=useState(1000)

const agehandler=useMemo(()=>{

    setAge(age+10)

},[age])

const salhandler=useMemo(()=>{
    setSalary(sal+1000)
},[sal])





  return (

    <>
    <TextComponent text={age}/>
    <ButtonCompnent handleChange={agehandler} text={"Increase Age"}/>
    <TextComponent text={sal}/>
    <ButtonCompnent handleChange={salhandler} text={"Increase Sal"}/>


    </>
  )
}

export default ParentComponent
