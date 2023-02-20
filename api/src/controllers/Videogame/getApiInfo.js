const axios = require ('axios');
require('dotenv').config();
const {
  API_KEY
} = process.env;


const getApiInfo = async () =>{
    const apiUrl = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}`);
    const apiInfo = await apiUrl.data.results?.map(el=>{
        return {
            name: el.name,
            about: el.tba,
            platforms: el.platforms.map(el=>el),
            image: el.background_image,
            releaseDate: el.released,
            rating: el.rating
        };
    });
    return apiInfo;
}

module.exports = {getApiInfo};