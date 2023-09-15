import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import bootstrap from "bootstrap";
import { BootstrapIconsPlugin } from "bootstrap-icons-vue";
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

createApp(App)
  .use(store)
  .use(router)
  .use(bootstrap)
  .use(BootstrapIconsPlugin)
  .mount("#app");