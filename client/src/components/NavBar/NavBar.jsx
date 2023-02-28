import {Link} from 'react-router-dom';
import style from '../NavBar/NavBar.module.css';

const NavBar = () =>{
    return(
    <>
    <div className ={style.nav}>
        <button className={style.navLinks}><Link to='/home' className={style.navLinks}>Home</Link></button>
        <button className={style.navLinks}><Link to='/create'className={style.navLinks}>Create Videogame</Link> </button>
        <br></br>      
    </div>
    </>
    )
}

export  {NavBar}; 