import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {NavBar} from '../../components/NavBar/NavBar';
import {Footer} from '../../components/Footer/Footer';
import { getVideogameDetail } from '../../redux/actions';
import {useEffect} from 'react';
import { Container } from '../../components/Styles/Container.styled';
import { StyledCard } from '../../components/Styles/StyledCard.styled';
import { Flex } from '../../components/Styles/Flex.styled';
import { StyledDetail } from '../../components/Styles/StyledDetail.styled';
import { StyledButton } from '../../components/Styles/StyledButton.styled';

const Detail = (props) =>{
    const dispatch =  useDispatch();
   
    useEffect(() => {
    dispatch(getVideogameDetail(props.match.params.idVideogame));
    }, [props.match.params.idVideogame], []);

    const eachVideogame = useSelector((state) => state.videogameDetail)
 
    return(
        <div>
        <NavBar />
        <Flex>
        <Container >
        <StyledCard>
            <StyledDetail>
                <img alt='Not found' src={eachVideogame.background_image? eachVideogame.background_image : eachVideogame.image} width='350px' height='200px' />
                <h1>{eachVideogame.name}</h1>
                <h2>Id: {eachVideogame.id}</h2>
                <h2>Rating: {eachVideogame.rating}</h2>
                <h2>Release Date: {eachVideogame.released? eachVideogame.released : eachVideogame.releaseDate}</h2>
                {/* { <h3>{eachVideogame.platforms.map(el=>el.platform.name).toString()}</h3> }
                { <h3>{eachVideogame.genres? eachVideogame.genres.map(el=>el.name).toString() : eachVideogame.Genres.map(el=>" "+el.name+" ")}</h3> } */}
                <h2>About:</h2>
                <h5>{eachVideogame.description? eachVideogame.description : eachVideogame.about}</h5>
            </StyledDetail>
        </StyledCard>  
        <Container> 
        <Link to='/home'><StyledButton bg='#020202b8' color='#fff'>Back</StyledButton></Link>
        </Container>   
        </Container>
        </Flex>
        <Footer />
    </div>
    )
}

export default Detail;
