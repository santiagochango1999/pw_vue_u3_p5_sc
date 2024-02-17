<template>
  <h1>Pagina Guardar</h1>
  <EstudianteVue @datosEnviados="manejarDatosEnviados" :body="onjectData" />
  <button @click="insertar">Insertar</button>
</template>

<script>
import { insertarEstudianteFachada } from "../helpers/clienteEstudiante.js";
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
    async insertar() {
      const estuBody = {
        nombre: this.onjectData.nombre,
        apellido: this.onjectData.apellido,
        genero: this.onjectData.genero,
        fechaNacimiento: this.onjectData.fechaNacimiento,
      };
      await insertarEstudianteFachada(estuBody);
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