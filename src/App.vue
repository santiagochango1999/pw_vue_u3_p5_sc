<template>
  <!-- <EstudiantesPaginaVue/> -->
  <h1>Universidad Central</h1>
  <NavBar/>
  <router-view/>
</template>

<script>
import NavBar from './components/NavBar.vue'
import EstudiantesPaginaVue from './pages/EstudiantesPagina.vue'

export default {
  name: 'App',
  components: {
    EstudiantesPaginaVue,
    NavBar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
