import { Route, Routes } from "react-router-dom"
import Login from "../login-screen"


const PreLoginScreen = () => {


    return (

        <>
            <Routes>

                <Route path="/" Component={Login} />
        
            </Routes>
        </>
    )

}

export default PreLoginScreen