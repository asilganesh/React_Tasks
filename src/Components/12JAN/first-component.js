
import Card from "./card.js"

const BootstrapLayout = () => {

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
            
        }
    ]

    return (

        <>
            <>
                <div className="container-fluid p-5 bg-primary text-white text-center">
                    <h1>Welcome to React</h1>
                    <p>Resize this responsive page to see the effect!</p>
                </div>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-sm-4">
                            <Card profile={members[0]}/>
                        </div>
                        <div className="col-sm-4">
                            <Card profile={members[1]}/>
                        </div>
                        <div className="col-sm-4">
                           <Card profile={members[2]}/>
                        </div>
                    </div>
                </div>
            </>

        </>
    )
}

export default BootstrapLayout