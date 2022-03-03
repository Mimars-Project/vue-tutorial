import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')
const convertToSpaces = require('./convertToSpaces');

let test = convertToSpaces("hello?world");
console.log(test);