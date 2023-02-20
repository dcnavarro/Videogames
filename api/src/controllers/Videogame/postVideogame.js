const {Videogame, Genre} = require('../../db');

const postVideogame = async (id,name,about,platforms,image,releaseDate,rating) =>{
    const newVideogame = await Videogame.create({

            id, 
            name, 
            about, 
            platforms, 
            image, 
            releaseDate, 
            rating

})
return newVideogame;
}
    
//     let genreDb = Genre.findAll({
//     where: {name:genre}
//     })

module.exports = {postVideogame};


