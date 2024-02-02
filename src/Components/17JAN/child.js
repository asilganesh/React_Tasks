import { Component } from "react";


class ChildButton extends Component{


    render(){
        return(

            <button onClick={()=>this.props.handling()}>Increase by 1</button>
        )
    }
}

export default ChildButton

// const ChildButton=()=>{

//     return(
//         <button onClick={()=>this.props.handling()}>Increase by 1</button>

//     )
// }

// export default ChildButton