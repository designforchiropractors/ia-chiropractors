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

        
    const metaTitle = "404: DSM Chiropractors"
    const metaDescription = "404 Page not found on DSM Chiropractors"
    const metaImage = "https://www.dsmchiropractors.com/img/dsm-chiropractors.bb8ecb53.webp"
    const metaUrl = "https://www.dsmchiropractors.com/notfound/"
    
    useMeta({
      title: metaTitle,
      description: metaDescription,
      link: [
        { rel: "canonical", href: metaUrl },
      ],
      meta: [
        { property: "og:title",  content: metaTitle },
        { property: "og:description",  content: metaDescription },
        { property: "og:type",  content: "website" },
        { property: "og:url",  content: metaUrl },
        { property: "og:image",  content: metaImage },
        { property: "twitter:title",  content: metaTitle },
        { property: "twitter:card",  content: "summary" },
        { property: "twitter:description",  content: metaDescription },
        { property: "twitter:image",  content: metaImage },
      ]
     });
  },
};
</script>
