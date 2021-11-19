import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
//import Peliculas from './components/Peliculas/Peliculas.vue';
import Peliculas2 from './components/Peliculas/Peliculas2.vue';



Vue.config.productionTip = false;
Vue.use(VueRouter);

const routes = [
  //{path:"/peliculas", Peliculas},
  {path:"/peliculas", Peliculas2},
  //{path:"/peliculas/:idNacionalidad", Peliculas},

];

const router = new VueRouter({
  routes,
  mode: "history",
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
