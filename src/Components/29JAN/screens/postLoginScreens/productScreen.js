import { useContext } from "react"
import FooterComponent from "../../footer/footer"
import NavBar from "../../navBar/navBar"
import Products from "./products"
import { DataShare } from "../../navagitaionStack/navigation"





const ProductScreen = () => {
    const { name, theme } = useContext(DataShare)


    return (

        <>
            <NavBar />
            {/* <div style={{ width: 100, height: 100, background: theme ? "red" : "black" }}>

            </div> */}
            <Products />
            <FooterComponent />
        </>
    )
}

export default ProductScreen