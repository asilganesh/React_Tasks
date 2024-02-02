import { useRef } from "react"



const Uncontrolled = () => {

    const emailRef=useRef()
    const passRef=useRef()

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(emailRef.current.value)
        console.log(passRef.current.value)

        if(passRef.current.value.length<3){
            alert("enter pasword above 3 characters")
        }
        else{

            const details={
                username:emailRef.current.value,
                password:passRef.current.value
            }
            hitServer(details)
        }
    }


const hitServer=(data)=>{

    fetch('https://dummyjson.com/auth/login', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(data)
})
.then(res => res.json())
.then(console.log);
}

    return (

        <>
            <form onSubmit={handleSubmit} >
                <div className="mb-3 mt-3" >
                    <label className="form-label">Email:</label>
                    <input type="text" className="form-control" id="email" placeholder="Enter email" name="email" ref={emailRef} />

                </div>
                <div className="mb-3">
                    <label className="form-label">Password:</label>
                    <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pswd" ref={passRef}/>
                </div>
                <div className="form-check mb-3">

                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </>
    )
}

export default Uncontrolled