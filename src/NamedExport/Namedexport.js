

const Hello=()=>{

    const obj={
        name:"ganesh",
        age:23,
        place:"Hyderabad"
    }

    const {name,age,place}=obj
    return(

        <div>
            <h1>Name: {name}</h1>
            <h1>Age: {age}</h1>
            <h1>Place:  {place}</h1>

        </div>
    )
}

export default Hello
// export const Hello1=()=>{

//     return(

//         <div>
//             <h1>Hello1</h1>
//         </div>
//     )
// }
// export const Hello2=()=>{

//     return(

//         <div>
//             <h1>Hello2</h1>
//         </div>
//     )
// }


