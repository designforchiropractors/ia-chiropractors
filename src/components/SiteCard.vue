<template>
  <div
    class="
      mx-12
      my-8
      md:mx-4 md:my-4
      lg:mx-12
      overflow-hidden
      shadow-md
      bg-white
    "
  >
    <p class="p-8 text-gray-700 leading-snug">
      {{ site.text }}
    </p>
    
    <p class="p-8 text-gray-700 leading-snug">
      {{ site.link }}
    </p>
  </div>
</template>

<script>
export default {
  name: "SiteCard",
  props: {
    site: Object,
  },
  setup() {},
};
</script>
