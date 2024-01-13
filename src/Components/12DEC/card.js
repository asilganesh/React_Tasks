import narutoimage from "./naruto.jpg"

const ProfileCard=(par)=>{
    console.log(par)
    return(
        
<div className="card" style={{width:"30%"}}>
  <img className="card-img-top" src={narutoimage} alt="Card image" style={{width:"100%"}}/>
  <div className="card-body">
    <h4 className="card-title" style={{color:par.color}}>{par.profile.name}</h4>
    <p className="card-text">{par.profile.designatin}</p>
    <p className="card-text">{par.profile.sal}</p>
    <a href="#" className="btn btn-primary">See Profile</a>
  </div>
</div>
    )
}

export default ProfileCard