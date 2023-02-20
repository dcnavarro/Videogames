
const {postVideogame} = require ('../../controllers/Videogame/postVideogame');

const postVideogameHandler = async(req,res)=>{
    const {id, name, about, platforms, image, releaseDate, rating} = req.body;
    
    if(![id,name,about,platforms,image,releaseDate,rating].every(Boolean)){
    return res.status(404).send('Required information is missing')
    }

    try{
        const newVideogame = await postVideogame(id, name, about, platforms, image, releaseDate, rating);
        res.status(201).json(newVideogame);

    }catch(error){
        res.status(404).send('Mistake found in provided data')
    }
};

module.exports = {postVideogameHandler};