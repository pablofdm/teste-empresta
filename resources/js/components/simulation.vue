<template>
  <section>
    <div class="h-100 bg-empresta">
      <div class="container mx-auto pt-5">
        <div class="row" v-show="$store.state.aux">
          <div class="col-12 col-md-6 formulario mx-auto" v-for="(result, index) in $store.state.result" :key="index">
              <div class="form-row">
                <div class="col-6 col-xs-6 col-sm-6 col-lg-6 col-md-6 col-xl-6">
                  <label class="label" for="nome">Taxa</label>
                  <span>
                    <input
                      class="form-control"
                      id="taxValue"
                      type="text"
                      name="tax"
                      :value="result[index].taxa"
                      aria-required="true"
                      aria-invalid="false"
                      required="true"
                    >
                  </span>
                </div>
                <div
                  class="col-12 col-xs-6 col-sm-6 col-lg-6 col-md-6 col-xl-6"
                >
                  <label class="label" for="nome">Parcelas</label>
                  <span>
                  <span>
                    <input
                      class="form-control"
                      id="installmentsValue "
                      type="text"
                      name="installments"
                      :value="result[index].parcelas"
                      aria-required="true"
                      aria-invalid="false"
                      required="true"
                    >
                  </span>
                  </span>
                </div>
                <div class="col-6 col-sm-6 col-lg-6 col-md-6 col-xl-6">
                  <label class="label" for="insurance">Valor parcelas</label>
                  <span>
                    <span>
                        <input
                        class="form-control"
                        id="installmentValue"
                        type="text"
                        name="installment"
                        :value="result[index].valor_parcela"
                        aria-required="true"
                        aria-invalid="false"
                        required="true"
                        >
                    </span>  
                  </span>
                </div>
                <div class="col-6 col-sm-6 col-lg-6 col-md-6 col-xl-6">
                  <label class="label">Convênio</label>
                  <span>
                  <span>
                    <input
                      class="form-control"
                      id="insuranceValue"
                      type="text"
                      name="insurance"
                      :value="result[index].convenio"
                      aria-required="true"
                      aria-invalid="false"
                      required="true"
                    >
                  </span>
                    </span>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<style scoped>

.bg-empresta {
  background-color: #0A4D9B;
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
    export default {
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
