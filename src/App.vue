<template>
  
  <metainfo>
    <template v-slot:title="{ content }">
      {{ content ? `${content}` : `DSM Chiropractors` }}
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
      link: [
        { rel: "canonical", href: "" },
      ],
      meta: [
        { property: "og:title",  content: "" },
        { property: "og:description",  content: "" },
        { property: "og:type",  content: "" },
        { property: "og:url",  content: "" },
        { property: "og:image",  content: "" },
        { property: "twitter:title",  content: "" },
        { property: "twitter:card",  content: "" },
        { property: "twitter:description",  content: "" },
        { property: "twitter:image",  content: "" },
      ]
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