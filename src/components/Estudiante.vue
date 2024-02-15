<template>
  <h1>Componente Estudiante</h1>
  <input v-model="id" type="text" />
  <button @click="consultarPorId">ConsultaR</button>
  <input v-model="nombre" type="text" />
  <input  v-model="apellido" type="text">
  <button @click="insertar">Insertar</button>
</template>

<script>
import {
  consultarEstudianteFachada,
  insertarEstudianteFachada,
} from "../helpers/clienteEstudiante.js";
export default {
  data() {
    return {
      id: null,
      nombre: null,
      apellido:null,
    };
  },
  methods: {
    async consultarPorId() {
      const data = await consultarEstudianteFachada(this.id);
      console.log("Desde componente" + data);
      this.nombre = data.nombre;
    },
    async insertar() {
      const estuBody = {
        nombre: "juan",
        apellido: this.apellido,
        genero: "M",
        fechaNacimiento: "1999-10-10T00:00:00",
      };
      await insertarEstudianteFachada(estuBody);
    },
  },
};
</script>

<style>
</style>