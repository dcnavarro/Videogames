

import { Link } from "react-router-dom";


const Landing = () =>{
    return(
        <div >
        <h1>GamerCloud</h1>
        <h2>All Gaming Experience is Here</h2>
        <h3>Welcome!</h3>
        <br></br>
        <Link to='/home'><button>Let's Start</button></Link>
        </div>
    )
}

export default Landing;