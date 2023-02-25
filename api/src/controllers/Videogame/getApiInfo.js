// const axios = require ('axios');
// require('dotenv').config();
// const {
//   API_KEY
// } = process.env;


// const getApiInfo = async () =>{
//     const apiUrl = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}`);
//     const apiInfo = await apiUrl.data.results?.map(el=>{
//         return {
//             id: el.id,
//             name: el.name,
//             about: el.description,
//             platforms: el.platforms.flat(3),
//             image: el.background_image,
//             releaseDate: el.released,
//             rating: el.rating,
//             createdInDb: false
//         };
//     });
//     return apiInfo;
// }

// module.exports = {getApiInfo};