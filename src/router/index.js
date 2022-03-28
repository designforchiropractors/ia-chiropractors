import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Apply from "../views/Apply.vue";
import Blog from "../views/Blog.vue";
import Contact from "../views/Contact.vue";
import Directory from "../views/Directory.vue";
import TermsConditions from "../views/TermsConditions.vue";
import PrivacyPolicy from "../views/PrivacyPolicy.vue";
import BlogPost from "../views/BlogPost.vue";
import DirectoryListing from "../views/DirectoryListing.vue";
import NotFound from "../views/NotFound.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    alias: ["/home", "/index.html", "/index.htm"],
  },
  {
    path: "/apply/",
    name: "apply",
    component: Apply,
  },
  {
    path: "/contact/",
    name: "contact",
    component: Contact,
  },
  {
    path: "/directory/",
    name: "directory",
    component: Directory,
  },
  {
    path: "/directory/:directoryLink/",
    name: "directoryListing",
    component: DirectoryListing,
  },
  {
    path: "/terms-conditions/",
    name: "terms-conditions",
    component: TermsConditions,
  },
  {
    path: "/privacy-policy/",
    name: "privacy-policy",
    component: PrivacyPolicy,
  },
  {
    path: "/blog/",
    name: "blog",
    component: Blog,
  },
  {
    path: "/blog/:postLink/",
    name: "blogPost",
    component: BlogPost
  },
  {
    path: "/notfound/",
    name: "notfound",
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
