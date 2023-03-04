import Vue from 'vue'
import VueRouter from 'vue-router'
import MainPage from "@/views/MainPage.vue"
import FooterFolio from "@/components/FooterFolio.vue"
import NavBar from "@/components/NavBar.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: MainPage
  },
  {
    path: "/footer",
    component: FooterFolio
  },
  {
    path: "/nav",
    component: NavBar
  }
]

const router = new VueRouter({
  routes
})

export default router
