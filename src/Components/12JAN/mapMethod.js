import Card from "./card"


const Mapmethod=()=>{

 const members=[
        {
            name:"ganesh",
            age:"23"

        },
        {
            name:"veda vyas",
            age:"22"
            
        },
        {
            name:"sainath",
            age:"22"
            
        },
        {
            name:"ganesh",
            age:"23"

        },
        {
            name:"veda vyas",
            age:"22"
            
        },
        {
            name:"sainath",
            age:"22"
            
        }
    ]
    return(

        <>
        <div style={{display:"grid",gridTemplateColumns:"auto auto auto"}}>
        {members.map((details)=> <Card profile={details}/>)}
        </div>
        </>
    )
}

export default Mapmethod
