import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./pages/HomePage.vue";
import PokemonDetail from './components/PokemonDetail.vue';

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: '/pokemon/:id',
      name: 'PokemonDetail',
      component: PokemonDetail,
      props: true
    }
  ],
});
