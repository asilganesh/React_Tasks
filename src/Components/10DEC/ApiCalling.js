

function ApiCalling(){


   const handleEvent=()=>{
    let count=0

        try{
         fetch("https://fakestoreapi.com/product")
        .then(response=>response.json())
        .then(response=>console.log(response))
        .catch(count=count+1)
        if(count>0) throw "Not found"
        
        }catch(err){
            console.log(err)
        }

    }

    return(

        <button onClick={handleEvent}>Click me</button>
        
    )


}

export default ApiCalling