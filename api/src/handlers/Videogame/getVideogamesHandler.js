const {getAllVideogames} = require('../../controllers/Videogame/getAllVideogames');

const getVideogamesHandler = async (req,res) =>{
    try{
        const name = req.query.name;
        let videogamesTotal = await getAllVideogames();
        if (name){
            let videogameName = await videogamesTotal.filter(el=> el.name.toLowerCase().includes(name.toLowerCase()))
            videogameName.length ? 
            res.status(200).send(videogameName) : 
            res.status(404).send('Videogame not found')
        }else{
            res.status(200).send(videogamesTotal);
        }}catch(error){
            res.status(404).send('The website you were trying to reach could not be found on the server') 
        }
};

module.exports = {getVideogamesHandler};