import { useContext } from "react"
import FooterComponent from "../../footer/footer"
import NavBar from "../../navBar/navBar"
import { DataShare } from "../../navagitaionStack/navigation"


const AddName = () => {

    const getData=useContext(DataShare)
    const{name,changeName}=getData


    const fetchAndSetName=(event)=>{
        event.preventDefault()
        changeName(event.target.form[0].value)
        event.target.form[0].value=""
    }




    return (

        <>
            <NavBar/>
            <form style={{ textAlign: "center" } } >
                <label>Enter Name :
                    <input type="text"></input>
                </label>
                <input type="submit" value="Add Name" onClick={fetchAndSetName}></input>
                {/* <button type="submit" >Add Name</button> */}

            </form>
            {/* <FooterComponent/> */}

        </>

    )
}

export default AddName