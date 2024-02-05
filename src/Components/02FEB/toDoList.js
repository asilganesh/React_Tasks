import React, { useReducer, useState } from "react"

// import styles from "./todo.module.css"

const reducerFunction = (state, action) => {
    console.log(action)

    switch (action.type) {
        case "AddItem":
            // debugger;
            if (state.todo.length <= 0) {

                return { ...state, todo: [...state.todo, action.next] }
            }
            else {

                const res = state.todo.map((val, index) => {
                    let temp = ""
                    if (index == action.index) {
                        state.todo[index] = action.next
                        temp = state.todo[index]
                        action.next = ""
                    }
                    else {
                        temp = val
                    }

                    return temp
                })
                if (action.next == "") {
                    return { ...state, todo: [...res] }
                }
                else {
                    return { ...state, todo: [...res, action.next] }
                }
            }


        case "DeleteItem":
            const result = state.todo.filter((value, index) => {

                return index != action.delete
            })
            return { ...state, todo: result }

    }

}


const intialState = {
    todo: []
}



const ToDoList = () => {

    const [currentValue, setCurrentValue] = useReducer(reducerFunction, intialState)
    const [state, setState] = useState("")
    const [updatedState, setUpdatedState] = useState(null)

    console.log(currentValue.todo)
    const changeHandler = (event) => {
        setState(event.target.value)

    }

    const submitHandler = () => {

        if (!state.match(/\w/g)) {
            alert("please enter valid data")
        }
        else {

            setCurrentValue({
                type: "AddItem",
                next: state,
                index: updatedState
            })
            setState("")
            setUpdatedState(null)

        }
    }

    const deleteList = (event) => {

        setCurrentValue({
            type: "DeleteItem",
            delete: event.target.value
        })

    }

    const updateList = (event) => {




        setState(event.target.value)

        setUpdatedState(event.target.name)

    }
    return (
        <>
            <h1 style={{
                textAlign: "center", color: "#2E4053",
                border: "1px solid transparent",borderRadius:"5px",
                backgroundColor: "black",
                color: "white", width: "50%",
                background: " linear-gradient(to right, #0f2027, #203a43, #2c5364)",
                margin:"1% auto",padding:"5px"
            }}>To Do List Web</h1>


            <div className="container p-5 my-5 bg-dark text-white main" >




                <input value={state} onChange={changeHandler} style={{ margin: 10, outline: "none", borderRadius: 5, padding: 5 }} className="input"></input>

                {/* <button type="submit" onClick={submitHandler}>Add To Do</button> */}
                <button type="button" className="btn btn-light" onClick={submitHandler} >Add To Do</button>

                {
                    currentValue.todo.map((value, index) => <React.Fragment key={index}>

                        {/* <div>
                            <li>{value}</li>
                        </div> */}

                        <div className="list" key={index} style={{ backgroundColor: index % 2 ? "#3498DB" : "#8E44AD", margin: "1%", padding: "1.5%", borderRadius: "5px" }}>
                            <li key={index} style={{ listStyle: "none" }}>{`${index + 1}. ${value}`}
                                <div className="btnContainer" style={{ display: "flex", float: "right", gap: "5%" }}>
                                    <button value={value} name={index} type="submit" className="btn btn-light" onClick={updateList} style={{ float: "right", marginBottom: "20px" }}>Update</button>

                                    <button value={index} type="submit" className="btn btn-light" onClick={deleteList} style={{ float: "right", marginBottom: "20px", }}>Delete</button>
                                </div>
                            </li>

                        </div>


                    </React.Fragment>)
                }
            </div>
        </>
    )
}

export default ToDoList




