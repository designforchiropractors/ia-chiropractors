<template>
  <div class="w-full lg:flex custom_bg-pattern">
    <contact-form></contact-form>
  </div>
</template>

<script>
import { useMeta } from "vue-meta";
import ContactForm from "@/components/ContactForm.vue";

export default {
  name: "contact",
  components: {
    ContactForm
  },
  setup() {
    const metaTitle = "Contact DSM Chiropractors"
    const metaDescription = "Contact DSM Chiropractors. Inquire about our services by phone, e-mail, or contact form. Get your business listed and turn casual browsers into paying clients."
    const metaImage = "https://www.dsmchiropractors.com/img/dsm-chiropractors.bb8ecb53.webp"
    const metaUrl = "https://www.dsmchiropractors.com/contact/"
    
    useMeta({
      title: metaTitle,
      description: metaDescription,
      link: [
        { rel: "canonical", href: metaUrl },
      ],
      meta: [
        { property: "og:title",  content: metaTitle },
        { property: "og:description",  content: metaDescription },
        { property: "og:type",  content: "website" },
        { property: "og:url",  content: metaUrl },
        { property: "og:image",  content: metaImage },
        { property: "twitter:title",  content: metaTitle },
        { property: "twitter:card",  content: "summary" },
        { property: "twitter:description",  content: metaDescription },
        { property: "twitter:image",  content: metaImage },
      ]
     });
  },
};
</script>
