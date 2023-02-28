import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import { getVideogameDetail } from '../../redux/actions';
import {useEffect} from 'react';
// ID.
// Nombre.
// Imagen.
// Plataformas.
// Descripción.
// Fecha de lanzamiento.
// Rating.
// Géneros.

const Detail = (props) =>{
    const dispatch =  useDispatch();

//     const Component = () => {
//   const { userId } = useParams();
  
//   const userObject = useMemo(() => {
//     return { id: userId };
//   }, [userId]); // Don't forget the dependencies here either!
   
    useEffect(() => {
    dispatch(getVideogameDetail(props.match.params.idVideogame));
    }, [props.match.params.idVideogame], []);

    const eachVideogame = useSelector((state) => state.videogameDetail)
    //ver posibilidad de trabajar con la propiedad created in Db en los condicionales
    return(
        <div>
        <h1>Esta es la vista de Detail</h1>
        {
                <div>
                <img alt='Not found' src={eachVideogame.background_image? eachVideogame.background_image : eachVideogame.image} width='350px' height='200px' />
                <h1>{eachVideogame.name}</h1>
                <h2>{eachVideogame.id}</h2>
                <h2>{eachVideogame.rating}</h2>
                {/* <h3>{eachVideogame.platforms.map(el => el[Object.keys(el)[0]].toString()).join(", ")}</h3> */}
                {/* <h3>{eachVideogame.genres? eachVideogame.genres.map(el => el[Object.keys(el)[0]].toString()).join(", ") : eachVideogame.Genres.map(el=>" "+el.name+" ")}</h3> */}
                <h5>{eachVideogame.description? eachVideogame.description : eachVideogame.about}</h5>
                <h2>{eachVideogame.releases? eachVideogame.realeases : eachVideogame.releaseDate}</h2>
            </div>
            }
        <Link to='/home'>
            <button>Back</button>
        </Link>
        </div>
    )
}

export default Detail;

// genres={el.genres.map(el=>"    "+el.name+"  ")}   
