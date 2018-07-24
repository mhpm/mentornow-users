import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import spanish from 'vee-validate/dist/locale/es';
import VeeValidate, { Validator } from 'vee-validate';
// Localize takes the locale object as the second argument (optional) and merges it.
Validator.localize('es', spanish);
Vue.use(VeeValidate);

import 'animate.css'
import Pageloader from './components/Pageloader'
Vue.component('app-pageloader',Pageloader);

import './registerServiceWorker'
import 'bulma-extensions/dist/bulma-extensions.min.css'
import 'bulma-extensions/bulma-carousel/dist/bulma-carousel.min.css'
import 'bulma-extensions/bulma-carousel/dist/bulma-carousel.min.js'

import 'vue-awesome/icons/flag'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
Vue.component('fa', Icon)

import Navbar from './components/Navbar.vue'
Vue.component('app-navbar', Navbar)

import Carousel from './components/Carousel.vue'
Vue.component('app-carousel', Carousel)

import SearchBar from './components/SearchBar.vue'
Vue.component('app-searchbar', SearchBar)

import MateriaCard from './components/MateriaCard.vue'
Vue.component('materiacard', MateriaCard)

import MentorCard from './components/MentorCard.vue'
Vue.component('mentorcard', MentorCard)

import CommentCard from './components/CommentCard.vue'
Vue.component('commentcard', CommentCard)

import Loader from './components/Loader.vue'
Vue.component('app-loader', Loader)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
