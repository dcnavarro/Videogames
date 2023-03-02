import {VideogamePurple} from '../../components/VideogamePurple/VideogamePurple';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {filterVideogamesByGenre, filterVideogamesByOrigin,getVideogames, sortByName, sortByRating} from '../../redux/actions';
import {Pagination} from '../../components/Pagination/Pagination';
import {Link} from 'react-router-dom';
import {Card} from '../../components/Card/Card';
import {NavBar} from '../../components/NavBar/NavBar'
import {SearchBar} from '../../components/SearchBar/SearchBar'
import style from '../HomePage/Home.module.css';


const Home = () =>{
const dispatch = useDispatch()
const allVideogames = useSelector((state)=> state.videogames)

const [order, setOrder] = useState('')
const [currentPage, setCurrentPage] = useState(1);
const [videogamesPerPage, setVideogamesPerPage] = useState(15)

console.log(setVideogamesPerPage)
console.log(order)

const lastVideogameIndex = currentPage * videogamesPerPage;
const firstVideogameIndex = lastVideogameIndex - videogamesPerPage;
const currentVideogames = allVideogames.slice(firstVideogameIndex, lastVideogameIndex);

const pagination = (pageNumber) =>{
    setCurrentPage(pageNumber)
}

useEffect(()=>{
    dispatch (getVideogames())
},[dispatch]);

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
        
        <div>
        <NavBar />
        <div className={style.gray}>
        <h2 className={style.subtitle}>Gamer Cloud</h2>
        <h3 >Best gaming website, every gamer should follow. Here you will be able to find amazing and updated information.</h3> 
        <br></br>
        <h3 className={style.body}>Are you an avid gamer? Do you follow multiple websites to fulfil your gaming adventures? Then you are at the right stop! </h3>
        <br></br>
        <VideogamePurple />
        <SearchBar />
        <div className={style.gray}>
        <br></br>
        <br></br>
        <div className={style.filterBar}>
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
                <div className={style.gray}>
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
        </div>
        </div>
        </div>
    )
}

export default Home;