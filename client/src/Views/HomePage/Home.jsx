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

// import Cards from '../../components/Cards/Cards';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {filterVideogamesByGenre, filterVideogamesByOrigin,getVideogames, sortByName, sortByRating} from '../../redux/actions';
import {Pagination} from '../../components/Pagination/Pagination';
import {Link} from 'react-router-dom';
import {Card} from '../../components/Card/Card';
import style from '../HomePage/Home.module.css';


const Home = () =>{
    const dispatch = useDispatch()
    const allVideogames = useSelector((state)=> state.videogames)
    //obtengo los datos de los 100 videogames del estado

// const [videogamesData, setVideogamesData] = useState([]);
const [order, setOrder] = useState('')
const [currentPage, setCurrentPage] = useState(1);
const [videogamesPerPage, setVideogamesPerPage] = useState(15)
// console.log(videogamesPerPage) //15
console.log(setVideogamesPerPage)
console.log(order)
// useEffect(async () =>{
//     const response = await axios.get(`http://localhost:3001/videogames`
//     );

//     setVideogamesData(response.data);
// },[]);

const lastVideogameIndex = currentPage * videogamesPerPage;
const firstVideogameIndex = lastVideogameIndex - videogamesPerPage;
const currentVideogames = allVideogames.slice(firstVideogameIndex, lastVideogameIndex);
// const currentVideogames = videogamesData.slice(firstVideogameIndex, lastVideogameIndex);
// console.log(currentVideogames)//array con 15 videogames

const pagination = (pageNumber) =>{
    setCurrentPage(pageNumber)
}

useEffect(()=>{
    dispatch (getVideogames())
},[dispatch]);
    //obtengo los datos de los 100 videogames cuando el componente se monta
    
function handleClick(event){
    dispatch(getVideogames(event))
}

function handleFilterGenre(event){
    dispatch(filterVideogamesByGenre(event.target.value))
}

function handleFilterOrigin(event){
    dispatch(filterVideogamesByOrigin(event.target.value))
}

function handleSortByName(event){
    dispatch(sortByName(event.target.value));
    setCurrentPage(1);
    setOrder(`Ordered ${event.target.value}`)
}

function handleSortByRating(event){
    dispatch(sortByRating(event.target.value));
    setCurrentPage(1);
    setOrder(`Ordered ${event.target.value}`)
}

    return(
        <div className={style.container}>
        <br></br>
        <h2>Gamer Cloud</h2>
        <br></br>
        <button onClick={event=>handleClick(event)}>Reset Filters</button>
        <br></br>
        <div>
            <br></br>
            <select onChange={event=> handleSortByName(event)}>
                <option value='Asc'>Sort By Name</option>
                <option value='Asc'>Ascending</option>
                <option value='Desc'>Descending</option>
            </select>
            <select onChange={event=> handleSortByRating(event)}>
                <option>Sort By Rating</option>
                <option value='Asc'>Ascending</option>
                <option value='Desc'>Descending</option>
            </select >
            <select onChange={event=> handleFilterGenre(event)}>
                <option value='All'>Filter By Genre</option>
                <option value='All'>All</option>
                <option value='Indie'>Indie</option>
                <option value='RPG'>RPG</option>
                <option value='Strategy'>Strategy</option>
                <option value='Action'>Action</option>
                <option value='Adventure'>Adventure</option>
                <option value='Shooter'>Shooter</option>
                <option value='Casual'>Casual</option>
                <option value='Simulation'>Simulation</option>
                <option value='Arcade'>Arcade</option>
                <option value='Puzzle'>Puzzle</option>
                <option value='Platformer'>Platformer</option>
                <option value='Racing'>Racing</option>
                <option value='Multiplayer'>Massively Multiplayer</option>
                <option value='Sports'>Sports</option>
                <option value='Fighting'>Fighting</option> 
                <option value='Board Games'>Board Games</option>
                <option value='Educational'>Educational</option>
                <option value='Family'>Family</option>
                <option value='Arcade'>Arcade</option>      
                <option value='Card'>Card</option>         
            </select>
            <select onChange={event=> handleFilterOrigin(event)}>
                <option value='All'>Filter By Origin</option>
                <option value='Database'>Database - Created</option>
                <option value='API'>API - Existing</option>
            </select>
        </div>
        <br></br>

      <Pagination 
            allVideogames={allVideogames.length} 
            videogamesPerPage={videogamesPerPage} 
            pagination={pagination}
            currentPage={currentPage}
             />

              <br />
        
        {currentVideogames?.map((el)=>{
            return(
                <div className ={style.background}>
                    <Link to ={`/${el.id}`}>
                        <Card 
                        key={el.id} 
                        image={el.img ? el.img : el.image} 
                        name={el.name} 
                        genres={el.genres ? el.genres.map(el=>"    "+el.name+"  ") : el.Genres.map(el=> " " + el.name + "")}
                        />
                    </ Link>
                </ div>
            )

        })}
        {/* <Cards />        */}
  
        </div>
    )
}

export default Home;