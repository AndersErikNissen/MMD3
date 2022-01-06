/*
    Inspiration from: https://medium.com/js-dojo/javascript-best-practises-strongly-typed-routes-a6151883794

    Reused from Github: AndersErikNissen/portfolio-v3
*/
const
    // Blocks
    // "Bulding Blocks" values start with _.
    _status = "?status=publish",
    _category = "&categories=94",
    _images = "/2990",
    _slug = slug => "&slug=" + slug,

    // Base
    apiBase = "https://skole.aenders.dk/wp-json/wp/v2/posts",
    

    // Collection
    ApiWordPress = {
        allImages: apiBase + _images,
    }

export default ApiWordPress;