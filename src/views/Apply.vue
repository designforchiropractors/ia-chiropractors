<template>
    <div class="py-16 md:py-20 bg-gray-100 custom_bg-pattern">
        <div class="lg:max-w-7xl lg:mx-auto px-4 sm:px-6 lg:px-8">
            <div class="lg:text-center">
                <h2 class="text-base text-green-700 font-semibold tracking-wide uppercase">
                  Get Listed
                </h2>
                <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                    Turn casual browsers into paying clients.
                </p>
                <p class="mt-4 max-w-3xl text-xl text-gray-500 lg:mx-auto">
                    Visitors to this directory are interested in finding the top chiropractors in their area.
                    Get your business listed so they can find you.
                </p>
            </div>

            <div class="shadow-inner px-6 md:px-10 lg:px-20 py-8 md:py-12 lg:py-16 w-full mt-20 bg-white mb-12">
                <h1 class="pb-8 text-2xl lg:text-3xl font-semibold text-center tracking-wide text-gray-900">
                    How a Listing Benefits You
                </h1>
                <dl class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-16 md:gap-y-10">
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
    </div>
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
    ContactForm
  },
  setup() {
    useMeta({ title: "Apply to Be Listed: DSM Chiropractors",
      description: "Apply to Be Listed on DSM Chiropractors",
      meta: [
        { property: "og:title",  content: "Apply to be Listed on DSM Chiropractors" },
        { property: "og:description",  content: "Apply to be Listed on DSM Chiropractors and turn casual browsers into paying clients" },
        { property: "og:type",  content: "website" },
        { property: "og:url",  content: "https://www.dsmchiropractors.com/#/apply" },
        { property: "og:image",  content: "https://www.dsmchiropractors.com/img/dsm-chiropractors.bb8ecb53.webp" },
      ]
     });

    const store = useStore();
    const listingBenefits = computed(() => store.state.listingBenefits);
    return { listingBenefits };
  },
};
</script>
