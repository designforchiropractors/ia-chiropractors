<template>
  <footer class="py-8 lg:py-16 bg-white">
    <div class="flex flex-col items-center mt-6 lg:mt-12 text-xs text-gray-400">
      <div class="mb-4">
        <router-link
          class="mx-4 hover:text-gray-600"
          :to="{ name: 'PrivacyPolicy' }"
        >
          Privacy Policy
        </router-link>
        <router-link
          class="mx-4 hover:text-gray-600"
          :to="{ name: 'TermsConditions' }"
        >
          Terms &amp; Conditions
        </router-link>
      </div>
      <span>
        <a
          href="https://www.designforchiropractors.com/"
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

export default {
  name: "FooterComponent",
  components: { },
  setup() {
    const store = useStore();
    const sites = computed(() => store.state.sites);
    return { sites };
  },
};
</script>
