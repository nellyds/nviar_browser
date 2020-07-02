import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Confirm from "../views/Confirm.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",

    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/shopping",
    name: "Shopping",
    component: () => import("../views/Shopping.vue")
  },
  {
    path: "/requests",
    name: "Requests",
    component: () => import("../views/Requests.vue")
  },

  {
    path: "/offers",
    name: "Offers",
    component: () => import("../views/Offers.vue")
  },
  {
    path: "/confirm/:id",
    name: "confirm",
    component: Confirm
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
