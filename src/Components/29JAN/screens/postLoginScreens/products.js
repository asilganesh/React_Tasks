import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"


const Products = () => {


    const [products, setproducts] = useState([])
    const[TotalPrice,setTotalPrice]=useState(null)

    useEffect(() => {

        fetcthData()



    }, [])

    const fetcthData = () => {

        axios.get("https://fakestoreapi.com/products")
            .then(response => {
                setproducts(() => {
                    let response1 = response.data

                    for (let i = 0; i < response1.length; i++) {

                        response1[i]['qty'] = 1
                    }
                  let result=sumofTotalPrice(response1)
                  console.log(result)
                  setTotalPrice(result)
                    return response1
                })
            })
        console.log(products)
    }

    const sumofTotalPrice=(eachObject)=>{

        let result=eachObject.reduce((total,value)=>{

            return total+value.price
        },0)
        return result
    }


    return (
        <>
            <h1>Total Price of Products {TotalPrice}</h1>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,auto)", justifyContent: "space-evenly", }}>

                {
                    products.length > 0 ?
                        products.map(value => <ProductsListing key={value.id} data={value} />) : <h1>Loading...</h1>

                }
            </div>
        </>

    )
}

export default Products

export const ProductsListing = ({ data }) => {

    return (
        <>


            <div className="card" style={{ width: 300 }}>
                <img className="card-img-top" src={data.image} alt="Card image" width="50px" height="300" />
                <div className="card-body" >
                    <h4 className="card-title">{data.title}</h4>
                    <p className="card-text">{`$ ${data.price}`}</p>

                    {/* Buttons for increment and decrement */}
                    {/* <div style={{display:"inline-flex"}}>
                
                    <input value="-" type="button"></input>
                    <input  style={{border:"none", textAlign:"center", width:"30px"}}  step="1" ></input>
                    <input value="+" type="button"></input>
                    </div> */}

                    {/* <h4 className="card-title">{`Quantity : ${data.qty}`}</h4> */}
                    {/* <h4 className="card-title">{`Total Price :$ ${data.qty*data.price}`}</h4> */}




                    <Link to={`/productDetails/${data.id}`}>
                        <button className="btn btn-primary">See More</button>
                    </Link>
                </div>
            </div>
        </>
    )
}