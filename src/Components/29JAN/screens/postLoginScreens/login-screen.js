import { useContext } from "react"
import { DataShare } from "../../navagitaionStack/navigation"
import { useNavigate } from "react-router-dom"


const Login=()=>{

    const{loginTrue}=useContext(DataShare)
    const navigate=useNavigate()

    const onSubmitChange=(event)=>{
        event.preventDefault()
        loginTrue()

    }


    return(

        <>
          <form  >
                <div className="mb-3 mt-3">
                    <label className="form-label">Email:</label>
                    <input type="text" className="form-control" id="email" placeholder="Enter email" name="email" />
                  
                </div>
                <div className="mb-3">
                    <label className="form-label">Password:</label>
                    <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pswd"  />
                </div>
                <div className="form-check mb-3">
                
                </div>
               
                <button type="submit" className="btn btn-primary" onClick={onSubmitChange}>Submit</button>
            </form>

        </>


    )
}

export default Login