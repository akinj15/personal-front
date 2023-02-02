import { createRouter, createWebHistory } from 'vue-router';

import LoginView from '../views/login/LoginView.vue' 
import MainView from '../views/main/MainView.vue'
import LoginComponent from '../components/login/LoginComponent.vue'
import HomeComponent from '../components/home/'
const listRoutes = [
  ...HomeComponent.routes
]


const routes = [
    {
        path: '/',
        component: LoginView,
        children: [
          {
            path: '/',
            component: LoginComponent
          }
        ]
    },
    {
        path: '/',
        component: MainView,
        children: [
          ...listRoutes,
        ]
    },


];

const router = createRouter({
    history : createWebHistory(),
    routes : routes
})



export default router;

