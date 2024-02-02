import React, { useState } from "react"


const Task2 = () => {

    const arr = []

    const [inputValue, SetInputValue] = useState()
    const [currentValue, fun]=useState([])

    const handleInput=(event)=>{
        event.preventDefault()

       
        let count=Number(event.target.value)
 
        fun((value)=>{
            value=[]
            for(let i=0;i<count;i++){
                value=[...value,1]
            }
            return value
        })

        


    }

    return (


        <>
           <form onChange={handleInput} >
           <input type="text" value={inputValue}></input>
           {/* <button type="submit" >Submit</button> */}

           </form>
            <div style={{display:"grid", gridTemplateColumns:"repeat(5,auto)"}}>
            {
               

               currentValue.map((val, index) =>



                    <React.Fragment key={index}>

                        <div style={{ width: "100px", height: "100px", borderRadius: "50%", border: "1px solid black", 
                        margin: "2% auto", textAlign:"center"}} ><b>{index+1}</b>

                        </div>


                    </React.Fragment>






                )
            }
            </div>



        </>






    )

}



export default Task2