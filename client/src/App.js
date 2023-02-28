import './App.css';
import {Home, Landing, Form, Detail} from './Views/index';
// import NavBar from './components/NavBar/NavBar';
import {Route, Switch} from 'react-router-dom';

function App() {
  // const location = useLocation();
  return (
    <div className="App">
      <Switch >
   
      <Route exact path = '/' render={()=><Landing />} />  
      <Route path ='/home' render={()=><Home />} />
         {/* {location.pathname !=='/' && <NavBar />} */}
      <Route exact path ='/create' render={()=><Form />} />
      <Route path ='/:idVideogame' render={(props)=><Detail {...props}/>} />
    
      </Switch>
      
    </div>
  );
}

export default App;
