import { useContext } from "react"
import FooterComponent from "../../footer/footer"
import NavBar from "../../navBar/navBar"
import Products from "./products"
import { DataShare } from "../../navagitaionStack/navigation"





const ProductScreen = () => {
    const { name, theme,count,increment,decrement } = useContext(DataShare)


    return (

        <>
            <NavBar />
            <h1>{`This is Global counter -- ${count}`}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            {/* <div style={{ width: 100, height: 100, background: theme ? "red" : "black" }}>

            </div> */}
            <Products />
            <FooterComponent />
        </>
    )
}

export default ProductScreen