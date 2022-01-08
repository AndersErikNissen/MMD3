// DISCLAIMER:
// Some of the store code are reused from AEN's portfolio-v3
// Github: AndersErikNissen/portfolio-v3

import { createStore } from 'vuex'
import axios from 'axios'

// import data from '@/assets/Data/data.json'

import ApiData from '@/assets/api/apiRoutes'
const { ApiGet, ApiGetTest} = ApiData;
console.log(ApiGet, ApiGetTest)

const strapi_singleTypes = {
    namespaced: true,
    state: {
        data: {}
    },
    getters: {
        getForsideAttributes: (state) => {
            return state.data["single-type-forside"].data.attributes;
        }
    },
    mutations: {
        ADD_SINGLE: (state, {key, value}) => {
            state.data[key] = value;
        }
    },
    actions: {
        async getSingle({ commit }, key) {
            // Await for the answer from axios, then use that data in post and commit it if there was no error.
            const getRequest = await axios.get(ApiGetTest.singleBase(key));
            const single = getRequest.data;
            commit("ADD_SINGLE", {key: key, value: single})
        },
    }
}
const strapi_allTypes = {
    // Namespaced, is kinda like scoped is for components, but we can access this module from outside, aslong as we use it given name(a, in this case).
    namespaced: true,
    state: {
        data: {}
    },
    getters: {
        allTraeners: (state) => {
            return state.data.traeners;
        },
        allTraenersAttributes: (state) => {
            let newArray = [];
            state.data.traeners.forEach(traener => {
                newArray.push(traener.attributes)
            });
            return newArray;
        },
    },
    mutations: {
        ADD_ALL: (state, {key, value}) => {
            state.data[key] = value;
        }
    },
    actions: {
        async getAll({ commit }, key) {
            const getRequest = await axios.get(ApiGetTest.allBase(key));
            // If the last .data is not used, we also get the meta-data.
            const all = getRequest.data.data;
            commit("ADD_ALL", {key: key, value: all})
        },
    }
}

export default createStore({
    modules: {
        s: strapi_singleTypes,
        a: strapi_allTypes
    },
    state() {
        return {
            //Used to know what the width of the screen is at the moment, and will update on resize from the use of the mutation (RESIZE_WINDOW).
            windowWidth: window.innerWidth,


        }
    },
    getters: {

    },
    mutations: {
        // SET_STATIC_DATA: (state) => {
        //     const
        //         //Set up arrays from the data.json with all the static data
        //         nav = data.data_nav,
        //         categories = data.data_wp_categories,
        //         soMe = data.data_soMe,
        //         tags = data.data_wp_tags,
        //         uni = data.universal;
        //     //Add Static data to state from data.json
        //     state.staticData.nav = nav;
        //     state.staticData.categories = categories;
        //     state.staticData.tags = tags;
        //     state.staticData.soMe = soMe;
        //     state.staticData.universal = uni;
        // },
        // ADD_TO_MAIN: (state, dataObj) => {
        //     state.main.push(dataObj)
        // },
        // ADD_TO_CASES: (state, dataObj) => {
        //     // Since Templates will check data even if the full array exists, then it has to replace the old array with the new every time.
        //     state.cases = dataObj
        // },
        // ADD_TO_DESIGNS: (state, dataObj) => {
        //     // Since Templates will check data even if the full array exists, then it has to replace the old array with the new every time.
        //     state.designs = dataObj
        // },
        // RESIZE_WINDOW: (state) => {
        //     // Used for checking what type of navigation should be used (Hamburger-With-Menu or Desktop-List).
        //     state.windowWidth = window.innerWidth;
        // },
    },
    actions: {
        //     async loadSinglePost({ commit }, payload) {
        //         /* 
        //             Inspiration from: https://medium.com/js-dojo/vuex-tip-error-handling-on-actions-ee286ed28df4
        //         */
        //         // Await for the answer from axios, then use that data in post and commit it if there was no error.
        //         const getRequest = await axios.get(ApiGet.byId(payload));
        //         const post = getRequest.data;

        //         // - If there is an error, it could be a code:200 but something still went wrong, and we get an empty array then we don't want to commit.
        //         // - *It could be that there were some issues with the Query Parameters.
        //         // -- *It might be unessary..
        //         if (!post.length) {
        //             commit("ADD_TO_MAIN", post);
        //         }
        //     },
        //     async loadAll({ commit }, payload) {
        //         /* 
        //             Inspiration from: https://medium.com/js-dojo/vuex-tip-error-handling-on-actions-ee286ed28df4
        //         */
        //         // Await for the answer from axios, then use that data in post and commit it if there was no error.
        //         let getRequest;
        //         if(payload === 0) {
        //             getRequest = await axios.get(ApiGet.allCases);
        //             const posts = getRequest.data;
        //             commit("ADD_TO_CASES", posts);

        //             console.log("%c actions: loadAll: Result", "background-color: blue; color: white;", posts)
        //         } else if (payload === 1) {
        //             getRequest = await axios.get(ApiGet.allDesigns);
        //             const posts = getRequest.data;
        //             commit("ADD_TO_DESIGNS", posts);

        //             console.log("%c actions: loadAll: Result", "background-color: blue; color: white;", posts)
        //         }

        //     },
    }
});

