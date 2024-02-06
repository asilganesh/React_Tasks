import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomeScreen from "../screens/postLoginScreens/homeScreen"
import AboutScreen from "../screens/postLoginScreens/aboutScreen"
import SettingScreen from "../screens/postLoginScreens/settingScreen"
import ProductScreen from "../screens/postLoginScreens/productScreen"
import InvalidPage from "../screens/postLoginScreens/invalidPage"
import ProductDetails from "../screens/postLoginScreens/productDetails"
import { createContext, useContext, useState } from "react"
import AddName from "../screens/postLoginScreens/addName"
import PostLoginScreen from "../screens/postLoginScreens/postLoginScreens/postLoginScreen"
import Login from "../screens/postLoginScreens/login-screen"
import PreLoginScreen from "../screens/postLoginScreens/preLoginScreens/pre-login-screen"
import { useCounter } from "../../05FEB/customeHooks/useCounter"



export const DataShare = createContext()


const NavigationStack = () => {
    const [name, setName] = useState("Add Name")
    const [theme, setTheme] = useState(false)
    const[login,setLogin]=useState(false)

    // importing the useCounter Custom Hook here...

    const[count,increment,decrement]=useCounter()



    const changeTheme = () => {

        setTheme(!theme)
    }

    const changeName = (name) => {
        setName(name)
    }

    const loginTrue=()=>{

        setLogin(!login)
    }
    return (


        <DataShare.Provider value={{ name, theme, changeTheme, changeName,loginTrue,count,increment,decrement }}>
            <BrowserRouter>

            {
                true
                ?
                <PostLoginScreen/>
                :
                <PreLoginScreen/>

            }


            </BrowserRouter>

        </DataShare.Provider>

    )
}

export default NavigationStack