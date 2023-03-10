import {useState} from 'react';
import {useDispatch} from 'react-redux';
import { getVideogamesByName } from '../../redux/actions';

const SearchBar = () =>{
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
    <div>
        <input
        type = 'text'
        placeholder = 'Search by Name' 
        onChange = {(event)=> handleInputChange(event)}
         />
        <button type = 'submit' onClick ={(event)=>handleSubmit(event)}>Search</button>
        <br></br>      
    </div>
    
    </>
    )
}

export  {SearchBar};