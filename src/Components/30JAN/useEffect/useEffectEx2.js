import { useEffect, useState } from "react"

const UseEffectEx2=()=>{

    const[count,setCount]=useState(0)
    useEffect(()=>{

        updateCount()
    },[count])

    const updateCount=()=>{

document.title=`Counter ${count}`
    }

    const handleIncrement=()=>{
        setCount(count+1)
    }

    return(

        <>
        <h1>Counter1 {count}</h1>
        <button onClick={handleIncrement}>Click to increase</button>
        </>
    )
}


export default UseEffectEx2





// import { useEffect, useState } from "react"


// const UseEffectEx2=()=>{

//     const[count,setCount]=useState(0)
//     const[count2,setCount2]=useState(10)

//     useEffect(()=>{
//         updateValue()

//     },[count,count2])

//   const updateValue=()=>{

//     document.title=`Counter Value ${count}`
//   }

//   const handleIncrement=()=>{

//     setCount(count+1)
//   } 

//   const handleIncrement2=()=>{
//     setCount2(count2+1)

//   } 



//     return(

//         <>
//         <h1>Counter1 {count}</h1>
//         <h1>Counter2 {count2}</h1>
//         <button onClick={handleIncrement}> Click to increase count</button>
//         <button onClick={handleIncrement2}> Click to increase count</button>
//         </>

//     )
// }

// export default UseEffectEx2