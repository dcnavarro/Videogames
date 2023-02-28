import Card from '../Card/Card';
import style from '../Cards/Cards.module.css';
import {useSelector} from 'react-redux';


const Cards = ()=>{

// mi objetivo es que videogames venga de mi estado global
// debo implementar el store de redux para que eso suceda
const videogames = useSelector(state=>state.videogames)

    
    return(
        <div className={style.container}>
            {videogames.map(el=>{
                return <Card 
                key={el.id}
                image={el.image}
                name={el.name}
                genres={el.genres.map(el=>"    "+el.name+"  ")}              
                />
            })}
        </ div>
    )
        }

export default Cards;