<template>
  <header class="absolute w-full z-50 bg-white">
    <nav
      class="
        py-3
      "
      role="navigation"
    >
      <div class="w-full flex items-center justify-center">
        <router-link
          :to="{ name: 'home' }"
          class="flex items-center"
        >
          <img
            src="../assets/ia-chiropractors.png"
            class="h-12"
            alt="IA Chiropractors"
          />
          <span class="ml-2 text-md font-bold lg:pt-1">
            IA Chiropractors
          </span>
        </router-link>
      </div>
    </nav>
  </header>
</template>

<script>

export default {
  name: "HeaderComponent",
  components: { },
  setup() { },
};
</script>