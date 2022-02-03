<template>
  <header class="relative w-full z-50 bg-white">
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
      <!-- COMPANY LOGO (SVG) -->
      <div>
        <router-link :to="{ name: 'home' }" class="flex items-center ml-3 lg:mt-4">
          <img src="../assets/favicon.svg" class="h-8" alt="DSM Chiropractors" />
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

      <div v-show="show" class="w-full mr-3 lg:hidden">
        <ul class="flex flex-col ml-auto text-md font-bold">
          <router-link
            :to="{ name: 'apply' }"
            class="
              w-mc
              transition-colors
              duration-300
              hover:text-white hover:bg-gray-700
              p-6
            "
          >
            APPLY TO BE LISTED
          </router-link>

          <router-link
            :to="{ name: 'contact' }"
            class="
              w-mc
              transition-colors
              duration-300
              hover:text-white hover:bg-gray-700
              p-6
            "
          >
            CONTACT
          </router-link>

          <router-link
            :to="{ name: 'blog' }"
            class="
              w-mc
              transition-colors
              duration-300
              hover:text-white hover:bg-gray-700
              p-6
            "
          >
            BLOG
          </router-link>

          <router-link
            :to="{ name: 'directory' }"
            class="
              w-mc
              transition-colors
              duration-300
              hover:text-white hover:bg-gray-700
              p-6
            "
          >
            VIEW CHIROPRACTORS
          </router-link>
        </ul>
      </div>

      <div
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
          <router-link
            :to="{ name: 'apply' }"
            tag="li"
            class="
              w-mc
              transition-colors
              duration-300
              hover:text-white hover:bg-gray-700
              p-6
              lg:mb-0
            "
          >
            APPLY TO BE LISTED
          </router-link>

          <router-link
            :to="{ name: 'contact' }"
            class="
              w-mc
              transition-colors
              duration-300
              hover:text-white hover:bg-gray-700
              p-6
              mb-4
              lg:mb-0
            "
          >
            CONTACT
          </router-link>

          <router-link
            :to="{ name: 'blog' }"
            class="
              w-mc
              transition-colors
              duration-300
              hover:text-white hover:bg-gray-700
              p-6
              mb-4
              lg:mb-0
            "
          >
            BLOG
          </router-link>

          <router-link
            :to="{ name: 'directory' }"
            class="
              w-mc
              transition-colors
              duration-300
              hover:text-white hover:bg-gray-700
              p-6
              mb-4
              lg:mb-0
            "
          >
            VIEW CHIROPRACTORS
          </router-link>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
import { ref } from "vue";

export default {
  name: "HeaderComponent",
  setup() {
    let show = ref(false);
    const isOpen = () => (show.value = !show.value);
    return { show, isOpen };
  },
};
</script>

