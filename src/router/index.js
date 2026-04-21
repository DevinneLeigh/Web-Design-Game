import { createRouter, createWebHashHistory } from "vue-router"
import ListView from "@/views/ListView.vue";
import LevelView from "@/views/LevelView.vue";

const routes = [
  {
    path: "/",
    name: "List",
    component: ListView
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