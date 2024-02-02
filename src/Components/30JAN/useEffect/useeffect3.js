import { useEffect } from "react"


const UseEffectEx3=()=>{

    useEffect(()=>{

        document.addEventListener('mousemove',mouseCapturing)
        return ()=>{

           document.removeEventListener('mousemove',mouseCapturing)
        }

    },[])
    const mouseCapturing=(event)=>{
        console.log(event.screenX)
        console.log(event.screenY)
    }

    return(

<>
</>
    )

}

export default UseEffectEx3