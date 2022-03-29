import Vue from 'vue'
import App from './App.vue'
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
