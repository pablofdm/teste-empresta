<template>
  <section>
    <div class="h-100 bg-empresta">
      <div class="container mx-auto pt-5">
        <div class="row">
          <div class="col-12 col-md-6 formulario mx-auto">
            <form v-on:submit.prevent method="POST">
              <div class="form-row">
                <div class="col-6 col-xs-6 col-sm-6 col-lg-6 col-md-6 col-xl-6">
                  <label class="label" for="nome">Valor do empréstimo</label>
                  <span>
                    <input
                      class="form-control"
                      id="loanValue"
                      v-model.lazy="price"
                      v-money="money"
                      type="text"
                      name="loanValue"
                      value=""
                      aria-required="true"
                      aria-invalid="false"
                      required="true"
                    />
                  </span>
                </div>
                <div
                  class="col-12 col-xs-6 col-sm-6 col-lg-6 col-md-6 col-xl-6"
                >
                  <label class="label" for="nome">Instituição</label>
                  <span>
                    <select
                      class="form-control"
                      id="institutionName"
                      name="institutionName"
                      aria-required="true"
                      aria-invalid="false"
                      required="true"
                    >
                      <option value="" disabled selected></option>
                      <option
                        for="institution"
                        @change="this.$root.key = index"
                        v-for="(institution, index) in $store.state.institution"
                        v-bind:key="institution.chave"
                      >
                        {{ institution.chave }}
                      </option>
                    </select>
                  </span>
                </div>
                <div class="col-6 col-sm-6 col-lg-6 col-md-6 col-xl-6">
                  <label class="label" for="insurance">Seguro</label>
                  <span>
                    <select
                      name="insuranceName"
                      value=""
                      id="insuranceOrg"
                      class="form-control"
                      aria-required="true"
                      aria-invalid="false"
                      required="true"
                    >
                      <option value="" disabled selected hidden></option>
                      <option
                        for="insuranceOpt"
                        @change="this.$root.index = index"
                        v-for="(insurance, index) in $store.state.insurance"
                        :key="insurance.chave"
                      >
                        {{ insurance.chave }}
                      </option>
                    </select>
                  </span>
                </div>
                <div class="col-6 col-sm-6 col-lg-6 col-md-6 col-xl-6">
                  <label class="label">Parcelas</label>
                  <span>
                    <select
                      name="insurance"
                      id="parcelsNumber"
                      value=""
                      class="form-control"
                      aria-invalid="false"
                    >
                      <option value="" disabled selected hidden></option>
                      <option value="36">36</option>
                      <option value="48">48</option>
                      <option value="60">60</option>
                      <option value="72">72</option>
                      <option value="84">84</option>
                    </select>
                  </span>
                </div>
              </div>
              <div
                class="form-row d-flex justify-content-center text-center mt-5"
              >
                <input
                  type="submit"
                  value="Enviar"
                  @click="sendProposal"
                  class="btn btn-main"
                  id="send-form"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<style scoped>
.bg-empresta {
  background-color: #ef6c00;
}
.formulario input,
.formulario textarea {
  display: block;
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  margin-bottom: 0.95rem;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  background: #fff;
  border: 2px solid #dfe4eb;
  box-sizing: border-box;
  border-radius: 4px;
}

.formulario label {
  font-family: "Noto Sans", sans-serif;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.2px;
  color: #fff;
  mix-blend-mode: normal;
  opacity: 0.6;
}

.list-inline-item a {
  margin-right: 6.5rem;
  text-decoration: none;
}

.list-inline-item p {
  margin-top: 1rem;
  color: black;
}

#send-form {
  background: #0a4d9b;
  color: #fff;
  border-radius: 6px;
  border: 1px solid #0d4e9c;
  text-transform: uppercase;
  font-size: 12px;
  font-size: 0.75rem;
  font-weight: 500;
  padding: 17px 50px;
  letter-spacing: 0.95px;
  line-height: 14px;
  width: auto;
  cursor: pointer;
}

#send-form:hover {
  background-color: #fff;
  color: #0a4d9b;
  border: 1px solid #0a4d9b;
  transition: 0.3s ease all;
}
</style>
<script>
import { VMoney } from "v-money";
import { mapMutations, mapState } from "vuex";
import axios from "axios";

export default {
  directives: { money: VMoney },
  mounted() {
    axios({
      url: "http://127.0.0.1:8000/api/instituicao",
    }).then((response) => {
      this.$store.commit("setInstitutionName", response.data);
    });

    axios({
      url: "http://127.0.0.1:8000/api/convenio",
    }).then((response) => {
      this.$store.commit("setInsuranceOrg", response.data);
    });
  },
  created: {},

  data() {
    return {
      price: 0.0,
      money: {
        decimal: ",",
        thousands: ".",
        prefix: "R$",
        suffix: "",
        precision: 2,
      },
      key: "",
      index: "",
    };
  },

  computed: {
    ...mapState(["loanValue", "institution", "insurance", "parcels"]),
  },

  methods: {
    // FUNÇÕES DO STORE STATE
    ...mapMutations([
      "setLoanValue",
      "setInstitutionName",
      "setInsuranceOrg",
      "setParcels",
    ]),

    // findIndex(){
    //   let p = this.$store.state.institution;
    // let institution = document.getElementById("institutionName").value;
    //   var index = p.map((o) => o.attr1).indexOf(institution);

    //   console.log(index);

    //   // let insurance = document.getElementById("insuranceOrg").value;
    //   // if(Object.key(this.$store.state.institution) = institution){
    //   //     this.key =
    //   // }
    // },

    sendProposal: function () {
      let value = document.getElementById("loanValue").value;
      let clean = value.replace(/[^0-9,]*/g, "").replace(",", ".");
      let p = this.$store.state.institution;
      let i = this.$store.state.insurance;
      let institution = document.getElementById("institutionName").value;
      p.map((element, index) => {
        if (element.chave == institution) {
          this.key = index;
        }
      });

      let insurance = document.getElementById("insuranceOrg").value;
      i.map((element, index) => {
        if (element.chave == insurance) {
          this.index = index;
        }
      });

      axios({
        url: "http://127.0.0.1:8000/api/simular",
        method: "POST",
        responseType: "JSON",
        cache: false,
        data: {
          valor_emprestimo: clean,
          instituicoes: this.$store.state.institution[this.key],
          convenios: this.$store.state.insurance[this.index],
          parcels: document.getElementById("parcelsNumber").value,
        },
      })
        .then((response) => {
          
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
