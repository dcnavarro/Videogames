const {getVideogame} = require('../../controllers/Videogame/getVideogame')


const getVideogameHandler = async(req,res)=>{
    const {idVideogame} = req.params;
    try{
        const foundVideogame = await getVideogame(idVideogame);
        res.status(201).json(foundVideogame)
    }catch(error){
        return res.status(404).send(`Id ${idVideogame} does not belong to an existing Videogame`)
    }
};

module.exports = {getVideogameHandler};