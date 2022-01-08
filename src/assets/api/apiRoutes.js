/*
    Inspiration from: https://medium.com/js-dojo/javascript-best-practises-strongly-typed-routes-a6151883794

    Reused from Github: AndersErikNissen/portfolio-v3
*/
const
    // Base
    apiBase = "https://mmd3-strapi.herokuapp.com/api/",
    apiBaseTest = "http://localhost:1337/api/",

    // Paths (Strapi)
    // disciplins = "disciplins",
    // events = "events",
    // holdplans = "holdplans",
    // medlemskabs = "medlemskabs",
    // nyheds = "nyheds",
    // traeners = "traeners",

    // Queries (Start with _)
    _populateAll = "?" + "populate=*",
    // _populate = what => _q + "populate=" + what,


    // Collection
    exportObject = {
        ApiGet: {
            singleBase: id => apiBase + id + _populateAll,
            allBase: id => apiBase + id + _populateAll
        },
        ApiGetTest: {
            allBase: id => apiBaseTest + id + _populateAll,
            singleBase: id => apiBaseTest + id + _populateAll
        }
    };

export default exportObject;