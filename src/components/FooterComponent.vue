<template>
  <footer class="py-16 bg-white">
    <div
      class="
        flex flex-col
        lg:flex-row
        items-center
        justify-between
        mx-auto
        max-w-screen-xl
      "
    >
      <div class="flex items-center"></div>
      <ul
        class="
          flex flex-col
          lg:flex-row
          items-center
          text-sm
          font-semibold
          text-gray-500
          py-12
          lg:py-0
        "
      >
        <footer-nav-link
          v-for="navLink in navLinks"
          :navLink="navLink"
          :key="navLink.id"
        >
        </footer-nav-link>
      </ul>

      <div class="flex text-gray-700"></div>
    </div>

    <div class="flex flex-col items-center mt-12 text-xs text-gray-400">
      <div class="mb-4">
        <router-link
          class="mx-4 hover:text-gray-600"
          :to="{ name: 'privacy-policy' }"
        >
          Privacy Policy
        </router-link>
        <router-link
          class="mx-4 hover:text-gray-600"
          :to="{ name: 'terms-conditions' }"
        >
          Terms &amp; Conditions
        </router-link>
      </div>
      <span>
        <a
          href="https://www.designforchiropractors.com"
          class="hover:text-gray-600"
          target="_blank"
        >
          &copy; Design for Chiropractors LLC 2022
        </a>
      </span>
    </div>
  </footer>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import FooterNavLink from "@/components/FooterNavLink";

export default {
  name: "FooterComponent",
  components: {
    FooterNavLink,
  },
  setup() {
    const store = useStore();
    const navLinks = computed(() => store.state.navLinks);
    return { navLinks };
  },
};
</script>
