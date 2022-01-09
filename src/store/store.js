// DISCLAIMER:
// Some of the store code are reused from AEN's portfolio-v3
// Github: AndersErikNissen/portfolio-v3

import { createStore } from 'vuex'
import axios from 'axios'

import data_navigation from '@/assets/data/data_navigation.json'

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
        allMedlemskabsAttributes: (state) => {
            let newArray = [];
            state.data.medlemskabs.forEach(medlem => {
                newArray.push(medlem.attributes)
            });
            return newArray;
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
            navigation: [],
        }
    },
    getters: {
        getNavigation: (state) => {
            return state.navigation;
        }
    },
    mutations: {
        STATIC_DATA: (state) => {
            state.navigation = data_navigation;
            console.log("State Navigation",state.navigation)
        },
        RESIZE_WINDOW: (state) => {
            /* REUSED from Github: AndersErikNissen/portfolio-v3 */

            // Used for checking what type of navigation should be used (Hamburger-With-Menu or Desktop-List).
            state.windowWidth = window.innerWidth;
        },
    },
    actions: {
    
    }
});

