const {getVideogame} = require('../../controllers/Videogame/getVideogame')


const getVideogameHandler = async(req,res)=>{
    const {idVideogame} = req.params;

    const source = isNaN(idVideogame) ? "bdd" : "api";
    
    try{
        const videogame = await getVideogame(idVideogame, source);
        res.status(200).json(videogame);
    }catch(error){
        return res.status(400).send(`Id ${idVideogame} ${source} does not belong to an existing Videogame`)
    }
};

module.exports = {getVideogameHandler};