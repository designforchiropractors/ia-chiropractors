<template>
  <section class="custom_bg-pattern pb-32">
    <h2
      class="
        text-center
        mb-4
        mx-4
        pt-40
        lg:mx-0
        font-semibold
        text-5xl text-gray-900
      "
    >
      Page not found
    </h2>

    <p class="text-xl text-center mx-4 lg:mx-auto lg:w-2/3 my-12 text-gray-700">
      Looks like you're a little lost!
      <br />
      Click one of the links on the menu above to get back on your way.
    </p>
  </section>
</template>

<script>
import { useMeta } from "vue-meta";
import { useStore } from "vuex";

export default {
  name: "notfound",
  components: {},
  setup() {
    const store = useStore();

    const metaTitle = "404: Ankeny Chiropractors";
    const metaDescription = "404 Page not found on Ankeny Chiropractors";
    const metaUrl = "https://www.ankenychiropractors.com/notfound/";

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
  },
};
</script>
