<template>
  <section class="lg:pb-32">
    <article>
      <div
        class="relative overflow-hidden h-1/6 lg:screen w-full mb-12 lg:mb-16"
      >
        <div
          class="
            absolute
            top-0
            bottom-0
            left-0
            right-0
            bg-gradient-to-br bg-gray-800
            opacity-50
          "
        ></div>
        <div
          class="
            absolute
            h-full
            w-full
            flex flex-col
            items-center
            justify-center
          "
        >
          <div class="mx-4">
            <h1 class="text-3xl lg:text-5xl font-semibold lg:mx-0 text-white">
              {{ blogPost.postTitle }}
            </h1>
            <div class="flex gap-x-4 mt-4 items-center">
              <div
                class="
                  h-12
                  w-12
                  rounded-lg
                  border border-gray-50
                  overflow-hidden
                  flex-shrink-0
                "
              >
                <img
                  class="w-full h-full object-cover object-bottom"
                  :src="require('@/assets/' + blogPost.authorImage)"
                  :alt="blogPost.authorName"
                />
              </div>
              <div>
                <span class="block font-semibold text-white">
                    {{ blogPost.authorName }}
                </span>
                <span class="block text-sm font-medium text-gray-50">
                    {{ this.formatDate(blogPost.postDate) }}
                </span>
              </div>
            </div>
          </div>
        </div>

        <!-- BG image -->
        <div class="h-screen">
          <img
            class="h-full w-full object-cover"
            :src="require('@/assets/' + blogPost.postImage)"
            :alt="blogPost.postTitle"
          />
        </div>
      </div>

      <div class="max-w-prose mx-6 lg:mx-auto text-gray-600">
        <p class="mb-12 text-lg lg:text-xl font-semibold text-gray-700">
          {{ blogPost.postSnippet }}
        </p>
        <div v-html="$sanitize(blogPost.postContents)"></div>       
      </div>
    </article>
  </section>
</template>

<script>
import { useMeta } from "vue-meta";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import { computed } from "vue";

export default {
  name: "blogPost",
  setup() {
    const route = useRoute();
    const store = useStore();
    const blogPosts = computed(() => store.state.blogPosts);

    const blogPost = blogPosts.value.find((item) => {
        return item.postLink == route.params.postLink;
    });

    useMeta({ title: blogPost.postTitle,
      description: blogPost.postSnippet,
      link: [
        { rel: "canonical", href: blogPost.postOrigin },
      ],
      meta: [
        { property: "og:title",  content: blogPost.postTitle },
        { property: "og:description",  content: blogPost.postSnippet },
        { property: "og:type",  content: "blog" },
        { property: "og:url",  content: "https://www.dsmchiropractors.com/#/blog/" + blogPost.postLink },
        { property: "og:image",  content: "https://www.dsmchiropractors.com/img/" + blogPost.postImage },
      ]
     });

    const formatDate = (d) => {
      return d.toLocaleString("default", { month: "short" }) + " " + d.getDate() + ", " + d.getFullYear();
    }
    
    return { blogPost, formatDate };
  },
};
</script>
