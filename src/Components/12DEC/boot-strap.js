import ProfileCard from "./card"


const BootstrapLayout=()=>{
    const profiledetails=[
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
        <div className="container-fluid p-5 bg-primary text-white text-center">
  <h1>My First Bootstrap Page</h1>
  <p>Resize this responsive page to see the effect!</p> 
</div>
  
<div className="container mt-5">
  <div className="row">
    <div className="col-sm-4">
     <ProfileCard profile={profiledetails[0]}/>

    </div>
    <div className="col-sm-4">
    <ProfileCard profile={profiledetails[1]}/>
    </div>
    <div className="col-sm-4">
    <ProfileCard profile={profiledetails[2]}/>
    </div>
  </div>
</div>
        </>
    )
}

export default BootstrapLayout