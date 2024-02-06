import { useContext } from "react"
import FooterComponent from "../../footer/footer"
import NavBar from "../../navBar/navBar"
import { DataShare } from "../../navagitaionStack/navigation"
import UseReducerEx from "../../../02FEB/useReducerExample"





const AboutScreen = () => {

    const data=useContext(DataShare)
    const {name,theme,changeTheme,count,increment,decrement}=data
  
    const changeThemeOf=()=>{

        changeTheme()
    }
 
    return (


        <>
            <NavBar />
            <h1>{`This is Global counter -- ${count}`}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            {/* <UseReducerEx/> */}
            {/* <div style={{width:100,height:100,backgroundColor:theme?"red":"black"}}>

            </div>
            <button onClick={changeThemeOf}>Change Theme</button> */}
           
                <div className="mt-4 p-5 bg-primary text-white rounded">
                    <h1>This is ABout Us</h1>
                    <p>Lorem ipsum...</p>
                </div>
           
            <FooterComponent />
        </>
    )

}

export default AboutScreen
