<template>
  <section class="custom_bg-pattern pb-32">
    <div class="lg:text-center py-8 md:py-12 lg:py-16">
        <h1 class="text-base text-green-700 font-semibold tracking-wide uppercase">
          Blog for DSM Chiropractors
        </h1>
        <h2 class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Advice, articles, and information
        </h2>
        <h3 class="mt-4 max-w-3xl text-xl text-gray-500 lg:mx-auto">
            Focused on Des Moines chiropractors and marketing their businesses.
        </h3>
    </div>

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

    const metaTitle = "Blog for DSM Chiropractors"
    const metaDescription = "Blog for DSM Chiropractors. Advice, articles, and information focused on Des Moines chiropractors and marketing their businesses."
    const metaImage = "https://www.dsmchiropractors.com/img/dsm-chiropractors.bb8ecb53.webp"
    const metaUrl = "https://www.dsmchiropractors.com/blog/"
    
    useMeta({
      title: metaTitle,
      description: metaDescription,
      link: [
        { rel: "canonical", href: metaUrl },
      ],
      meta: [
        { property: "og:title", vmid: "og:title", content: metaTitle },
        { property: "og:description", vmid: "og:description", content: metaDescription },
        { property: "og:type", vmid: "og:type", content: "blog" },
        { property: "og:url", vmid: "og:url", content: metaUrl },
        { property: "og:image", vmid: "og:image",content: metaImage },
        { property: "twitter:title", vmid: "twitter:title",content: metaTitle },
        { property: "twitter:card", vmid: "twitter:card",content: "summary" },
        { property: "twitter:description", vmid: "twitter:description", content: metaDescription },
        { property: "twitter:image", vmid: "twitter:image", content: metaImage },
      ]
     });

    const store = useStore();
    const blogPosts = computed(() => store.state.blogPosts.slice().sort((a, b) => b.postDate.getTime() - a.postDate.getTime()));
    return { blogPosts };
  },
};
</script>
