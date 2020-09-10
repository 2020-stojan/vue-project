// ulazna tacka javaScript-a
// sa ovim fajlom najpre komunicira nas public/index.html


import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

// ovde se kreira osnovna komponenta
// koja zatim prikazuje uvezenu App komponentu
// unutar divajdera koji ima id App

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


