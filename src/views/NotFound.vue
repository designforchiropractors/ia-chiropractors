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
      <br/>
      Click one of the links on the menu above to get back on your way.
    </p>
  </section>
</template>

<script>
import { useMeta } from "vue-meta";

export default {
  name: "notfound",
  components: {},
  setup() {
    useMeta({ title: "404: DSM Chiropractors",
      description: "404 Page for DSM Chiropractors",
      link: [
        { rel: "canonical", href: "https://www.dsmchiropractors.com/" },
      ],
      meta: [
        { property: "og:title",  content: "404 Not Found on DSM Chiopractors" },
        { property: "og:description",  content: "404 Not Found on DSM Chiopractors." },
        { property: "og:type",  content: "website" },
        { property: "og:url",  content: "https://www.dsmchiropractors.com/notfound/" },
        { property: "og:image",  content: "https://www.dsmchiropractors.com/img/dsm-chiropractors.bb8ecb53.webp" },
        { property: "twitter:title",  content: "404 Not Found on DSM Chiopractors." },
        { property: "twitter:card",  content: "summary" },
        { property: "twitter:description",  content: "404 Not Found on DSM Chiopractors." },
        { property: "twitter:image",  content: "https://www.dsmchiropractors.com/img/dsm-chiropractors.bb8ecb53.webp" },
      ]
     });

  },
};
</script>
