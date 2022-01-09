import axios from 'axios'
import ApiData from '@/assets/api/apiRoutes'
const { ApiGet, ApiGetTest} = ApiData;
console.log(ApiGet, ApiGetTest)

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
        // checkAllForside: (state,getters,rootState,rootGetters) => {
        
        // }
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

export default strapi_allTypes;