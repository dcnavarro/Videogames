//Alguna imagen de fondo representativa al proyecto.
//Botón para ingresar a la home page.

import { Link } from "react-router-dom";
import style from '../LandingPage/Landing.module.css';


const Landing = () =>{
    return(
        <div className={style.background}>
        <h1 className={style.title}>GamerCloud</h1>
        <h2 className={style.subtitles}>All Gaming Experience is Here</h2>
        <h3 className={style.subtitles}>Welcome!</h3>
        <br></br>
        <Link to='/home'><button className={style.button}>Let's Start</button></Link>
        </div>
    )
}

export default Landing;