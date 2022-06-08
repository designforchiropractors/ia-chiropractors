<template>
  <section class="py-16 md:py-20 bg-gray-100 custom_bg-pattern">
    <div
      class="
        lg:max-w-7xl lg:mx-auto
        px-4
        sm:px-6
        lg:px-8
        py-8
        md:py-12
        lg:py-16
      "
    >
      <div class="lg:text-center">
        <h1
          class="text-base text-green-700 font-semibold tracking-wide uppercase"
        >
          Apply to Be Listed among Top Des Moines Chiropractors
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

      <div
        class="
          lg:max-w-7xl lg:mx-auto
          px-4
          sm:px-6
          lg:px-8
          py-8
          md:py-12
          lg:py-16
        "
      >
        <div class="lg:text-center mb-12">
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
            Take a look at a listing customers will use to find you
          </h2>

          <h3 class="mt-16 mb-4 max-w-3xl text-xl text-gray-500 lg:mx-auto">
            An example of how you would appear on
            <router-link :to="{ name: 'directory' }"
              >our Directory page</router-link
            >
          </h3>

          <directory-item-component :chiropractor="demoChiropractor">
          </directory-item-component>

          <h3 class="mb-4 max-w-3xl text-xl text-gray-500 lg:mx-auto">
            An example of how you would appear on your individualized listing
            page
          </h3>

          <div
            class="
              flex flex-col
              mx-4
              lg:grid lg:grid-cols-2
              2xl:max-w-screen-2xl 2xl:mx-auto
              shadow-lg
              bg-white
            "
          >
            <directory-listing-component :chiropractor="demoChiropractor">
            </directory-listing-component>
          </div>
        </div>

        <subscription-component></subscription-component>

        <div>
          <h1
            class="
              mb-6
              text-3xl
              lg:text-4xl
              font-bold
              text-gray-900 text-center
            "
          >
            Interested, but not ready to commit?
          </h1>
        </div>

        <div>
          <h2
            class="
              pb-8
              text-xl
              lg:text-2xl
              font-semibold
              text-center
              tracking-wide
              text-gray-900
            "
          >
            Fill out our
            <router-link :to="{ name: 'application-form' }" class="underline text-green-800"
              >application form</router-link
            >
            so we can get back to you with what your listing would look like before you sign up!
          </h2>
        </div>
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
import DirectoryItemComponent from "@/components/DirectoryItemComponent";
import DirectoryListingComponent from "@/components/DirectoryListingComponent";
import SubscriptionComponent from "@/components/SubscriptionComponent";

export default {
  name: "apply",
  components: {
    ListingBenefit,
    ContactForm,
    DirectoryItemComponent,
    DirectoryListingComponent,
    SubscriptionComponent,
  },
  setup() {
    const store = useStore();

    const demoChiropractor = {
      firstName: "This Could",
      lastName: "Be You",
      link: "kellie-hoover-iowa-family-chiropractic",
      experience: 15,
      location: "Your Location",
      focus: "Your Focus",
      services: [
        "Potential clients end up here",
        "So tell them what you do",
        "And grow your business",
      ],
      picture: "this-could-be-you.jpg",
      contactUrl: "#",
      businessName: "Link to Your Business",
      websiteUrl: "#",
      education:
        "Take this space to tell your potential clients about your educational background. What degree do you have? Where did you receive it? Were you magna cum laude? Summa cum laude?",
      specialization:
        "Do you have a particular specialization? Does your practice focus on rehabilitation? Do you use a particular technology, methodology, etc? Tell potential clients what sets you apart.",
      about:
        "Make yourself more personable and relatable. Tell your potential clients about your family, hobbies, passions, and more. The more a client can relate to you, the more motivated they will be to come visit you.",
      extras:
        "Perhaps you have something else you would like potential patients to know. Add anything extra that you want to say right here.",
    };

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
    return { demoChiropractor, listingBenefits };
  },
};
</script>
