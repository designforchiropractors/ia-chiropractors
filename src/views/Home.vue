<template>
  <section
    class="
      cover
      relative
      bg-gradient-to-r
      from-deep-red
      to-gray-50
      px-4
      sm:px-8
      lg:px-16
      xl:px-40
      2xl:px-64
      overflow-hidden
      py-48
      flex
      items-center
    "
  >
    <div class="home-image h-full absolute top-12 left-0 right-0 z-0">
      <img
        :src="require('@/assets/ankeny-chiropractors.jpg')"
        alt="The High Trestle Trail bridge in Ankeny"
        class="w-full h-full object-cover opacity-20"
      />
    </div>

    <div
      class="
        col-start-1 col-end-3
        lg:col-start-2
        flex flex-col
        justify-center
        mx-4
        z-10
      "
    >
      <h1 class="text-7xl font-bold text-gray-50">Take back your life.</h1>
      <p
        class="
          text-xl
          mt-10
          mb-20
          leading-relaxed
          md:leading-loose
          max-w-prose
          lg:w-2/3
          text-gray-50
        "
      >
        Find top Des Moines chiropractors near you to manage pain, prevent
        injury, and start living again
      </p>
    </div>
  </section>

  <section
    id="benefit"
    class="
      custom_bg-pattern
      relative
      md:flex md:flex-row
      flex-wrap
      justify-center
      items-center
      py-12
      z-10
      shadow-inner
      bg-gray-200
    "
  >
    <info-card
      v-for="infoCard in infoCards"
      :infoCard="infoCard"
      :key="infoCard.id"
    >
    </info-card>
  </section>

  <section
    class="pt-16 lg:py-36 -mt-8 mx-6 md:mx-32 lg:mx-auto max-w-screen-xl"
  >
    <div>
      <div class="flex flex-col lg:mx-8 lg:flex-row mb-20 lg:mb-0">
        <div class="w-full mt-8 lg:mt-0">
          <right-card
            v-for="rightCard in rightCards"
            :rightCard="rightCard"
            :key="rightCard.id"
          >
          </right-card>
        </div>
        <div class="relative w-full pb-96 overflow-hidden lg:pb-0 lg:ml-44">
          <img
            class="absolute w-full h-full object-cover"
            src="../assets/people.jpg"
            alt="A row of happy people"
          />
        </div>
      </div>
    </div>
  </section>

  <section
    class="
      chiropractor_select
      relative
      h-full
      py-24
      lg:h-96
      flex flex-col
      items-center
      justify-center
      shadow-inner
      bg-fixed
    "
  >
    <div
      class="absolute top-0 left-0 w-full h-full bg-gray-800 opacity-80 z-10"
    ></div>
    <div class="relative z-20">
      <h2
        class="
          text-center
          mb-4
          mx-4
          lg:mx-0
          font-semibold
          text-5xl text-gray-50
        "
      >
        Search the Directory
      </h2>
      <p class="text-xl text-center mx-4 lg:mx-auto mb-12 text-gray-100">
        Looking for a chiropractor in your area?
        <br />
        Start browsing the directory now to find what professionals are nearby!
      </p>
      <div class="flex flex-wrap gap-8 justify-center">
        <router-link
          :to="{ name: 'directory' }"
          class="
            border-2
            shadow-sm
            px-4
            py-2
            uppercase
            font-medium
            transition-colors
            duration-300
            text-lg text-black
            border-gray-100
            bg-gray-200
            hover:bg-gray-700 hover:text-gray-100 hover:shadow-md
          "
        >
          View the Directory
        </router-link>
      </div>
    </div>
  </section>

  <section
    class="
      relative
      px-4
      shadow-inner
      sm:px-8
      lg:px-16
      xl:px-40
      2xl:px-64
      py-12
      md:py-32
      bg-gray-100
    "
  >
    <div class="relative z-20">
      <h2
        class="
          text-center
          mb-4
          mx-4
          lg:mx-0
          font-semibold
          text-5xl text-gray-900
        "
      >
        List Your Business
      </h2>
      <p
        class="text-xl text-center mx-4 lg:mx-auto lg:w-2/3 mb-12 text-gray-700"
      >
        Are you a chiropractor in the Des Moines metro area?
        <br />
        Get more clients through the door by getting listed in our directory!
      </p>
      <div class="flex flex-wrap gap-8 justify-center">
        <router-link
          :to="{ name: 'apply' }"
          class="
            border-2
            shadow-sm
            px-4
            py-2
            uppercase
            font-medium
            transition-colors
            duration-300
            text-lg
            border-gray-100
            hover:bg-gray-100 hover:text-gray-900
            bg-deep-red
            text-gray-100
            hover:shadow-md
          "
        >
          List Your Business
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
import { useMeta } from "vue-meta";
import { computed } from "vue";
import { useStore } from "vuex";
import InfoCard from "@/components/InfoCard.vue";
import RightCard from "@/components/RightCard.vue";

export default {
  name: "home",
  components: {
    InfoCard,
    RightCard,
  },
  setup() {
    const store = useStore();

    const metaTitle = "Ankeny Chiropractors";
    const metaDescription =
      "Ankeny Chiropractors. Find the Top Des Moines Chiropractors or get your business listed in the directory and turn casual browsers into paying clients.";
    const metaUrl = "https://www.Ankenychiropractors.com/";

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

    const infoCards = computed(() => store.state.infoCards);
    const rightCards = computed(() => store.state.rightCards);
    return { infoCards, rightCards };
  },
};
</script>
