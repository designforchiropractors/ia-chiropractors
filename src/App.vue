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
import FooterComponent from '@/components/FooterComponent.vue';
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
      htmlAttrs: { lang: "en", amp: true }
    })
  }
};
</script>
