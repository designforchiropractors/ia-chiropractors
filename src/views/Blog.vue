<template>
  <section class="custom_bg-pattern pb-32">
    <h2
      class="
        font-bold
        text-xl
        md:text-2xl
        text-center
        pt-12
        pb-8
        md:pt-16 md:pb-12
        text-gray-700
      "
    >
      Latest Updates
    </h2>

    <div
      class="
        grid
        lg:grid-cols-2
        gap-4
        max-w-screen-xl
        mx-4
        lg:mx-auto
      "
    >
      <blog-list-item
        v-for="blogPost in blogPosts"
        :blogPost="blogPost"
        :key="blogPost.id"
      >
      </blog-list-item>
    </div>
  </section>
</template>

<script>
import { useMeta } from "vue-meta";
import { computed } from "vue";
import { useStore } from "vuex";
import BlogListItem from '../components/BlogListItem.vue';

export default {
  name: "blog",
  components: {BlogListItem},
  setup() {
    useMeta({ title: "Blog: DSM Chiropractors" });
    const store = useStore();
    const blogPosts = computed(() => store.state.blogPosts);
    return { blogPosts };
  },
};
</script>
