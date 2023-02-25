const {Videogame, Genre} = require('../../db');

const postVideogame = async (id,name,about,platforms,image,releaseDate,rating,genreId) =>{
    let newVideogame = await Videogame.create({

            id, 
            name, 
            about, 
            platforms, 
            image, 
            releaseDate, 
            rating,

})
    let genreDb = await Genre.findAll({
    where: {id:genreId}
    })
  
    newVideogame.addGenre(genreDb);

    return newVideogame;

}

module.exports = {postVideogame};


