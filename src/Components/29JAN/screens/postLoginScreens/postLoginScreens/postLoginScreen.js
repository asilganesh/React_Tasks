import { Route, Routes } from "react-router-dom"
import HomeScreen from "../homeScreen"
import AboutScreen from "../aboutScreen"
import SettingScreen from "../settingScreen"
import ProductScreen from "../productScreen"
import InvalidPage from "../invalidPage"
import ProductDetails from "../productDetails"
import AddName from "../addName"


const PostLoginScreen=()=>{

    return(

        <Routes>

        <Route path="/" Component={HomeScreen} />
        <Route path="/about" Component={AboutScreen} />
        <Route path="/settings" Component={SettingScreen} />
        <Route path="/product" Component={ProductScreen} />

        <Route path="*" Component={InvalidPage} />

        <Route path="/productDetails/:id" Component={ProductDetails} />

        <Route path="/addName" Component={AddName} />


    </Routes>
    )
}

export default PostLoginScreen