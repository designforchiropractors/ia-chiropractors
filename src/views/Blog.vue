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
      Blog: DSM Chiropractors
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
    useMeta({ title: "Blog: DSM Chiropractors",
      description: "Blog for DSM Chiropractors. Advice, articles, and information focused on Des Moines chiropractors and their businesses.",
      link: [
        { rel: "canonical", href: "https://www.dsmchiropractors.com/blog/" },
      ],
      meta: [
        { property: "og:title",  content: "Blog for DSM Chiropractors" },
        { property: "og:description",  content: "Blog for DSM Chiropractors. Advice, articles, and information focused on Des Moines chiropractors and their businesses." },
        { property: "og:type",  content: "blog" },
        { property: "og:url",  content: "https://www.dsmchiropractors.com/blog/" },
        { property: "og:image",  content: "https://www.dsmchiropractors.com/img/dsm-chiropractors.bb8ecb53.webp" },
        { property: "twitter:title",  content: "Blog for Moines Chiropractors" },
        { property: "twitter:card",  content: "summary" },
        { property: "twitter:description",  content: "Blog for DSM Chiropractors. Advice, articles, and information focused on Des Moines chiropractors and their businesses." },
        { property: "twitter:image",  content: "https://www.dsmchiropractors.com/img/dsm-chiropractors.bb8ecb53.webp" },
      ]
     });

    const store = useStore();
    const blogPosts = computed(() => store.state.blogPosts.slice().sort((a, b) => b.postDate.getTime() - a.postDate.getTime()));
    return { blogPosts };
  },
};
</script>
