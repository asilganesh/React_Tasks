import FooterComponent from "../../footer/footer"
import NavBar from "../../navBar/navBar"





const AboutScreen = () => {

    return (


        <>
            <NavBar />
           
                <div className="mt-4 p-5 bg-primary text-white rounded">
                    <h1>This is ABout Us</h1>
                    <p>Lorem ipsum...</p>
                </div>
           
            <FooterComponent />
        </>
    )

}

export default AboutScreen
