import React,{ useState } from "react"




const UseStateExample2=()=>{


    const[currentValue,updaterFunction]=useState([{
        name:'Ganesh',
        sal:100,
        id:1
    },
    {
        name:'sai',
        sal:200,
        id:2
    }

])
const salIncement=(data)=>{
 updaterFunction(data=>data.sal+100)
console.log(data.sal)

}
const salDecrement=(data)=>{
    updaterFunction(data=>data.sal-100)
    console.log(data.sal)


}

return(
    <>
    {
        currentValue.map((val)=><React.Fragment key={val.id}>
     
         <h1>{val.name}</h1>
         <h1>{val.sal}</h1>
         <button onClick={()=>salIncement(val)}>Increment sal</button>
         <button onClick={()=>salDecrement(val)}>Decrement sal</button>
        </React.Fragment>)
    }
    </>
)

}

export default UseStateExample2