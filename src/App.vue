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

window.watsonAssistantChatOptions = {
  integrationID: "4aa8e599-2c29-4618-a21d-fc3801b655c9", // The ID of this integration.
  region: "au-syd", // The region your integration is hosted in.
  serviceInstanceID: "f97c5424-5722-4e12-b033-87f7e932e147", // The ID of your service instance.
  onLoad: function(instance) { instance.render(); }
};
setTimeout(function(){
  const t=document.createElement('script');
  t.src="https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js";
  document.head.appendChild(t);
});
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
