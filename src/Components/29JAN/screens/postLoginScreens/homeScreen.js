import FooterComponent from "../../footer/footer"
import NavBar from "../../navBar/navBar"

import React from "react"



import Naruto from "../../naruto.jpg"
import UseEffectEx1 from "../../../30JAN/useEffect/useEffectExaple1"
import UseEffectEx2 from "../../../30JAN/useEffect/useEffectEx2"
import UseEffectEx3 from "../../../30JAN/useEffect/useeffect3"

const HomeScreen = () => {

    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9,1,2,3]

    return (

        <>
            <NavBar />
            {/* <UseEffectEx3/> */}
            {/* <UseEffectEx2/> */}

            {/* <UseEffectEx1/> */}
           {/* <div style={{display:"grid", gridTemplateColumns:"auto auto auto", justifyContent:"space-around"}}>
            {
                arr.map((val)=>
                <React.Fragment>
                   <div className="card" style={{ width: 400 }}>
                            <img className="card-img-top" src={Naruto} alt="Card image" />
                            <div className="card-body">
                                <h4 className="card-title">John Doe</h4>
                                <p className="card-text">Some example text.</p>
                                <a href="#" className="btn btn-primary">
                                    See Profile
                                </a>
                            </div>
                        </div>
                </React.Fragment>)
            }
           </div> */}
            <FooterComponent />
        </>
    )
}

export default HomeScreen