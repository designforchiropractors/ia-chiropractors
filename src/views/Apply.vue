<template>
    <div class="py-16 md:py-20 bg-white">
        <div class="lg:max-w-7xl lg:mx-auto px-4 sm:px-6 lg:px-8">
            <div class="lg:text-center">
                <h2 class="text-base text-gray-700 font-semibold tracking-wide uppercase">
                  Listings
                </h2>
                <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                    Turn curious searchers into paying clients.
                </p>
                <p class="mt-4 max-w-3xl text-xl text-gray-500 lg:mx-auto">
                    Visitors to this directory are interested in finding the top chiropractors in their area.
                    Get your business listed so they can find you.
                </p>
            </div>

            <div class="custom_bg-pattern shadow-inner px-6 md:px-10 lg:px-20 py-8 md:py-12 lg:py-16 w-full mt-20">
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

            <contact-form></contact-form>
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
    useMeta({ title: "Apply to Be Listed: DSM Chiropractors" });
    const store = useStore();
    const listingBenefits = computed(() => store.state.listingBenefits);
    return { listingBenefits };
  },
};
</script>
