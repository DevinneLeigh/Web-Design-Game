import { createRouter, createWebHashHistory } from "vue-router"
import MapView from "@/views/MapView.vue";
import LevelView from "@/views/LevelView.vue";

const routes = [
  {
    path: "/",
    name: "Map",
    component: MapView
  },
  {
    path: "/level/:id",
    name: "Level",
    component: LevelView
  }
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router