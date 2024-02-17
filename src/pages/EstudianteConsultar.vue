<template>
  <div class="GET">
    <h1>Pagina Consultar</h1>
    <h2>Buscar por ID:</h2>
    <input id="id" v-model="id" type="text" placeholder="Ingrese ID" />
    <button @click="consultarPorId()">Consultar</button>
    <EstudianteVue :body="onjectData" />
  </div>
</template>

<script>
import { consultarEstudianteFachada } from "../helpers/clienteEstudiante.js";
import EstudianteVue from "@/components/Estudiante.vue";
export default {
  components: {
    EstudianteVue,
  },
  data() {
    return {
      id: null,
      onjectData: {
        nombre: null,
        apellido: null,
        genero: null,
        fechaNacimiento: null,
      },
    };
  },
  methods: {
    async consultarPorId() {
      const data = await consultarEstudianteFachada(this.$route.params.id);
      console.log("Desde componente" + data);
      this.onjectData.nombre = data.nombre;
      this.onjectData.apellido = data.apellido;
      this.onjectData.genero = data.genero;
      this.onjectData.fechaNacimiento = data.fechaNacimiento;
    },
  },
  created() {
    console.log(this.$route);
    console.log(this.$route.params.id);
    console.log(this.$route.query.anio);
    console.log(this.$route.query.edad);

    this.consultarPorId();
  },
};
</script>

<style scoped>
.GET {
  display: grid;
  align-content: center;
  justify-content: center;
}
button {
  margin: 10px;
}
#id {
  margin-left: 150px;
  width: 100px;
}
</style>