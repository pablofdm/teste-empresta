import Vue from 'vue';
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        loanValue: '',
        institution: [],
        insurance: [],
        parcels: '',
        index: '',
        key: ''
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


        handleIndexValue: state => {
            state.index = state;
           
          },
          
        handleKeyValue: state =>{
        state.key= state;
        },
        
        // setIndex: state => {
        //     state.chave = state;
        // },

        // setIndexArray: () => {
        //     this.$store.commit('setIndex', state.chave)
        // }

        // buscarCidades: (state, event) => {
        //     let estado = event.target != undefined ? event.target.value : event;
        //     fetch(`/useful/citys?state=${estado}`)
        //     .then(response => {
        //         response.json().then((data) => {
        //           state.cidades = data;
        //             });
        //             })
        //             .catch((err) => {
        //             console.log(err);
        //             });
        //         },

}

})