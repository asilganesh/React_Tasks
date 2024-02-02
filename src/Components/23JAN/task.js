import React, { useState } from "react"


const Task = () => {

    const arr = []

    const [cv, fn] = useState([])

    const addCircle = () => {
   
        fn((value)=>[...value,false])
          
    }
  
   
    var count = 0

    const handleBackGround=(index)=>{
        
       fn((value)=>{
        const val=[...value]
        val[index]=!val[index]

        return val
       })
       
    }
    for (let i = 0; i < cv.length; i++) {
        if (cv[i] == true) {
            count++
        }
    }
   

    return (


        <>
        <div style={{display:'flex',gap:'10%',fontWeight:'bold'}}>
            <button onClick={addCircle}>Click to Add Circle</button>
            <h3>Total Circles--{cv.length}</h3>
            <h3>Dark Circlers --{count}</h3>
            <h3> light Circles --{cv.length - count}</h3>
            </div>

            {


                cv.map((val, index) =>



                    <React.Fragment key={index}>

                        <div style={{ width: "100px", height: "100px", borderRadius: "50%", border: "1px solid black", margin: "2% auto", backgroundColor:val?"black":"white"}}
                            onClick={()=>handleBackGround(index)}>

                        </div>


                    </React.Fragment>






                )
            }




        </>






    )

}



export default Task