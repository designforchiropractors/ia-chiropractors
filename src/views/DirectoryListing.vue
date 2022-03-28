<template>
  <section
    class="
      flex flex-col
      mx-4
      lg:grid lg:grid-cols-2
      mt-16
      mb-24
      2xl:max-w-screen-2xl 2xl:mx-auto
      shadow-lg
      bg-white
    "
  >

    <div class="relative w-full h-64 lg:h-full">
      <img
        class="absolute h-full w-full object-cover"
        :src="require('@/assets/' + chiropractor.picture)"
        :alt="formatName(chiropractor)"
      />
    </div>

    <div class="py-6 lg:py-12 mx-6 lg:mx-12">
      <h3 class="mb-6 text-3xl lg:text-4xl font-bold text-gray-800">
        {{ formatName(chiropractor) }}
      </h3>
      <div class="flex gap-x-8 mb-4">
        <div>
          <h4 class="uppercase font-semibold text-xs text-gray-400 mb-1">
            Experience
          </h4>
          <span class="font-xl font-bold text-gray-800">{{ chiropractor.experience }} years</span>
        </div>
        <div>
          <h4 class="uppercase font-semibold text-xs text-gray-400 mb-1">
            {{ chiropractor.location }}
          </h4>
          <span class="font-xl font-bold text-gray-800">Green Point</span>
        </div>
        <div>
          <h4 class="uppercase font-semibold text-xs text-gray-400 mb-1">
            Patient Focus
          </h4>
          <span class="font-xl font-bold text-gray-800">{{ chiropractor.focus }}</span>
        </div>
      </div>
      <hr class="mb-8" />
      <div class="flex flex-col lg:grid lg:grid-cols-2 gap-8">
        
        <div>
          <h4 class="uppercase font-bold text-xs mb-2 text-green-700">
            Services
          </h4>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum
            commodi, corporis animi cumque quo ullam aspernatur molestias totam
            tenetur consequuntur, nisi aliquam nulla repellendus? Ea dignissimos
            enim odit cum quibusdam.
          </p>
        </div>
        <div>
          <h4 class="uppercase font-bold text-xs mb-2 text-green-700">Extra</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum
            commodi, corporis animi cumque quo ullam aspernatur molestias totam
            tenetur consequuntur, nisi aliquam nulla repellendus? Ea dignissimos
            enim odit cum quibusdam.
          </p>
        </div>
            
        <div>
          <h4 class="uppercase font-bold text-xs mb-2 text-green-700">Website</h4>
          <p>TBD</p>
        </div>
        <div class="flex flex-col justify-center mb-8 lg:mb-0">
            <a
                class="
                inline-block
                uppercase
                text-center
                font-semibold
                px-6
                py-3
                shadow-sm
                text-gray-50
                bg-green-700
                transition-colors
                duration-300
                hover:shadow-md hover:bg-gray-50 hover:text-gray-700
                w-full
                sm:w-3/4
                md:w-1/2
                lg:w-full
                "
                href="/"
                target="_blank"
                >Contact {{ formatName(chiropractor) }}</a
            >
        </div>
      </div>
    </div>
    
    <div class="col-start-1 col-end-2 p-6 lg:p-12 bg-gray-900">
      <h3
        class="
          uppercase
          font-semibold
          text-xs
          mb-2
          tracking-widest
          text-gray-400
        "
      >
        About
      </h3>
      <p class="max-w-prose text-gray-300">
        {{ chiropractor.about }}
      </p>
    </div>
    <div class="col-start-2 col-end-3 p-6 pb-10 lg:pb-12 lg:p-12 bg-gray-900">
      <h3
        class="
          uppercase
          font-semibold
          text-xs
          mb-2
          tracking-widest
          text-gray-400
        "
      >
        Qualifications
      </h3>
      <p class="max-w-prose text-gray-300">
        {{ chiropractor.qualifications }}
      </p>
    </div>

    <div class="w-full py-6 lg:py-12 text-center col-start-1 col-end-3">
        Embed google map of location here
    </div>

  </section>
</template>

<script>
import { useMeta } from "vue-meta";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import { computed } from "vue";

import ChiropractorService from "@/services/ChiropractorService";

export default {
  name: "directoryListing",
  components: {},
  setup() {
    const route = useRoute();
    const store = useStore();
    const chiropractors = computed(() => store.state.chiropractors);

    const chiropractor = chiropractors.value.find((item) => {
      return ChiropractorService.formatLink(item) == route.params.directoryLink;
    });

    const chiropractorUrl =
      "https://www.dsmchiropractors.com/directory/" +
      route.params.directoryLink +
      "/";

    useMeta({
      title: ChiropractorService.formatName(chiropractor),
      description:
        "DSM Chiropractors: " + ChiropractorService.formatName(chiropractor),
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
            "DSM Chiropractors: " +
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
            "DSM Chiropractors: " +
            ChiropractorService.formatName(chiropractor),
        },
        { property: "twitter:card", vmid: "twitter:card", content: "summary" },
        {
          property: "twitter:description",
          vmid: "twitter:description",
          content:
            "DSM Chiropractors: " +
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
