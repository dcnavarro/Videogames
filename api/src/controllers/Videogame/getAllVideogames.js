
// const {getApiInfo} = require ('./getApiInfo');
const {getApiData} = require('../../controllers/Videogame/getApiData')
const {getDbInfo} = require ('./getDbInfo');

const getAllVideogames = async () =>{
    const apiInfo = await getApiData();
    const dbInfo = await getDbInfo();
    const infoTotal = apiInfo.concat(dbInfo);
    return infoTotal;
}

module.exports = {getAllVideogames};