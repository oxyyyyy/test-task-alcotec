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
      import(/* webpackChunkName: "Vacuum" */ "../views/Vacuum.vue")
  },
  {
    path: "/dosators",
    name: "Dosators",
    component: () =>
      import(/* webpackChunkName: "Dosators" */ "../views/Dosators.vue")
  },
  {
    path: "/refund",
    name: "Refund",
    component: () =>
      import(/* webpackChunkName: "Refund" */ "../views/Refund.vue")
  },
  {
    path: "/payment",
    name: "Payment",
    component: () =>
      import(/* webpackChunkName: "Payment" */ "../views/Payment.vue")
  },
  {
    path: "/404",
    name: "404",
    component: () =>
      import(/* webpackChunkName: "NotFound" */ "../views/NotFound.vue")
  },
  {
    path: "*",
    redirect: "/404"
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
