import React, { useState } from "react"

const UseStateExample=()=>{

    const[currentValue,updaterFunction]=useState(0)
    const[timer,settimer]=useState(100)

    const handleIncrement=()=>{

        updaterFunction(currentValue=>currentValue+1)
    }

    // const handleTimer=()=>{

        
    //     setInterval(()=>{
    //        settimer(timer=>timer-1)
    //     },1000)
    // }

    const timerFunction=()=>{
        settimer(timer=>timer-1)

    }
    const handelTimer=()=>{setInterval(timerFunction,1000)}



    const stopTimer=()=>{
        console.log("hello")
        clearInterval(handelTimer);
    }
    return(
        
        <>
        <h2>use State</h2>
        <h2>timer -- {timer}</h2>
        <button onClick={handleIncrement}>Increase count</button>
        <button onClick={handelTimer}>start timer</button>
        <button onClick={stopTimer}>Stop Timer</button>
        </>
    )
}
export default UseStateExample

