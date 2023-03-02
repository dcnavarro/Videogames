const {Videogame, Genre} = require ('../../db');

const {getApiData} = require('../../controllers/Videogame/getApiData');

const searchVideogameByName = async (name) =>{
    const dbVideogames = await Videogame.findAll({
        where:{
            name: name},
        include: {
            model: Genre,
            attributes: ['id', 'name'],
            through: {
                attributes: [],
            }
        }});
    
    const apiVideogamesRaw = await getApiData();
    console.log(apiVideogamesRaw);
    const apiVideogames = apiVideogamesRaw.filter(el=>(el.name).toLowerCase().includes(name.toLowerCase()));

    if([...dbVideogames, ...apiVideogames].length){
    return [...dbVideogames, ...apiVideogames];
    }else{
    return ('Videogame not found');

}};

module.exports = {searchVideogameByName};

