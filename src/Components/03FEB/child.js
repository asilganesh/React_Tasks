
import React from "react"

const Child=()=>{

    console.log("CHild Rerender")
    return(

        <>
        <h1>Good Morning!</h1>
        </>
    )
}

export default React.memo(Child)