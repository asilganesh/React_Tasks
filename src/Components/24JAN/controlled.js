import { useState } from "react"


const Controlled = () => {

    const[userName,setUserName]=useState("")
    const[userNameError,setUserNameError]=useState("")

    const userNameHandler=(event)=>{
        console.log(event.target.value)
        setUserName(event.target.value)

        if(event.target.value.length>10){
            setUserNameError("enter below 10 characters")
        }
        else{
            setUserNameError("")
        }
    }

    return (
        <>
            <form  >
                <div className="mb-3 mt-3">
                    <label className="form-label">Email:</label>
                    <input type="text" className="form-control" id="email" placeholder="Enter email" name="email" value={userName} onChange={userNameHandler} />
                    {
                        userNameError
                        ?
                        <h5 style={{color:"red"}}>userNameError</h5>
                        :
                        null
                    }
                </div>
                <div className="mb-3">
                    <label className="form-label">Password:</label>
                    <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pswd"  />
                </div>
                <div className="form-check mb-3">
                
                </div>
               
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </>


    )
}

export default Controlled