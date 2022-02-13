<template>Not Found</template>

<script>
import { useMeta } from "vue-meta";

export default {
  name: "notfound",
  components: {},
  setup() {
    useMeta({ title: "404: DSM Chiropractors",
      description: "404 Page for DSM Chiropractors",
      meta: [
        { property: "og:title",  content: "404 Not Found on DSM Chiopractors" },
        { property: "og:site_name",  content: "404 Not Found" },
        { property: "og:description",  content: "404 Not Found on DSM Chiopractors" },
        { property: "og:type",  content: "website" },
        { property: "og:url",  content: "https://www.dsmchiropractors.com/#/notfound" },
        { property: "og:image",  content: "https://www.dsmchiropractors.com/img/dsm-chiropractors.bb8ecb53.webp" },
      ]
     });

  },
};
</script>
