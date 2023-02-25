//Alguna imagen de fondo representativa al proyecto.
//Botón para ingresar a la home page.

import { Link } from "react-router-dom";
import style from '../LandingPage/Landing.module.css';


const Landing = () =>{
    return(
        <div className={style.background}>
        <h1>GamerCloud</h1>
        <h2>All Gaming Experience is Here</h2>
        <>Welcome!</>
        <br></br>
        <Link to='/home'><button>Let's Start</button></Link>
        </div>
    )
}

export default Landing;