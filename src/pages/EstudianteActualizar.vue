<template>
  <h1>Pagina Actualizar</h1>
  <h2>Actualizar por ID:</h2>
  <input id="id" v-model="id" type="text" placeholder="Ingrese ID" />
  <EstudianteVue @datosEnviados="manejarDatosEnviados" :body="onjectData" />
  <button @click="actualizar">actualizar</button>
</template>

<script>
import { actualizarFachada } from "../helpers/clienteEstudiante.js";
import EstudianteVue from "@/components/Estudiante.vue";
export default {
  components: {
    EstudianteVue,
  },
  data() {
    return {
      id: null,
      onjectData: {
        nombre: "",
        apellido:  "",
        genero:  "",
        fechaNacimiento:  "",
      },
    };
  },
  methods: {
    async actualizar() {
      const body = {
        nombre: this.onjectData.nombre,
        apellido: this.onjectData.apellido,
        genero: this.onjectData.genero,
        fechaNacimiento: this.onjectData.fechaNacimiento,
      };
      await actualizarFachada(this.id, body);
    },
    manejarDatosEnviados(datos) {
      // Manejar los datos recibidos del componente hijo
      this.onjectData = datos;
      console.log(this.onjectData.nombre)
    },
  },
};
</script>

<style>
</style>