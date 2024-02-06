import axios from "axios"
import { useEffect, useState } from "react"



export const useAxios=()=>{


const [data,setData]=useState(null)  

useEffect(()=>{

    fetcthData()

},[data])

const fetcthData = () => {

    axios.get("https://fakestoreapi.com/products")
        .then(response => setData(response.data))

           
}
return [data]

}