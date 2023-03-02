import {Link} from 'react-router-dom';
import style from '../NavBar/NavBar.module.css';

const NavBar = () =>{
    return(
    <>
    <div className ={style.nav}>
        <div className={style.menu}>
        <Link to='/home' className={style.navLinks}>Home</Link>
        </div>
        <div className={style.menu}>
        <Link to='/create'className={style.navLinks}>Create Videogame</Link>
        </div>     
    </div>
    </>
    )
}

export  {NavBar}; 