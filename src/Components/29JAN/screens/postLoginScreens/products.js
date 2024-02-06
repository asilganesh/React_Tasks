import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useAxios } from "../../../05FEB/customeHooks/useaxios"


const Products = () => {


    // const [products, setproducts] = useState([])
    const [TotalPrice, setTotalPrice] = useState(null)

    const[products, setproducts]=useAxios()

    // useEffect(() => {

    //     fetcthData()



    // }, [])

    // const fetcthData = () => {

    //     axios.get("https://fakestoreapi.com/products")
    //         .then(response => {

    //             let newResponse = response.data.map((eachObject) => {

    //                 return { ...eachObject, count: 1, totalPrice: eachObject.price }
    //             })

    //             setproducts(newResponse)

    //             let result = sumofTotalPrice(newResponse)
    //             console.log(result)
    //             setTotalPrice(result)
    //             return newResponse
    //         })

    //     console.log(products)
    // }

    const sumofTotalPrice = (eachObject) => {

        let result = eachObject.reduce((total, value) => {

            return total + value.price
        }, 0)
        return result
    }

    function IncremetnAndDecrement(targetObj, type) {


        if (type == "increment") {
            var result = products.map((val) => {

                if (val.id == targetObj.id) {

                    val.count = val.count + 1

                }
                return val

            })
        } else {
            var result = products.map((val) => {

                if (val.id == targetObj.id) {

                    if (val.count > 1) {
                        val.count = val.count - 1
                    }

                }
                return val
            })
        }
        setproducts(result)


    }

    return (
        <>
            <h1>Total Price of Products {TotalPrice}</h1>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,auto)", justifyContent: "space-evenly", }}>

                {
                    products?.length > 0 ?
                        products.map(value => <ProductsListing key={value.id} data={value} IncremetnAndDecrement={IncremetnAndDecrement} />) : <h1>Loading...</h1>

                }
            </div>
        </>

    )
}

export default Products

export const ProductsListing = ({ data, IncremetnAndDecrement }) => {

    return (
        <>


            <div className="card" style={{ width: 300, textAlign: "center" }}>
                <img className="card-img-top" src={data.image} alt="Card image" width="50px" height="300" />
                <div className="card-body" >
                    <h4 className="card-title">{data.title}</h4>
                    <p className="card-text">{`$ ${data.price}`}</p>

                    {/* Buttons for increment and decrement */}




                    {/* <h4 className="card-title">{`Quantity : ${data.qty}`}</h4> */}
                    {/* <h4 className="card-title">{`Total Price :$ ${data.qty*data.price}`}</h4> */}

                    <h4 className="card-title" >
                        <button onClick={() => IncremetnAndDecrement(data, "decrement")}>-</button>

                        {
                            `${data.count}`
                        }

                        <button onClick={() => IncremetnAndDecrement(data, "increment")}>+</button>
                    </h4>





                    <Link to={`/productDetails/${data.id}`}>
                        <button className="btn btn-primary">See More</button>
                    </Link>
                </div>
            </div>
        </>
    )
}