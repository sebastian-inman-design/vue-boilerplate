import Vue from "vue";
import store from "./store";
import router from "./router";
import config from "../package.json";

import Page from "@/components/Page.vue";

Vue.config.productionTip = false

new Vue({
  router,
  store,
  data: {
    name: config.name,
    version: config.version
  },
  render: h => h(Page)
}).$mount('#app');
