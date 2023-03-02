
import {VideogameOrange} from '../../components/VideogameOrange/VideogameOrange';
import style from '../FormPage/Form.module.css';
import { useState, useEffect } from "react";
import {useHistory} from 'react-router-dom';
import {NavBar} from '../../components/NavBar/NavBar';
import { getGenres, postVideogame } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

const Form = () =>{

    const dispatch = useDispatch();

    const history= useHistory();
    
    const genres = useSelector((state)=>state.genres); 

    const [form, setForm] = useState({
        id:'',
        name:'',
        image:'',
        about:'',
        platforms:'',
        releaseDate: '',
        rating:'',
        genreId:[],
    })

        const [errors, setErrors] = useState({
        // id:'',
        // name:'',
        // image:'',
        // about:'',
        // platforms:'',
        // releaseDate: '',
        // rating:'',
        // genreId:'[]',   
    })

    useEffect(()=>{
        dispatch(getGenres())
    }, [dispatch])

     
    const changeHandler = (event) =>{
    const property = event.target.name;
    const value = event.target.value;
    
    validate({...form, [property]:value})
    setForm({...form, [property]:value})
    }

    const validate = (form)=>{
        //Separar los if para poder borrar los mensajes de error - Si es que sí existe la escritura borrar el error .-
        if(!form.name.length){
            
            setErrors({...errors, name: 'Videogame name is required'})
        }else if(!form.id.length){
            
            setErrors({...errors, id: 'Videogame Id is required'})
        }else if(form.rating<0.0 || form.rating>10.0){
            
            setErrors({...errors, rating:'Rating should be more than 0 and less than 11'})
        }}

    const submitHandler = (event) =>{
        event.preventDefault();
        dispatch(postVideogame(form));
        errors ? alert('Error! Please verify request data') : alert('Success! New videogame created')
        setForm({
        id:'',
        name:'',
        image:'',
        about:'',
        platforms:'',
        releaseDate: '',
        rating:'',
        genreId:[],
        });
        history.push('/home');
    }

    return(
        <div className={style.title}>
        <NavBar />
        <form onSubmit={submitHandler}>
            <div>
            <VideogameOrange />
            <h2>Create your own Videogame!</h2>
            </div>
            <div className={style.form}>
            <div>
                <label>Id: </label>
                <input placeholder = '[4UUID] Universally unique identifier' type='text' value={form.id} onChange={changeHandler} name='id' />
                {errors.id && <span>{errors.id}</span>} 
            </div>
            <div>
                <label>Name: </label>
                <input type='text' value={form.name} onChange={changeHandler} name='name' />
                {errors.name && <span>{errors.name}</span>} 
            </div>
            <div>
                <label>Image: </label>
                <input placeholder= '[URL] Uniform Resource Locator' type='text' value={form.image} onChange={changeHandler} name='image' />
            </div>
            <div>
                <label>About: </label>
                <input type='text' value={form.about} onChange={changeHandler} name= 'about' />
            </div>
            <div>
                <label>Platforms: </label>
                <input type='text' value={form.platforms} onChange={changeHandler} name='platforms' />
            </div>
            <div>
                <label>Release Date: </label>
                <input placeholder='YYYY-DD-MM' type='text' value={form.releaseDate} onChange={changeHandler} name='releaseDate' />
            </div>
            <div>
                <label>Rating: </label>
                <input type='float' value={form.rating} onChange={changeHandler} name='rating' />
                {errors.rating && <span>{errors.rating}</span>} 
            </div>
            <div>
                <label>Genre Id: </label>
                <input type='text' value={form.genreId} onChange={changeHandler} name='genreId'  />
            </div>
            <div>
                <label>Genre: </label>
                <select>
                    {genres.map((el)=>(
                        <option value={el.id}>{el.name}</option>
                    ))
                    }
                </select>
            </div>
            </div>
            <button type='submit'>Create</button>
        </form>
        </div>
    )
};

export default Form;