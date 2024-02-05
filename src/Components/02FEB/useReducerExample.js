import { useReducer } from "react"


const reducerFunction=(state,action)=>{

   switch(action.type){

    case "increment": 
    return {...state,age:state.age+1}

    case "decrement": 
    return {...state,age:state.age-1}

    default:
        return state
   }

}


const intialState={

    age:20,
    name:"Ganesh Asil"
}
const UseReducerEx=()=>{

    const[currentState,updateState]=useReducer(reducerFunction,intialState)

    const increment=()=>{

        updateState({
            type:"increment"
        })

    }


    const decrement=()=>{

        updateState({
            type:"decrement"
        })
    }
    return(

        <>
        <h1>{currentState.age}</h1>
        <button onClick={decrement}>Decrement</button>
        <button onClick={increment}>Increment</button>
        </>
    )
}

export default UseReducerEx