import { Component } from "react";









class Mounting extends Component{

    constructor(){

        super()
        this.state={
            message:"Good Morning"
        }
    }

    render(){

        return(

            <h2>Mounting {this.state.message}</h2>
        )
    }
}

export default Mounting