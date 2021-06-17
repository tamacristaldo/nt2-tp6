<template>
  <section class="formulario">
    <div class="jumbotron">
      <h2>Envío de formulario</h2>
      <hr />
      <br />
      <vue-form :state="formState" @submit.prevent="enviar()">
        <validate tag="div">
          <label for="name">Nombre</label>
          <input
            type="text"
            name="name"
            id="name"
            class="form-control"
            v-model.trim="formData.name"
            required
            :minlength="nameMin"
            :maxlength="nameMax"
            autocomplete="off"
          />
          <field-messages name="name" show="$dirty">
            <div slot="required" class="alert alert-danger mt-2">
              Campo requerido
            </div>
            <div slot="minlength" class="alert alert-danger mt-2">
              Ingrese al menos {{ this.nameMin }} caracteres
            </div>
            <div
              v-if="formData.name.length == nameMax"
              class="alert alert-warning mt-2"
            >
              Ingrese menos de {{ this.nameMax }} caracteres
            </div>
          </field-messages>
        </validate>

        <validate tag="div">
          <label for="age">Edad</label>
          <input
            type="number"
            name="age"
            id="age"
            class="form-control"
            v-model.number="formData.age"
            required
            :min="ageMin"
            :max="ageMax"
            autocomplete="off"
          />
          <field-messages name="age" show="$dirty">
            <div slot="required" class="alert alert-danger mt-2">
              Campo requerido
            </div>
            <div slot="min" class="alert alert-danger mt-2">
              La edad mínima es de {{ ageMin }}
            </div>
            <div slot="max" class="alert alert-danger mt2">
              La edad máxima es de {{ ageMax }}
            </div>
          </field-messages>
        </validate>

        <validate tag="div">
          <label for="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            class="form-control"
            v-model.trim="formData.email"
            required
            autocomplete="off"
          />
          <field-messages name="email" show="$dirty">
            <div slot="required" class="alert alert-danger mt-2">
              Campo requerido
            </div>
            <div slot="email" class="alert alert-danger mt-2">
              Email inválido
            </div>
          </field-messages>
        </validate>

        <button
          class="btn btn-info my-3"
          type="submit"
          :disabled="formState.$invalid"
          @click="enviar()"
        >
          Enviar
        </button>
      </vue-form>
    </div>
  </section>
</template>

<script>
export default {
  name: "formulario",
  props: [],
  mounted() {},
  data() {
    return {
      formData: this.getInitialData(),
      formState: {},
      nameMin: 3,
      nameMax: 15,
      ageMax: 120,
      ageMin: 18,
      postUrl: "https://60bbf43d3a39900017b2e190.mockapi.io/api/Users",
    };
  },
  methods: {
    getInitialData() {
      return {
        name: "",
        age: "",
        email: "",
      };
    },
    enviar() {
      console.log({ ...this.formData });
      this.postUsuario(this.formData);
      this.formData = this.getInitialData();
      this.formState._reset();
    },
    async postUsuario(data) {
      try {
        console.log(data);
        await this.axios.post(this.postUrl, data, {
          "content-type": "application/json",
        });
        this.formState._reset();
      } catch (error) {
        console.error(error);
      }
    },
  },
  computed: {},
};
</script>

<style scoped>
.jumbotron {
  background-color: rgb(250, 250, 250);
}
</style>
