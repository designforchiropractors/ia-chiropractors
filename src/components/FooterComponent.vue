<template>
  <footer class="py-16">
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
      <div class="flex items-center">
      </div>
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
        <li class="mx-7 uppercase hover:text-gray-700 mb-2 lg:mb-0">
          <router-link :to="{ name: 'apply' }">
            APPLY TO BE LISTED
          </router-link>
        </li>

        <li class="mx-7 uppercase hover:text-gray-700 mb-2 lg:mb-0">
          <router-link :to="{ name: 'contact' }"> CONTACT </router-link>
        </li>

        <li class="mx-7 uppercase hover:text-gray-700 mb-2 lg:mb-0">
          <router-link :to="{ name: 'blog' }"> BLOG </router-link>
        </li>

        <li class="mx-7 uppercase hover:text-gray-700 mb-2 lg:mb-0">
          <router-link :to="{ name: 'directory' }">
            VIEW CHIROPRACTORS
          </router-link>
        </li>
      </ul>

      <div class="flex text-gray-700">
      </div>
    </div>

    <div class="flex flex-col items-center mt-12 text-xs text-gray-400">
      <div class="mb-4">
        <router-link
          class="mx-4 hover:text-gray-600"
          :to="{ name: 'privacy-policy' }"
          rel="nofollow"
        >
          Privacy Policy
        </router-link>
        <router-link
          class="mx-4 hover:text-gray-600"
          :to="{ name: 'terms-conditions' }"
          rel="nofollow"
        >
          Terms &amp; Conditions
        </router-link>
      </div>
      <span>
        <a href="https://www.designforchiropractors.com" target="_blank">
          &copy; Design for Chiropractors LLC 2022
        </a>
      </span>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterComponent",
  setup() {},
};
</script>
