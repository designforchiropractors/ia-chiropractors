<template>
  <li class="mx-7 uppercase hover:text-gray-700 mb-2 lg:mb-0">
    <router-link :to="{ name: '' + navLink.link + '' }">
      {{ navLink.text }}
    </router-link>
  </li>
</template>

<script>
export default {
  name: "footerNavLink",
  props: {
    navLink: Object,
  },
  setup() {},
};
</script>