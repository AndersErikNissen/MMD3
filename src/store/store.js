// DISCLAIMER:
// Some of the store code are reused from AEN's portfolio-v3
// Github: AndersErikNissen/portfolio-v3

import { createStore } from 'vuex'
// import axios from 'axios'

import singleType from "./modules/singleType"
import allTypes from "./modules/allTypes"

import data_navigation from '@/assets/data/data_navigation.json'

import ApiData from '@/assets/api/apiRoutes'
const { ApiGet, ApiGetTest } = ApiData;
console.log(ApiGet, ApiGetTest)


export default createStore({
    modules: {
        s: singleType,
        a: allTypes
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
        },
        getCheckForside: (state) => {
            // The first time the user get to "Forside", check if the all the data is collected and until then have a loading animation.
            const pathSingle = state.s.data,
                pathAll = state.a.data;
            let response = false;
            if (pathSingle["single-type-forside"] && pathSingle["the-footer"] && pathAll.medlemskabs && pathAll.traeners) {
                response = true;
            }
            return response;
        }
    },
    mutations: {
        STATIC_DATA: (state) => {
            state.navigation = data_navigation;
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

