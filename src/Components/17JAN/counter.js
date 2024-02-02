import { Component } from "react";
import ChildButton from "./child";



class Counter extends Component{

    constructor(){

    
        super()
        this.state={
            count:0
        }
    }
    handler=()=>{

        this.setState({
            count:this.state.count+1
        })
    }

    render(){
        return(

            <>
            <h1>Counter</h1>
            <h1>{this.state.count}</h1>
            <ChildButton handling={this.handler}/>

            </>
        )
    }
}

export default Counter