import { useContext } from "react"
import FooterComponent from "../../footer/footer"
import NavBar from "../../navBar/navBar"
import { DataShare } from "../../navagitaionStack/navigation"
import ParentComponent from "../../../03FEB/parent"
import ParentUseMemo from "../../../03FEB/useMemo/parentUseMemo"





const SettingScreen = () => {
    const { name, theme } = useContext(DataShare)


    return (

        <>
            <NavBar />
            <ParentUseMemo/>
            {/* <ParentComponent/> */}
            {/* <div style={{ width: 100, height: 100, background: theme ? "red" : "black" }}>

            </div> */}
            {/* <h1>I am from Setting Screen</h1> */}
            <FooterComponent />
        </>
    )
}

export default SettingScreen