import {Link} from 'react-router-dom';
import {Container} from '../Styles/Container.styled';
import {StyledNavBar} from '../Styles/StyledNavBar.styled'; 
import {StyledButton} from '../Styles/StyledButton.styled';


const NavBar = () =>{
    return(
    <>
    <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,1,200" rel="stylesheet" />

    <Container>
    <StyledNavBar>
        <StyledButton bg='#535151b9' color='#fff'>
        <span class='material-symbols-outlined'>home</span>
        <Link to='/home'>Home</Link>
        </StyledButton>
        <StyledButton bg='#535151b9' color='#fff'>
         <span class='material-symbols-outlined'>add_circle</span>
        <Link to='/create'>Create Videogame</Link> 
        </StyledButton>    
    </StyledNavBar>
    </Container>
    </>
    )
}

export  {NavBar}; 