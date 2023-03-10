const axios = require ('axios');
require('dotenv').config();
const {
  API_KEY
} = process.env;

const getApiData = async () =>{
try{
    let i = 1;
    let apiInfo = [];

        while(i<6){
        let apiData = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=${i}`);
        apiInfo.push(apiData);
        i++;
        }

        apiInfo = (await Promise.all(apiInfo)).map(res => res.data.results.map(el =>{
            return({
            id: el.id,
            name: el.name,
            genres: el.genres.map(el=>el),
            platforms: el.platforms.map(el=>el),
            image: el.background_image,
            releaseDate: el.released,
            rating: el.rating,
            createdInDb: false
            })
        }))

        let allApiInfo = [];
        apiInfo.map(el => {allApiInfo = allApiInfo.concat(el)})

        return allApiInfo;
        console.log(allApiInfo);

    }catch(error){
    return {error: error.message}
    }
};
   
module.exports = {getApiData};