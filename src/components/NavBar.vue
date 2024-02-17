<template>
  <div>
    <router-link to="/guardar">Guardar</router-link>
    <router-link to="/eliminar">Eliminar</router-link>
    <router-link to="/consultar">Buscar</router-link>
    <router-link to="/actualizar">Actualizar</router-link>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
div a {
  color: #2c3e50;
  margin: 0px 10px;
  font-weight: bold;
  border: solid 1px;
  padding: 5px;
  border-radius: 5px;
  background: turquoise;
}
.router-link-active {
    background: violet;
}
</style>