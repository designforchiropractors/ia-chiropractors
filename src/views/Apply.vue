<template>
  <section class="py-16 md:py-20 bg-gray-100 custom_bg-pattern">
    <div class="lg:max-w-7xl lg:mx-auto px-4 sm:px-6 lg:px-8">
      <div class="lg:text-center">
        <h1
          class="text-base text-green-700 font-semibold tracking-wide uppercase"
        >
          Get Listed among Top Des Moines Chiropractors
        </h1>
        <h2
          class="
            mt-2
            text-3xl
            leading-8
            font-extrabold
            tracking-tight
            text-gray-900
            sm:text-4xl
          "
        >
          Turn casual browsers into paying clients.
        </h2>
        <h3 class="mt-4 max-w-3xl text-xl text-gray-500 lg:mx-auto">
          Visitors to this directory are interested in finding the top
          chiropractors in their area. Get your business listed so they can find
          you.
        </h3>
      </div>

      <div
        class="
          shadow-inner
          px-6
          md:px-10
          lg:px-20
          py-8
          md:py-12
          lg:py-16
          w-full
          mt-20
          bg-white
          mb-12
        "
      >
        <h1
          class="
            pb-8
            text-2xl
            lg:text-3xl
            font-semibold
            text-center
            tracking-wide
            text-gray-900
          "
        >
          How a Listing Benefits You
        </h1>
        <dl
          class="
            space-y-10
            md:space-y-0 md:grid md:grid-cols-2 md:gap-x-16 md:gap-y-10
          "
        >
          <listing-benefit
            v-for="listingBenefit in listingBenefits"
            :listingBenefit="listingBenefit"
            :key="listingBenefit.id"
          >
          </listing-benefit>
        </dl>
      </div>

      <div class="w-full lg:flex bg-gray-100">
        <contact-form></contact-form>
      </div>
    </div>
  </section>
</template>

<script>
import { useMeta } from "vue-meta";
import { computed } from "vue";
import { useStore } from "vuex";

import ListingBenefit from "@/components/ListingBenefit.vue";
import ContactForm from "@/components/ContactForm.vue";

export default {
  name: "apply",
  components: {
    ListingBenefit,
    ContactForm,
  },
  setup() {
    const store = useStore();

    const metaTitle = "Apply to Be Listed among Top Des Moines Chiropractors";
    const metaDescription =
      "Apply to Be Listed on DSM Chiropractors among the Top Des Moines Chiropractors and turn casual browsers into paying clients.";
    const metaUrl = "https://www.dsmchiropractors.com/apply/";

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

    const listingBenefits = computed(() => store.state.listingBenefits);
    return { listingBenefits };
  },
};
</script>
