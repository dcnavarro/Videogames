// import './App.css';
import {Home, Landing, Form, Detail} from './Views/index';
// import NavBar from './components/NavBar/NavBar';
import {Container} from './components/Styles/Container.styled';
import {ThemeProvider} from 'styled-components';
import { GlobalStyles } from './components/Styles/Global.styled';
import {Route, Switch} from 'react-router-dom';

const theme ={
  colors:{
    header: '#fff',
    body: '#fff',
    footer: '#eef1f1'
  }
}

function App() {
  // const location = useLocation();
  return (
    
    <ThemeProvider theme = {theme}>
    <GlobalStyles />
    <Container>
      <Switch >
   
      <Route exact path = '/' render={()=><Landing />} />  
      <Route path ='/home' render={()=><Home />} />
         {/* {location.pathname !=='/' && <NavBar />} */}
      <Route exact path ='/create' render={()=><Form />} />
      <Route path ='/:idVideogame' render={(props)=><Detail {...props}/>} />
    
      </Switch>
      
    </Container>
    </ThemeProvider>
  );
}

export default App;
