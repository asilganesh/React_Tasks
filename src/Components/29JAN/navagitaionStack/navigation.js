import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomeScreen from "../screens/postLoginScreens/homeScreen"
import AboutScreen from "../screens/postLoginScreens/aboutScreen"
import SettingScreen from "../screens/postLoginScreens/settingScreen"
import ProductScreen from "../screens/postLoginScreens/productScreen"
import InvalidPage from "../screens/postLoginScreens/invalidPage"
import ProductDetails from "../screens/postLoginScreens/productDetails"


const NavigationStack=()=>{


    return(

        <BrowserRouter>

        <Routes>

            <Route path="/" Component={HomeScreen}/>
            <Route path="/about" Component={AboutScreen}/>
            <Route path="/settings" Component={SettingScreen}/>
            <Route path="/product" Component={ProductScreen}/>

            <Route path="*"  Component={InvalidPage}/>

            <Route path="/productDetails/:id" Component={ProductDetails}/>

        </Routes>
        
        </BrowserRouter>

    )
}

export default NavigationStack