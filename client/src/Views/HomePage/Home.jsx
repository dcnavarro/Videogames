// SearchBar: un input de búsqueda para encontrar videojuegos por nombre.
// Sector en el que se vea un listado de cards con los videojuegos. Al iniciar deberá cargar los primeros resultados obtenidos desde la ruta GET /videogames y deberá mostrar su:
// Imagen.
// Nombre.
// Géneros.
// Cuando se le hace click a una Card deberá redirigir al detalle de ese videojuego específico.
// Botones/Opciones para filtrar por género, y por si su origen es de la API o de la base de datos (creados por nosotros desde el formulario).
// Botones/Opciones para ordenar tanto ascendentemente como descendentemente los videojuegos por orden alfabético y por rating.
// Paginado: el listado de videojuegos se hará por partes. Tu SPA debe contar con un paginado que muestre un total de 15 videojuegos por página.
// ⚠️ IMPORTANTE: se deben mostrar tanto los videojuegos traidos desde la API como así también los de la base de datos, pero NO está permitido almacenar en la base de datos los videojuegos de la API. Solamente se pueden guardar aquellos creados desde el form.
// ⚠️ IMPORTANTE: debido a que en la API existen alrededor de 500.000 videojuegos, por cuestiones de performance puedes tomar la simplificación de obtener y paginar los primeros 100 videojuegos.

import Cards from '../../components/Cards/Cards';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {getVideogames} from '../../redux/actions';
import {Pagination} from '../../components/Pagination';
import style from '../HomePage/Home.module.css';



const Home = () =>{
    const dispatch = useDispatch()
    const allVideogames = useSelector((state)=> state.videogames)
    
// const [videogamesData, setVideogamesData] = useState([]);
const [currentPage, setCurrentPage] = useState(1);
const [videogamesPerPage, setVideogamesPerPage] = useState(15)

// useEffect(async () =>{
//     const response = await axios.get(`http://localhost:3001/videogames`
//     );

//     setVideogamesData(response.data);
// },[]);

const lastVideogameIndex = currentPage * videogamesPerPage;
const firstVideogameIndex = lastVideogameIndex - videogamesPerPage;
const currentVideogames = allVideogames.slice(firstVideogameIndex, lastVideogameIndex);
// const currentVideogames = videogamesData.slice(firstVideogameIndex, lastVideogameIndex);

const pagination = (pageNumber) =>{
    setCurrentPage(pageNumber)
}

useEffect(()=>{
        dispatch (getVideogames());
    },[dispatch])

    return(
        <div className={style.background}>
        <h1>Home</h1>
        <div>
            <select>
                <option>Sort By Name</option>
                <option value='asc'>Ascending</option>
                <option value='desc'>Descending</option>
            </select>
            <select>
                <option>Sort By Rating</option>
                <option value='asc'>Ascending</option>
                <option value='desc'>Descending</option>
            </select>
            <select>
                <option>Filter By Genre</option>
                <option value='all'>All</option>
                <option value='indie'>Indie</option>
                <option value='rpg'>RPG</option>
                <option value='strategy'>Strategy</option>
                <option value='action'>Action</option>
                <option value='adventure'>Adventure</option>
                <option value='shooter'>Shooter</option>
                <option value='casual'>Casual</option>
                <option value='simulation'>Simulation</option>
                <option value='arcade'>Arcade</option>
                <option value='puzzle'>Puzzle</option>
                <option value='platformer'>Platformer</option>
                <option value='racing'>Racing</option>
                <option value='multiplayer'>Massively Multiplayer</option>
                <option value='sports'>Sports</option>
                <option value='fighting'>Fighting</option>                
            </select>
            <select>
                <option>Filter By Origin</option>
                <option value='database'>Database - Created</option>
                <option value='api'>API - Existing</option>
            </select>
        </div>
        <br></br>

      <Pagination 
            allVideogames={allVideogames.length} 
            videogamesPerPage={videogamesPerPage} 
            pagination={pagination}
             />

              <br />
        <Cards />       
  
        </div>
    )
}

export default Home;