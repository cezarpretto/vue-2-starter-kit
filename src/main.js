import Vue from 'vue'
// import App from './App.vue'
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import VueEvents from 'vue-events';
import AuthService from './services/AuthService';
import Validation from 'vuelidate';

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(VueEvents);
Vue.use(Validation);

// Components
import Navbar from './components/Navbar/Navbar.vue'
import Footer from './components/Footer/Footer.vue'
import Headerbar from './components/Headerbar/Headerbar.vue'

// Views
import Main from './views/Main/Main.vue';
import Login from './views/Login/Login.vue'
import NotFound from './views/NotFound/NotFound.vue';
// Directives
import modalfocus from './directives/modalfocus';

// Filters
import telefoneFilter from './filters/telefoneFilter';
import cpfCnpjFilter from './filters/cpfCnpjFilter';
import currencyFilter from './filters/currencyFilter';
import dateFilter from './filters/dateFilter';

const routes = [
  { path: '/', component: Main },
  { path: '/login', component: Login },
  { path: '/**', component: NotFound }
];

const router = new VueRouter({
  routes
});


var app = new Vue({
  router,
  components: {
    'nav-bar': Navbar,
    'footer-bar': Footer,
    'header-bar': Headerbar
  },
  directives: {

  }
}).$mount('#app');
