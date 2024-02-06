import { useContext } from "react"
import FooterComponent from "../../footer/footer"
import NavBar from "../../navBar/navBar"
import { DataShare } from "../../navagitaionStack/navigation"
import ParentUseMemo from "../../../03FEB/useMemo/parentUseMemo"
import ParentComponent from "../../../05FEB/parent"
import { useCounter } from "../../../05FEB/customeHooks/useCounter"





const SettingScreen = () => {
    const { name, theme,count,increment,decrement } = useContext(DataShare)
    


    return (

        <>
            <NavBar />

            <h1>{`This is Global counter -- ${count}`}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            {/* <ParentComponent/> */}
            {/* <ParentUseMemo/> */}
            {/* <ParentComponent/> */}
            {/* <div style={{ width: 100, height: 100, background: theme ? "red" : "black" }}>

            </div> */}
            {/* <h1>I am from Setting Screen</h1> */}
            <FooterComponent />
        </>
    )
}

export default SettingScreen