import { FILTER_BY_GENRE, FILTER_BY_ORIGIN, GET_GENRES, GET_VIDEOGAMES, GET_VIDEOGAMES_BY_NAME, GET_VIDEOGAME_DETAIL, POST_VIDEOGAME,SORT_BY_NAME, SORT_BY_RATING } from "./actions";


const initialState = {
    videogames:[],
    allVideogames:[],
    genres: [],
    videogameDetail: []

};

const rootReducer = (state=initialState, action)=>{
    switch(action.type){
        case GET_VIDEOGAMES:
            return {
                ...state,
                videogames:action.payload,
                allVideogames:action.payload
            }
        case GET_VIDEOGAMES_BY_NAME:
            return{
                ...state,
                videogames:action.payload
            }
        case GET_GENRES:
            return{
                ...state,
                genres:action.payload
            }
        case GET_VIDEOGAME_DETAIL:
            return{
                ...state,
                videogameDetail:action.payload
            }
        case POST_VIDEOGAME:
            return{
                ...state,
            }
        case FILTER_BY_GENRE:
            const allVideogames = state.allVideogames
            const genresFiltered = action.payload === "All" ? allVideogames 
            : allVideogames.filter(el => el.genres ? el.genres.map(el=>el.name).toString().split(',').includes(action.payload) : el.Genres.map(el=>el.name).toString().split(',').includes(action.payload)) 
            return{
                ...state,
                videogames: genresFiltered
            }
        case FILTER_BY_ORIGIN:
        const all_Videogames = state.allVideogames    
        const createdInDatabase = action.payload === 'Database'? all_Videogames.filter(el=>el.createdInDb === true)
            : all_Videogames.filter(el=>el.createdInDb === false)
            console.log(all_Videogames)
            console.log(createdInDatabase)
            return{
                ...state,
                videogames: action.payload === 'All' ? all_Videogames
                : createdInDatabase}
        case SORT_BY_NAME:
            let newArray = action.payload === 'Asc'?
            state.allVideogames.sort(function(a,b){
                if(a.name>b.name){
                    return 1
                }
                if(b.name>a.name){
                    return -1
                }
                return 0
            }) : 
            state.allVideogames.sort(function(a,b){
                if(a.name>b.name){
                    return -1
                }
                if(b.name>a.name){
                    return 1
                }
                return 0
            })
            return{
                ...state,
                videogames: newArray
            }
            case SORT_BY_RATING:
            let newArray2 = action.payload === 'Asc'?
            state.allVideogames.sort(function(a,b){
                if(a.rating<b.rating){
                    return -1
                }
                if(b.rating<a.rating){
                    return 1
                }
                return 0
            }) : 
            state.allVideogames.sort(function(a,b){
                if(a.rating<b.rating){
                    return 1
                }
                if(b.rating<a.rating){
                    return -1
                }
                return 0
            })
            return{
                ...state,
                videogames: newArray2
            }
            default:
            return {
                ...state,
            };
    }
}

export default rootReducer;