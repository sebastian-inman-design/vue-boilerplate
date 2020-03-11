import Vue from "vue";
import VueRouter from "vue-router";

import route404 from "./routes/404";
import routeHome from "./routes/home";

Vue.use(VueRouter)

// Initiate the Vue Router.
export default new VueRouter({routes: [
  routeHome,
  route404
], mode: "history"})