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
        allDisciplinsAttributes: (state) => {
            let newArray = [];
            state.data.disciplins.forEach(disciplin => {
                newArray.push(disciplin.attributes)
            });
            return newArray;
        },
        allNyhedsAttributes: (state) => {
            let newArray = [];
            state.data.nyheds.forEach(nyhed => {
                newArray.push(nyhed.attributes)
            });
            return newArray;
        },
        allDagensAttributes: (state) => {
            let newArray = [];
            state.data.dagenstraenings.forEach(traening => {
                newArray.push(traening.attributes)
            });
            return newArray;
        },
        allEventsAttributes: (state) => {
            let newArray = [];
            state.data.events.forEach(event => {
                newArray.push(event.attributes)
            });
            return newArray;
        },
        allHoldplansAttributes: (state) => {
            let newArray = [];
            state.data.holdplans.forEach(holdplan => {
                newArray.push(holdplan.attributes)
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
            const getRequest = await axios.get(ApiGet.allBase(key));
            // If the last .data is not used, we also get the meta-data.
            const all = getRequest.data.data;
            commit("ADD_ALL", {key: key, value: all})
        },
    }
}

export default strapi_allTypes;