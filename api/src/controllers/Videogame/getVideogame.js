const {Videogame, Genre} = require('../../db');
const axios = require ('axios');
require('dotenv').config();
const {
  API_KEY
} = process.env;


const getVideogame = async (idVideogame, source)=>{
const videogame = source === "bdd"?

await Videogame.findByPk(idVideogame,
        {
            include: {
                model: Genre,
                attributes: ['id', 'name'],
                through: {
                attributes: [],
                }
        }}):

(await axios.get(`https://api.rawg.io/api/games/${idVideogame}?key=${API_KEY}`)).data;

return videogame;
};

  
module.exports = {getVideogame}