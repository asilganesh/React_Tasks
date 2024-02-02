import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


const ProductDetails=()=>{

    const routeInformation=useParams()
    const[product,setproduct]=useState({})
    const[count,setcount]=useState(1)
    
    useEffect(()=>{fetchProduct(routeInformation.id) },[routeInformation.id,product])

    const fetchProduct=(id)=>{

        axios.get(`https://fakestoreapi.com/products/${id}`)
        .then(response=>{
            if(response.status===200){
                setproduct(() => {
                    let response1 = response.data


                        response1['qty'] = 1
                  
                    return response1
                })
            }
        })
    }

    //Function for increament and decrement of quantity

//   const quantityIncrement=()=>{


//   }

    // const quantityDecrement=()=>{

    //     if(product.qty<=0){
    //         console.log("quantity cannot be less than 0")
    //     }else{
    //     product.qty=product.qty-1
    //     setproduct(product)

    //     }
    // }

    const IncreaseCount=()=>{

        setcount(product=>count+1)

    }

    const DecreaseCount=()=>{

        if(count!=0){
            setcount(product=>count-1)
        }

    }

   

    return(
       
        <>
       
         <div className="card" style={{ width: 300, textAlign:"center"}}>
                <img className="card-img-top" src={product.image} alt="Card image" width="50px" height="300" />
                <div className="card-body" >
                    <h4 className="card-title">{product.title}</h4>
                    <p className="card-text">{`$ ${product.price}`}</p>

                    {/* Buttons for increment and decrement */}
                    {/* <div style={{display:"inline-flex"}}>
                
                    <input value="-" type="button"></input>
                    <input  style={{border:"none", textAlign:"center", width:"30px"}}  step="1" ></input>
                    <input value="+" type="button"></input>
                    </div> */}

                     

                    <h4 className="card-title"> <button onClick={DecreaseCount}>-</button>{` ${count} `}<button onClick={IncreaseCount}>+</button></h4>
                    
                   
                    <h4 className="card-title">{`Total Price :$ ${count*product.price}`}</h4>

               


                    
                    <button className="btn btn-primary" >Add to Cart</button>
                 
                </div>
            </div>
        </>
    )

}

export default ProductDetails