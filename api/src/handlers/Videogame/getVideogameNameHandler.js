const {getAllVideogames} = require('../../controllers/Videogame/getAllVideogames');
const {searchVideogameByName} = require ('../../controllers/Videogame/searchVideogameByName');

const getVideogameNameHandler = async (req,res) =>{
    try{
    const {name} = req.query;
    console.log(name);

    const results = name ?  await searchVideogameByName(name) : await getAllVideogames ();
    res.status(200).json(results);
    }catch(error){
    res.status(404).send({error:error.message})
}
};

module.exports = {getVideogameNameHandler};