<template>
  <div class="group relative flex flex-col transition-all shadow-md">
    <div
      class="
        absolute
        top-0
        left-0
        right-0
        h-full
        opacity-60
        group-hover:opacity-80
        duration-300
        group-hover:bg-deeper-red
        bg-gray-900
        z-10
      "
    ></div>

    <router-link
      :to="{ name: 'blogPost', params: { postLink: blogPost.postLink } }"
      class="relative inline-block h-full"
    >
      <div class="absolute h-full overflow-hidden">
        <img
          class="h-full w-full object-cover bg-deep-red"
          :src="require('@/assets/' + blogPost.postImage)"
          :alt="blogPost.postTitle"
        />
      </div>
      <div class="relative flex flex-col items-center px-8 py-16 z-20 h-full">
        <div class="w-full">
          <div class="mt-2">
            <span class="uppercase font-semibold text-white text-xs">
              {{ blogPost.postCategory }}
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
            {{ blogPost.postTitle }}
          </h2>
          <div class="flex items-center mt-4">
            <div
              class="
                h-12
                w-12
                overflow-hidden
                flex-shrink-0
                transform
                duration-300
                group-hover:scale-110
              "
            >
              <img
                class="w-full h-full object-cover object-bottom"
                :src="require('@/assets/' + blogPost.authorImage)"
                :alt="blogPost.authorName"
              />
            </div>
            <div class="ml-2 text-x">
              <span
                class="block font-semibold text-sm lg:text-base text-gray-100"
              >
                {{ blogPost.authorName }}
              </span>
              <span
                class="block font-medium text-sm lg:text-base text-gray-200"
              >
                {{ blogPost.authorTitle }}
              </span>
              <span
                class="block font-medium text-sm lg:text-base text-gray-200"
              >
                {{ blogPost.authorCompany }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "blogListItem",
  props: {
    blogPost: Object,
  },
  setup() {
    const formatDate = (d) => {
      return (
        d.toLocaleString("default", { month: "short" }) +
        " " +
        d.getDate() +
        ", " +
        d.getFullYear()
      );
    };
    return { formatDate };
  },
};
</script>