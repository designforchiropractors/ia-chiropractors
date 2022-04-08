<template>
  <header class="absolute w-full z-50 bg-white">
    <nav
      class="
        max-w-screen-xl
        flex flex-row flex-wrap
        justify-between
        py-3
        ml-auto
        mr-auto
      "
      role="navigation"
    >
      <div>
        <router-link
          :to="{ name: 'home' }"
          class="flex items-center ml-3 lg:mt-2"
        >
          <img
            src="../assets/favicon.svg"
            class="h-8"
            alt="DSM Chiropractors"
          />
          <span class="ml-auto text-md font-bold lg:pt-1">
            DSM Chiropractors
          </span>
        </router-link>
      </div>

      <div class="inline-block h-8 mr-3 lg:hidden">
        <button @click="isOpen" class="h-full w-full">
          <svg
            class="h-full w-auto"
            xmlns="http://www.w3.org/2000/svg"
            width="192"
            height="192"
            fill="black"
            viewBox="0 0 256 256"
          >
            <rect width="256" height="256" fill="none"></rect>
            <line
              x1="40"
              y1="128"
              x2="216"
              y2="128"
              stroke="black"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="16"
            ></line>
            <line
              x1="40"
              y1="64"
              x2="216"
              y2="64"
              stroke="black"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="16"
            ></line>
            <line
              x1="40"
              y1="192"
              x2="216"
              y2="192"
              stroke="black"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="16"
            ></line>
          </svg>
        </button>
      </div>

      <div id="sm-nav-content" v-show="show" class="w-full mr-3 lg:hidden">
        <ul class="flex flex-col ml-auto text-md font-bold mt-4">
          <header-nav-link
            v-for="navLink in navLinks"
            :navLink="navLink"
            :key="navLink.id"
            @click="isOpen"
          >
          </header-nav-link>
        </ul>
      </div>

      <div
        id="lg-nav-content"
        class="
          w-full
          py-8
          mr-3
          hidden
          lg:flex lg:w-auto lg:py-0 lg:items-center
        "
      >
        <ul
          class="
            flex flex-col
            ml-auto
            text-md text-gray-600
            font-bold
            lg:flex-row
          "
        >
          <header-nav-link
            v-for="navLink in navLinks"
            :navLink="navLink"
            :key="navLink.id"
          >
          </header-nav-link>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
import { ref, computed } from "vue";
import { useStore } from "vuex";
import HeaderNavLink from "@/components/HeaderNavLink";

export default {
  name: "HeaderComponent",
  components: {
    HeaderNavLink,
  },
  setup() {
    let show = ref(false);
    const isOpen = () => (show.value = !show.value);
    const store = useStore();
    const navLinks = computed(() => store.state.navLinks);
    return { show, isOpen, navLinks };
  },
};
</script>