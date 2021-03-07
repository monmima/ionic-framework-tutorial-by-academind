import { createRouter, createWebHistory } from '@ionic/vue-router';
import MemoriesPage from "../pages/MemoriesPage.vue";
import MemoriesDetails from "../pages/MemoryDetails.vue";

const routes = [
  {
    path: '/',
    redirect: '/memories'
  },
  {
    path: '/memories',
    component: MemoriesPage
  },
  {
    path: '/memories/:id',
    component: MemoriesDetails
    // component: () =>("../page/MemoryDetails.vue")
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
