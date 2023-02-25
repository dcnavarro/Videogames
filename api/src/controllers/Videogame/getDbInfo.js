const {Videogame, Genre} = require('../../db');


const getDbInfo = async () =>{
    return await Videogame.findAll({
        include: {
            model: Genre,
            attributes: ['id', 'name'],
            through: {
                attributes: [],
            }
        }
    });
};



module.exports = {getDbInfo};