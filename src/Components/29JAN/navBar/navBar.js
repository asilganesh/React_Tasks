import { useContext } from "react"
import { Link } from "react-router-dom"
import { DataShare } from "../navagitaionStack/navigation"


const NavBar = () => {
    const getDataShare=useContext(DataShare)
    const {name}=getDataShare

    const link={

        margin:30,
        textDecoration:"none",
        fontSize:"32px"
    }

    return (
        <>

            <nav className="navbar navbar-expand-sm bg-light"  >
                <div className="container-fluid"  >
                    {/* Links */}
                    <ul className="navbar-nav" >
                        <li className="nav-item">
                            <Link to="/" style={link}>Home</Link>
                        </li>
                        <li className="nav-item">
                        <Link to="/about" style={link}>About</Link>

                        </li>
                        <li className="nav-item">
                        <Link to="/settings" style={link}>Settings</Link>

                           
                        </li>
                        <li className="nav-item">
                        <Link to="/product" style={link}>Product</Link>

                           
                        </li>

                        <li className="nav-item">
                        <Link to="/addname" style={link}>{name}</Link>

                           
                        </li>
                    </ul>
                </div>
            </nav>
        </>

    )
}

export default NavBar