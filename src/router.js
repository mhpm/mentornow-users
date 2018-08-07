import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import InicioSesion from './views/InicioSesion.vue'
import Recuperar from './views/Recuperar.vue'
import RecExitoso from './views/RecExitoso.vue'
import Registro from './views/Registro.vue'
import Welcome from './views/Welcome.vue'
import Main from './views/Main.vue'
import Materias from './views/Materias.vue'
import Mentors from './views/Mentors.vue'
import Favorites from './views/Favorites.vue'
import Perfil from './views/Perfil.vue'
import Categories from './views/Categories.vue'
import MentorPerfil from './views/MentorPerfil.vue'
import Agendar from './views/Agendar.vue'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'Login', component: Login },
    { path: '/InitSesion', name: 'InitSesion', component: InicioSesion },
    { path: '/Recuperar', name: 'Recuperar', component: Recuperar },
    { path: '/RecExitoso', name: 'RecExitoso', component: RecExitoso },
    { path: '/Registro', name: 'Registro', component: Registro },
    { path: '/Welcome', name: 'Welcome', component: Welcome },
    { path: '/Main', name: 'Main', component: Main },
    { path: '/Materias', name: 'Materias', component: Materias },
    { path: '/Favorites', name: 'Favorites', component: Favorites },
    { path: '/Perfil', name: 'Perfil', component: Perfil },
    { path: '/Categories', name: 'Categories', component: Categories },
    { path: '/Mentors', name: 'Mentors', component: Mentors },
    { path: '/MentorPerfil/:id', name: 'MentorPerfil', component: MentorPerfil, params: true },
    { path: '/Agendar', name: 'Agendar', component: Agendar }
  ],
  mode:'history'
})
