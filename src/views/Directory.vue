<template>
  <section class="custom_bg-pattern py-16 md:py-20">
    <div class="max-w-screen-lg mx-auto">
      <div class="mb-16 lg:mb-24 lg:text-center">
        <h2
          class="
            mx-4
            text-base text-green-700
            font-semibold
            tracking-wide
            uppercase
          "
        >
          Directory of Des Moines Chiropractors
        </h2>
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
        v-for="chiropractor in chiropractors"
        :chiropractor="chiropractor"
        :key="chiropractor.id"
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
    useMeta({ title: "Directory: DSM Chiropractors",
      description: "Directory for DSM Chiropractors. Find the top chiropractors in the Des Moines area.",
      link: [
        { rel: "canonical", href: "https://www.dsmchiropractors.com/directory" },
      ],
      meta: [
        { property: "og:title",  content: "Directory for DSM Chiropractors" },
        { property: "og:description",  content: "Directory for DSM Chiropractors. Find the top chiropractors in the Des Moines area." },
        { property: "og:type",  content: "website" },
        { property: "og:url",  content: "https://www.dsmchiropractors.com/directory" },
        { property: "og:image",  content: "https://www.dsmchiropractors.com/img/dsm-chiropractors.bb8ecb53.webp" },
        { property: "twitter:title",  content: "Directory Des Moines Chiropractors" },
        { property: "twitter:card",  content: "summary" },
        { property: "twitter:description",  content: "Directory for DSM Chiropractors. Find the top chiropractors in the Des Moines area." },
        { property: "twitter:image",  content: "https://www.dsmchiropractors.com/img/dsm-chiropractors.bb8ecb53.webp" },
      ]
     });

    const store = useStore();
    const chiropractors = computed(() => store.state.chiropractors);
    return { chiropractors };
  },
};
</script>
