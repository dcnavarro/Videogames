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
            genreId

})
    let genreDb = await Genre.findAll({
    where: {id:genreId}
    })

    genreDbFlat = genreDb.map(el=>el.id)
    console.log(genreDbFlat)

    newVideogame.addGenre(genreId);

    return newVideogame;

}

module.exports = {postVideogame};


