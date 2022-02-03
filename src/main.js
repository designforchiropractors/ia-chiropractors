import { createApp } from "vue";
import { createMetaManager } from "vue-meta";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/tailwind.css";
import "./assets/normalize-and-reset.css";

createApp(App).use(store).use(router).use(createMetaManager()).mount("#app");
