import axios from 'axios';

const GET_VIDEOGAMES = "GET_VIDEOGAMES";
const GET_VIDEOGAMES_BY_NAME = 'GET_VIDEOGAMES_BY_NAME';
const GET_GENRES = 'GET_GENRES';
const GET_VIDEOGAME_DETAIL = 'GET_VIDEOGAME_DETAIL';
const POST_VIDEOGAME = 'POST_VIDEOGAME';
const FILTER_BY_GENRE= 'FILTER_BY_GENRE';
const FILTER_BY_ORIGIN= 'FILTER_BY_ORIGIN';
const SORT_BY_NAME='SORT_BY_NAME';
const SORT_BY_RATING='SORT_BY_RATING';

const getVideogames = () =>{
    return async function (dispatch){
        const apiData = await axios.get(`http://localhost:3001/videogames`, {mode:'no-cors'});
        
        const videogames = apiData.data;
        dispatch({type:GET_VIDEOGAMES, payload:videogames})
    }

}

const getVideogamesByName = (name) =>{
    return async function (dispatch){
            var json = await axios.get(`http://localhost:3001/videogames/?name=`+name, {mode:'no-cors'});
            return dispatch({
                type: GET_VIDEOGAMES_BY_NAME,
                payload: json.data
    })
}}

const getGenres = () =>{
    return async function (dispatch){
        var info = await axios.get(`http://localhost:3001/genres`, {mode:'no-cors'});
        return dispatch({
            type: GET_GENRES,
            payload: info.data
        })
    }
}

const getVideogameDetail = (idVideogame) =>{
    return async function (dispatch){
        var info = await axios.get(`http://localhost:3001/videogames/${idVideogame}`);
        return dispatch({
            type: GET_VIDEOGAME_DETAIL,
            payload: info.data
        })
    }
}

const postVideogame = (payload) =>{
    return async function (dispatch){
        try{var info = await axios.post(`http://localhost:3001/videogames`, payload);
        return info;
        }catch(error){
           throw new Error({error: error.message}) 
        }
    }}
const filterVideogamesByGenre= (payload) =>{
    console.log(payload)
    return{
        type: FILTER_BY_GENRE,
        payload
    };
};

const filterVideogamesByOrigin=(payload) =>{
    return{    
        type: FILTER_BY_ORIGIN,
        payload
    }
}

const sortByName=(payload) =>{
    return{
        type: SORT_BY_NAME,
        payload
    }
}

const sortByRating=(payload) =>{
    return{
        type: SORT_BY_RATING,
        payload
    }
}

export {getVideogames, getVideogamesByName, getGenres, getVideogameDetail, postVideogame, filterVideogamesByGenre, filterVideogamesByOrigin, sortByName, sortByRating, GET_VIDEOGAMES, GET_VIDEOGAMES_BY_NAME, GET_GENRES, GET_VIDEOGAME_DETAIL, POST_VIDEOGAME, FILTER_BY_GENRE, FILTER_BY_ORIGIN, SORT_BY_NAME, SORT_BY_RATING}

