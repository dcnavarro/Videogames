// Este formulario debe ser controlado completamente con JavaScritp. No se pueden utilizar validaciones HTML, ni utilizar librerías especiales para esto. Debe contar con los siguientes campos:

// Nombre.
// Imagen.
// Descripción.
// Plataformas.
// Fecha de lanzamiento.
// Rating.
// Posibilidad de seleccionar/agregar varios géneros en simultáneo.
// Botón para crear el nuevo videojuego.
// [IMPORANTE]: es requisito que el formulario de creación esté validado sólo con JavaScript. Puedes agregar las validaciones que consideres. Por ejemplo: que el nombre del videojuego no pueda contener símbolos, o que el rating no pueda exceder determinado valor, etc.

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

    useEffect(()=>{
        dispatch(getGenres())
    }, [dispatch])

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

    const validate = (form)=>{
        // let errors = {};
        if(form.name.length<1){
            // errors.name = 
            setErrors({...errors, name: 'Videogame name is required'})
        }else if(form.id.length<1){
            // errors.id = 
            setErrors({...errors, id: 'Videogame Id is required'})
        }else if(form.rating<0.0 || form.rating>10.0){
            // errors.rating = 
            setErrors({...errors, rating:'Rating should be more than 0 and less than 11'})
        }}
        // return errors
        // }
    //     if(regEx.test(form.email)){
    //         setErrors({...errors, email:''})
    // aplicar lógica para que el mensaje de error no aparezca con los campos vacíos
    //     }else{
    //         setErrors({...errors, email:'Email error'})
    //     }
    // }

    const changeHandler = (event) =>{
    const property = event.target.name;
    const value = event.target.value;
    // validate (form)
    setForm({...form, [property]:value})
    validate(form)
    //acá se puede ejecutar validate, para validar cuando hago un cambio 
    
    //pero atención, porque la demora del setForm hace que la validación vaya atrasada!!
    //lo soluciono poniendo validate antes de setForm, y pasándole lo mismo que al estado (*)
    }

    // const handleDelete = (el)=>{
    //     setForm({
    //         ...form, 
    //         genres: form.genres.filter(e => e !== el),
    // })
    // }

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
        <div>
        <NavBar />
        <form onSubmit={submitHandler}>
            <h2>Create your own Videogame!</h2>
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
                <label>GenreId: </label>
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
            <button type='submit'>Create</button>
        </form>
        {/* {form.genres.map(el=>
        <div>
            <p>{el}</p>
            <button onClick={()=>handleDelete(el)}>X</button>
        </ div>

        )} */}
        </div>
    )
}

//Se puede grisar el botón de submit hasta que se completen todos los campos

// Nombre.
// Imagen.
// Descripción.
// Plataformas.
// Fecha de lanzamiento.
// Rating.
// Posibilidad de seleccionar/agregar varios géneros en simultáneo.
// Botón para crear el nuevo videojuego.

export default Form;