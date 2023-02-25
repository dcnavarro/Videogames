import axios from 'axios';

const GET_VIDEOGAMES = "GET_VIDEOGAMES";
// const GET_VIDEOGAME = "GET_VIDEOGAME";

const getVideogames = () =>{
    return async function (dispatch){
        const apiData = await axios.get(`http://localhost:3001/videogames`, {mode:'no-cors'});
        
        const videogames = apiData.data;
        dispatch({type:GET_VIDEOGAMES, payload:videogames})
    }

}

// const getVideogame = (idVideogame) =>{
//     return async function (dispatch){
//         const apiData = await axios.get(`https://api.rawg.io/api/games/${idVideogame}?key=694c4b671e6e4c36a6a941959720fc1e`);

//         const videogame = apiData.data.results;
//         dispatch({type:GET_VIDEOGAME, payload:videogame})
//     }
// }

// const filterBySource = () => {
//     dispatch ({type: FILTER_BY_SOURCE, payload:...})
// }

export {getVideogames, GET_VIDEOGAMES}

