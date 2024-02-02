
import image from "./naruto.jpg"

const Card = (props) => {

    return (
        <>
            <div className="card " style={{ width:"100%" }}>
                <img className="card-img-top" src={image} alt="Card image" />
                <div className="card-body">
                    <h4 className="card-title" style={{color:props.color}}>{props.profile.name}</h4>
                    <p className="card-text">{props.profile.age}</p>
                    <a href="#" className="btn btn-primary">
                        See Profile
                    </a>
                </div>
            </div>

        </>

    )
}

export default Card