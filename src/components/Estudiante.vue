<template>
  <div class="GET">
   
    <form class="form" action="">
      <p type="DATOS DEL ESTUDIANTE:"></p>
      <p type="Nombre: ">
        <input v-model="body.nombre" type="text" placeholder="nombre" />
      </p>
      <p type="Apellido: ">
        <input v-model="body.apellido" type="text" placeholder="apellido" />
      </p>
      <p type="Genero: ">
        <input v-model="body.genero" type="text" placeholder="genero" />
      </p>
      <p type="Fecha Nacimiento: ">
        <input
          v-model="body.fechaNacimiento"
          type="text"
          placeholder="fechaNacimiento"
        />
      </p>
    </form>
  </div>
  
</template>

<script>
export default {
  props: {
    body: {
      type: Object,
      requerid: false,
    },
  },
  watch: {
    body: {
      handler(newBody) {
        // Emitir un evento al componente padre con los datos del estudiante
        this.$emit("datosEnviados", newBody);
      },
      deep: true, // Para observar cambios profundos en el objeto
    },
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.container {
  display: grid;
  grid-template-columns: repeat(2, 40%);
  align-content: center;
  justify-content: center;
}
.GET {
  display: grid;
  align-content: center;
  justify-content: center;
}
.POST {
  display: grid;
  align-content: center;
  justify-content: center;
}
form {
  width: 340px;
  height: 300px;
  background-color: #1e4f75;
  border-radius: 8px;
  padding: 10px 30px;
  margin: 5px;
  font-family: "Times New Roman", Times, serif;
  box-shadow: 0px 0px 40px -10px #000;
}

p:before {
  content: attr(type);
  display: block;
  margin: 3px 2px;
  font-size: 16px;
  color: #fffdfd;
}
button {
  margin: 10px;
}
#id {
  margin-left: 150px;
  width: 100px;
}
#titulo2 {
  margin-bottom: 50px;
}
</style>