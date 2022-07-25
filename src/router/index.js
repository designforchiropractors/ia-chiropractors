import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import TermsConditions from "../views/TermsConditions.vue";
import PrivacyPolicy from "../views/PrivacyPolicy.vue";
import NotFound from "../views/NotFound.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    alias: ["/home", "/index.html", "/index.htm"],
  },
  {
    path: "/terms-conditions/",
    name: "TermsConditions",
    component: TermsConditions,
  },
  {
    path: "/privacy-policy/",
    name: "PrivacyPolicy",
    component: PrivacyPolicy,
  },
  {
    path: "/notfound/",
    name: "NotFound",
    component: NotFound,
  },
  {
    path: "/:catchAll(.*)",
    redirect: "/notfound/",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
});

export default router;
