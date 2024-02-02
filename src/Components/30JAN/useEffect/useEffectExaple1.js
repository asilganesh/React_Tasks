import axios from "axios"
import { useEffect, useState } from "react"



const UseEffectEx1=()=>{

    const[productListing,setProductListing]=useState([])
    useEffect(()=>{
        fetchData()
        console.log("componet mount")
    },[])


    const fetchData=()=>{

        axios.get("https://fakestoreapi.com/products")
        .then(response=>{
            if(response.status===200){
                setProductListing(response.data)
            }
        })
    }

    return(

        <>
        {
            
           productListing.length>0 ?
           productListing.map(val=> <ProductListing key={val.id} data={val}/>
           ):<h1>loading...</h1>
          

        }
        </>
    )
}

export default UseEffectEx1


const ProductListing=({data})=>{

    return(

        <>
        <div>
        <h1> {data.title}</h1>
        </div>
        </>
    )
}