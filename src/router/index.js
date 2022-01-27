import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import Apply from "../views/Apply.vue";
import Blog from "../views/Blog.vue";
import Contact from "../views/Contact.vue";
import Directory from "../views/Directory.vue";
import TermsConditions from "../views/TermsConditions.vue";
import PrivacyPolicy from "../views/PrivacyPolicy.vue";
import NotFound from "../views/NotFound.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    alias: ["/home", "/index.html", "/index.htm"]
  },
  {
    path: "/apply",
    name: "apply",
    component: Apply
  },
  {
    path: "/blog",
    name: "blog",
    component: Blog
  },
  {
    path: "/contact",
    name: "contact",
    component: Contact
  },
  {
    path: "/directory",
    name: "directory",
    component: Directory
  },
  {
    path: "/terms-conditions",
    name: "terms-conditions",
    component: TermsConditions
  },
  {
    path: "/privacy-policy",
    name: "privacy-policy",
    component: PrivacyPolicy
  },
  {
    path: "/notfound",
    name: "notfound",
    component: NotFound
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
