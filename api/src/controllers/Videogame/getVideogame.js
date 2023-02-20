const {Videogame, Genre} = require('../../db');


const getVideogame = async (idVideogame)=>{
const foundVideogame = await Videogame.findByPk(idVideogame,{
            include: {
                Model: Genre,
            }
        });
        if(!foundVideogame) throw Error;
        return foundVideogame;
    }


module.exports = {getVideogame}