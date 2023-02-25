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

import { useState } from "react";
import axios from 'axios';

const Form = () =>{

    const [form, setForm] = useState({
        id:'',
        name:'',
        image:'',
        about:'',
        platforms:'',
        releaseDate: '',
        rating:'',
        genre:'',
    })

    // const [errors, setErrors] = useState({
    //     id:'',
    //     name:'',
    //     image:'',
    //     about:'',
    //     platforms:'',
    //     releaseDate: '',
    //     rating:'',
    //     genre:'',   
    // })

    const changeHandler = (event) =>{
        const property = event.target.name;
        const value = event.target.value;

    //(*)validate({...form, [property]:value})
        setForm({...form, [property]:value})
    //acá se puede ejecutar validate, para validar cuando hago un cambio 
    //validate (form)
    //pero atención, porque la demora del setForm hace que la validación vaya atrasada!!
    //lo soluciono poniendo validate antes de setForm, y pasándole lo mismo que al estado (*)

    }

    // const validate = (form)=>{
    //     if(regEx.test(form.email)){
    //         setErrors({...errors, email:''})
    // aplicar lógica para que el mensaje de error no aparezca con los campos vacíos
    //     }else{
    //         setErrors({...errors, email:'Email error'})
    //     }
    // }

    const submitHandler = (event) =>{
        event.preventDefault();
        // alert('videogame created')
        axios.post(`http://localhost:3001/videogames`, form)
        .then(res=>alert(res))
        .catch(err=>alert(err))
    }

    return(
        <form onSubmit={submitHandler}>
            <div>
                <label>Id: </label>
                <input type='text' value={form.id} onChange={changeHandler} name='id' />
                {/*{errors.id && <span>{errors.id}</span>}  */}
            </div>
            <div>
                <label>Name: </label>
                <input type='text' value={form.name} onChange={changeHandler} name='name' />
                {/*{errors.email && <span>{errors.email}</span>}  */}
            </div>
            <div>
                <label>Image: </label>
                <input type='text' value={form.image} onChange={changeHandler} name='image' />
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
                <input type='text' value={form.releaseDate} onChange={changeHandler} name='releaseDate'/>
            </div>
            <div>
                <label>Rating: </label>
                <input type='text' value={form.rating} onChange={changeHandler} name='rating' />
            </div>
            <div>
                <label>Genre: </label>
                <input type='text' value={form.genre} onChange={changeHandler} name='genre' />
            </div>
            <button type='submit'>Create</button>
        </form>
    )
}

// Nombre.
// Imagen.
// Descripción.
// Plataformas.
// Fecha de lanzamiento.
// Rating.
// Posibilidad de seleccionar/agregar varios géneros en simultáneo.
// Botón para crear el nuevo videojuego.

export default Form;