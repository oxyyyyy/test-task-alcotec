import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/vacuum",
    name: "Vacuum",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Vacuum.vue")
  },
  {
    path: "/dosators",
    name: "Dosators",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Dosators.vue")
  },
  {
    path: "/refund",
    name: "Refund",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Refund.vue")
  },
  {
    path: "/payment",
    name: "Payment",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Payment.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
