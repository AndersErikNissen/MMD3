/*
    Inspiration from: https://medium.com/js-dojo/javascript-best-practises-strongly-typed-routes-a6151883794

    Reused from Github: AndersErikNissen/portfolio-v3
*/
const
    // Base
    apiBase = "https://mmd3-strapi.herokuapp.com/api/",
    apiBaseTest = "http://localhost:1337/api/",

    // Paths (Strapi)
    disciplins = "disciplins",
    events = "events",
    holdplans = "holdplans",
    medlemskabs = "medlemskabs",
    nyheds = "nyheds",

    // WordPress ID's

    // Queries (Start with _)
    _populateAll = "?" + "populate=*",
    // _populate = what => _q + "populate=" + what,


    // Collection
    exportObject = {
        ApiGet: {
            allDisciplins: apiBase + disciplins + _populateAll,
            allDvents: apiBase + events + _populateAll,
            allHoldplans: apiBase + holdplans + _populateAll,
            allMedlemskabs: apiBase + medlemskabs + _populateAll,
            allnyheds: apiBase + nyheds + _populateAll,
            singleBase: id => apiBase + id + _populateAll
        },
        ApiGetTest: {
            disciplins: apiBaseTest + disciplins + _populateAll,
            allDvents: apiBaseTest + events + _populateAll,
            allHoldplans: apiBaseTest + holdplans + _populateAll,
            allMedlemskabs: apiBaseTest + medlemskabs + _populateAll,
            allnyheds: apiBaseTest + nyheds + _populateAll,
            singleBase: id => apiBaseTest + id + _populateAll,
        }
    };

export default exportObject;