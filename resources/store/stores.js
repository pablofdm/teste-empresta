import Vue from 'vue';
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        loanValue: '',
        institution: [],
        insurance: [],
        parcels: '',

    },

    mutations: {
        setLoanValue : (state, payload)=> {
            state.loanValue = payload;
        },
        setInstitutionName : (state, payload) => {
            state.institution = payload

        },
        setInsuranceOrg: (state, payload) => {
            state.insurance = payload;
        },
        setParcels: (state, payload) => {
            state.parcels = payload;
        },
    }
})