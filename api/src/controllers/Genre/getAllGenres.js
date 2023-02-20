const axios = require ('axios');
const {Genre} = require('../../db');
require('dotenv').config();
const {
  API_KEY
} = process.env;


const getAllGenres = async () =>{
    const apiUrl = await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`);
    const apiInfo = await apiUrl.data.results?.map(el=> el.name)
    
    const genre = apiInfo.toString().split(',');

    genre.forEach(el=>{
        Genre.findOrCreate({
            where: {name:el}
        })
    })
    return genre;
}

module.exports = {getAllGenres};