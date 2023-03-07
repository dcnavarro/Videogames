import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {filterVideogamesByGenre, filterVideogamesByOrigin,getVideogames, sortByName, sortByRating} from '../../redux/actions';
import {Link} from 'react-router-dom';
import {Card} from '../../components/Card/Card';
import {StyledHeader, HeaderImage} from '../../components/Styles/Header.styled';
import { Container } from '../../components/Styles/Container.styled';
import {Flex} from '../../components/Styles/Flex.styled';
import {Footer} from '../../components/Footer/Footer';
import { NavBar } from '../../components/NavBar/NavBar';
import { SearchBar } from '../../components/SearchBar/SearchBar';
import { Pagination } from '../../components/Pagination/Pagination';


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
        <Flex>
        <Container>
        <StyledHeader>
        <h1>Gamer Cloud</h1>
        <HeaderImage src='https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80' alt='' />
        <h3 >Best gaming website, every gamer should follow. Here you will be able to find amazing and updated information.</h3>
        <br />
        <h3>Are you an avid gamer? Do you follow multiple websites to fulfil your gaming adventures? Then you are at the right stop! </h3>    
        </StyledHeader>
        </Container>
        </Flex>
        <SearchBar />
        <br></br>
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
                <div>
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
        <Footer />
        </div>
    )
}

export default Home;