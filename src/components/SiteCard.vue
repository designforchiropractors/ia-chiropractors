<template>
  <div class="group relative flex flex-col transition-all shadow-md">
    <div
      :class="site.class"
    ></div>

    <a
      :href="site.link"
      class="relative inline-block h-full"
    >
      <div class="absolute h-full overflow-hidden">
        <img
          class="w-full object-cover"
          :src="require('@/assets/' + site.image)"
          :alt="site.description"
        />
      </div>
      <div class="relative flex flex-col items-center px-8 py-16 z-20 h-full">
        <div class="w-full">
          <div class="mt-2">
            <span class="uppercase font-semibold text-white text-xs">
              <!-- was blog post category -->
            </span>
            <span class="text-gray-50 mx-2 font-medium text-sm">
              <!--{{ this.formatDate(blogPost.postDate) }}-->
            </span>
          </div>
          <h2
            class="
              font-workSans
              text-xl
              lg:text-2xl
              font-semibold
              my-2
              text-white
            "
          >
            {{ site.text }}
          </h2>
          <div class="flex items-center mt-4">
            <div
              class="
                h-12
              text-white
              leading-relaxed
              "
            >
              {{ site.description }}
            </div>
          </div>
        </div>
      </div>
    </a>
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
