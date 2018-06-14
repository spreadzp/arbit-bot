import Vue from 'vue'
import App from './App.vue'
const price = require('./../../tempCodeRunnerFile')
console.log(price)

new Vue({
  el: '#app',
  render: h => h(App)
})

var app2 = new Vue({
  el: '#app2',
  data: {
    message: 'Вы загрузили эту страницу в: ' + new Date().toLocaleString()
  }
})