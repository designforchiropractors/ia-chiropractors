<template>
  <section class="custom_bg-pattern pt-16 md:pt-20">
    <div class="max-w-screen-lg mx-auto py-8 md:py-12 lg:py-16">
      <div class="mb-12 lg:mb-16 lg:text-center">
        <h1
          class="
            mx-4
            text-base text-green-700
            font-semibold
            tracking-wide
            uppercase
          "
        >
          Directory of Top Des Moines Chiropractors
        </h1>
        <p
          class="
            mx-4
            mt-2
            text-3xl
            leading-8
            font-extrabold
            tracking-tight
            text-gray-900
            sm:text-4xl
          "
        >
          Get to Know Your Health Professionals
        </p>
        <p
          class="
            mx-4
            mt-4
            max-w-2xl
            text-lg
            lg:text-xl
            text-gray-500
            lg:mx-auto
          "
        >
          Take your health and well-being into your own hands by browsing the
          licensed professionals listed here.
        </p>
      </div>

      <directory-item-component
        v-for="(chiropractor, index) in chiropractors"
        :chiropractor="chiropractor"
        :key="index"
      >
      </directory-item-component>
    </div>
  </section>
</template>

<script>
import { useMeta } from "vue-meta";
import { computed } from "vue";
import { useStore } from "vuex";

import DirectoryItemComponent from "@/components/DirectoryItemComponent";

export default {
  name: "directory",
  components: {
    DirectoryItemComponent,
  },
  setup() {
    const store = useStore();

    const metaTitle = "Directory of Top Des Moines Chiropractors";
    const metaDescription =
      "Directory of DSM Chiropractors. Find the Top Des Moines Chiropractors to manage pain, prevent injury, and start living again.";
    const metaUrl = "https://www.dsmchiropractors.com/directory/";

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
        { property: "og:image", vmid: "og:image", content: store.state.metaLogoImage },
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

    const chiropractors = computed(() => store.state.chiropractors);
    return { chiropractors };
  },
};
</script>
