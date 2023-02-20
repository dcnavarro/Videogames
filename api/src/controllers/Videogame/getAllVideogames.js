
const {getApiInfo} = require ('./getApiInfo');
const {getDbInfo} = require ('./getDbInfo');

const getAllVideogames = async () =>{
    const apiInfo = await getApiInfo();
    const dbInfo = await getDbInfo();
    const infoTotal = apiInfo.concat(dbInfo);
    return infoTotal;
}

module.exports = {getAllVideogames};