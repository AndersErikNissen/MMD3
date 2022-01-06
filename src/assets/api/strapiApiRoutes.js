/*
    Inspiration from: https://medium.com/js-dojo/javascript-best-practises-strongly-typed-routes-a6151883794

    Reused from Github: AndersErikNissen/portfolio-v3
*/
const
    // Blocks
    // "Bulding Blocks" values start with _.
    _disciplins = "disciplins",

    // Base
    apiBase = "https://mmd3-strapi.herokuapp.com/api/",
    apiBaseTest = "http://localhost:1337/api/",

    // Collection
    ApiGet = {
        
    },
    ApiGetTest = {
        disciplins: apiBaseTest + _disciplins
    };

export default  { ApiGet, ApiGetTest };