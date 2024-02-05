import { useState } from "react"
import Child from "./child"



const ParentComponent=()=>{

    const[count,setCount]=useState(0)

    const handleIncrement=()=>{
    
        setCount(count+1)
    }

    return(

        <>
        <h1>{count}</h1>
        <button onClick={handleIncrement}>Increase Count</button>
        <Child/>
        </>
    )
}

export default ParentComponent