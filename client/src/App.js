import './App.css';
import {Home, Landing, Form, Detail} from './Views/index';
import NavBar from './components/NavBar/NavBar';
import {Route, useLocation} from 'react-router-dom';

function App() {
  const location = useLocation();
  return (
    <div className="App">
      {location.pathname !=='/' && <NavBar />}
      <Route exact path = '/' render={()=><Landing />} />  
      <Route exact path ='/home' render={()=><Home />} />
      <Route exact path ='/:idVideogame' render={(props)=><Detail {...props}/>} />
      <Route exact path ='/create' render={()=><Form />} />
      
    </div>
  );
}

export default App;
