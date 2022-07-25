<template>
  <section
    id="sites"
    class="
      custom_bg-pattern
      relative
      md:flex md:flex-row
      flex-wrap
      justify-center
      items-center
      pt-32
      pb-12
      z-10
      shadow-inner
      bg-gray-200
    "
  >
    <site-card
      v-for="site in sites"
      :site="site"
      :key="site.id"
    >
    </site-card>
  </section>

</template>

<script>
import { useMeta } from "vue-meta";
import { computed } from "vue";
import { useStore } from "vuex";
import SiteCard from "@/components/SiteCard.vue";

export default {
  name: "Home",
  components: {
    SiteCard,
  },
  setup() {
    const store = useStore();

    const metaTitle = "IA Chiropractors";
    const metaDescription =
      "IA Chiropractors. Find the Top IA Chiropractors or get your business listed in the directory and turn casual browsers into paying clients.";
    const metaUrl = "https://www.iachiropractors.com/";

    useMeta({
      title: metaTitle,
      description: metaDescription,
      link: [{ rel: "canonical", href: metaUrl }],
      meta: [
        { property: "og:title", vmid: "og:title", content: metaTitle },
        {
          property: "og:description",
          vmid: "og:description",
          content: metaDescription,
        },
        { property: "og:type", vmid: "og:type", content: "website" },
        { property: "og:url", vmid: "og:url", content: metaUrl },
        {
          property: "og:image",
          vmid: "og:image",
          content: store.state.metaLogoImage,
        },
        {
          property: "twitter:title",
          vmid: "twitter:title",
          content: metaTitle,
        },
        { property: "twitter:card", vmid: "twitter:card", content: "summary" },
        {
          property: "twitter:description",
          vmid: "twitter:description",
          content: metaDescription,
        },
        {
          property: "twitter:image",
          vmid: "twitter:image",
          content: store.state.metaLogoImage,
        },
      ],
    });

    const sites = computed(() => store.state.sites);
    return { sites };
  },
};
</script>
