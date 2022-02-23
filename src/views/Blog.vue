<template>
  <section class="custom_bg-pattern pb-32">
    <h1
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
    </h1>

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
        { property: "og:title",  content: metaTitle },
        { property: "og:description",  content: metaDescription },
        { property: "og:type",  content: "blog" },
        { property: "og:url",  content: metaUrl },
        { property: "og:image",  content: metaImage },
        { property: "twitter:title",  content: metaTitle },
        { property: "twitter:card",  content: "summary" },
        { property: "twitter:description",  content: metaDescription },
        { property: "twitter:image",  content: metaImage },
      ]
     });

    const store = useStore();
    const blogPosts = computed(() => store.state.blogPosts.slice().sort((a, b) => b.postDate.getTime() - a.postDate.getTime()));
    return { blogPosts };
  },
};
</script>
