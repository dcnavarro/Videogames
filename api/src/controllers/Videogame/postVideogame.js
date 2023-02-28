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

    // const newGenre = await Genre.findAll({
    // where: {id:genreId}
    // })

    // console.log(newGenre);
  
    newVideogame.addGenre(genreDbFlat);
    // allVideogames.filter(el => el.genres.map(el=>el.name).toString().split(',').includes(action.payload)) 

    return newVideogame;

}

module.exports = {postVideogame};


