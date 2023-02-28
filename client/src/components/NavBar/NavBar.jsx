import {useState} from 'react';
import {useDispatch} from 'react-redux';
import { getVideogamesByName } from '../../redux/actions';
import {Link} from 'react-router-dom';
import style from './NavBar.module.css';

const NavBar = () =>{
    const dispatch = useDispatch();
    const [name, setName]=useState('');

    const handleInputChange = (event) =>{
    setName(event.target.value)
    }
     
    const handleSubmit = (event) =>{
    dispatch(getVideogamesByName(name))
    }
         
    return(
    <>
    <div className={style.mainContainer}>
        <input
        type = 'text'
        placeholder = 'Search by Name' 
        onChange = {(event)=> handleInputChange(event)}
         />
        <button type = 'submit' onClick ={(event)=>handleSubmit(event)}>Search</button>
        <Link to='/home'>Home</Link>
        <Link to='/create'>Create Videogame</Link> 
        <br></br>      
    </div>
    
    </>
    )
}

export default NavBar; 