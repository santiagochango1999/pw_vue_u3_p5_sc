<template>
  <h1>Pagina Eliminar</h1>
  <input id="id" v-model="id" type="text" placeholder="Ingrese ID" />
  <button @click="eliminar">eliminar</button>
</template>

<script>
import { eliminarFachada } from "../helpers/clienteEstudiante.js";
export default {
  data() {
    return {
      id: null,
    };
  },
  methods: {
    async eliminar() {
      await eliminarFachada(this.id);
    },
  },
};
</script>

<style>
</style>