<template>
  <section
    class="
      flex flex-col
      mx-4
      lg:grid lg:grid-cols-2
      pt-12
      md:pt-10
      2xl:max-w-screen-2xl 2xl:mx-auto
      shadow-lg
      bg-white
    "
  >
    <directory-listing-component :chiropractor="chiropractor">
    </directory-listing-component>

    <!--<div class="w-full py-6 lg:py-12 text-center col-start-1 col-end-3">
        Embed google map of location here
    </div>-->
  </section>
</template>

<script>
import { useMeta } from "vue-meta";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import { computed } from "vue";

import ChiropractorService from "@/services/ChiropractorService";
import DirectoryListingComponent from "@/components/DirectoryListingComponent";

export default {
  name: "directoryListing",
  components: {
    DirectoryListingComponent,
  },
  setup() {
    const route = useRoute();
    const store = useStore();
    const chiropractors = computed(() => store.state.chiropractors);

    const chiropractor = chiropractors.value.find((item) => {
      return item.link == route.params.directoryLink;
    });

    const chiropractorUrl =
      "https://www.ankenychiropractors.com/directory/" +
      route.params.directoryLink +
      "/";

    useMeta({
      title: ChiropractorService.formatName(chiropractor),
      description:
        "Ankeny Chiropractors: " + ChiropractorService.formatName(chiropractor),
      link: [
        {
          rel: "canonical",
          href: chiropractorUrl,
        },
      ],
      meta: [
        {
          property: "og:title",
          vmid: "og:title",
          content: ChiropractorService.formatName(chiropractor),
        },
        {
          property: "og:description",
          vmid: "og:description",
          content:
            "Ankeny Chiropractors: " +
            ChiropractorService.formatName(chiropractor),
        },
        { property: "og:type", vmid: "og:type", content: "website" },
        { property: "og:url", vmid: "og:url", content: chiropractorUrl },
        {
          property: "og:image",
          vmid: "og:image",
          content: chiropractor.pictureUrl,
        },
        {
          property: "twitter:title",
          vmid: "twitter:title",
          content:
            "Ankeny Chiropractors: " +
            ChiropractorService.formatName(chiropractor),
        },
        { property: "twitter:card", vmid: "twitter:card", content: "summary" },
        {
          property: "twitter:description",
          vmid: "twitter:description",
          content:
            "Ankeny Chiropractors: " +
            ChiropractorService.formatName(chiropractor),
        },
        {
          property: "twitter:image",
          vmid: "twitter:image",
          content: chiropractor.pictureUrl,
        },
      ],
    });

    const formatName = (chiropractor) => {
      return ChiropractorService.formatName(chiropractor);
    };

    return { chiropractor, formatName };
  },
};
</script>
