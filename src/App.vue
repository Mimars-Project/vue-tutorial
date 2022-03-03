<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome from Turners"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
const convertToSpaces = require('./convertToSpaces');

let test = convertToSpaces("hello?world");
console.log(test);
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
