import axios from 'axios'
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
            const getRequest = await axios.get(ApiGet.singleBase(key));
            const single = getRequest.data;
            commit("ADD_SINGLE", {key: key, value: single})
        },
    }
}

export default strapi_singleTypes;