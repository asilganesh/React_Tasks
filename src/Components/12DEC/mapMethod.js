import ProfileCard from "./card"

const MapMethod=()=>{

    const profiledetails=[
        {
            name:"Ganesh", designatin:"developer", sal:"100k", color:"red"
        },
        {
            name:"sai" ,designatin:"developer", sal:"100k" ,colo:"yellow"
        },
        {
            name:"veda",  designatin:"developer", sal:"100k",color:"blue"
        },
        {
            name:"Ganesh", designatin:"developer", sal:"100k", color:"red"
        },
        {
            name:"sai" ,designatin:"developer", sal:"100k" ,colo:"yellow"
        },
        {
            name:"veda",  designatin:"developer", sal:"100k",color:"blue"
        },
        {
            name:"Ganesh", designatin:"developer", sal:"100k", color:"red"
        },
        {
            name:"sai" ,designatin:"developer", sal:"100k" ,colo:"yellow"
        },
        {
            name:"veda",  designatin:"developer", sal:"100k",color:"blue"
        }
    ]


    return(
        <>
        {profiledetails.map((details)=><ProfileCard profile={details}/>) }
        </>
    )
}

export default MapMethod