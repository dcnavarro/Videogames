
const {postVideogame} = require ('../../controllers/Videogame/postVideogame');

const postVideogameHandler = async(req,res)=>{
    const {id, name, about, platforms, image, releaseDate, rating, genreId} = req.body;
    try{
        const newVideogame = await postVideogame(id, name, about, platforms, image, releaseDate, rating, genreId);
        res.status(201).json(newVideogame);

    }catch(error){
        res.status(404).send({error: error.message})
    }
};

module.exports = {postVideogameHandler}; 