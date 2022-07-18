<template>
  <metainfo>
    <template v-slot:title="{ content }">
      {{ content ? `${content}` : `Ankeny Chiropractors` }}
    </template>
  </metainfo>

  <header-component />
  <router-view />
  <footer-component />
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import { useMeta } from "vue-meta";

export default {
  name: "App",
  components: {
    HeaderComponent,
    FooterComponent,
  },
  setup() {
    useMeta({
      title: "",
      description: "",
      htmlAttrs: { lang: "en" },
      link: [{ rel: "canonical", href: "" }],
      meta: [
        { property: "og:title", content: "", vmid: "og:title" },
        { property: "og:description", content: "", vmid: "og:description" },
        { property: "og:type", content: "", vmid: "og:type" },
        { property: "og:url", content: "", vmid: "og:url" },
        { property: "og:image", content: "", vmid: "og:image" },
        { property: "twitter:title", content: "", vmid: "twitter:title" },
        { property: "twitter:card", content: "", vmid: "twitter:card" },
        {
          property: "twitter:description",
          content: "",
          vmid: "twitter:description",
        },
        { property: "twitter:image", content: "", vmid: "twitter:images" },
      ],
    });
  },
};
</script>

<style>
#app {
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}
</style>