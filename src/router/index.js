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
    path: "/products/:product_category_id",
    name: "Products",
    component: () =>
      import(/* webpackChunkName: "Products" */ "../views/Products.vue")
  },
  {
    path: "/page/:page_id",
    name: "Page",
    component: () => import(/* webpackChunkName: "Page" */ "../views/Page.vue")
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
