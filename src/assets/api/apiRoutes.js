/*
    Inspiration from: https://medium.com/js-dojo/javascript-best-practises-strongly-typed-routes-a6151883794

    Reused from Github: AndersErikNissen/portfolio-v3
*/
const
    // Base
    apiBase = "https://mmd3-strapi.herokuapp.com/api/",
    apiBaseTest = "http://localhost:1337/api/",

    // Paths
    disciplins = "disciplins",
    events = "events",
    holdplans = "holdplans",
    medlemskabs = "medlemskabs",
    nyheds = "nyheds",

    // Queries (Start with _)
    _q = "?", // Query begining
    _qb = "&", // Query "binder", if more than 1 query
    _populateAll = _q + "populate=*",
    _populate = what => _q + "populate=" + what,


    // Collection
    ApiGet = {
        allDisciplins: apiBase + disciplins + _populateAll,
        allDvents: apiBase + events + _populateAll,
        allHoldplans: apiBase + holdplans + _populateAll,
        allMedlemskabs: apiBase + medlemskabs + _populateAll,
        allnyheds: apiBase + nyheds + _populateAll,
    },
    ApiGetTest = {
        disciplins: apiBaseTest + disciplins + _populateAll,
        allDvents: apiBaseTest + events + _populateAll,
        allHoldplans: apiBaseTest + holdplans + _populateAll,
        allMedlemskabs: apiBaseTest + medlemskabs + _populateAll,
        allnyheds: apiBaseTest + nyheds + _populateAll,
    },
    ApiWordPress = "https://skole.aenders.dk/wp-json/wp/v2/posts/2990";

export default { ApiGet, ApiGetTest, ApiWordPress };