// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './productApp'
import router from './router'
import Dh from './../public/Dh'
import Bq from './../public/Bq'
import Banner from './../public/Banner'

Vue.config.productionTip = false

/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router,
//   components: { App },
//   template: '<App/>'
// })
// new Vue({
//   router,
//   render: h => h(App)
// }).$mount('#app')
new Vue({
  el: '#app',
  router,
  components: { App, Dh, Bq, Banner },
  template: '<div><Dh/><Banner/><App/><Bq/></div>'
})
